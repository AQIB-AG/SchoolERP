import { Router } from "express";
import { contactFormSchema } from "../validation/contact.js";
import { addSubmission } from "../store/contact-store.js";

export const contactRouter = Router();

contactRouter.post("/", (req, res) => {
  const parsed = contactFormSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Please check your form fields and try again.",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  addSubmission(parsed.data);

  return res.json({
    success: true,
    message: "Thank you! We'll be in touch shortly.",
  });
});

contactRouter.get("/", (_req, res) => {
  res.json({ message: "Contact API is running. Use POST to submit." });
});
