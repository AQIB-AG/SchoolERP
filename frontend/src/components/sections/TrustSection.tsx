"use client";

import { motion } from "framer-motion";
import { TRUST_STATS } from "@/data/trust";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#121A1C] border-y border-border/40 dark:border-white/5 scroll-section">
      <Container>
        
        {/* Simple Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {TRUST_STATS.map((stat, idx) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: LUXURY_EASE }}
                className="flex flex-col items-center text-center p-6 bg-[#F8FAFA] dark:bg-[#1B292C]/40 border border-border/50 dark:border-white/5 rounded-2xl shadow-xs"
              >
                <span className="font-serif text-3xl md:text-4xl font-extrabold text-primary">
                  {stat.value.toLocaleString()}{stat.suffix}
                </span>
                <span className="text-[10px] font-black uppercase text-muted tracking-wider mt-2.5">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
