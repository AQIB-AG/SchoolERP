"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    num: "01",
    title: "Setup School",
    description: "Register your institution and import your default class blueprints and configurations in a few simple steps."
  },
  {
    num: "02",
    title: "Manage Daily Operations",
    description: "Onboard students and staff, configure class lists, assign advisers, and establish tuition billing rules."
  },
  {
    num: "03",
    title: "Track Performance",
    description: "Monitor daily attendance rates, track billing installments, compile reports, and coordinate updates."
  }
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.45, margin: "0px 0px -15% 0px", once: true });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 premium-gradient border-y border-border/40 dark:border-white/5 scroll-section overflow-hidden">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 overflow-hidden py-1">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity", WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}
            className="text-xs font-bold tracking-widest text-primary uppercase block mb-3"
          >
            ONBOARDING WORKFLOW
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text leading-none"
          >
            How it works.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ willChange: "transform, opacity" }}
            className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold"
          >
            Follow a simplified setup sequence designed to transition your school onto a modern operations engine.
          </motion.p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative pt-8">
          
          {/* Connector line for desktop viewports */}
          <div className="absolute top-[52px] inset-x-12 h-[1px] bg-black/30 dark:bg-white/10 hidden md:block z-0" />

          {STEPS.map((step, idx) => {
            const stepDelays = [0.25, 0.90, 1.55];
            const stepDelay = stepDelays[idx];

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.65, delay: stepDelay, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
                className="flex flex-col items-center md:items-start text-center md:text-left relative z-10"
              >
                {/* Step badge */}
                <div className="h-10 w-10 rounded-full bg-white/80 dark:bg-[#151F21]/80 backdrop-blur-xs border-2 border-primary text-primary font-bold text-xs flex items-center justify-center mb-6 shadow-xs">
                  {step.num}
                </div>
                
                {/* Step Title & Details */}
                <h3 className="text-base font-bold text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-muted leading-relaxed max-w-xs md:max-w-none">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
