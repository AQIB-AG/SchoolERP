import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  schoolName: z
    .string()
    .min(2, "School name must be at least 2 characters")
    .max(150, "School name must be less than 150 characters"),
  phoneNumber: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number must be less than 20 digits"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
