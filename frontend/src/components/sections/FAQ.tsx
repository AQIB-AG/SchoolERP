"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

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
    <section id="faq" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-[40%] left-[-15%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading title="Frequently Asked Questions" />

        {/* Minimalist divider-style FAQ Accordion */}
        <div className="mx-auto max-w-3xl mt-16 md:mt-20 border-t border-border/60">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-border/60 py-6 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="flex w-full items-center justify-between gap-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className={`text-base md:text-lg font-bold transition-colors duration-250 ${
                    isOpen ? "text-primary" : "text-text hover:text-primary"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Premium plus rotating toggle */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.4, ease: LUXURY_EASE }}
                    className={`h-8 w-8 rounded-full border border-border/80 flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? "bg-primary/5 border-primary text-primary" : "text-muted group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.div>
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
                      transition={{ duration: 0.35, ease: LUXURY_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pr-12 text-sm md:text-base text-muted font-medium leading-relaxed max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
