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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="py-24 md:py-32 bg-background relative border-y border-border/40 overflow-hidden" 
      ref={ref}
    >
      {/* Delicate organic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Editorial Narrative */}
          <div className="lg:col-span-4 max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
                METRICS THAT MATTER
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-text leading-tight">
                Designed for scale, chosen for trust.
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted leading-relaxed font-medium">
                We measure our success by the seamless experience of administrators, teachers, and parents who use SchoolManager every day.
              </p>
            </motion.div>
          </div>

          {/* Right Column: High-End Asymmetric Stats Layout */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            {TRUST_STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between pl-6 border-l-2 border-border/60 hover:border-primary transition-all duration-300"
              >
                <div>
                  <p className="font-serif text-5xl font-bold tracking-tight text-primary md:text-6xl select-none">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={inView}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="mt-3 text-sm font-semibold tracking-wide text-text uppercase">
                    {stat.label}
                  </p>
                </div>
                
                {/* Elegant bottom accent bar that glows/expands on group hover */}
                <div className="absolute left-[-2px] bottom-0 top-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
