"use client";

import { Pricing } from "@/components/sections/Pricing";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const PLAN_COMPARISON = [
  { feature: "Student Information System (SIS)", starter: true, professional: true, enterprise: true },
  { feature: "Automated Fee Invoicing", starter: true, professional: true, enterprise: true },
  { feature: "Parent-Teacher Messaging Hub", starter: false, professional: true, enterprise: true },
  { feature: "Advanced Attendance Analytics", starter: false, professional: true, enterprise: true },
  { feature: "Custom Payroll Integration", starter: false, professional: false, enterprise: true },
  { feature: "24/7 Dedicated Account Manager", starter: false, professional: false, enterprise: true },
  { feature: "Custom Branding & School Domain", starter: false, professional: false, enterprise: true },
];

export default function PricingPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      {/* Page Header */}
      <Container className="relative z-10 mb-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4.5 py-1.5 text-xs font-semibold text-secondary mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>TRANSPARENT VALUE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-[42px] md:text-[56px] font-bold text-text tracking-tight leading-[1.1]"
        >
          Simple pricing built for <span className="text-primary italic font-medium">every scale</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Select the license that fits your institution. All subscriptions include regular security updates and standard support.
        </motion.p>
      </Container>

      {/* Main Pricing Cards Component */}
      <Pricing />

      {/* Plan Feature Comparison Table */}
      <Container className="mt-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl font-bold text-text">Compare Plans & Features</h2>
          <p className="text-muted mt-2 text-sm">Review full capability listings to make the best choice.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-surface border border-border/70 rounded-[24px] p-6 shadow-xl overflow-hidden overflow-x-auto"
        >
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-border/40 pb-4">
                <th className="text-sm font-bold text-text pb-4 w-1/2">Capabilities</th>
                <th className="text-sm font-bold text-text pb-4 text-center">Starter</th>
                <th className="text-sm font-bold text-text pb-4 text-center">Professional</th>
                <th className="text-sm font-bold text-text pb-4 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {PLAN_COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-border/20 last:border-0">
                  <td className="text-sm font-semibold text-text py-4">{row.feature}</td>
                  <td className="py-4 text-center">
                    {row.starter ? (
                      <Check className="h-4.5 w-4.5 text-primary mx-auto" />
                    ) : (
                      <span className="text-muted/30 text-sm font-bold">—</span>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {row.professional ? (
                      <Check className="h-4.5 w-4.5 text-primary mx-auto" />
                    ) : (
                      <span className="text-muted/30 text-sm font-bold">—</span>
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {row.enterprise ? (
                      <Check className="h-4.5 w-4.5 text-primary mx-auto" />
                    ) : (
                      <span className="text-muted/30 text-sm font-bold">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Lower conversion hook */}
        <div className="mt-16 text-center bg-primary/5 rounded-[28px] border border-primary/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-serif text-2xl font-bold text-text">Need a custom structure?</h3>
            <p className="text-muted text-sm mt-1 max-w-md">We design custom configurations and multi-campus agreements for larger districts.</p>
          </div>
          <Button href="/contact" className="bg-primary text-white hover:bg-primary-hover shadow-md">
            Talk to District Sales
          </Button>
        </div>
      </Container>
    </div>
  );
}
