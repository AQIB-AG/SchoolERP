"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { STEPS } from "@/data/steps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="how-it-works" className="section-padding bg-surface-muted relative overflow-hidden">
      {/* Dynamic Background Light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <SectionHeading title="How It Works" />

        <div ref={containerRef} className="relative mx-auto max-w-4xl mt-16 pb-12">
          {/* Scroll-Linked Timeline Bar */}
          <div
            className="absolute left-8 top-12 hidden h-[calc(100%-6rem)] w-1.5 bg-slate-200 dark:bg-slate-800 rounded-full md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          >
            <motion.div
              style={{ scaleY }}
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-primary via-emerald-400 to-secondary"
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card Section */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex-1 w-full"
                  >
                    <div
                      className={`glass rounded-[24px] border border-border/80 bg-surface/60 p-6 md:p-8 shadow-xl dark:bg-surface/30 hover:border-primary/30 transition-all duration-300 ${
                        isEven ? "md:mr-12 md:text-right" : "md:ml-12 md:text-left"
                      }`}
                    >
                      <span className="text-sm font-extrabold text-primary uppercase tracking-widest">
                        Step {step.number}
                      </span>
                      <h3 className="text-2xl font-black text-text mt-2 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Circle Timeline Node */}
                  <div className="absolute left-8 top-6 -translate-x-1/2 z-10 flex md:relative md:left-auto md:top-auto md:translate-x-0 shrink-0 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
                      className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary text-white shadow-xl shadow-primary/20 hover:scale-110 transition-transform duration-300 cursor-pointer"
                    >
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for layout alignment on desktop */}
                  <div className="hidden flex-1 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
