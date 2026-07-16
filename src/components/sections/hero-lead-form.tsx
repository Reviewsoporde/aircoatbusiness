"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";
import { sendGAEvent } from "@next/third-parties/google";
import { Link, usePathname } from "@/i18n/navigation";
import { analyticsAllowed } from "@/lib/analytics-consent";
import { siteConfig } from "@/lib/site-config";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const heroFormSchema = z.object({
  contactPerson: z.string().trim().min(1, "required"),
  email: z.string().trim().email("invalidEmail"),
  phone: z
    .string()
    .trim()
    .min(6, "invalidPhone")
    .regex(/^[+\d][\d\s\-()]+$/, "invalidPhone"),
  website: z.string().optional(),
});

type HeroFormValues = z.infer<typeof heroFormSchema>;
type FormStatus = "idle" | "sending" | "success" | "error";

const idPrefix = "hero-lead";

/** Compact homepage intake. Detailed project fields stay in the full form below. */
export function HeroLeadForm() {
  const t = useTranslations("form");
  const locale = useLocale();
  const pathname = usePathname();
  const [status, setStatus] = useState<FormStatus>("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      contactPerson: "",
      email: "",
      phone: "",
      website: "",
    },
  });

  async function onSubmit(values: HeroFormValues) {
    setStatus("sending");

    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          formType: "hero",
          service: "businessAC",
          sourcePage: pathname,
          locale,
        }),
      });

      if (!res.ok) throw new Error(`Lead API responded ${res.status}`);

      setStatus("success");
      if (process.env.NEXT_PUBLIC_GA_ID && analyticsAllowed()) {
        sendGAEvent("event", "lead_form_submit", {
          form_variant: "hero",
          service: "businessAC",
          source_page: pathname,
        });
      }
    } catch {
      setStatus("error");
    }
  }

  function errorFor(key: keyof HeroFormValues) {
    const code = errors[key]?.message;
    if (!code) return null;

    return (
      <p
        id={`${idPrefix}-${key}-error`}
        role="alert"
        className="mt-1.5 text-xs font-medium text-red-200"
      >
        {t(code as "required" | "invalidEmail" | "invalidPhone")}
      </p>
    );
  }

  if (status === "success") {
    return (
      <div role="status" className="flex min-h-80 flex-col justify-center text-white">
        <CheckCircle2 className="size-9 text-azure-bright" aria-hidden />
        <h2 className="font-display mt-5 text-2xl font-semibold">
          {t("successTitle")}
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
          {t("successBody")}
        </p>
      </div>
    );
  }

  const fieldClassName =
    "mt-2 border-white/25 bg-white/[0.09] text-white hover:bg-white/[0.12] focus-visible:border-azure-bright focus-visible:ring-azure/35";

  return (
    <div className="text-white">
      <h2 className="font-display text-2xl font-semibold text-balance">
        {t("heroShortTitle")}
      </h2>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/72">
        {t("heroShortIntro")}
      </p>

      <form
        className="mt-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-busy={status === "sending"}
      >
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
        >
          <label htmlFor={`${idPrefix}-website`}>Website</label>
          <input
            id={`${idPrefix}-website`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="sm:col-span-2 lg:col-span-1">
            <Label htmlFor={`${idPrefix}-name`} className="text-white/85">
              {t("heroName")} *
            </Label>
            <Input
              id={`${idPrefix}-name`}
              autoComplete="name"
              required
              aria-invalid={!!errors.contactPerson}
              aria-describedby={
                errors.contactPerson
                  ? `${idPrefix}-contactPerson-error`
                  : undefined
              }
              className={fieldClassName}
              {...register("contactPerson")}
            />
            {errorFor("contactPerson")}
          </div>

          <div>
            <Label htmlFor={`${idPrefix}-email`} className="text-white/85">
              {t("email")} *
            </Label>
            <Input
              id={`${idPrefix}-email`}
              type="email"
              autoComplete="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
              className={fieldClassName}
              {...register("email")}
            />
            {errorFor("email")}
          </div>

          <div>
            <Label htmlFor={`${idPrefix}-phone`} className="text-white/85">
              {t("phone")} *
            </Label>
            <Input
              id={`${idPrefix}-phone`}
              type="tel"
              autoComplete="tel"
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
              className={fieldClassName}
              {...register("phone")}
            />
            {errorFor("phone")}
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-white/65">
          {t("privacyNote")} {" "}
          <Link
            href="/privacybeleid"
            className="font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-azure-bright"
          >
            {t("privacyLink")}
          </Link>
        </p>

        {status === "error" && (
          <p
            role="alert"
            className="mt-4 rounded-[14px] border border-red-200/30 bg-red-200/10 p-3 text-sm text-red-100"
          >
            {t("error", { phone: siteConfig.phoneDisplay })}
          </p>
        )}

        <Button
          type="submit"
          disabled={status === "sending"}
          className="mt-5 h-12 w-full bg-azure px-7 text-sm font-semibold text-ink hover:bg-azure-bright active:scale-[0.98]"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="animate-spin" aria-hidden />
              {t("submitting")}
            </>
          ) : (
            <>
              {t("submit")}
              <ArrowRight aria-hidden />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
