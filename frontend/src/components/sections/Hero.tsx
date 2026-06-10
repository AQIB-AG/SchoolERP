"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax scroll mapping for background slideshow
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

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
    <section ref={sectionRef} className="relative min-h-[90vh] w-full overflow-hidden pt-36 pb-24 flex items-center md:pt-44 md:pb-32">
      {/* Background Image Slideshow with crossfading and soft zoom & parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImgIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: LUXURY_EASE }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${BACKGROUND_IMAGES[currentImgIndex]})`,
              y: bgY
            }}
          />
        </AnimatePresence>
        {/* Soft blur overlay & premium gradients to maintain high readability */}
        <div className="absolute inset-0 backdrop-blur-[0.5px] bg-gradient-to-b from-background/10 via-background/25 to-background dark:from-background/20 dark:via-background/35 dark:to-background" />
      </div>

      {/* Interactive Sandbox Particle Canvas */}
      <SandBackground />

      {/* Decorative Warm Gradients */}
      <div className="pointer-events-none absolute top-1/4 -right-20 h-[500px] w-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-secondary/5 dark:bg-secondary/10 blur-[140px]" />

      <Container className="relative z-10 w-full">
        {/* Editorial glass container to ensure high text contrast and readability against high-opacity background */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto bg-surface/75 dark:bg-[#1E2824]/85 backdrop-blur-md border border-border/40 dark:border-white/10 p-8 md:p-12 rounded-[36px] shadow-2xl">
          
          {/* Centered Text Column: Staggered entrance animations */}
          <div className="flex flex-col items-center justify-center text-center w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center w-full"
            >
              {/* Premium Badge */}
              <motion.div 
                variants={childVariants}
                className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4.5 py-1.5 text-xs font-semibold text-secondary mb-6 backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="tracking-wide">PREMIUM SCHOOL SAAS OPERATING SYSTEM</span>
              </motion.div>

              {/* Serif Headline (Animate presence rotating copy) */}
              <div className="min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex items-center justify-center overflow-hidden w-full max-w-3xl">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.7, ease: LUXURY_EASE }}
                    className="font-serif text-[38px] font-bold leading-[1.1] tracking-tight text-text sm:text-[50px] xl:text-[58px] text-center"
                  >
                    {HEADLINES[headlineIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Large Supporting Description */}
              <motion.p 
                variants={childVariants}
                className="mt-6 text-base md:text-lg text-muted leading-relaxed font-medium text-center max-w-2xl mx-auto"
              >
                Streamline academic enrollment, automate billing ledgers, coordinate classroom attendance, and foster parent engagement in one organic digital space.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={childVariants}
                className="mt-10 flex flex-wrap gap-4 justify-center"
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
                className="mt-12 flex flex-col sm:flex-row sm:items-center justify-center gap-4 border-t border-border/50 pt-8 w-full max-w-md"
              >
                <div className="flex -space-x-3 items-center justify-center">
                  <EducatorAvatar letter="M" color="bg-primary" />
                  <EducatorAvatar letter="A" color="bg-secondary" />
                  <EducatorAvatar letter="J" color="bg-accent" />
                  <div className="h-9 w-9 rounded-full border-2 border-background dark:border-[#1E2824] bg-white text-[10px] font-bold text-[#222222] flex items-center justify-center shadow-md select-none hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    +10k
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-text">Trusted by 10,000+ Educators</p>
                  <p className="text-xs text-muted">Across 500+ premium schools in 50+ cities</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
