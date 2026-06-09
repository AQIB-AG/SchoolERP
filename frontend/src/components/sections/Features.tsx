"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/data/features";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

export function Features() {
  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      {/* Background soft glow rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading title="Everything You Need To Run Your School" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12"
        >
          {FEATURES.map((feature, idx) => {
            // Give different cards slightly custom glow tints based on colors
            const glows = [
              "rgba(16, 185, 129, 0.15)", // emerald
              "rgba(6, 182, 212, 0.15)",   // cyan
              "rgba(59, 130, 246, 0.15)",  // blue
              "rgba(168, 85, 247, 0.15)",  // purple
              "rgba(245, 158, 11, 0.15)",  // amber
              "rgba(236, 72, 153, 0.15)",  // pink
            ];
            const glowColor = glows[idx % glows.length];

            return (
              <motion.div key={feature.title} variants={itemVariants} className="h-full">
                <TiltCard
                  glowColor={glowColor}
                  className="flex h-full flex-col gap-5 border border-border/80 bg-surface/60 dark:bg-surface/30 backdrop-blur-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20 shadow-inner">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
