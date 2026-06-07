"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/data/steps";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-surface">
      <Container>
        <SectionHeading title="How It Works" />

        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-primary via-secondary to-success md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          >
            <motion.div
              className="h-full w-full origin-top bg-primary"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex flex-1 md:justify-end">
                  <div
                    className={`max-w-sm ${
                      index % 2 === 0
                        ? "md:text-right"
                        : "md:text-left md:ml-auto"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-text">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex shrink-0 items-center justify-center">
                  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="sr-only">Step {step.number}</span>
                  </div>
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
