"use client";

import { Features } from "@/components/sections/Features";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { Benefits } from "@/components/sections/Benefits";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="bg-background pt-32 pb-16 min-h-screen">
      {/* Editorial Header */}
      <Container className="relative z-10 mb-16 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-1.5 text-xs font-semibold text-primary mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>ENTERPRISE GRADE MODULES</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-[42px] md:text-[56px] font-bold text-text tracking-tight leading-[1.1]"
        >
          Everything you need to run a <span className="text-primary italic font-medium">modern school</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
        >
          From classroom management to finance control, explore the core workspaces crafted to unify administration, educators, parents, and students.
        </motion.p>
      </Container>

      {/* Main Features Bento Grid */}
      <div className="border-t border-border/40 bg-surface/30">
        <Features />
      </div>

      {/* Personas Portals Showcase */}
      <div className="border-t border-border/40 py-8 bg-surface-muted/30">
        <DashboardShowcase />
      </div>

      {/* Benefits Breakdown */}
      <div className="border-t border-border/40">
        <Benefits />
      </div>
    </div>
  );
}
