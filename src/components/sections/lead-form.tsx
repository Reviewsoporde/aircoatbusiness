"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";
import { sendGAEvent } from "@next/third-parties/google";
import { usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site-config";
import { propertyTypes, serviceOptions } from "@/lib/lead-schema";
import type { CtaKey, PropertyOption, ServiceOption } from "@/content/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  companyName: z.string().trim().min(1, "required"),
  contactPerson: z.string().trim().min(1, "required"),
  phone: z
    .string()
    .trim()
    .min(6, "invalidPhone")
    .regex(/^[+\d][\d\s\-()]+$/, "invalidPhone"),
  email: z.string().trim().email("invalidEmail"),
  location: z.string().trim().min(1, "required"),
  propertyType: z.enum(propertyTypes, { message: "required" }),
  service: z.enum(serviceOptions, { message: "required" }),
  message: z.string().trim().optional(),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  defaultService?: ServiceOption;
  defaultPropertyType?: PropertyOption;
  /** Submit label follows the page's CTA type (e.g. "Reparatie aanvragen" on the repair page) */
  submitKey?: CtaKey;
};

export function LeadForm({ defaultService, defaultPropertyType, submitKey }: Props) {
  const t = useTranslations("form");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: defaultService,
      propertyType: defaultPropertyType,
      website: "",
    },
  });

  const service = useWatch({ control, name: "service" });
  const propertyType = useWatch({ control, name: "propertyType" });

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    try {
      // Trailing slash avoids the 308 redirect from trailingSlash: true
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourcePage: pathname,
          locale,
        }),
      });
      if (!res.ok) throw new Error(`Lead API responded ${res.status}`);
      setStatus("success");
      if (process.env.NEXT_PUBLIC_GA_ID) {
        sendGAEvent("event", "lead_form_submit", {
          service: values.service,
          source_page: pathname,
        });
      }
    } catch {
      setStatus("error");
    }
  }

  const err = (key: keyof FormValues) => {
    const code = errors[key]?.message;
    if (!code) return null;
    return (
      <p role="alert" className="mt-1.5 text-xs text-destructive">
        {t(code as "required" | "invalidEmail" | "invalidPhone")}
      </p>
    );
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-azure/40 bg-accent p-8 text-center"
      >
        <p className="font-display text-lg font-semibold text-ink">
          {t("success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot — visually hidden, tab-skipped; bots fill it, humans never see it */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="lead-website">Website</label>
        <input
          id="lead-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="lead-company">{t("companyName")} *</Label>
          <Input
            id="lead-company"
            autoComplete="organization"
            aria-invalid={!!errors.companyName}
            className="mt-1.5"
            {...register("companyName")}
          />
          {err("companyName")}
        </div>
        <div>
          <Label htmlFor="lead-contact">{t("contactPerson")} *</Label>
          <Input
            id="lead-contact"
            autoComplete="name"
            aria-invalid={!!errors.contactPerson}
            className="mt-1.5"
            {...register("contactPerson")}
          />
          {err("contactPerson")}
        </div>
        <div>
          <Label htmlFor="lead-phone">{t("phone")} *</Label>
          <Input
            id="lead-phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className="mt-1.5"
            {...register("phone")}
          />
          {err("phone")}
        </div>
        <div>
          <Label htmlFor="lead-email">{t("email")} *</Label>
          <Input
            id="lead-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className="mt-1.5"
            {...register("email")}
          />
          {err("email")}
        </div>
        <div>
          <Label htmlFor="lead-location">{t("location")} *</Label>
          <Input
            id="lead-location"
            autoComplete="address-level2"
            aria-invalid={!!errors.location}
            className="mt-1.5"
            {...register("location")}
          />
          {err("location")}
        </div>
        <div>
          <Label htmlFor="lead-property">{t("propertyType")} *</Label>
          <Select
            value={propertyType}
            onValueChange={(v) =>
              setValue("propertyType", v as FormValues["propertyType"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger
              id="lead-property"
              aria-invalid={!!errors.propertyType}
              className="mt-1.5 w-full"
            >
              <SelectValue placeholder={t("selectPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((p) => (
                <SelectItem key={p} value={p}>
                  {t(`propertyOptions.${p}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {err("propertyType")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="lead-service">{t("service")} *</Label>
          <Select
            value={service}
            onValueChange={(v) =>
              setValue("service", v as FormValues["service"], {
                shouldValidate: true,
              })
            }
          >
            <SelectTrigger
              id="lead-service"
              aria-invalid={!!errors.service}
              className="mt-1.5 w-full"
            >
              <SelectValue placeholder={t("selectPlaceholder")} />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {t(`serviceOptions.${s}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {err("service")}
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="lead-message">{t("message")}</Label>
          <Textarea
            id="lead-message"
            rows={4}
            className="mt-1.5"
            {...register("message")}
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
          {t("error", { phone: siteConfig.phoneDisplay })}
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 h-13 w-full bg-azure px-8 font-mono text-xs font-semibold tracking-[0.14em] text-ink uppercase shadow-[0_12px_32px_-12px_rgb(0_147_203/0.55)] transition-all duration-300 hover:bg-azure-bright active:scale-[0.98] sm:w-auto"
      >
        {status === "sending"
          ? t("submitting")
          : submitKey
            ? tCommon(submitKey)
            : t("submit")}
      </Button>
    </form>
  );
}
