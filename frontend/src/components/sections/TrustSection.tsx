"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TRUST_STATS } from "@/data/trust";
import { Container } from "@/components/ui/Container";
import { TiltCard } from "@/components/shared/TiltCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

function AnimatedCounter({
  value,
  suffix,
  inView,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  inView: boolean;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(increment * step, value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : value >= 1000
        ? Math.round(count).toLocaleString()
        : Math.round(count).toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-surface-muted/30" ref={ref}>
      <Container>
        <SectionHeading
          title="Trusted by Schools Worldwide"
          subtitle="Join hundreds of institutions already transforming education with SchoolManager."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8 mt-12 max-w-5xl mx-auto">
          {TRUST_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <TiltCard
                glowColor="rgba(16, 185, 129, 0.12)"
                className="text-center p-8 bg-surface/80 border-border/80 dark:bg-surface/30 backdrop-blur-md"
              >
                <p className="text-4xl font-black text-primary md:text-5xl bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-3 text-sm font-bold text-muted uppercase tracking-wider">
                  {stat.label}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
