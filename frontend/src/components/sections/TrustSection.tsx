"use client";

import { motion } from "framer-motion";
import { TRUST_STATS } from "@/data/trust";
import { Container } from "@/components/ui/Container";
import { FixedBackgroundRevealSection } from "@/components/sections/FixedBackgroundRevealSection";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function TrustSection() {
  return (
    <FixedBackgroundRevealSection
      bgImage="/hero_library.png"
      overlayBlur="backdrop-blur-[1px]"
      overlayLight="rgba(255, 255, 255, 0.12)" // Very light white overlay for maximum image visibility
      overlayDark="rgba(17, 24, 39, 0.15)"   // Very light dark overlay for maximum image visibility
      className="py-24 md:py-32 border-y border-border/40 dark:border-white/5 scroll-section"
    >
      <Container>
        
        {/* Statistics Grid with Premium Glassmorphism Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {TRUST_STATS.map((stat, idx) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.05, ease: LUXURY_EASE }}
                className="flex flex-col items-center text-center p-6 md:p-8 bg-white/85 dark:bg-[#1B292C]/85 backdrop-blur-[16px] border border-white/40 dark:border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                  {stat.value.toLocaleString()}{stat.suffix}
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase text-gray-800 dark:text-gray-200 tracking-widest mt-3">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </FixedBackgroundRevealSection>
  );
}
