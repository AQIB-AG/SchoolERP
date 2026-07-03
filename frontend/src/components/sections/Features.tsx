"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  CalendarCheck,
  CreditCard,
  Users,
  MessageSquare,
  Smartphone,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const FEATURES = [
  {
    title: "Student Management",
    description:
      "Centralize student records, registrations, admissions, and academic profiles in one secure database.",
    icon: GraduationCap,
  },
  {
    title: "Attendance Tracking",
    description:
      "Automate daily roll calls, manage leave requests, and trigger automated absence notices to parents instantly.",
    icon: CalendarCheck,
  },
  {
    title: "Fee Management",
    description:
      "Generate term invoices, collect digital tuition fees, track dues, and compile financial receipts.",
    icon: CreditCard,
  },
  {
    title: "Parent Communication",
    description:
      "Keep families updated in real time with circular announcements, message logs, and instant notifications.",
    icon: MessageSquare,
  },
  {
    title: "Staff Management",
    description:
      "Manage teacher records, coordinate department workloads, assign roles, and streamline payroll calculations.",
    icon: Users,
  },
  {
    title: "Mobile App Access",
    description:
      "Dedicated mobile portals for parents, teachers, and student directories to manage operations on the go.",
    icon: Smartphone,
  },
];

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1, margin: "0px 0px -10% 0px", once: true });

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 md:py-36 relative overflow-hidden scroll-section"
    >
      {/* Next.js Optimized High-quality background image with a subtle blur (2-5px / 3px) for readability */}
      <Image
        src="/pinterest_bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover pointer-events-none z-0 blur-[3px] scale-[1.03]"
      />
      {/* Subtle overlay (5-15% opacity) to improve readability without hiding the background artwork */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/20 pointer-events-none z-0" />

      {/*
        Self-contained keyframes for the neon border spinning effect.
        GPU-accelerated via CSS transform (no JavaScript animation frame loop).
        Only rendered while the element is in the DOM — no cost when hidden.
      */}
      <style>{`
        @keyframes neonBorderSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .feature-neon-spin {
          animation: neonBorderSpin 2.2s linear infinite;
          will-change: transform;
        }
        .feature-neon-gradient {
          background: conic-gradient(from 0deg, transparent 0%, transparent 55%, rgba(44,175,176,0.80) 64%, rgba(124,200,199,1) 70%, rgba(44,175,176,0.80) 76%, transparent 83%);
        }
        .dark .feature-neon-gradient {
          background: conic-gradient(from 0deg, transparent 0%, transparent 55%, rgba(236,72,153,0.90) 62%, rgba(255,200,220,1) 70%, rgba(236,72,153,0.90) 78%, transparent 85%) !important;
        }
      `}</style>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-20 overflow-hidden py-2">
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="text-xs font-bold tracking-widest text-[#111827] dark:text-[#000000] uppercase block mb-3"
          >
            PLATFORM FEATURES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 35, scale: 0.96 }}
            transition={{ duration: 0.75, delay: 0.55, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="font-serif font-bold tracking-tight text-text dark:text-[#000000] text-3xl md:text-5xl leading-tight lg:whitespace-nowrap"
          >
            Everything your{" "}
            <span
              className="italic text-primary text-5xl md:text-7xl antialiased"
              style={{
                verticalAlign: "baseline",
                WebkitTextStroke: "1px #000000",
                letterSpacing: "0.04em",
              }}
            >
              School
            </span>
            {" "}needs.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.55, delay: 1.3, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="mt-6 text-xs md:text-sm text-black dark:text-white leading-relaxed font-semibold max-w-xl mx-auto"
          >
            An integrated educational suite engineered to simplify
            administration work, eliminate paper trails, and empower parent
            trust.
          </motion.p>
        </div>

        {/* Feature Cards Grid (3 cols desktop | 2 tablet | 1 mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((feature, idx) => {
            const isTopRow = idx < 3;
            const cardDelay = 0.15 + idx * 0.15;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: isTopRow ? "-100vw" : "100vw" }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isTopRow ? "-100vw" : "100vw" }}
                transition={{
                  duration: 1.2,
                  delay: cardDelay,
                  ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
                }}
                style={{ willChange: "transform, opacity" }}
                className="
                  relative group rounded-2xl overflow-hidden
                  bg-border dark:bg-white/10
                  transition-shadow duration-300
                  hover:shadow-[0_0_32px_rgba(44,175,176,0.18),0_0_12px_rgba(44,175,176,0.10)]
                  dark:hover:shadow-[0_0_40px_rgba(236,72,153,0.6),0_0_20px_rgba(236,72,153,0.3)]
                "
              >
                {/* Neon spinning gradient layer */}
                <div
                  className="feature-neon-spin feature-neon-gradient absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    inset: "-100%",
                  }}
                />

                {/* Inner card */}
                <div className="relative m-[2px] dark:m-[3px] rounded-[14px] dark:rounded-[13px] bg-white dark:bg-[#151F21] p-7 lg:p-8 h-full flex flex-col">
                  {/* Feature number */}
                  <span className="absolute top-5 right-6 text-[10px] font-black text-border dark:text-white/10 tabular-nums tracking-wider select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Icon container */}
                  <div className="h-11 w-11 rounded-xl bg-primary/10 dark:bg-primary/15 text-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/20 dark:group-hover:bg-primary/25">
                    <feature.icon className="h-5 w-5" />
                  </div>

                  {/* Feature title */}
                  <h3 className="text-[0.9rem] font-bold text-text mb-2.5 transition-colors duration-300 group-hover:text-primary leading-tight">
                    {feature.title}
                  </h3>

                  {/* Feature description */}
                  <p
                    className="text-xs font-semibold leading-relaxed"
                    style={{ color: "#DE5E5E" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
