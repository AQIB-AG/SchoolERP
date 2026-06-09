"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { PRICING_PLANS } from "@/data/pricing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your school. All plans include a 14-day free trial."
        />

        {/* Toggle Billing pill */}
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
            className="relative h-9 w-16 rounded-full bg-slate-200 dark:bg-slate-800 transition-colors duration-300 focus:outline-none border border-border cursor-pointer"
          >
            <motion.span
              layout
              className="absolute top-1 left-1 h-6 w-6 rounded-full bg-primary shadow-lg"
              animate={{ x: isYearly ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </button>

          <span
            className={cn(
              "text-sm font-bold transition-colors duration-200 flex items-center gap-1.5",
              isYearly ? "text-text" : "text-muted"
            )}
          >
            Yearly Billing
            <span className="text-[10px] font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => {
            const hasGlow = plan.popular;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="h-full flex"
              >
                <TiltCard
                  glowColor={hasGlow ? "rgba(16, 185, 129, 0.25)" : "rgba(14, 165, 233, 0.12)"}
                  className={cn(
                    "relative flex w-full flex-col p-8 md:p-10 border bg-surface/50 dark:bg-surface/30 backdrop-blur-md transition-shadow duration-300",
                    hasGlow
                      ? "border-primary/50 shadow-2xl shadow-primary/10 ring-1 ring-primary/30"
                      : "border-border/80"
                  )}
                >
                  {/* Popular tag with glow */}
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-emerald-400 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg shadow-primary/20">
                      <Sparkles className="h-3 w-3 animate-pulse" />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-text">{plan.name}</h3>
                    <p className="mt-2 text-xs font-semibold text-muted leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price display with flip effect */}
                  <div className="mb-8 h-14 flex items-baseline gap-1.5">
                    {plan.customPricing ? (
                      <span className="text-3xl font-black text-text bg-gradient-to-r from-text to-muted bg-clip-text text-transparent">
                        Enterprise API
                      </span>
                    ) : (
                      <>
                        <span className="text-5xl font-black text-text tracking-tight">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-sm font-bold text-muted">
                          {isYearly ? "/ year" : "/ mo"}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Pricing Feature List */}
                  <ul className="mb-8 flex flex-1 flex-col gap-4 border-t border-border/40 pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </div>
                        <span className="text-sm font-medium text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    href="#contact"
                    className={cn(
                      "w-full py-3.5 font-bold transition-all duration-300",
                      plan.popular
                        ? "water-btn bg-gradient-to-r from-primary to-secondary border-none"
                        : "border-border/80 hover:bg-surface-muted hover:border-primary text-text"
                    )}
                  >
                    {plan.cta}
                  </Button>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
