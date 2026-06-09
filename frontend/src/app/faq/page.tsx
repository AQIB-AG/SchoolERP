"use client";

import { FAQ } from "@/components/sections/FAQ";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function FAQPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      {/* Page Header */}
      <Container className="relative z-10 mb-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-1.5 text-xs font-semibold text-primary mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>HELP CENTER</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-[42px] md:text-[56px] font-bold text-text tracking-tight leading-[1.1]"
        >
          Frequently asked <span className="text-primary italic font-medium">questions</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Have questions about implementation, billing configurations, or messaging features? Find details below.
        </motion.p>
      </Container>

      {/* Main Accordion Component */}
      <FAQ />

      {/* Lower Support Hook */}
      <Container className="mt-16 max-w-4xl text-center">
        <div className="bg-surface border border-border/70 rounded-[28px] p-8 md:p-12 shadow-xl flex flex-col items-center max-w-3xl mx-auto gap-6">
          <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <HelpCircle className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-text">Still have questions?</h2>
            <p className="text-muted text-sm mt-2 max-w-md mx-auto leading-relaxed">
              Our support team is available 24/7 to help you transition your school data smoothly. Get in touch with us today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" className="bg-primary text-white hover:bg-primary-hover shadow-md px-6">
              Contact Support
            </Button>
            <Button variant="ghost" href="/book-demo" className="border border-border/70 hover:bg-surface-muted px-6">
              Request Live Demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
