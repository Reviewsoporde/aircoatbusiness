import { z } from "zod";

export const propertyTypes = [
  "office",
  "commercialBuilding",
  "retail",
  "showroom",
  "other",
] as const;

export const serviceOptions = [
  "businessAC",
  "installation",
  "maintenance",
  "repairs",
  "maintenanceContract",
  "systemAdvice",
  "projectConsultation",
  "notSure",
] as const;

const contactSchema = z.object({
  contactPerson: z.string().trim().min(1).max(200),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(30)
    .regex(/^[+\d][\d\s\-()]+$/),
  email: z.string().trim().email().max(200),
  // Honeypot - checked (and dropped) in the API route before validation.
  website: z.string().optional(),
  sourcePage: z.string().max(500),
  locale: z.enum(["nl", "en"]),
});

const fullLeadSchema = contactSchema.extend({
  formType: z.literal("full"),
  companyName: z.string().trim().min(1).max(200),
  location: z.string().trim().min(1).max(200),
  propertyType: z.enum(propertyTypes),
  service: z.enum(serviceOptions),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
});

const heroLeadSchema = contactSchema.extend({
  formType: z.literal("hero"),
  service: z.literal("businessAC"),
});

export const leadSchema = z.discriminatedUnion("formType", [
  fullLeadSchema,
  heroLeadSchema,
]);

export type LeadInput = z.infer<typeof leadSchema>;
