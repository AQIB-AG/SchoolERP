"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "@/data/benefits";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import {
  Clock,
  FileText,
  MessageCircle,
  PieChart,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export function Benefits() {
  // Renders a custom 3D-styled graphic corresponding to each benefit
  const renderIllustration = (index: number) => {
    switch (index) {
      case 0: // Save Administrative Time (15h Saved)
        return (
          <div className="relative w-full h-60 flex items-center justify-center overflow-hidden">
            {/* Concentric rings */}
            <div className="absolute w-44 h-44 rounded-full border border-dashed border-primary/20 dark:border-primary/10 animate-spin" style={{ animationDuration: "25s" }} />
            <div className="absolute w-32 h-32 rounded-full border border-primary/10 dark:border-primary/5 animate-spin" style={{ animationDuration: "15s" }} />
            
            {/* 3D Glass Clock representation */}
            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center"
            >
              <Clock className="h-12 w-12 text-primary animate-pulse" />
              {/* Hands */}
              <div className="absolute top-[15%] left-[49%] w-1.5 h-12 bg-white/60 rounded-full origin-bottom rotate-45 animate-spin" style={{ animationDuration: "8s" }} />
              <div className="absolute top-[25%] left-[49%] w-1.5 h-10 bg-white/40 rounded-full origin-bottom rotate-180 animate-spin" style={{ animationDuration: "60s" }} />
            </motion.div>

            {/* Orbiting metrics tags */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute top-[12%] right-[15%] glass rounded-xl px-3 py-1 text-xs font-bold text-text border border-border shadow-md"
            >
              Auto-Pilot
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-[10%] left-[15%] glass rounded-xl px-3 py-1 text-xs font-bold text-text border border-border shadow-md"
            >
              Task Scheduler
            </motion.div>
          </div>
        );
      case 1: // Reduce Paperwork (60% Less Paper)
        return (
          <div className="relative w-full h-60 flex items-center justify-center overflow-hidden">
            {/* Floating digital cabinet / database */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative z-10 w-36 h-40 bg-gradient-to-br from-indigo-500/20 to-primary/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-4 flex flex-col justify-between"
            >
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="flex flex-col gap-2.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-2.5 w-full rounded bg-slate-300/50 dark:bg-slate-700/50 overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
                      className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    />
                  </div>
                ))}
              </div>
              <div className="h-6 w-full rounded bg-primary/20 flex items-center justify-center text-[10px] font-black text-primary">
                SECURE CLOUD
              </div>
            </motion.div>

            {/* Flying sheet documents into cloud */}
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [20, -100],
                  x: [i === 1 ? -40 : 40, 0],
                  opacity: [0, 1, 0],
                  scale: [0.6, 1, 0.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  delay: i * 2,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[10%] flex h-12 w-9 items-center justify-center rounded bg-white dark:bg-slate-800 shadow-md border border-border"
              >
                <FileText className="h-5 w-5 text-indigo-400" />
              </motion.div>
            ))}
          </div>
        );
      case 2: // Improve Engagement (3x More Engagement)
        return (
          <div className="relative w-full h-60 flex items-center justify-center overflow-hidden">
            {/* Central hub nodes */}
            <div className="absolute w-48 h-24 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl" />
            
            {/* Main Chat card */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-48 rounded-2xl bg-surface/90 border border-border/80 shadow-2xl p-3 flex flex-col gap-2 dark:bg-slate-900/90"
            >
              <div className="flex items-center gap-2 pb-1.5 border-b border-border/40">
                <div className="h-5 w-5 rounded-full bg-secondary flex items-center justify-center text-white text-[9px] font-black">
                  P
                </div>
                <span className="text-[10px] font-bold text-text">Parent Portal</span>
              </div>
              <div className="rounded-lg bg-surface-muted p-2 text-[10px] text-muted font-medium">
                🎒 Did Liam finish his homework today?
              </div>
              <div className="rounded-lg bg-primary/10 p-2 text-[10px] text-primary font-bold self-end">
                Yes! Excelled in math. 🌟
              </div>
            </motion.div>

            {/* Floating speech bubble decals */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[10%] left-[10%] bg-emerald-500 rounded-full p-2.5 shadow-lg text-white"
            >
              <MessageCircle className="h-5 w-5" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[15%] right-[10%] bg-sky-500 rounded-full p-2.5 shadow-lg text-white"
            >
              <TrendingUp className="h-5 w-5" />
            </motion.div>
          </div>
        );
      case 3: // Real-Time Reporting (24/7 Analytics)
        return (
          <div className="relative w-full h-60 flex items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute w-40 h-40 rounded-full bg-secondary/5 blur-xl" />
            
            {/* Floating Pie Chart Card */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotateY: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="relative z-10 w-44 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-surface dark:to-slate-900 border border-white/10 shadow-2xl p-4 flex flex-col items-center"
              style={{ perspective: 1000 }}
            >
              <PieChart className="h-14 w-14 text-secondary animate-spin" style={{ animationDuration: "40s" }} />
              <div className="mt-3 text-xs font-extrabold text-white">Institutional KPI</div>
              <div className="mt-1 flex items-center gap-1.5 text-[9px] font-bold text-emerald-400">
                <ArrowRight className="h-3 w-3 rotate-45" />
                <span>99.2% Accuracy</span>
              </div>
            </motion.div>
            
            {/* Small hovering bar indicators */}
            <div className="absolute bottom-[10%] right-[15%] w-20 h-16 glass rounded-xl p-2 flex items-end gap-1 border border-border">
              <div className="w-4 h-[40%] bg-primary rounded-t-sm" />
              <div className="w-4 h-[75%] bg-primary rounded-t-sm" />
              <div className="w-4 h-[95%] bg-secondary rounded-t-sm" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="benefits" className="section-padding bg-background relative overflow-hidden">
      <Container>
        <SectionHeading title="Why Schools Love SchoolManager" />

        <div className="flex flex-col gap-12 mt-16">
          {BENEFITS.map((benefit, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16`}
              >
                {/* Illustration block (Grid col 5) */}
                <div
                  className={`lg:col-span-5 relative overflow-hidden rounded-[32px] border border-border/80 bg-surface-muted/50 dark:bg-surface/30 backdrop-blur-md p-6 ${
                    isEven ? "" : "lg:order-2"
                  }`}
                >
                  {renderIllustration(index)}
                </div>

                {/* Content Block (Grid col 7) */}
                <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-1"}`}>
                  <TiltCard
                    glowColor={
                      isEven ? "rgba(16, 185, 129, 0.12)" : "rgba(14, 165, 233, 0.12)"
                    }
                    className="flex flex-col gap-4 border border-border/70 bg-surface/50 dark:bg-surface/30 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="inline-flex rounded-xl bg-primary/10 px-3 py-1 text-sm font-extrabold text-primary dark:bg-primary/20">
                        {benefit.stat}
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted">
                        {benefit.statLabel}
                      </p>
                    </div>

                    <h3 className="text-2xl font-black text-text mt-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted leading-relaxed font-medium">
                      {benefit.description}
                    </p>
                  </TiltCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
