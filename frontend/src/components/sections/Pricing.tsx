"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { PRICING_PLANS } from "@/data/pricing";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-36 bg-white dark:bg-[#0E1516] scroll-section">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            PRICING OPTIONS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text leading-none">
            Simple pricing.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold">
            All subscriptions include a 14-day setup trial period. No hidden fees.
          </p>
        </div>

        {/* Toggle Billing Capsule */}
        <div className="mb-16 flex items-center justify-center gap-4">
          <span className={`text-xs font-bold transition-colors ${!isYearly ? "text-text" : "text-muted"}`}>
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-6 w-11 rounded-full bg-border/80 dark:bg-border/20 transition-colors focus:outline-none cursor-pointer flex items-center px-0.5"
          >
            <motion.span
              layout
              className="h-5 w-5 rounded-full bg-primary"
              animate={{ x: isYearly ? 18 : 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
            />
          </button>
          <span className={`text-xs font-bold transition-colors flex items-center gap-1.5 ${isYearly ? "text-text" : "text-muted"}`}>
            Yearly
            <span className="text-[8px] font-black text-primary bg-primary/10 px-1.5 py-0.5 rounded-full uppercase">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: LUXURY_EASE }}
                className={`flex flex-col p-8 rounded-2xl bg-white dark:bg-[#151F21] relative transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-primary dark:border-primary shadow-md md:scale-[1.03] z-10"
                    : "border border-border/80 dark:border-white/10 shadow-xs"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-background text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="font-serif text-xl font-bold text-text">{plan.name}</h3>
                  <p className="mt-2 text-[10px] font-bold text-muted uppercase tracking-wider">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="mb-6 h-12 flex items-baseline gap-1.5 border-b border-border/20 pb-4 overflow-hidden">
                  {plan.customPricing ? (
                    <span className="font-serif text-lg font-bold text-primary">Custom Enterprise</span>
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isYearly ? "yearly" : "monthly"}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25, ease: LUXURY_EASE }}
                        className="flex items-baseline gap-1"
                      >
                        <span className="font-serif text-4xl font-bold text-text tracking-tight">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-[10px] font-bold text-muted uppercase">
                          {isYearly ? "/ year" : "/ mo"}
                        </span>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>

                {/* Features List */}
                <ul className="mb-8 flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-text/80 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={plan.cta === "Start Free Trial" ? "/start-free-trial" : "/book-demo"}
                  className={`w-full py-2.5 text-center text-xs font-bold rounded-full transition-all ${
                    plan.popular
                      ? "bg-primary text-background hover:bg-primary-hover"
                      : "border border-border/80 hover:border-primary hover:text-primary text-text"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

