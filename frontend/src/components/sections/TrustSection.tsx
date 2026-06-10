"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TRUST_STATS } from "@/data/trust";
import { Container } from "@/components/ui/Container";

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
      : value >= 10000
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden" 
    >
      {/* Handcrafted Editorial SVG Flowing Curved Lines (matching Interface Showcase) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.07] text-primary" fill="none" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M-100,300 C300,150 500,450 900,300 C1300,150 1500,550 1600,400" stroke="currentColor" strokeWidth="1.5" />
        <path d="M-100,650 C200,550 600,750 1000,600 C1300,500 1500,800 1600,700" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" />
      </svg>

      <Container className="relative z-10">
        {/* Glassmorphic editorial panel container to hold contrast on top of a highly visible background image */}
        <div className="bg-surface/75 dark:bg-[#1E2824]/85 backdrop-blur-md border border-border/40 p-8 md:p-16 rounded-[36px] shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Heading and Editorial Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
                  METRICS THAT MATTER
                </span>
                <h2 className="font-serif text-3xl md:text-4.5xl font-bold tracking-tight text-text leading-tight">
                  Designed for scale, chosen for trust.
                </h2>
                <p className="mt-4 text-sm md:text-base text-muted leading-relaxed font-medium">
                  We measure our success by the seamless experience of administrators, teachers, and parents who use SchoolManager every day.
                </p>
              </motion.div>
            </div>

            {/* Right Column: High-End Asymmetric Stats Layout */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {TRUST_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col justify-between pl-6 border-l-2 border-border/60 hover:border-primary transition-all duration-300"
                >
                  <div>
                    <p className="font-serif text-4xl font-bold tracking-tight text-primary md:text-5xl select-none">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        inView={inView}
                        decimals={stat.decimals}
                      />
                    </p>
                    <p className="mt-3 text-xs font-bold tracking-wider text-text uppercase">
                      {stat.label}
                    </p>
                  </div>
                  
                  {/* Elegant bottom accent bar that glows/expands on group hover */}
                  <div className="absolute left-[-2px] bottom-0 top-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
