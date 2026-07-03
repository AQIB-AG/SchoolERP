"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Container } from "@/components/ui/Container";
import { DashboardMockup } from "./DashboardMockup";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const BACKGROUND_IMAGES = [
  "/hero_bg_1.jpg",
  "/hero_bg_2.jpg",
  "/hero_bg_3.jpg",
  "/hero_bg_4.jpg"
];

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // Continuous background image crossfading (visible 6 seconds)
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setHasHydrated(true);
    // Detect mobile viewport for reduced motion distance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 bg-[#F8FAFA] dark:bg-[#0E1516] overflow-hidden">
      
      {/* Premium Animated Background Layer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      >
        {BACKGROUND_IMAGES.map((src, index) => {
          const runHeavyAnimation = hasHydrated && !isMobile;
          return (
            <motion.div
              key={src}
              className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]"
              initial={{ opacity: 0 }}
              animate={index === currentBgIndex ? { 
                opacity: 1,
                scale: runHeavyAnimation ? 1.04 : 1.0,
                x: runHeavyAnimation ? ["0%", "0.6%", "-0.6%", "0%"] : "0%",
                y: runHeavyAnimation ? ["0%", "-0.6%", "0.6%", "0%"] : "0%"
              } : { 
                opacity: 0,
                scale: 1.0,
                x: "0%",
                y: "0%"
              }}
              transition={runHeavyAnimation ? { 
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 6.5, ease: "easeOut" },
                x: { duration: 25, ease: "easeInOut", repeat: Infinity },
                y: { duration: 25, ease: "easeInOut", repeat: Infinity }
              } : {
                opacity: { duration: 1.5, ease: "easeInOut" }
              }}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(2.5px)"
              }}
            />
          );
        })}
        
        {/* Soft readability overlay: Very light 12% white overlay in light mode, slight dark overlay in dark mode */}
        <div className="absolute inset-0 bg-white/12 dark:bg-[#0E1516]/30 transition-colors duration-500" />

        {/* Original Soft Glow Accents Layered Over Background */}
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      </motion.div>

      {/* Seamless Left-side reading gradient overlay: 88% left -> 60% center -> transparent right */}
      <div className="absolute inset-y-0 left-0 w-[55%] lg:w-[48%] bg-gradient-to-r from-white/88 via-white/60 to-transparent dark:from-[#0E1516]/90 dark:via-[#0E1516]/60 dark:to-transparent pointer-events-none z-10" />

      <Container className="relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, x: !hasHydrated ? -50 : (isMobile ? -20 : -50) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              className="inline-flex self-start items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4.5 py-1.5 text-[9px] font-black tracking-widest text-teal-900 dark:text-primary mb-6 uppercase shadow-xs"
            >
              <Sparkles className="h-3 w-3" />
              <span>SchoolManager ERP</span>
            </motion.div>

            {/* Large Bold Heading */}
            <motion.h1
              initial={{ opacity: 0, x: !hasHydrated ? -80 : (isMobile ? -30 : -80), scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: LUXURY_EASE }}
              className="font-serif text-[42px] sm:text-[52px] md:text-[62px] font-extrabold leading-[1.05] tracking-tight text-[#0F172A] dark:text-[#F8FAFA]"
            >
              School Operations <br />
              <span className="text-primary font-extrabold">Made Simple.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, x: !hasHydrated ? -50 : (isMobile ? -20 : -50) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: LUXURY_EASE }}
              className="mt-6 text-sm md:text-base text-[#334155] dark:text-slate-200 leading-relaxed font-medium"
            >
              A premium school management SaaS platform built to unify pupil directories, coordinate classroom schedules, automate tuition fee ledgers, and align parent-school communications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: !hasHydrated ? 25 : (isMobile ? 15 : 25) }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <Link
                href="/start-free-trial"
                className="text-xs font-bold bg-primary hover:bg-primary-hover text-background px-6.5 py-3 rounded-full transition-all shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
              >
                Start Free Trial
              </Link>
              <Link
                href="/book-demo"
                className="text-xs font-bold border-2 border-[#000000] text-text hover:bg-white/60 px-6.5 py-3 rounded-full transition-all flex items-center gap-1.5 bg-white/40 dark:bg-[#151F21]/40 shadow-[0_10px_25px_rgba(0,0,0,0.12)]"
              >
                Book Demo <ArrowRight className="h-4 w-4 text-muted" />
              </Link>
            </motion.div>
            
          </div>

          {/* Right Column: Dashboard Preview mockup */}
          <motion.div
            initial={{ opacity: 0, x: !hasHydrated ? 120 : (isMobile ? 30 : 120), scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: LUXURY_EASE }}
            className="lg:col-span-7 flex justify-center items-center"
          >
            <DashboardMockup />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}



