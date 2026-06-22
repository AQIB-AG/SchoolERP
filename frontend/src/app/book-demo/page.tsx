"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Calendar, CheckCircle, ArrowLeft, ShieldCheck, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";

const demoSchema = z.object({
  schoolName: z.string().min(2, "School name must be at least 2 characters"),
  principalName: z.string().min(2, "Principal name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  studentsCount: z.string().min(1, "Please select student count category"),
  preferredTime: z.string().min(1, "Please choose a preferred date and time"),
});

type DemoFormData = z.infer<typeof demoSchema>;

export default function BookDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden">
      {/* Decorative Warm Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Left Column: Sales Consultation Pitch Panel */}
      <div className="lg:col-span-5 bg-surface-muted dark:bg-[#151F21]/30 border-r border-border/40 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden shrink-0">
        <div className="absolute -top-16 -left-16 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Header Navigation */}
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

        {/* Content Block */}
        <div className="my-12 space-y-10 z-10 max-w-lg">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>LIVE CONSULTATION</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4.5xl font-bold text-text leading-tight">
              See how modern schools operate.
            </h1>
            <p className="text-sm text-muted leading-relaxed font-medium">
              Schedule a live, personalized 1-on-1 demo with our product specialists to see how SchoolManager coordinates your administration, classrooms, and billing structures.
            </p>
          </div>

          {/* Demo steps */}
          <div className="space-y-6 border-t border-border/40 pt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text mb-4">Demo Process Steps</h3>
            {[
              { step: "1", title: "15-Min Walkthrough", desc: "Explore core attendance tracking, grade registers, and automated circular messaging workflows." },
              { step: "2", title: "Custom Module Configuration", desc: "Discuss your school's unique workload requirements and specific template customizations." },
              { step: "3", title: "Onboarding & Pricing Plan", desc: "Obtain a personalized data migration estimate and a tailored subscription roadmap." }
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/15 text-primary flex items-center justify-center shrink-0 text-xs font-black">
                  {s.step}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text">{s.title}</h4>
                  <p className="text-xs text-muted mt-0.5 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What schools learn & Product highlights */}
          <div className="space-y-4 border-t border-border/40 pt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text mb-2">What you will learn</h3>
            <ul className="space-y-2.5 text-xs font-semibold text-muted">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>How to eliminate 90% of paperwork using cloud digital profiles.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>Automating parent billing schedules and digital invoice receipts.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                <span>Instantly recording check-ins and broadcasting emergency alerts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Security badge footer */}
        <div className="flex items-center gap-4 text-[10px] font-semibold text-muted/65 z-10 border-t border-border/20 pt-6">
          <div className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>ISO 27001 Certified Host</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4 text-primary" />
            <span>GDPR Compliant Privacy</span>
          </div>
        </div>
      </div>

      {/* Right Column: Premium Booking Form Card */}
      <div className="lg:col-span-7 flex items-center justify-center p-8 md:p-12 lg:p-16 z-10">
        <div className="w-full max-w-lg bg-surface border border-border/70 rounded-[32px] shadow-2xl p-8 md:p-10 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-text">Schedule Consultation</h2>
                  <p className="text-muted text-xs mt-2 leading-relaxed font-medium">
                    Secure your 1-on-1 walkthrough session. Select your preferred date and time.
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

                  {/* Principal Name */}
                  <div>
                    <label htmlFor="principalName" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Principal / Director Name</label>
                    <input
                      id="principalName"
                      type="text"
                      placeholder="e.g., Dr. Priya Sharma"
                      {...register("principalName")}
                      className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                    />
                    {errors.principalName && (
                      <p className="text-xs font-bold text-secondary mt-1">{errors.principalName.message}</p>
                    )}
                  </div>

                  {/* Email & Phone Split */}
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

                  {/* Number of Students */}
                  <div>
                    <label htmlFor="studentsCount" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Student Count</label>
                    <select
                      id="studentsCount"
                      {...register("studentsCount")}
                      className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold text-text"
                    >
                      <option value="">Select quantity range...</option>
                      <option value="1-200">Under 200 students</option>
                      <option value="200-500">200 to 500 students</option>
                      <option value="500-1000">500 to 1,000 students</option>
                      <option value="1000+">1,000+ students</option>
                    </select>
                    {errors.studentsCount && (
                      <p className="text-xs font-bold text-secondary mt-1">{errors.studentsCount.message}</p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">Preferred Demo Time</label>
                    <input
                      id="preferredTime"
                      type="datetime-local"
                      {...register("preferredTime")}
                      className="w-full h-11 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold text-text"
                    />
                    {errors.preferredTime && (
                      <p className="text-xs font-bold text-secondary mt-1">{errors.preferredTime.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 mt-6 bg-primary text-white hover:bg-primary-hover flex items-center justify-center shadow-lg"
                  >
                    {isSubmitting ? "Securing Session..." : "Confirm Demo Request"}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center py-10"
              >
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-text">Demo Scheduled!</h2>
                <p className="text-muted text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                  Thank you! An accounts coordinator will reach out to secure your preferred slot and send calendar links.
                </p>
                <div className="mt-8 border-t border-border/20 pt-6">
                  <Button href="/" className="bg-primary text-white hover:bg-primary-hover shadow-md px-6">
                    Return to Homepage
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
