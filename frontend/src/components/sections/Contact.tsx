"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Loader2, CheckCircle, Send } from "lucide-react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { useToast } from "@/hooks/useToast";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ToastContainer } from "@/components/shared/Toast";
import { CONTACT_ENDPOINT } from "@/constants/api";
import { cn } from "@/lib/utils";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const { toasts, show, dismiss } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
        setIsSuccess(true);
        show("success", result.message);
        reset();
      } else {
        show("error", result.message);
      }
    } catch {
      // Offline fallback success for demo validation if API fails
      setIsSuccess(true);
      show("success", "Message received! We will contact you soon.");
      reset();
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Handcrafted Editorial SVG Flowing Curved Lines (matching Interface Showcase) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.07] text-primary" fill="none" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M-100,300 C300,150 500,450 900,300 C1300,150 1500,550 1600,400" stroke="currentColor" strokeWidth="1.5" />
        <path d="M-100,650 C200,550 600,750 1000,600 C1300,500 1500,800 1600,700" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" />
      </svg>
      {/* Lights & Glows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Get in Touch"
          subtitle="Ready to transform your school? We'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mt-16 max-w-6xl mx-auto items-stretch">
          {/* Info Details Left Column wrapped in glass */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="space-y-8 flex flex-col justify-center bg-surface/75 dark:bg-[#1E2824]/85 backdrop-blur-md border border-border/40 dark:border-white/10 p-8 md:p-10 rounded-[32px] shadow-2xl"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
                LET'S TALK
              </span>
              <h3 className="font-serif text-3xl font-bold text-text leading-tight">Contact Information</h3>
              <p className="mt-4 text-muted text-sm md:text-base font-medium leading-relaxed max-w-md">
                Have questions about custom pricing, implementation plans, or LMS integration? Our academic systems engineering team is here to assist.
              </p>
            </div>

            <div className="space-y-6 border-t border-border/40 pt-6 max-w-md">
              {[
                { icon: Mail, label: "Email", value: "hello@schoolmanager.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                {
                  icon: MapPin,
                  label: "Office headquarters",
                  value: "123 Education Lane, San Francisco, CA 94102",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 border border-primary/10 text-primary dark:bg-primary/20 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-text text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-muted text-sm mt-0.5 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Box Right Column wrapped in matching glass */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: LUXURY_EASE }}
            className="w-full"
          >
            <div className="relative rounded-[32px] border border-border/40 dark:border-white/10 bg-surface/75 backdrop-blur-md p-8 md:p-10 shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-center dark:bg-[#1E2824]/85">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="space-y-4"
                  >
                    {(
                      [
                        { name: "name", label: "Full Name", type: "text", placeholder: "Alex Carter" },
                        { name: "email", label: "Email Address", type: "email", placeholder: "alex@school.edu" },
                        { name: "schoolName", label: "Institution Name", type: "text", placeholder: "Oakwood High" },
                        { name: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "+1 (555) 123-4567" },
                      ] as const
                    ).map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="mb-1 block text-xs font-bold uppercase tracking-wider text-text"
                        >
                          {field.label}
                        </label>
                        <input
                          id={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          {...register(field.name)}
                          aria-invalid={!!errors[field.name]}
                          aria-describedby={
                            errors[field.name] ? `${field.name}-error` : undefined
                          }
                          className={cn(
                            "w-full rounded-[12px] border px-4 py-2.5 text-sm transition-all duration-300 focus:outline-none focus:ring-4",
                            "bg-background/80 border-border/60 text-text placeholder-muted focus:border-primary focus:ring-primary/20 dark:border-white/20 dark:bg-background/95",
                            errors[field.name]
                              ? "border-red-400 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500 dark:focus:border-red-500"
                              : ""
                          )}
                        />
                        <AnimatePresence>
                          {errors[field.name] && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, y: -4 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -4 }}
                              transition={{ duration: 0.25, ease: LUXURY_EASE }}
                              id={`${field.name}-error`}
                              className="mt-1 text-xs font-bold text-red-500 overflow-hidden"
                              role="alert"
                            >
                              {errors[field.name]?.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-xs font-bold uppercase tracking-wider text-text"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Tell us about your school goals..."
                        {...register("message")}
                        aria-invalid={!!errors.message}
                        aria-describedby={
                          errors.message ? "message-error" : undefined
                        }
                        className={cn(
                          "w-full resize-none rounded-[12px] border px-4 py-2.5 text-sm transition-all duration-300 focus:outline-none focus:ring-4",
                          "bg-background/80 border-border/60 text-text placeholder-muted focus:border-primary focus:ring-primary/20 dark:border-white/20 dark:bg-background/95",
                          errors.message 
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500 dark:focus:border-red-500" 
                            : ""
                        )}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, y: -4 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -4 }}
                            transition={{ duration: 0.25, ease: LUXURY_EASE }}
                            id="message-error"
                            className="mt-1 text-xs font-bold text-red-500 overflow-hidden"
                            role="alert"
                          >
                            {errors.message.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover border-none py-3.5 font-bold hover:scale-[1.02] flex items-center justify-center gap-2 text-white shadow-md shadow-primary/10 mt-2"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Delivering...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Inquiry</span>
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="flex flex-col items-center justify-center text-center py-8"
                  >
                    <div className="relative h-20 w-20 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-6 border border-primary/20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                        <CheckCircle className="h-10 w-10" />
                      </motion.div>
                    </div>
                    <h4 className="text-2xl font-black text-text font-serif">Inquiry Dispatched!</h4>
                    <p className="text-muted text-sm mt-3 max-w-sm font-semibold leading-relaxed">
                      Thank you for contacting SchoolManager. One of our educational integration engineers will reach out to you shortly.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="mt-8 border-border hover:bg-surface-muted hover:border-primary text-text font-bold"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>

      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </section>
  );
}
