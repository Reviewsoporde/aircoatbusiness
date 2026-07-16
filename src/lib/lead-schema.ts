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

export const leadSchema = z.object({
  companyName: z.string().trim().min(1).max(200),
  contactPerson: z.string().trim().min(1).max(200),
  phone: z
    .string()
    .trim()
    .min(6)
    .max(30)
    .regex(/^[+\d][\d\s\-()]+$/),
  email: z.string().trim().email().max(200),
  location: z.string().trim().min(1).max(200),
  propertyType: z.enum(propertyTypes),
  service: z.enum(serviceOptions),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
  // Honeypot - checked (and dropped) in the API route before validation.
  website: z.string().optional(),
  sourcePage: z.string().max(500),
  locale: z.enum(["nl", "en"]),
});

export type LeadInput = z.infer<typeof leadSchema>;
