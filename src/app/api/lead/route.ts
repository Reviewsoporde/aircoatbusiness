import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";

/**
 * Lead intake: re-validates the form server-side and forwards the lead to the
 * GoHighLevel inbound-webhook workflow (GHL_WEBHOOK_URL). The payload includes
 * sourcePage, locale and submittedAt for CRM attribution.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: a filled "website" field means a bot — pretend success, drop lead.
  if (
    typeof body === "object" &&
    body !== null &&
    "website" in body &&
    (body as { website?: unknown }).website
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- strip honeypot
  const { website: _website, ...lead } = parsed.data;
  const payload = {
    ...lead,
    submittedAt: new Date().toISOString(),
    source: "aircoatbusiness.nl",
  };

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    // Not configured yet (e.g. preview deploys): log so the lead is not lost silently.
    console.warn("[lead] GHL_WEBHOOK_URL not set — lead not forwarded:", payload);
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error(`[lead] GHL webhook responded ${res.status}`);
      return NextResponse.json({ error: "upstream" }, { status: 502 });
    }
  } catch (err) {
    console.error("[lead] GHL webhook unreachable:", err);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
