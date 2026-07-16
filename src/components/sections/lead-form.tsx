"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale, useTranslations } from "next-intl";
import { sendGAEvent } from "@next/third-parties/google";
import { Link, usePathname } from "@/i18n/navigation";
import { analyticsAllowed } from "@/lib/analytics-consent";
import { siteConfig } from "@/lib/site-config";
import { propertyTypes, serviceOptions } from "@/lib/lead-schema";
import type { CtaKey, PropertyOption, ServiceOption } from "@/content/types";
import { PhoneLink } from "@/components/layout/phone-link";
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
type FormStatus = "idle" | "sending" | "success" | "error";

type Props = {
  defaultService?: ServiceOption;
  defaultPropertyType?: PropertyOption;
  submitKey?: CtaKey;
  variant?: "default" | "hero";
  idPrefix?: string;
};

const firstStepFields: (keyof FormValues)[] = [
  "service",
  "propertyType",
  "location",
];

export function LeadForm({
  defaultService,
  defaultPropertyType,
  submitKey,
  variant = "default",
  idPrefix = "lead",
}: Props) {
  const t = useTranslations("form");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<FormStatus>("idle");
  const isHero = variant === "hero";

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    getFieldState,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      phone: "",
      email: "",
      location: "",
      service: defaultService,
      propertyType: defaultPropertyType,
      message: "",
      website: "",
    },
  });

  const service = useWatch({ control, name: "service" });
  const propertyType = useWatch({ control, name: "propertyType" });
  const fieldClassName = isHero
    ? "mt-2 border-white/20 bg-white/[0.07] text-white hover:bg-white/[0.1] focus-visible:border-azure-bright focus-visible:ring-azure/30"
    : "mt-2";
  const labelClassName = isHero ? "text-sm text-white/80" : "text-sm text-ink";

  async function goToContactDetails() {
    const valid = await trigger(firstStepFields, { shouldFocus: true });
    if (valid) {
      setStatus("idle");
      setStep(2);
      return;
    }

    const firstInvalid = firstStepFields.find((field) => getFieldState(field).invalid);
    if (firstInvalid) {
      const elementId =
        firstInvalid === "propertyType"
          ? `${idPrefix}-property`
          : `${idPrefix}-${firstInvalid}`;
      document.getElementById(elementId)?.focus();
    }
  }

  async function onSubmit(values: FormValues) {
    setStatus("sending");
    try {
      const res = await fetch("/api/lead/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          formType: "full",
          sourcePage: pathname,
          locale,
        }),
      });
      if (!res.ok) throw new Error(`Lead API responded ${res.status}`);
      setStatus("success");
      if (process.env.NEXT_PUBLIC_GA_ID && analyticsAllowed()) {
        sendGAEvent("event", "lead_form_submit", {
          service: values.service,
          source_page: pathname,
        });
      }
    } catch {
      setStatus("error");
    }
  }

  function errorFor(key: keyof FormValues) {
    const code = errors[key]?.message;
    if (!code) return null;
    return (
      <p
        id={`${idPrefix}-${key}-error`}
        role="alert"
        className={`mt-1.5 text-xs ${isHero ? "text-red-300" : "text-destructive"}`}
      >
        {t(code as "required" | "invalidEmail" | "invalidPhone")}
      </p>
    );
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className={`rounded-[24px] border p-7 sm:p-9 ${
          isHero
            ? "border-azure/40 bg-carbon text-white"
            : "border-azure/30 bg-ice text-ink"
        }`}
      >
        <CheckCircle2 className="size-8 text-azure-deep" aria-hidden />
        <h3 className="font-display mt-5 text-2xl font-semibold">{t("successTitle")}</h3>
        <p className={`mt-3 text-sm leading-relaxed ${isHero ? "text-mist" : "text-slate-ink"}`}>
          {t("successBody")}
        </p>
        <div className={`mt-7 border-t pt-6 ${isHero ? "border-white/12" : "border-ink/10"}`}>
          <p className="text-sm font-semibold">{t("successNextTitle")}</p>
          <ol className={`mt-3 space-y-2 text-sm ${isHero ? "text-mist" : "text-slate-ink"}`}>
            <li>1. {t("successNextOne")}</li>
            <li>2. {t("successNextTwo")}</li>
          </ol>
        </div>
        <PhoneLink
          phone={siteConfig.phone}
          className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-white hover:bg-steel"
        >
          <Phone className="size-4 text-azure-bright" aria-hidden />
          {t("callFallback", { phone: siteConfig.phoneDisplay })}
        </PhoneLink>
      </div>
    );
  }

  return (
    <div className={isHero ? "text-white" : undefined}>
      {isHero && (
        <div className="mb-6">
          <h2 className="font-display text-2xl font-semibold text-white">{t("heroTitle")}</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist">{t("heroIntro")}</p>
        </div>
      )}

      <div className="mb-8" aria-label={t("progress", { current: step, total: 2 })}>
        <div className="grid grid-cols-2 gap-3">
          <div className={`h-1.5 rounded-full ${step >= 1 ? "bg-azure" : "bg-ink/10"}`} />
          <div className={`h-1.5 rounded-full ${step >= 2 ? "bg-azure" : isHero ? "bg-white/15" : "bg-ink/10"}`} />
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className={`text-xs font-semibold ${isHero ? "text-azure-bright" : "text-azure-deep"}`}>
              {t("progress", { current: step, total: 2 })}
            </p>
            <h3 className="font-display mt-1 text-xl font-semibold">
              {step === 1 ? t("stepOneTitle") : t("stepTwoTitle")}
            </h3>
          </div>
          <p className={`hidden max-w-xs text-right text-xs leading-relaxed sm:block ${isHero ? "text-mist" : "text-slate-ink"}`}>
            {step === 1 ? t("stepOneIntro") : t("stepTwoIntro")}
          </p>
        </div>
        <p aria-live="polite" className="sr-only">
          {t("progress", { current: step, total: 2 })}: {step === 1 ? t("stepOneTitle") : t("stepTwoTitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate aria-busy={status === "sending"}>
        <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor={`${idPrefix}-website`}>Website</label>
          <input
            id={`${idPrefix}-website`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        {step === 1 ? (
          <fieldset>
            <legend className="sr-only">{t("stepOneTitle")}</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor={`${idPrefix}-service`} className={labelClassName}>
                  {t("service")} *
                </Label>
                <Select
                  value={service}
                  onValueChange={(value) =>
                    setValue("service", value as FormValues["service"], {
                      shouldDirty: true,
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger
                    id={`${idPrefix}-service`}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? `${idPrefix}-service-error` : undefined}
                    className={`${fieldClassName} w-full`}
                  >
                    <SelectValue placeholder={t("selectPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {t(`serviceOptions.${option}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errorFor("service")}
              </div>
              <div>
                <Label htmlFor={`${idPrefix}-property`} className={labelClassName}>
                  {t("propertyType")} *
                </Label>
                <Select
                  value={propertyType}
                  onValueChange={(value) =>
                    setValue("propertyType", value as FormValues["propertyType"], {
                      shouldDirty: true,
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger
                    id={`${idPrefix}-property`}
                    aria-invalid={!!errors.propertyType}
                    aria-describedby={errors.propertyType ? `${idPrefix}-propertyType-error` : undefined}
                    className={`${fieldClassName} w-full`}
                  >
                    <SelectValue placeholder={t("selectPlaceholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((option) => (
                      <SelectItem key={option} value={option}>
                        {t(`propertyOptions.${option}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errorFor("propertyType")}
              </div>
              <div>
                <Label htmlFor={`${idPrefix}-location`} className={labelClassName}>
                  {t("location")} *
                </Label>
                <Input
                  id={`${idPrefix}-location`}
                  autoComplete="address-level2"
                  aria-invalid={!!errors.location}
                  aria-describedby={errors.location ? `${idPrefix}-location-error` : undefined}
                  className={fieldClassName}
                  {...register("location")}
                />
                {errorFor("location")}
              </div>
            </div>
            <Button
              type="button"
              onClick={goToContactDetails}
              className="mt-8 h-12 w-full bg-azure px-7 text-sm font-semibold text-ink hover:bg-azure-bright sm:w-auto"
            >
              {t("continue")}
              <ArrowRight aria-hidden />
            </Button>
          </fieldset>
        ) : (
          <fieldset>
            <legend className="sr-only">{t("stepTwoTitle")}</legend>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor={`${idPrefix}-company`} className={labelClassName}>{t("companyName")} *</Label>
                <Input id={`${idPrefix}-company`} autoComplete="organization" aria-invalid={!!errors.companyName} aria-describedby={errors.companyName ? `${idPrefix}-companyName-error` : undefined} className={fieldClassName} {...register("companyName")} />
                {errorFor("companyName")}
              </div>
              <div>
                <Label htmlFor={`${idPrefix}-contact`} className={labelClassName}>{t("contactPerson")} *</Label>
                <Input id={`${idPrefix}-contact`} autoComplete="name" aria-invalid={!!errors.contactPerson} aria-describedby={errors.contactPerson ? `${idPrefix}-contactPerson-error` : undefined} className={fieldClassName} {...register("contactPerson")} />
                {errorFor("contactPerson")}
              </div>
              <div>
                <Label htmlFor={`${idPrefix}-phone`} className={labelClassName}>{t("phone")} *</Label>
                <Input id={`${idPrefix}-phone`} type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined} className={fieldClassName} {...register("phone")} />
                {errorFor("phone")}
              </div>
              <div>
                <Label htmlFor={`${idPrefix}-email`} className={labelClassName}>{t("email")} *</Label>
                <Input id={`${idPrefix}-email`} type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined} className={fieldClassName} {...register("email")} />
                {errorFor("email")}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor={`${idPrefix}-message`} className={labelClassName}>{t("message")}</Label>
                <Textarea id={`${idPrefix}-message`} rows={4} className={fieldClassName} {...register("message")} />
              </div>
            </div>

            <p className={`mt-5 text-xs leading-relaxed ${isHero ? "text-mist" : "text-slate-ink"}`}>
              {t("privacyNote")}{" "}
              <Link href="/privacybeleid" className="font-semibold underline underline-offset-4 hover:text-azure-deep">
                {t("privacyLink")}
              </Link>
            </p>

            {status === "error" && (
              <p
                role="alert"
                className={`mt-5 rounded-[14px] border p-4 text-sm ${
                  isHero
                    ? "border-red-300/30 bg-red-300/10 text-red-200"
                    : "border-destructive/40 bg-destructive/5 text-destructive"
                }`}
              >
                {t("error", { phone: siteConfig.phoneDisplay })}
              </p>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="h-12 px-6"
                disabled={status === "sending"}
              >
                <ArrowLeft aria-hidden />
                {t("back")}
              </Button>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="h-12 bg-azure px-8 text-sm font-semibold text-ink hover:bg-azure-bright"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="animate-spin" aria-hidden />
                    {t("submitting")}
                  </>
                ) : submitKey ? (
                  tCommon(submitKey)
                ) : (
                  t("submit")
                )}
              </Button>
            </div>
          </fieldset>
        )}
      </form>
    </div>
  );
}
