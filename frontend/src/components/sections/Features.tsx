"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarCheck,
  CreditCard,
  Users,
  MessageSquare,
  Smartphone
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const FEATURES = [
  {
    title: "Student Management",
    description: "Centralize student records, registrations, admissions, and academic profiles in one secure database.",
    icon: GraduationCap
  },
  {
    title: "Attendance Tracking",
    description: "Automate daily roll calls, manage leave requests, and trigger automated absence notices to parents instantly.",
    icon: CalendarCheck
  },
  {
    title: "Fee Management",
    description: "Generate term invoices, collect digital tuition fees, track dues, and compile financial receipts.",
    icon: CreditCard
  },
  {
    title: "Parent Communication",
    description: "Keep families updated in real time with circular announcements, message logs, and instant notifications.",
    icon: MessageSquare
  },
  {
    title: "Staff Management",
    description: "Manage teacher records, coordinate department workloads, assign roles, and streamline payroll calculations.",
    icon: Users
  },
  {
    title: "Mobile App Access",
    description: "Dedicated mobile portals for parents, teachers, and student directories to manage operations on the go.",
    icon: Smartphone
  }
];

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Features() {
  return (
    <section id="features" className="py-24 md:py-36 bg-[#F8FAFA] dark:bg-[#0E1516]/50 scroll-section">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            PLATFORM FEATURES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text leading-none">
            Everything your school needs.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold">
            An integrated educational suite engineered to simplify administration work, eliminate paper trails, and empower parent trust.
          </p>
        </div>

        {/* Feature Cards Grid (3 columns desktop, 1 column mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {FEATURES.map((feature, idx) => {
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05, ease: LUXURY_EASE }}
                className="bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 p-8 rounded-2xl shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-text mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs font-semibold text-muted leading-relaxed">
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

