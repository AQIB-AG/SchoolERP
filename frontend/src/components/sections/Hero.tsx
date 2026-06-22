"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "./DashboardMockup";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 bg-[#F8FAFA] dark:bg-[#0E1516] overflow-hidden">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: LUXURY_EASE }}
              className="inline-flex self-start items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-1.5 text-[9px] font-black tracking-widest text-primary mb-6 uppercase"
            >
              <Sparkles className="h-3 w-3" />
              <span>SchoolManager ERP</span>
            </motion.div>

            {/* Large Bold Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: LUXURY_EASE }}
              className="font-serif text-[42px] sm:text-[52px] md:text-[62px] font-extrabold leading-[1.05] tracking-tight text-text"
            >
              School Operations <br />
              <span className="text-primary font-extrabold">Made Simple.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE }}
              className="mt-6 text-sm md:text-base text-muted leading-relaxed font-semibold max-w-md animate-fade-in"
            >
              A premium school management SaaS platform built to unify pupil directories, coordinate classroom schedules, automate tuition fee ledgers, and align parent-school communications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: LUXURY_EASE }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <Link
                href="/start-free-trial"
                className="text-xs font-bold bg-primary hover:bg-primary-hover text-background px-6.5 py-3 rounded-full transition-all shadow-xs"
              >
                Start Free Trial
              </Link>
              <Link
                href="/book-demo"
                className="text-xs font-bold border border-border/80 text-text hover:bg-white/60 px-6.5 py-3 rounded-full transition-all flex items-center gap-1.5 bg-white/40 dark:bg-[#151F21]/40"
              >
                Book Demo <ArrowRight className="h-4 w-4 text-muted" />
              </Link>
            </motion.div>
            
          </div>

          {/* Right Column: Dashboard Preview mockup */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <DashboardMockup />
          </div>

        </div>
      </Container>
    </section>
  );
}



