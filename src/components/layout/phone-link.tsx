"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { analyticsAllowed } from "@/lib/analytics-consent";

type Props = {
  phone: string;
  className?: string;
  children: React.ReactNode;
};

export function PhoneLink({ phone, className, children }: Props) {
  return (
    <a
      href={`tel:${phone}`}
      className={className}
      onClick={() => {
        if (process.env.NEXT_PUBLIC_GA_ID && analyticsAllowed()) {
          sendGAEvent("event", "phone_click", { phone });
        }
      }}
    >
      {children}
    </a>
  );
}
