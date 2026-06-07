"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/data/pricing";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-surface">
      <Container>
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that fits your school. All plans include a 14-day free trial."
        />

        <div className="mb-12 flex items-center justify-center gap-4">
          <span
            className={cn(
              "text-sm font-medium",
              !isYearly ? "text-text" : "text-muted",
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            onClick={() => setIsYearly(!isYearly)}
            className={cn(
              "relative h-8 w-14 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              isYearly ? "bg-primary" : "bg-slate-300 dark:bg-slate-600",
            )}
          >
            <span
              className={cn(
                "absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-transform",
                isYearly ? "translate-x-7" : "translate-x-1",
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              isYearly ? "text-text" : "text-muted",
            )}
          >
            Yearly
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "relative flex h-full flex-col transition-transform hover:scale-[1.02]",
                  plan.popular &&
                    "border-primary shadow-xl shadow-primary/10 ring-2 ring-primary",
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="primary">Most Popular</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-text">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.customPricing ? (
                    <span className="text-4xl font-bold text-text">
                      Custom Pricing
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-text">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted">
                        {isYearly ? "/year" : "/mo"}
                      </span>
                    </>
                  )}
                </div>

                <ul className="mb-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  href="#contact"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
