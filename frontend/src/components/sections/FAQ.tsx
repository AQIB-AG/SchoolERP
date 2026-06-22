"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/faq";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-white dark:bg-[#0E1516] scroll-section">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text leading-none">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Minimal Accordion List */}
        <div className="max-w-3xl border-t border-border/60">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-border/60 py-6 transition-all duration-300">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  id={`faq-question-v2-${index}`}
                >
                  <span className={`text-sm md:text-base font-bold transition-colors ${
                    isOpen ? "text-primary" : "text-text hover:text-primary"
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Rotating plus symbol */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.3, ease: LUXURY_EASE }}
                    className={`h-7 w-7 rounded-full border border-border flex items-center justify-center shrink-0 ${
                      isOpen ? "bg-primary/5 border-primary text-primary" : "text-muted group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: LUXURY_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pr-12 text-xs md:text-sm text-muted leading-relaxed font-semibold max-w-2xl">
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
