"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Sparkles, CheckCircle, ArrowLeft, ShieldCheck, Zap, CreditCard, Loader2, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/Button";

const trialSchema = z.object({
  schoolName: z.string().min(2, "School name must be at least 2 characters"),
  adminName: z.string().min(2, "Administrator name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type TrialFormData = z.infer<typeof trialSchema>;

const TRIAL_BENEFITS = [
  { icon: Zap, label: "Instant Deployment", desc: "Access your cloud dashboard and database in under 2 minutes." },
  { icon: CreditCard, label: "No Credit Card Required", desc: "Try every module and setting with zero financial obligation." },
  { icon: ShieldCheck, label: "14-Day Free Access", desc: "Includes standard workspace features, integrations, and guidebooks." },
];

const ONBOARDING_STEPS = [
  { step: 1, label: "Create School", desc: "Setting up secure database instance & tenant configurations." },
  { step: 2, label: "Add Staff", desc: "Provisioning coordinator access levels & faculty calendars." },
  { step: 3, label: "Add Students", desc: "Building student databases, class ledgers, & enrollment books." },
  { step: 4, label: "Start Managing", desc: "Deploying production endpoints for your customized ERP portal." }
];

export default function StartFreeTrialPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TrialFormData>({
    resolver: zodResolver(trialSchema),
  });

  const onSubmit = async (data: TrialFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && activeStepIndex < ONBOARDING_STEPS.length) {
      const timer = setTimeout(() => {
        setActiveStepIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, activeStepIndex]);

  return (
    <div className="bg-background min-h-screen grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Left Column: Brand Promotion Onboarding Panel */}
      <div className="lg:col-span-5 bg-surface-muted dark:bg-[#151F21]/30 border-r border-border/40 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden shrink-0">
        <div className="absolute -top-16 -left-16 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Back Link & Logo */}
        <div className="flex flex-col gap-8 z-10">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-md">
              <GraduationCap className="h-5.5 w-5.5" />
            </div>
            <span className="font-serif font-bold text-xl text-text group-hover:text-primary transition-colors">
              SchoolManager
            </span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors uppercase tracking-wider">
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>
        </div>

        {/* Pitch Copy */}
        <div className="my-12 space-y-10 z-10 max-w-lg">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>14-DAY TRIAL ACCESS</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4.5xl font-bold text-text leading-tight">
              Begin your operational <span className="text-primary italic font-medium">harmony</span> today.
            </h2>
            <p className="text-sm text-muted leading-relaxed font-medium">
              Transform student scheduling, attendance logs, parent conversations, and fee ledgers in one cohesive cloud workspace.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-6 border-t border-border/40 pt-8">
            {TRIAL_BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="flex gap-4 items-start">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/15 text-primary flex items-center justify-center shrink-0">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text">{b.label}</h3>
                    <p className="text-xs text-muted mt-0.5 leading-relaxed font-medium">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Included Modules list */}
          <div className="space-y-3 border-t border-border/40 pt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text mb-2">ERP Modules Included</h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Student Ledger</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Daily Attendance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Billing & Invoicing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Staff Workloads</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2">
                <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Parent Message Portal circulars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hosting Security & Trust badges */}
        <div className="flex items-center gap-4 text-[10px] font-semibold text-muted/65 z-10 border-t border-border/20 pt-6">
          <div className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>GDPR Secure Data</span>
          </div>
          <div className="flex items-center gap-1">
            <KeyRound className="h-4 w-4 text-primary" />
            <span>256-Bit SSL Encripted</span>
          </div>
        </div>
      </div>

      {/* Right Column: Form & Onboarding Steps */}
      <div className="lg:col-span-7 flex items-center justify-center p-8 md:p-12 lg:p-16 z-10">
        <div className="w-full max-w-lg bg-surface border border-border/70 rounded-[32px] shadow-2xl p-8 md:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8">
                  <h1 className="font-serif text-2xl md:text-3xl font-bold text-text">Create Free Account</h1>
                  <p className="text-muted text-xs mt-2 leading-relaxed font-medium">
                    No payment details needed. Start your 14-day evaluation environment.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* School Name */}
                  <div>
                    <label htmlFor="schoolName" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">School Name</label>
                    <input
                      id="schoolName"
                      type="text"
                      placeholder="e.g., Green Valley Academy"
                      {...register("schoolName")}
                      className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                    />
                    {errors.schoolName && (
                      <p className="text-xs font-bold text-secondary mt-1">{errors.schoolName.message}</p>
                    )}
                  </div>

                  {/* Admin Name */}
                  <div>
                    <label htmlFor="adminName" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Administrator Name</label>
                    <input
                      id="adminName"
                      type="text"
                      placeholder="e.g., Priya Sharma"
                      {...register("adminName")}
                      className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                    />
                    {errors.adminName && (
                      <p className="text-xs font-bold text-secondary mt-1">{errors.adminName.message}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Work Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g., admin@gvalley.edu"
                        {...register("email")}
                        className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                      />
                      {errors.email && (
                        <p className="text-xs font-bold text-secondary mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g., 9876543210"
                        {...register("phone")}
                        className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                      />
                      {errors.phone && (
                        <p className="text-xs font-bold text-secondary mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Password & Confirm */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Password</label>
                      <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        {...register("password")}
                        className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                      />
                      {errors.password && (
                        <p className="text-xs font-bold text-secondary mt-1">{errors.password.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Confirm Password</label>
                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        {...register("confirmPassword")}
                        className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                      />
                      {errors.confirmPassword && (
                        <p className="text-xs font-bold text-secondary mt-1">{errors.confirmPassword.message}</p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 mt-6 bg-primary text-white hover:bg-primary-hover flex items-center justify-center shadow-lg"
                  >
                    {isSubmitting ? "Initializing Dashboard..." : "Create Free Account"}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="onboarding"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-4"
              >
                <div className="mb-8 text-center sm:text-left">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-text">Onboarding Your Workspace</h2>
                  <p className="text-muted text-xs mt-2 font-medium">Please wait while we provision your administration dashboard environments...</p>
                </div>

                <div className="space-y-6">
                  {ONBOARDING_STEPS.map((s, idx) => {
                    const isCompleted = activeStepIndex > idx;
                    const isCurrent = activeStepIndex === idx;
                    const isPending = activeStepIndex < idx;

                    return (
                      <div
                        key={s.step}
                        className={`flex gap-4 items-start transition-all duration-300 ${
                          isCompleted ? "opacity-100" : isCurrent ? "opacity-100 scale-[1.01]" : "opacity-40"
                        }`}
                      >
                        {/* Circle Indicator */}
                        <div className="shrink-0 mt-0.5">
                          {isCompleted ? (
                            <div className="h-6 w-6 rounded-full bg-primary/20 border border-primary text-primary flex items-center justify-center">
                              <CheckCircle className="h-4 w-4" />
                            </div>
                          ) : isCurrent ? (
                            <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center">
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            </div>
                          ) : (
                            <div className="h-6 w-6 rounded-full border border-border bg-background text-muted flex items-center justify-center text-xs font-bold">
                              {s.step}
                            </div>
                          )}
                        </div>

                        {/* Text description */}
                        <div>
                          <h4 className={`text-sm font-bold transition-colors ${isCurrent ? "text-primary font-extrabold" : "text-text"}`}>
                            Step {s.step}: {s.label}
                          </h4>
                          <p className="text-xs text-muted mt-1 leading-relaxed font-semibold">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Final Onboarding Success CTA */}
                <AnimatePresence>
                  {activeStepIndex >= ONBOARDING_STEPS.length && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-10 border-t border-border/20 pt-6 text-center"
                    >
                      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary animate-bounce">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold text-text font-serif">Setup Complete!</h3>
                      <p className="text-muted text-xs mt-2 max-w-xs mx-auto font-medium">Your credentials and secure school database are online.</p>
                      
                      <Button
                        href="/"
                        className="w-full h-12 mt-6 bg-primary text-white hover:bg-primary-hover flex items-center justify-center shadow-lg"
                      >
                        Launch SchoolManager Hub
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
