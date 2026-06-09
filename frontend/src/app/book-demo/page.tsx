"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Sparkles, Calendar, CheckCircle, ArrowLeft } from "lucide-react";
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
    <div className="bg-background min-h-screen py-16 px-6 relative flex flex-col justify-between">
      {/* Decorative Warm Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Simplified Header */}
      <header className="max-w-4xl mx-auto w-full flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-md">
            <GraduationCap className="h-4.5 w-4.5" />
          </div>
          <span className="font-serif font-bold text-lg text-text group-hover:text-primary transition-colors">
            SchoolManager
          </span>
        </Link>
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-muted hover:text-primary transition-colors uppercase tracking-wider">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Home
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center py-12 z-10">
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
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>SECURE YOUR SESSION</span>
                  </div>
                  <h1 className="font-serif text-3xl font-bold text-text">Request a Live Demo</h1>
                  <p className="text-muted text-sm mt-2">See how our workspaces coordinate your administration.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* School Name */}
                  <div>
                    <label htmlFor="schoolName" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">School Name</label>
                    <input
                      id="schoolName"
                      type="text"
                      placeholder="e.g., Green Valley Academy"
                      {...register("schoolName")}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                    />
                    {errors.schoolName && (
                      <p className="text-xs font-bold text-secondary mt-1.5">{errors.schoolName.message}</p>
                    )}
                  </div>

                  {/* Principal Name */}
                  <div>
                    <label htmlFor="principalName" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Principal / Director Name</label>
                    <input
                      id="principalName"
                      type="text"
                      placeholder="e.g., Dr. Priya Sharma"
                      {...register("principalName")}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                    />
                    {errors.principalName && (
                      <p className="text-xs font-bold text-secondary mt-1.5">{errors.principalName.message}</p>
                    )}
                  </div>

                  {/* Email & Phone Split */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Work Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g., sharma@gvalley.edu"
                        {...register("email")}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                      />
                      {errors.email && (
                        <p className="text-xs font-bold text-secondary mt-1.5">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g., 9876543210"
                        {...register("phone")}
                        className="w-full h-12 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                      />
                      {errors.phone && (
                        <p className="text-xs font-bold text-secondary mt-1.5">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Number of Students */}
                  <div>
                    <label htmlFor="studentsCount" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Student Count</label>
                    <select
                      id="studentsCount"
                      {...register("studentsCount")}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                    >
                      <option value="">Select quantity range...</option>
                      <option value="1-200">Under 200 students</option>
                      <option value="200-500">200 to 500 students</option>
                      <option value="500-1000">500 to 1,000 students</option>
                      <option value="1000+">1,000+ students</option>
                    </select>
                    {errors.studentsCount && (
                      <p className="text-xs font-bold text-secondary mt-1.5">{errors.studentsCount.message}</p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-muted mb-2">Preferred Demo Time</label>
                    <input
                      id="preferredTime"
                      type="datetime-local"
                      {...register("preferredTime")}
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-sm font-semibold"
                    />
                    {errors.preferredTime && (
                      <p className="text-xs font-bold text-secondary mt-1.5">{errors.preferredTime.message}</p>
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
                <h2 className="font-serif text-3xl font-bold text-text">Demo Requested!</h2>
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
      </main>

      {/* Simplified Footer */}
      <footer className="max-w-4xl mx-auto w-full text-center text-xs font-semibold text-muted/60 z-10 border-t border-border/20 pt-6">
        <p>&copy; {new Date().getFullYear()} SchoolManager. All rights reserved. Subject to privacy terms.</p>
      </footer>
    </div>
  );
}
