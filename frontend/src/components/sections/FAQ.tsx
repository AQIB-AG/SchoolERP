"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(index);
    }
  };

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[40%] left-[-15%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading title="Frequently Asked Questions" />

        <div className="mx-auto max-w-3xl space-y-4 mt-12">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className={cn(
                  "overflow-hidden rounded-[24px] border transition-all duration-300 glass",
                  isOpen
                    ? "border-primary/40 bg-surface/75 dark:bg-surface/50 shadow-xl shadow-primary/5 ring-1 ring-primary/20"
                    : "border-border/80 bg-surface/40 hover:border-primary/20 hover:bg-surface/60"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={cn(
                      "h-5 w-5 shrink-0 transition-colors duration-300",
                      isOpen ? "text-primary" : "text-muted"
                    )} />
                    <span className="text-base md:text-lg font-bold text-text">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                      isOpen && "rotate-180 text-primary",
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-muted font-medium leading-relaxed border-l-2 border-primary/40 ml-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
