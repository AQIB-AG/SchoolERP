"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  BarChart3,
  CreditCard,
  GraduationCap,
  TrendingUp,
  Sparkles,
  MessageSquare,
  CalendarCheck,
  Search,
  CheckCircle,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SandBackground } from "@/components/shared/SandBackground";

function EducatorAvatar({ letter, color }: { letter: string; color: string }) {
  return (
    <div className={`h-9 w-9 rounded-full border-2 border-background dark:border-[#1E2824] ${color} text-white font-bold text-xs flex items-center justify-center shadow-md select-none hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer`}>
      {letter}
    </div>
  );
}

// Custom luxury deceleration curve for all animations
const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const BACKGROUND_IMAGES = [
  "/hero_classroom.png",
  "/hero_library.png",
  "/hero_lab.png",
  "/hero_campus.png"
];

const HEADLINES = [
  "Empowering Every Classroom.",
  "Built for Modern Schools.",
  "Smarter Administration. Better Learning.",
  "Technology That Supports Education.",
  "Every Student. Every Teacher. One Platform."
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: LUXURY_EASE },
  },
};

export function Hero() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 7500);
    
    const textInterval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 5000);

    return () => {
      clearInterval(imgInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-32 pb-20 flex items-center md:pt-40 md:pb-28">
      {/* Background Image Slideshow with crossfading and soft zoom */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImgIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.18, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: LUXURY_EASE }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGES[currentImgIndex]})` }}
          />
        </AnimatePresence>
        {/* Soft blur overlay & premium gradients */}
        <div className="absolute inset-0 backdrop-blur-[1.5px] bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Interactive Sandbox Particle Canvas */}
      <SandBackground />

      {/* Decorative Warm Gradients */}
      <div className="pointer-events-none absolute top-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-[140px]" />

      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Text Column: Staggered entrance animations */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Premium Badge */}
              <motion.div 
                variants={childVariants}
                className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4.5 py-1.5 text-xs font-semibold text-secondary mb-6 backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="tracking-wide">PREMIUM SCHOOL SAAS OPERATING SYSTEM</span>
              </motion.div>

              {/* Serif Compelling Headline (Animate presence rotating copy) */}
              <div className="min-h-[140px] sm:min-h-[180px] md:min-h-[200px] flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.7, ease: LUXURY_EASE }}
                    className="font-serif text-[38px] font-bold leading-[1.08] tracking-tight text-text sm:text-[50px] xl:text-[58px]"
                  >
                    {HEADLINES[headlineIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Large Supporting Description */}
              <motion.p 
                variants={childVariants}
                className="mt-6 text-base md:text-lg text-muted leading-relaxed font-medium"
              >
                Streamline academic enrollment, automate billing ledgers, coordinate classroom attendance, and foster parent engagement in one organic digital space.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={childVariants}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button href="/start-free-trial" className="bg-primary text-white hover:bg-primary-hover px-8 py-4 text-base font-bold shadow-xl shadow-primary/15 transition-all">
                  Start Free Trial
                </Button>
                <Button variant="ghost" href="/book-demo" className="border border-border/80 text-text hover:bg-surface-muted backdrop-blur-md px-8 py-4 text-base font-bold transition-all flex items-center gap-2">
                  Book Demo <ArrowUpRight className="h-4 w-4 text-muted" />
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                variants={childVariants}
                className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-border/50 pt-8"
              >
                <div className="flex -space-x-3 items-center">
                  <EducatorAvatar letter="M" color="bg-primary" />
                  <EducatorAvatar letter="A" color="bg-secondary" />
                  <EducatorAvatar letter="J" color="bg-accent" />
                  <div className="h-9 w-9 rounded-full border-2 border-background dark:border-[#1E2824] bg-white text-[10px] font-bold text-text flex items-center justify-center shadow-md select-none hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    +10k
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-text">Trusted by 10,000+ Educators</p>
                  <p className="text-xs text-muted">Across 500+ premium schools in 50+ cities</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Layered, Floating Dashboard Mockups (No AI SVGs) */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[520px] lg:min-h-[600px] select-none">
            
            {/* Background Abstract Grid Shape */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-60 dark:opacity-30">
              <div className="w-[90%] h-[90%] rounded-[48px] border border-dashed border-primary/20 flex items-center justify-center">
                <div className="w-[70%] h-[70%] rounded-full border border-dotted border-secondary/20" />
              </div>
            </div>

            {/* Dashboard Backdrop frame (Base container) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.2 }}
              className="w-full max-w-[620px] aspect-[16/11] bg-surface/90 border border-border/70 rounded-[28px] shadow-2xl p-5 flex flex-col gap-4 backdrop-blur-xl dark:bg-[#1E2824]/80 dark:border-white/5 relative"
            >
              {/* Internal Mockup Header */}
              <div className="flex items-center justify-between pb-3 border-b border-border/40">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <span className="text-xs font-bold text-text ml-2 font-serif">SchoolManager Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6.5 w-28 rounded-lg bg-background border border-border/40 flex items-center px-2 gap-1 text-[10px] text-muted">
                    <Search className="h-3 w-3" />
                    <span>Search students...</span>
                  </div>
                  <div className="h-6 w-6 rounded-full bg-background border border-border/40 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  </div>
                </div>
              </div>

              {/* Main Area: Simple Layout */}
              <div className="flex-1 grid grid-cols-3 gap-3">
                <div className="col-span-1 border-r border-border/40 pr-2 flex flex-col gap-2">
                  <div className="h-4 w-12 bg-primary/10 rounded-full" />
                  <div className="flex flex-col gap-1.5 mt-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`h-7 rounded-lg flex items-center px-2 gap-2 text-[10px] font-bold ${i === 1 ? "bg-primary text-white" : "text-muted"}`}>
                        <div className={`h-2.5 w-2.5 rounded-sm ${i === 1 ? "bg-white" : "bg-muted/30"}`} />
                        <div className={`h-2 rounded ${i === 1 ? "bg-white/40 w-12" : "bg-muted/20 w-16"}`} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-background border border-border/40 rounded-xl p-3 flex flex-col justify-between">
                      <div className="h-2 w-16 bg-muted/20 rounded" />
                      <div className="h-4 w-8 bg-text rounded" />
                    </div>
                    <div className="h-20 bg-background border border-border/40 rounded-xl p-3 flex flex-col justify-between">
                      <div className="h-2 w-12 bg-muted/20 rounded" />
                      <div className="h-4 w-12 bg-primary rounded" />
                    </div>
                  </div>
                  <div className="flex-1 bg-background border border-border/40 rounded-xl p-3 flex flex-col gap-2">
                    <div className="h-2 w-20 bg-muted/20 rounded" />
                    <div className="flex-1 flex flex-col gap-2 justify-center">
                      <div className="h-2 w-full bg-muted/10 rounded" />
                      <div className="h-2 w-5/6 bg-muted/10 rounded" />
                      <div className="h-2 w-4/6 bg-muted/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 1: Student Management */}
            <motion.div
              style={{ zIndex: 12 }}
              whileHover={{ y: -12, scale: 1.02, rotate: -0.5, transition: { duration: 0.4, ease: LUXURY_EASE } }}
              initial={{ opacity: 0, x: -30, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: LUXURY_EASE }}
              className="absolute top-[12%] -left-[6%] w-60 bg-surface border border-border/80 rounded-2xl shadow-xl p-4 backdrop-blur-xl dark:bg-[#1E2824]/90 cursor-pointer"
            >
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-full flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-text">Student Records</span>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-accent/15 text-secondary">Active</span>
                </div>
                <div className="flex flex-col gap-2 mt-1">
                  {[
                    { name: "Eleanor Vance", grade: "Grade 11-A", status: "Active" },
                    { name: "Lucas Sinclair", grade: "Grade 11-B", status: "Grace Period" },
                  ].map((s, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-background border border-border/30">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                          {s.name[0]}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-text">{s.name}</span>
                          <span className="text-[8px] text-muted">{s.grade}</span>
                        </div>
                      </div>
                      <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${s.status === "Active" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                        {s.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2: Attendance Tracker */}
            <motion.div
              style={{ zIndex: 14 }}
              whileHover={{ y: -10, scale: 1.02, rotate: 0.5, transition: { duration: 0.4, ease: LUXURY_EASE } }}
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: LUXURY_EASE }}
              className="absolute -top-[5%] right-[2%] w-52 bg-surface border border-border/80 rounded-2xl shadow-xl p-4 backdrop-blur-xl dark:bg-[#1E2824]/90 cursor-pointer"
            >
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.3 }}
                className="w-full flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <CalendarCheck className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-text">Attendance</span>
                  </div>
                  <span className="text-[9px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">Live</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex items-center justify-center">
                    <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-border/30" strokeWidth="3.5" />
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="3.5" strokeDasharray="100" strokeDashoffset="15" strokeLinecap="round" />
                    </svg>
                    <span className="text-[10px] font-black text-text">98.4%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-text">Present Today</span>
                    <span className="text-[8px] text-muted">24 absences reported</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 3: Fee Collection Ledger */}
            <motion.div
              style={{ zIndex: 15 }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.4, ease: LUXURY_EASE } }}
              initial={{ opacity: 0, y: 30, x: -15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: LUXURY_EASE }}
              className="absolute -bottom-[6%] left-[4%] w-56 bg-surface border border-border/80 rounded-2xl shadow-xl p-4 backdrop-blur-xl dark:bg-[#1E2824]/90 cursor-pointer"
            >
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.6 }}
                className="w-full flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-text">Collections</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-primary">$42,950</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[8px] font-bold text-muted border-b border-border/30 pb-1.5">
                    <span>BILL DESCRIPTION</span>
                    <span>STATUS</span>
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-bold text-text">
                    <span>Grade 10 Tuition</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">Paid</span>
                  </div>
                  <div className="flex justify-between items-center text-[9px] font-bold text-text">
                    <span>Sports Levy Fee</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-secondary/10 text-secondary">Pending</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 4: Parent Messages */}
            <motion.div
              style={{ zIndex: 13 }}
              whileHover={{ y: -10, scale: 1.02, rotate: 0.5, transition: { duration: 0.4, ease: LUXURY_EASE } }}
              initial={{ opacity: 0, x: 30, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: LUXURY_EASE }}
              className="absolute bottom-[10%] -right-[6%] w-60 bg-surface border border-border/80 rounded-2xl shadow-xl p-4 backdrop-blur-xl dark:bg-[#1E2824]/90 cursor-pointer"
            >
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 0.8 }}
                className="w-full flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-text">Parent-Teacher Chat</span>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                </div>
                <div className="flex flex-col gap-2 mt-1">
                  <div className="bg-background rounded-xl p-2.5 border border-border/30 self-start max-w-[85%]">
                    <p className="text-[8px] font-bold text-secondary mb-0.5">Mrs. Vance (Parent)</p>
                    <p className="text-[9px] font-medium text-text leading-tight">Did Eleanor complete her biology homework today?</p>
                  </div>
                  <div className="bg-primary text-white rounded-xl p-2.5 self-end max-w-[85%]">
                    <p className="text-[9px] font-bold leading-tight">Yes, she completed it in class and got an A! 🌟</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 5: Reports Dashboard Widget */}
            <motion.div
              style={{ zIndex: 16 }}
              whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.4, ease: LUXURY_EASE } }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: LUXURY_EASE }}
              className="absolute top-[40%] right-[32%] w-40 bg-gradient-to-br from-primary to-[#185546] border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-1 text-white cursor-pointer"
            >
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
                className="w-full flex flex-col gap-1"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-extrabold tracking-widest text-accent uppercase">SYSTEM HEALTH</span>
                  <BarChart3 className="h-3.5 w-3.5 text-accent" />
                </div>
                <span className="text-xl font-serif font-bold leading-none">99.8%</span>
                <span className="text-[8px] text-white/75 font-semibold">Average uptime metric</span>
                <div className="flex items-center gap-1 mt-2 text-[9px] text-accent font-bold">
                  <TrendingUp className="h-3 w-3" />
                  <span>+0.2% improvement</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
