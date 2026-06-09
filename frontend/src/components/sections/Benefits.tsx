"use client";

import { motion } from "framer-motion";
import { BENEFITS } from "@/data/benefits";
import { Container } from "@/components/ui/Container";
import {
  Clock,
  FileText,
  MessageCircle,
  PieChart,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  UserCheck
} from "lucide-react";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Benefits() {
  // Renders a high-fidelity visual corresponding to each benefit
  const renderIllustration = (index: number) => {
    switch (index) {
      case 0: // Save Administrative Time
        return (
          <div className="relative w-full h-72 flex items-center justify-center bg-surface-muted/30 rounded-[32px] border border-border/40 overflow-hidden">
            {/* Concentric rotating lines */}
            <div className="absolute w-52 h-52 rounded-full border border-dashed border-primary/20 animate-spin" style={{ animationDuration: "35s" }} />
            <div className="absolute w-36 h-36 rounded-full border border-primary/10 animate-spin" style={{ animationDuration: "20s" }} />
            
            {/* Elegant glass clock */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [0, 0.5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative z-10 w-28 h-28 rounded-full bg-surface/80 border border-border/80 shadow-lg flex items-center justify-center"
            >
              <Clock className="h-10 w-10 text-primary" />
              {/* Hands */}
              <div className="absolute top-[18%] left-[49%] w-1 h-10 bg-primary/60 rounded-full origin-bottom rotate-45 animate-spin" style={{ animationDuration: "12s" }} />
              <div className="absolute top-[28%] left-[49%] w-1 h-8 bg-secondary/40 rounded-full origin-bottom rotate-180 animate-spin" style={{ animationDuration: "90s" }} />
            </motion.div>

            {/* Simulated scheduling cards */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: LUXURY_EASE }}
              className="absolute top-[15%] right-[8%] bg-surface border border-border/60 rounded-xl px-3 py-2 text-[10px] font-bold text-text shadow-sm flex items-center gap-1.5"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              <span>Invoices Disbursed</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: LUXURY_EASE }}
              className="absolute bottom-[15%] left-[8%] bg-surface border border-border/60 rounded-xl px-3 py-2 text-[10px] font-bold text-text shadow-sm flex items-center gap-1.5"
            >
              <Calendar className="h-3.5 w-3.5 text-secondary" />
              <span>Schedules Generated</span>
            </motion.div>
          </div>
        );
      case 1: // Reduce Paperwork
        return (
          <div className="relative w-full h-72 flex items-center justify-center bg-surface-muted/30 rounded-[32px] border border-border/40 overflow-hidden">
            {/* Database storage vault mockup */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="relative z-10 w-40 h-44 bg-surface border border-border/70 rounded-2xl shadow-lg p-4 flex flex-col justify-between"
            >
              <div className="flex gap-1.5 border-b border-border/30 pb-2">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>
              <div className="flex flex-col gap-2.5 my-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-2 w-full rounded bg-border/40 overflow-hidden relative">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Infinity, duration: 3.5, delay: i * 0.4 }}
                      className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    />
                  </div>
                ))}
              </div>
              <div className="h-7 w-full rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[9px] font-extrabold text-primary gap-1">
                <ShieldCheck className="h-3 w-3" />
                <span>SECURE ARCHIVE</span>
              </div>
            </motion.div>

            {/* Flying sheet documents digitized */}
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [20, -100],
                  x: [i === 1 ? -45 : 45, 0],
                  opacity: [0, 1, 0],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  delay: i * 2,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[10%] flex h-11 w-8 items-center justify-center rounded bg-surface shadow border border-border/60"
              >
                <FileText className="h-4.5 w-4.5 text-secondary" />
              </motion.div>
            ))}
          </div>
        );
      case 2: // Improve Parent Engagement
        return (
          <div className="relative w-full h-72 flex items-center justify-center bg-surface-muted/30 rounded-[32px] border border-border/40 overflow-hidden">
            {/* Main Chat card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut" }}
              className="relative z-10 w-56 rounded-2xl bg-surface border border-border/80 shadow-lg p-3 flex flex-col gap-3.5"
            >
              <div className="flex items-center gap-2 pb-2 border-b border-border/30">
                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-white text-[9px] font-bold">
                  P
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text">Parent Portal</span>
                  <span className="text-[8px] text-muted">Online</span>
                </div>
              </div>
              <div className="rounded-xl bg-surface-muted/60 p-2.5 text-[9px] text-text font-medium leading-tight max-w-[85%] self-start">
                Is classes starting late tomorrow?
              </div>
              <div className="rounded-xl bg-primary text-white p-2.5 text-[9px] font-bold leading-tight max-w-[85%] self-end">
                Nope! Standard schedule. 📚
              </div>
            </motion.div>

            {/* Chat Icon bubbles floating */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[12%] left-[10%] bg-primary rounded-full p-2 text-white shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[15%] right-[10%] bg-secondary rounded-full p-2 text-white shadow-md"
            >
              <UserCheck className="h-4 w-4" />
            </motion.div>
          </div>
        );
      case 3: // Real-Time Reporting
        return (
          <div className="relative w-full h-72 flex items-center justify-center bg-surface-muted/30 rounded-[32px] border border-border/40 overflow-hidden">
            {/* Visual Analytics report chart */}
            <motion.div
              animate={{ y: [-4, 4, -4], rotateY: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
              className="relative z-10 w-48 rounded-2xl bg-surface border border-border/70 shadow-lg p-4 flex flex-col items-center"
              style={{ perspective: 1000 }}
            >
              <PieChart className="h-12 w-12 text-secondary animate-pulse" />
              <div className="mt-4 text-[11px] font-bold text-text">Keep Institutional KPI</div>
              <div className="mt-1 flex items-center gap-1 text-[9px] font-bold text-primary">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>99.2% Accuracy Rate</span>
              </div>
            </motion.div>
            
            {/* Small hovering bar indicators */}
            <div className="absolute bottom-[12%] right-[12%] w-24 h-16 bg-surface border border-border/60 rounded-xl p-3 flex items-end gap-1.5 shadow-sm">
              <div className="w-4 h-[35%] bg-primary/40 rounded-t-sm" />
              <div className="w-4 h-[65%] bg-primary/70 rounded-t-sm" />
              <div className="w-4 h-[90%] bg-secondary rounded-t-sm" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="benefits" className="py-24 md:py-32 bg-surface-muted/10 relative overflow-hidden">
      <Container>
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
            BENEFITS & OUTCOMES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            Why Schools Excel With Us
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted leading-relaxed font-medium">
            Discover how shifting to a dedicated operating platform impacts daily work and student enrollment outcomes.
          </p>
        </div>

        {/* Alternating Split Layout List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {BENEFITS.map((benefit, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={benefit.title}
                className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20"
              >
                {/* Visual side */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, ease: LUXURY_EASE }}
                  className={`lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}
                >
                  {renderIllustration(index)}
                </motion.div>

                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.1 }}
                  className={`lg:col-span-7 flex flex-col gap-4 ${isEven ? "" : "lg:order-1"}`}
                >
                  {/* Badge & Stat */}
                  <div className="flex items-center gap-3">
                    <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-bold text-primary">
                      {benefit.stat}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted">
                      {benefit.statLabel}
                    </span>
                  </div>

                  {/* Title in editorial serif */}
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-text">
                    {benefit.title}
                  </h3>
                  
                  {/* Paragraph with breathing space */}
                  <p className="text-sm md:text-base text-muted leading-relaxed font-medium max-w-xl">
                    {benefit.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
