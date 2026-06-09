"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Users,
  BarChart3,
  CreditCard,
  GraduationCap,
  TrendingUp,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SandBackground } from "@/components/shared/SandBackground";

// Custom high-contrast vector educator avatars to avoid external link broken images
function EducatorAvatar1() {
  return (
    <svg viewBox="0 0 36 36" className="h-9 w-9 rounded-full border-2 border-background dark:border-[#18181b] bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 relative z-30 cursor-pointer">
      <defs>
        <linearGradient id="avatarGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="18" fill="url(#avatarGrad1)" />
      <circle cx="18" cy="15" r="7" fill="#fed7aa" />
      <path d="M12 15 C12 7, 24 7, 24 15 C24 10, 12 10, 12 15 Z" fill="#334155" />
      <path d="M8 32 C8 26, 28 26, 28 32 Z" fill="#1e293b" />
      <path d="M14 26 L18 29 L22 26 Z" fill="#fed7aa" />
      <path d="M15 27.5 L18 31 L21 27.5 Z" fill="#ffffff" />
    </svg>
  );
}

function EducatorAvatar2() {
  return (
    <svg viewBox="0 0 36 36" className="h-9 w-9 rounded-full border-2 border-background dark:border-[#18181b] bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 relative z-20 cursor-pointer">
      <defs>
        <linearGradient id="avatarGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="18" fill="url(#avatarGrad2)" />
      <circle cx="18" cy="15" r="7" fill="#fcd34d" />
      <path d="M12 14 C12 8, 24 8, 24 14 Z" fill="#78350f" />
      <path d="M13 18 C13 22, 23 22, 23 18 Z" fill="#78350f" />
      <path d="M8 32 C8 26, 28 26, 28 32 Z" fill="#f8fafc" />
      <path d="M14 26 L18 29 L22 26 Z" fill="#fcd34d" />
    </svg>
  );
}

function EducatorAvatar3() {
  return (
    <svg viewBox="0 0 36 36" className="h-9 w-9 rounded-full border-2 border-background dark:border-[#18181b] bg-gradient-to-br from-pink-500 to-rose-600 shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 relative z-10 cursor-pointer">
      <defs>
        <linearGradient id="avatarGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
      <circle cx="18" cy="18" r="18" fill="url(#avatarGrad3)" />
      <circle cx="18" cy="15" r="7" fill="#ffedd5" />
      <circle cx="18" cy="6" r="3.5" fill="#1e1b4b" />
      <path d="M11 15 C11 9, 25 9, 25 15 Z" fill="#1e1b4b" />
      <path d="M8 32 C8 26, 28 26, 28 32 Z" fill="#475569" />
      <path d="M14 26 L18 29 L22 26 Z" fill="#ffedd5" />
      <circle cx="18" cy="27" r="1.5" fill="#fbbf24" />
    </svg>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for Apple-like dampening
  const springConfig = { damping: 45, stiffness: 150, mass: 0.6 };
  const xSpring = useSpring(mouseX, springConfig);
  const ySpring = useSpring(mouseY, springConfig);

  // Transform layers at different velocities
  const bgTranslateX = useTransform(xSpring, [-0.5, 0.5], [-12, 12]);
  const bgTranslateY = useTransform(ySpring, [-0.5, 0.5], [-12, 12]);

  const blockTranslateX = useTransform(xSpring, [-0.5, 0.5], [-25, 25]);
  const blockTranslateY = useTransform(ySpring, [-0.5, 0.5], [-25, 25]);

  const charTranslateX = useTransform(xSpring, [-0.5, 0.5], [-40, 40]);
  const charTranslateY = useTransform(ySpring, [-0.5, 0.5], [-40, 40]);

  const cardTranslateX = useTransform(xSpring, [-0.5, 0.5], [-60, 60]);
  const cardTranslateY = useTransform(ySpring, [-0.5, 0.5], [-60, 60]);

  // Dynamic attendance stats pulsing simulation
  const [attendanceRates, setAttendanceRates] = useState([85, 92, 88, 95, 90, 96, 94]);

  useEffect(() => {
    // Mouse movement tracker
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const nx = e.clientX / innerWidth - 0.5;
      const ny = e.clientY / innerHeight - 0.5;
      mouseX.set(nx);
      mouseY.set(ny);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic graph updater interval
    const interval = setInterval(() => {
      setAttendanceRates((prev) =>
        prev.map((rate) => {
          const delta = Math.floor(Math.random() * 7) - 3;
          return Math.max(75, Math.min(99, rate + delta));
        })
      );
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[95vh] w-full overflow-hidden pt-32 pb-20 flex items-center md:pt-40 md:pb-28"
    >
      {/* 1. Sandbox Particle Canvas */}
      <SandBackground />

      {/* Background Gradients & Glow Circles */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      
      {/* Dynamic Lights for Dark/Light Mode */}
      <div className="pointer-events-none absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-primary/10 dark:bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute bottom-1/4 -left-20 h-96 w-96 rounded-full bg-secondary/15 dark:bg-secondary/25 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary dark:border-primary/30 dark:bg-primary/10 mb-6 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen School ERP Platform</span>
              </div>

              <h1 className="text-[40px] font-extrabold leading-[1.08] tracking-tight text-text sm:text-[52px] xl:text-[68px]">
                The Operating System For <span className="bg-gradient-to-r from-primary via-emerald-500 to-secondary bg-clip-text text-transparent">Smart Schools</span>
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg text-muted font-medium">
                Streamline operations, automate financial ledger flows, track real-time attendance, and link parents, students, and administration within a gorgeous vision-driven ecosystem.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="#contact" className="water-btn bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-bold shadow-xl shadow-primary/20">
                  Get Started Free
                </Button>
                <Button variant="outline" href="#how-it-works" className="border-border hover:bg-surface-muted backdrop-blur-md px-8 py-4 text-base font-bold text-text">
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-border/60 dark:border-border/30 pt-8">
                <div className="flex -space-x-2.5 items-center">
                  <EducatorAvatar1 />
                  <EducatorAvatar2 />
                  <EducatorAvatar3 />
                  <div className="h-9 w-9 rounded-full border-2 border-background dark:border-[#18181b] bg-slate-100 dark:bg-slate-800 text-[10px] font-black text-primary dark:text-[#4F46E5] flex items-center justify-center shadow-md select-none relative z-0 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer">
                    +12K
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-text">Loved by 12,000+ Educators</p>
                  <p className="text-xs text-muted">Across 400+ institutions globally</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right 3D Visual Column */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] md:min-h-[560px]">
            
            {/* Parallax Layer 1: Background grid nodes */}
            <motion.div
              style={{ x: bgTranslateX, y: bgTranslateY }}
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
            >
              <div className="w-[85%] h-[85%] rounded-[36px] border border-dashed border-primary/10 dark:border-primary/5 flex items-center justify-center">
                <div className="w-[65%] h-[65%] rounded-full border border-dotted border-secondary/15 dark:border-secondary/5" />
              </div>
            </motion.div>

            {/* Parallax Layer 2: Isometric 3D Blocks and books stack */}
            <motion.div
              style={{ x: blockTranslateX, y: blockTranslateY, transformStyle: "preserve-3d" }}
              className="absolute z-10 w-full h-full flex items-center justify-center"
            >
              {/* Stacked books illustration */}
              <div className="absolute top-[58%] left-[12%] animate-float-medium pointer-events-none">
                <svg
                  width="180"
                  height="110"
                  viewBox="0 0 180 110"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
                >
                  {/* Book 3 (Bottom) */}
                  <path d="M10 80 L90 100 L170 80 L90 60 Z" fill="#0284c7" />
                  <path d="M10 80 L90 100 L90 108 L10 88 Z" fill="#0369a1" />
                  <path d="M90 100 L170 80 L170 88 L90 108 Z" fill="#075985" />
                  {/* Pages bottom */}
                  <path d="M165 81 L90 99 L15 81 L90 63 Z" fill="#f8fafc" />

                  {/* Book 2 (Middle) */}
                  <path d="M20 55 L95 72 L160 55 L85 38 Z" fill="#10b981" />
                  <path d="M20 55 L95 72 L95 79 L20 62 Z" fill="#059669" />
                  <path d="M95 72 L160 55 L160 62 L95 79 Z" fill="#047857" />
                  {/* Pages middle */}
                  <path d="M155 56 L85 71 L25 56 L85 41 Z" fill="#f8fafc" />

                  {/* Book 1 (Top) */}
                  <path d="M30 30 L100 45 L150 30 L80 15 Z" fill="#a855f7" />
                  <path d="M30 30 L100 45 L100 51 L30 36 Z" fill="#892cdc" />
                  <path d="M100 45 L150 30 L150 36 L100 51 Z" fill="#701a75" />
                  {/* Pages top */}
                  <path d="M145 31 L80 44 L35 31 L80 18 Z" fill="#f1f5f9" />
                </svg>
              </div>

              {/* 3D Isometric glassmorphic block (Student sitting base) */}
              <div className="absolute top-[28%] right-[18%] animate-float-slow pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
                <div className="relative w-40 h-40">
                  {/* Top isometric face */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary/40 dark:to-secondary/40 border border-white/20 backdrop-blur-md"
                    style={{
                      transform: "rotateX(60deg) rotateZ(-45deg) translateZ(35px)",
                      borderRadius: "16px",
                      boxShadow: "0 10px 30px rgba(16, 185, 129, 0.1)",
                    }}
                  />
                  {/* Left isometric face */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 dark:from-primary/30 dark:to-primary/50 border-l border-t border-white/10"
                    style={{
                      transform: "rotateY(45deg) rotateX(30deg) translateZ(-30px) translateY(42px) translateX(-42px)",
                      height: "70px",
                      borderRadius: "0 0 16px 16px",
                    }}
                  />
                  {/* Right isometric face */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/40 dark:from-secondary/30 dark:to-secondary/50 border-r border-t border-white/10"
                    style={{
                      transform: "rotateY(-45deg) rotateX(30deg) translateZ(30px) translateY(42px) translateX(-42px)",
                      height: "70px",
                      borderRadius: "0 0 16px 16px",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Parallax Layer 3: Character Vectors (Students Sitting & Laying) */}
            <motion.div
              style={{ x: charTranslateX, y: charTranslateY }}
              className="absolute z-20 w-full h-full flex items-center justify-center pointer-events-none"
            >
              {/* Character 1: Laying on Stacked Books */}
              <div className="absolute top-[40%] left-[8%] animate-rock flex flex-col items-center">
                <svg
                  width="130"
                  height="90"
                  viewBox="0 0 130 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                >
                  {/* Head */}
                  <circle cx="102" cy="22" r="11" fill="#fed7aa" />
                  <path d="M98 11 C102 7, 108 8, 110 13 C111 16, 107 19, 107 19 Z" fill="#475569" /> {/* Hair */}
                  
                  {/* Body/Shirt */}
                  <path d="M50 55 L90 40 C95 38, 102 44, 98 50 L70 68 Z" fill="#0ea5e9" />
                  
                  {/* Jeans/Legs */}
                  <path d="M22 68 L50 55 L70 68 L42 82 C35 85, 25 80, 22 68 Z" fill="#1e40af" />
                  
                  {/* Shoes */}
                  <ellipse cx="20" cy="68" rx="5" ry="3" fill="#ffffff" />
                  
                  {/* Arms reading tablet */}
                  <path d="M82 45 L92 56 L88 60 L78 48 Z" fill="#fed7aa" />
                  <path d="M90 42 L100 52 L95 56 L85 45 Z" fill="#fed7aa" />
                  
                  {/* Tablet/Book */}
                  <path d="M88 56 L102 50 L98 62 L84 66 Z" fill="#18181b" stroke="#ffffff" strokeWidth="1.5" />
                  <rect x="89" y="55" width="8" height="6" fill="#06b6d4" opacity="0.6" transform="rotate(-15 89 55)" />
                </svg>
              </div>

              {/* Character 2: Sitting on Learning Block */}
              <div className="absolute top-[18%] right-[16%] animate-breathe flex flex-col items-center">
                <svg
                  width="110"
                  height="120"
                  viewBox="0 0 110 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                >
                  {/* Head */}
                  <circle cx="55" cy="24" r="12" fill="#ffedd5" />
                  {/* Hair */}
                  <path d="M43 24 C43 14, 67 14, 67 24 C67 16, 45 16, 43 24 Z" fill="#78350f" />
                  <path d="M43 24 C45 20, 52 18, 55 21 C58 18, 65 20, 67 24 Z" fill="#78350f" />
                  
                  {/* Sweater (Emerald green) */}
                  <path d="M32 60 L55 42 L78 60 L68 85 L42 85 Z" fill="#10b981" />
                  <path d="M32 60 L20 75 L28 80 L38 65 Z" fill="#10b981" /> {/* Left arm */}
                  <path d="M78 60 L90 75 L82 80 L72 65 Z" fill="#10b981" /> {/* Right arm */}
                  
                  {/* Hands holding coffee / notebook */}
                  <circle cx="28" cy="80" r="4" fill="#ffedd5" />
                  <circle cx="82" cy="80" r="4" fill="#ffedd5" />

                  {/* Laptop on lap */}
                  <path d="M38 88 L72 88 L80 96 L30 96 Z" fill="#e2e8f0" />
                  <path d="M38 88 L72 88 L72 74 L38 74 Z" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
                  {/* Glow screen */}
                  <rect x="42" y="77" width="24" height="9" fill="#38bdf8" opacity="0.4" />

                  {/* Legs hanging */}
                  <path d="M42 85 L44 110 L38 112 L36 85 Z" fill="#4f46e5" />
                  <path d="M68 85 L66 110 L72 112 L74 85 Z" fill="#4f46e5" />
                  
                  {/* Feet */}
                  <path d="M38 112 Q34 114 36 117 L44 115 Z" fill="#1e293b" />
                  <path d="M72 112 Q76 114 74 117 L66 115 Z" fill="#1e293b" />
                </svg>
              </div>
            </motion.div>

            {/* Parallax Layer 4: Dashboard elements, cards, metrics */}
            <motion.div
              style={{ x: cardTranslateX, y: cardTranslateY }}
              className="absolute z-30 w-full h-full pointer-events-auto"
            >
              {/* Widget 1: Attendance Pulsing Graph */}
              <div
                className="absolute top-[8%] left-[2%] w-56 rounded-2xl border border-border bg-surface/80 p-4 shadow-xl backdrop-blur-xl animate-float-slow select-none transition-transform duration-300 hover:scale-[1.05]"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <BarChart3 className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-text">Attendance</span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Live
                  </span>
                </div>
                <div className="text-lg font-extrabold text-text">94.8% <span className="text-xs font-semibold text-muted">avg</span></div>
                
                {/* Dynamic graph bars */}
                <div className="mt-3 flex h-14 items-end gap-1.5">
                  {attendanceRates.map((h, i) => (
                    <motion.div
                      key={i}
                      layout
                      initial={{ height: "40%" }}
                      animate={{ height: `${h}%` }}
                      transition={{ type: "spring", stiffness: 80, damping: 12 }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/40 to-primary"
                    />
                  ))}
                </div>
              </div>

              {/* Widget 2: Student Enrollment Count */}
              <div
                className="absolute bottom-[6%] right-[2%] w-48 rounded-2xl border border-border bg-surface/80 p-4 shadow-xl backdrop-blur-xl animate-float-medium select-none transition-transform duration-300 hover:scale-[1.05]"
                style={{ animationDelay: "2.5s" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-muted">Enrollments</span>
                </div>
                <div className="text-2xl font-black text-text">3,124</div>
                <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-indigo-500">
                  <TrendingUp className="h-3 w-3" />
                  <span>+18.4% this term</span>
                </div>
              </div>

              {/* Widget 3: Fee Ledger Status */}
              <div
                className="absolute top-[48%] -right-[8%] w-52 rounded-2xl border border-border bg-surface/80 p-4 shadow-xl backdrop-blur-xl animate-float-slow select-none transition-transform duration-300 hover:scale-[1.05]"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                    <CreditCard className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold text-muted">Fee Collection</span>
                </div>
                <div className="text-xl font-extrabold text-text">$98.2K <span className="text-xs font-medium text-emerald-500">Paid</span></div>
                
                {/* Horizontal progress bar */}
                <div className="mt-2.5 h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "84%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                  />
                </div>
                <div className="mt-1 flex justify-between text-[9px] font-bold text-muted">
                  <span>Goal: $110K</span>
                  <span>84% reached</span>
                </div>
              </div>

              {/* Floating micro indicators */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-[42%] left-[4%] flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 shadow-md text-[10px] font-bold text-text cursor-pointer hover:border-primary/50"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Parent Portal Active</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[44%] right-[22%] flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 shadow-md text-[10px] font-bold text-text cursor-pointer hover:border-secondary/50"
              >
                <BookOpen className="h-3.5 w-3.5 text-secondary" />
                <span>42 E-Classes Added</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
