"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  Briefcase,
  Smartphone,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Clock,
  Sparkles
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: LUXURY_EASE } },
  };

  const cardHoverProps = {
    whileHover: { y: -6, scale: 1.005 },
    transition: { duration: 0.4, ease: LUXURY_EASE }
  };

  return (
    <section id="features" ref={sectionRef} className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Handcrafted Editorial SVG Flowing Curved Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] dark:opacity-[0.09] text-primary" fill="none" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <path d="M-100,150 C300,50 500,350 900,200 C1300,50 1500,450 1600,300" stroke="currentColor" strokeWidth="1.5" />
        <path d="M-100,220 C300,120 500,420 900,270 C1300,120 1500,520 1600,370" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M-100,550 C200,400 600,600 1000,450 C1300,350 1500,600 1600,500" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      {/* Background Soft Glow Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
            PLATFORM CAPABILITIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            Designed for administrators, refined for education.
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted leading-relaxed font-medium">
            Everything your institution needs to simplify administrative work, eliminate friction, and empower learning.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-6"
        >

          
          {/* Card 1: Student Management (Wide Span) */}
          <motion.div 
            variants={itemVariants}
            {...cardHoverProps}
            className="md:col-span-4 lg:col-span-2 group bg-surface border border-border/70 dark:border-white/10 rounded-[28px] p-8 shadow-sm flex flex-col justify-between min-h-[340px] hover:border-primary/30 transition-colors duration-300 relative overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-text mb-2">Student Management</h3>
              <p className="text-sm text-muted max-w-md leading-relaxed font-medium">
                Centralize enrollment, tracking, academic files, and profile details in one secure database. Manage grading lists and student directories without friction.
              </p>
            </div>
            
            {/* Custom Interactive Micro UI */}
            <div className="mt-8 flex gap-3 overflow-hidden border-t border-border/30 pt-6">
              {[
                { name: "Sophia Martinez", id: "STU-2042", avatar: "S" },
                { name: "Daniel Henderson", id: "STU-2051", avatar: "D" },
              ].map((s, idx) => (
                <div key={idx} className="flex-1 bg-surface-muted/50 border border-border/40 p-3 rounded-xl flex items-center justify-between min-w-[150px]">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary font-bold text-[9px] flex items-center justify-center">
                      {s.avatar}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-text leading-none">{s.name}</span>
                      <span className="text-[8px] text-muted mt-0.5">{s.id}</span>
                    </div>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Attendance Tracking (Tall Span) */}
          <motion.div 
            variants={itemVariants}
            {...cardHoverProps}
            className="md:col-span-2 lg:col-span-1 group bg-surface border border-border/70 dark:border-white/10 rounded-[28px] p-8 shadow-sm flex flex-col justify-between min-h-[340px] hover:border-primary/30 transition-colors duration-300 cursor-pointer"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-text mb-2">Attendance</h3>
              <p className="text-sm text-muted leading-relaxed font-medium">
                Real-time daily attendance with automated absence alerts sent directly to parent channels.
              </p>
            </div>

            {/* Custom Micro UI */}
            <div className="mt-8 bg-surface-muted/50 border border-border/45 p-4 rounded-xl flex flex-col gap-2">
              <div className="flex justify-between items-center text-[10px] font-bold text-text">
                <span>Today's Log</span>
                <span className="text-primary text-[9px]">98.4% Present</span>
              </div>
              <div className="h-2 w-full bg-border/40 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[94%]" />
              </div>
              <div className="flex justify-between text-[8px] text-muted">
                <span>940 Present</span>
                <span>16 Absent</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Fee Management */}
          <motion.div 
            variants={itemVariants}
            {...cardHoverProps}
            className="md:col-span-3 lg:col-span-1 group bg-surface border border-border/70 dark:border-white/10 rounded-[28px] p-8 shadow-sm flex flex-col justify-between min-h-[340px] hover:border-primary/30 transition-colors duration-300 cursor-pointer"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-text mb-2">Fee Management</h3>
              <p className="text-sm text-muted leading-relaxed font-medium">
                Generate dynamic invoices, configure installment schedules, and track payment receipts automatically.
              </p>
            </div>

            {/* Custom Micro UI */}
            <div className="mt-8 bg-surface-muted/50 border border-border/45 p-4 rounded-xl flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-[9px] font-bold border-b border-border/40 pb-2">
                <span className="text-muted">TERM INVOICE</span>
                <span className="text-text font-black">$1,250.00</span>
              </div>
              <div className="flex items-center justify-between text-[9px] font-bold">
                <span className="text-text">Sophia Martinez</span>
                <span className="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-black">PAID</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Parent Communication */}
          <motion.div 
            variants={itemVariants}
            {...cardHoverProps}
            className="md:col-span-3 lg:col-span-1 group bg-surface border border-border/70 dark:border-white/10 rounded-[28px] p-8 shadow-sm flex flex-col justify-between min-h-[340px] hover:border-primary/30 transition-colors duration-300 cursor-pointer"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-text mb-2">Parent Portal</h3>
              <p className="text-sm text-muted leading-relaxed font-medium">
                Direct messaging, group announcements, report cards, and digital notice boards keep families in lockstep.
              </p>
            </div>

            {/* Custom Micro UI */}
            <div className="mt-8 flex flex-col gap-2">
              <div className="bg-surface-muted/50 border border-border/30 rounded-xl p-2.5 max-w-[85%] self-start text-[9px] font-medium text-text">
                Is school closed for the holiday tomorrow?
              </div>
              <div className="bg-primary text-white dark:text-[#141C19] rounded-xl p-2.5 max-w-[85%] self-end text-[9px] font-bold">
                Yes! Normal classes resume Friday.
              </div>
            </div>
          </motion.div>

          {/* Card 5: Staff Management */}
          <motion.div 
            variants={itemVariants}
            {...cardHoverProps}
            className="md:col-span-2 lg:col-span-1 group bg-surface border border-border/70 dark:border-white/10 rounded-[28px] p-8 shadow-sm flex flex-col justify-between min-h-[340px] hover:border-primary/30 transition-colors duration-300 cursor-pointer"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-text mb-2">Staff & Payroll</h3>
              <p className="text-sm text-muted leading-relaxed font-medium">
                Organize teacher profiles, assign course schedules, manage substitute requests, and run ledger payroll.
              </p>
            </div>

            {/* Custom Micro UI */}
            <div className="mt-8 bg-surface-muted/50 border border-border/45 p-3 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                  <CheckCircle className="h-4.5 w-4.5" />
                </div>
                <span className="text-[10px] font-bold text-text">Payroll Ledger</span>
              </div>
              <span className="text-[9px] text-muted font-bold">Disbursed</span>
            </div>
          </motion.div>

          {/* Card 6: Mobile App Access */}
          <motion.div 
            variants={itemVariants}
            {...cardHoverProps}
            className="md:col-span-4 lg:col-span-2 group bg-surface border border-border/70 dark:border-white/10 rounded-[28px] p-8 shadow-sm flex flex-col justify-between min-h-[340px] hover:border-primary/30 transition-colors duration-300 relative overflow-hidden cursor-pointer"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-text mb-2">Mobile Access</h3>
              <p className="text-sm text-muted max-w-md leading-relaxed font-medium">
                Full-featured portable experience for administrators, teachers, and parents on any iOS or Android device.
              </p>
            </div>

            {/* Custom Mobile Notification Mockup */}
            <div className="mt-8 flex justify-center border-t border-border/30 pt-6">
              <div className="w-64 bg-surface-muted/50 border border-border/40 rounded-t-xl p-3 flex flex-col gap-2 relative h-16 overflow-hidden">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-border/40 rounded-full" />
                <div className="mt-2.5 bg-surface border border-border/30 rounded-lg p-2 flex items-center gap-2 shadow-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="h-3 w-3" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black text-text">Notification Alert</span>
                    <span className="text-[7px] text-muted">Weekly performance report generated.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
