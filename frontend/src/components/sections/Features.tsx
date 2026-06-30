"use client";

import { motion } from "framer-motion";
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

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-36 relative overflow-hidden bg-cover bg-center bg-no-repeat scroll-section"
      style={{
        backgroundImage: "url('/features_bg.jpg')",
      }}
    >
      {/* Subtle overlay (5-10% opacity) to improve readability without hiding the background artwork */}
      <div className="absolute inset-0 bg-white/5 dark:bg-black/8 pointer-events-none z-[0]" />

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
      `}</style>

      <Container className="relative z-10">
        {/* ─────────────────────────────────────────────────────
            Section Header
            "School" word is styled editorial-large inspired by
            Reference 1 (munnangi.com) — larger, italic, primary teal.
            Each part is on its own line for a stacked editorial look.
        ───────────────────────────────────────────────────── */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-[#111827] uppercase block mb-3">
            PLATFORM FEATURES
          </span>

          {/*
            Heading: all words inline on one line on desktop.
            "School" is larger, italic, primary teal — the editorial focal word.
            lg:whitespace-nowrap keeps the full sentence on one line on desktop.
            On mobile the sentence wraps naturally at word boundaries.
          */}
          <h2
            className="font-serif font-bold tracking-tight text-text text-3xl md:text-5xl leading-tight lg:whitespace-nowrap"
          >
            Everything your{" "}
            <span
              className="italic text-primary text-5xl md:text-7xl"
              style={{ verticalAlign: "baseline" }}
            >
              School
            </span>
            {" "}needs.
          </h2>

          <p className="mt-6 text-xs md:text-sm text-muted leading-relaxed font-semibold max-w-xl mx-auto">
            An integrated educational suite engineered to simplify
            administration work, eliminate paper trails, and empower parent
            trust.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────
            Feature Cards Grid (3 cols desktop | 2 tablet | 1 mobile)
            Inspired by Reference 2 (WhatsApp help center):
            – Clean white cards, generous white space
            – Prominent icon, clear visual hierarchy
            – Minimal and premium feel

            Neon border effect:
            – A conic-gradient div rotates continuously behind the card
            – The 2px gap between outer clip container and inner card
              exposes the spinning gradient as a glowing animated border
            – opacity: 0 (hidden) → opacity: 1 (visible) on group-hover
            – Outer box-shadow creates the soft ambient glow
            – GPU-accelerated (CSS transform only, no JS)
        ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: idx * 0.05,
                ease: LUXURY_EASE,
              }}
              /*
                Outer container:
                – overflow-hidden clips the spinning gradient to a rounded rect
                – bg-border provides the default subtle 2px border colour
                – group enables group-hover utilities on children
                – transition-shadow for smooth glow fade-in/out
              */
              className="
                relative group rounded-2xl overflow-hidden
                bg-border dark:bg-white/10
                transition-shadow duration-300
                hover:shadow-[0_0_32px_rgba(44,175,176,0.18),0_0_12px_rgba(44,175,176,0.10)]
              "
            >
              {/*
                Neon spinning gradient layer.
                Positioned at inset-[-100%] so it's a large square centered
                behind the card. When rotated, the bright arc of the conic
                gradient travels around the perimeter of the outer container.
                opacity-0 → opacity-100 on hover; transitions in 200ms.
              */}
              <div
                className="feature-neon-spin absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  inset: "-100%",
                  background:
                    "conic-gradient(from 0deg, transparent 0%, transparent 55%, rgba(44,175,176,0.80) 64%, rgba(124,200,199,1) 70%, rgba(44,175,176,0.80) 76%, transparent 83%)",
                }}
              />

              {/*
                Inner card — the actual white surface.
                m-[2px] creates a 2px gap that shows the spinning gradient as
                the animated neon border. rounded-[14px] = 16px - 2px.
              */}
              <div className="relative m-[2px] rounded-[14px] bg-white dark:bg-[#151F21] p-7 lg:p-8 h-full flex flex-col">
                {/* Feature number — subtle premium watermark */}
                <span className="absolute top-5 right-6 text-[10px] font-black text-border dark:text-white/10 tabular-nums tracking-wider select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Icon container — teal tint bg, brightens on hover */}
                <div className="h-11 w-11 rounded-xl bg-primary/10 dark:bg-primary/15 text-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/20 dark:group-hover:bg-primary/25">
                  <feature.icon className="h-5 w-5" />
                </div>

                {/* Feature title — turns primary on hover */}
                <h3 className="text-[0.9rem] font-bold text-text mb-2.5 transition-colors duration-300 group-hover:text-primary leading-tight">
                  {feature.title}
                </h3>

                {/* Feature description */}
                <p className="text-xs font-semibold text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
