"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { useToast } from "@/hooks/useToast";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ToastContainer } from "@/components/shared/Toast";
import { CONTACT_ENDPOINT } from "@/constants/api";
import { cn } from "@/lib/utils";

export function Contact() {
  const { toasts, show, dismiss } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: { success: boolean; message: string } =
        await response.json();

      if (result.success) {
        show("success", result.message);
        reset();
      } else {
        show("error", result.message);
      }
    } catch {
      show("error", "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Ready to transform your school? We'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text">Contact Information</h3>
              <p className="mt-2 text-muted">
                Have questions? Our team is here to help you find the right
                solution for your school.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@schoolmanager.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "123 Education Lane, San Francisco, CA 94102",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-text">{item.label}</p>
                    <p className="text-muted">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-[24px] border border-border bg-surface p-6 md:p-8"
            >
              <div className="space-y-5">
                {(
                  [
                    { name: "name", label: "Name", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "schoolName", label: "School Name", type: "text" },
                  ] as const
                ).map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 block text-sm font-medium text-text"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      {...register(field.name)}
                      aria-invalid={!!errors[field.name]}
                      aria-describedby={
                        errors[field.name] ? `${field.name}-error` : undefined
                      }
                      className={cn(
                        "w-full rounded-[14px] border bg-background px-4 py-3 text-text transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
                        errors[field.name]
                          ? "border-red-400"
                          : "border-border",
                      )}
                    />
                    {errors[field.name] && (
                      <p
                        id={`${field.name}-error`}
                        className="mt-1 text-sm text-red-500"
                        role="alert"
                      >
                        {errors[field.name]?.message}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={cn(
                      "w-full resize-none rounded-[14px] border bg-background px-4 py-3 text-text transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
                      errors.message ? "border-red-400" : "border-border",
                    )}
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>

      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </section>
  );
}
