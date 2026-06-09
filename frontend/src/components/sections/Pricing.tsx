"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PRICING_PLANS } from "@/data/pricing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your school. All plans include a 14-day free trial."
        />

        {/* Toggle Billing Pill */}
        <div className="mb-16 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-bold transition-colors duration-200",
              !isYearly ? "text-text" : "text-muted"
            )}
          >
            Monthly Billing
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-8 w-14 rounded-full bg-surface-muted/80 transition-colors duration-300 focus:outline-none border border-border/60 cursor-pointer flex items-center px-1"
          >
            <motion.span
              layout
              className="h-6.5 w-6.5 rounded-full bg-primary shadow-sm"
              animate={{ x: isYearly ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
            />
          </button>

          <span
            className={cn(
              "text-sm font-bold transition-colors duration-200 flex items-center gap-1.5",
              isYearly ? "text-text" : "text-muted"
            )}
          >
            Yearly Billing
            <span className="text-[9px] font-extrabold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full border border-secondary/20 uppercase tracking-wide">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isPopular = plan.popular;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: LUXURY_EASE }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="h-full flex"
              >
                <div
                  className={cn(
                    "relative flex w-full flex-col p-8 md:p-10 border rounded-[32px] bg-surface transition-all duration-300 shadow-sm",
                    isPopular
                      ? "border-secondary/60 ring-2 ring-secondary/25 shadow-md shadow-secondary/5"
                      : "border-border/70 hover:border-primary/40"
                  )}
                >
                  {/* Popular tag with glow */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-gradient-to-r from-secondary to-accent text-white text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 shadow-md shadow-secondary/15">
                      <Sparkles className="h-3 w-3 animate-pulse" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-text">{plan.name}</h3>
                    <p className="mt-2 text-xs font-semibold text-muted leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price display with flip effect (AnimatePresence slide-crossfade) */}
                  <div className="mb-8 h-16 flex items-baseline gap-1.5 border-b border-border/30 pb-6 overflow-hidden">
                    {plan.customPricing ? (
                      <span className="font-serif text-2xl font-bold text-primary">
                        Custom Enterprise
                      </span>
                    ) : (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isYearly ? "yearly" : "monthly"}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3, ease: LUXURY_EASE }}
                          className="flex items-baseline gap-1.5"
                        >
                          <span className="font-serif text-5xl font-bold text-text tracking-tight">
                            ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-xs font-bold text-muted uppercase tracking-wider ml-1">
                            {isYearly ? "/ year" : "/ mo"}
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>

                  {/* Pricing Feature List */}
                  <ul className="mb-8 flex flex-1 flex-col gap-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </div>
                        <span className="text-sm font-medium text-text/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Button
                    variant={isPopular ? "primary" : "outline"}
                    href="#contact"
                    className={cn(
                      "w-full py-3.5 font-bold transition-all duration-300 mt-auto",
                      isPopular
                        ? "bg-primary text-white hover:bg-primary-hover border-none"
                        : "border-border/80 hover:bg-surface-muted hover:border-primary text-text"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
