"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Container } from "@/components/ui/Container";

// Decorative concentric quarter-circle arcs (Top Left)
const TopLeftArcs = () => (
  <svg 
    className="absolute -top-[120px] -left-[120px] w-[550px] h-[550px] text-primary/35 dark:text-primary/25 select-none pointer-events-none" 
    viewBox="0 0 500 500" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="0" cy="0" r="100" />
    <circle cx="0" cy="0" r="160" />
    <circle cx="0" cy="0" r="220" />
    <circle cx="0" cy="0" r="280" />
    <circle cx="0" cy="0" r="340" strokeDasharray="6 6" />
    <circle cx="0" cy="0" r="400" />
    <circle cx="0" cy="0" r="460" />
  </svg>
);

// Decorative concentric circular line artwork (Bottom Right)
const BottomRightArcs = () => (
  <svg 
    className="absolute -bottom-[160px] -right-[160px] w-[650px] h-[650px] text-secondary/40 dark:text-secondary/25 select-none pointer-events-none" 
    viewBox="0 0 600 600" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="600" cy="600" r="120" />
    <circle cx="600" cy="600" r="200" />
    <circle cx="600" cy="600" r="280" strokeDasharray="8 6" />
    <circle cx="600" cy="600" r="360" />
    <circle cx="600" cy="600" r="440" />
    <circle cx="600" cy="600" r="520" strokeDasharray="12 8" />
  </svg>
);

// Decorative mesh line beziers (Center area)
const CenterMeshLines = () => (
  <svg 
    className="absolute top-[20%] left-[15%] w-[70%] h-[60%] text-primary/30 dark:text-primary/20 select-none pointer-events-none hidden md:block" 
    viewBox="0 0 800 400" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <path d="M-100,200 C200,100 400,300 900,100" />
    <path d="M-100,240 C200,140 400,340 900,140" strokeDasharray="4 4" />
    <path d="M-100,160 C200,60 400,260 900,60" />
    <path d="M-100,280 C200,180 400,380 900,180" />
  </svg>
);

const BENEFITS = [
  {
    title: "Save Administrative Time",
    description: "Automate repetitive administrative duties like scheduling, class assignments, and admissions to free up staff time for student success.",
    image: "/save_time.jpg",
    tag: "Efficiency"
  },
  {
    title: "Reduce Paperwork",
    description: "Move all pupil directory files, student report cards, fee tracking charts, and enrollments online to eliminate physical paperwork directories.",
    image: "/reduce_paperwork.jpg",
    tag: "Digitalization"
  },
  {
    title: "Improve Parent Engagement",
    description: "Provide real-time messaging circular alerts, fee collection reminders, and grading ledger updates directly to parent and family screens.",
    image: "/parent_engagement.jpg",
    tag: "Engagement"
  },
  {
    title: "Real-Time Reporting",
    description: "Instantly compile student enrollment statistics, class average marks, payment collection metrics, and daily check-in histories.",
    image: "/real_time_reporting.jpg",
    tag: "Analytics"
  }
];

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0); // 0 = Default, 1 = Teal, 2 = Lavender, 3 = Peach, 4 = Sky Blue
  const [isMobile, setIsMobile] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const LIGHT_COLORS = [
    "#F8FAFA", // Default background
    "#B8EEE8", // Strong Teal Atmosphere (80% visibility)
    "#DCCAFD", // Strong Lavender Atmosphere (80% visibility)
    "#FFD8C0", // Strong Peach Atmosphere (80% visibility)
    "#C6E3FF", // Strong Sky Blue Atmosphere (80% visibility)
  ];

  const DARK_COLORS = [
    "#0E1516", // Default background
    "#0A302C", // Deep Teal Atmosphere (80% visibility)
    "#1B1135", // Deep Lavender Atmosphere (80% visibility)
    "#351D12", // Deep Peach Atmosphere (80% visibility)
    "#12263F", // Deep Sky Blue Atmosphere (80% visibility)
  ];

  const colors = resolvedTheme === "dark" ? DARK_COLORS : LIGHT_COLORS;
  const activeBgColor = colors[activeIndex];

  // Subtle text-shadow for absolute readability over more intense background colors
  const textShadowStyle = resolvedTheme === "dark"
    ? { textShadow: "0 1px 3px rgba(0,0,0,0.35)" }
    : { textShadow: "0 1px 2px rgba(255,255,255,0.40)" };

  return (
    <motion.section
      ref={sectionRef}
      id="benefits"
      className="relative py-24 md:py-36 overflow-hidden transition-colors duration-500 ease-out scroll-section border-y border-border/20 dark:border-white/5"
      style={{ 
        backgroundColor: activeBgColor,
        clipPath: "inset(0 0 0 0)" // Creates clipping mask boundary for fixed children
      }}
    >
      <style>{`
        @keyframes neonBorderSpinFast {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .benefit-neon-spin {
          animation: neonBorderSpinFast 1.2s linear infinite;
          will-change: transform;
        }
      `}</style>
      {/* Sentinels to trigger background color resets when scrolling outside the section bounds */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-10 pointer-events-none select-none z-0" 
        onViewportEnter={() => setActiveIndex(0)}
        viewport={{ amount: "all" }}
        aria-hidden="true"
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none select-none z-0" 
        onViewportEnter={() => setActiveIndex(0)}
        viewport={{ amount: "all" }}
        aria-hidden="true"
      />

      {/* Persistent Fixed Background Canvas Layer (inspired by Morweb) */}
      <div className="absolute lg:fixed inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
        {/* Top-Left Blurred Shape */}
        <div 
          className="absolute -top-[10%] -left-[10%] w-[50%] aspect-square rounded-full filter blur-[120px] opacity-[0.25] dark:opacity-[0.12] transition-colors duration-1000"
          style={{
            background: "radial-gradient(circle, var(--color-primary) 0%, rgba(255,255,255,0) 70%)"
          }}
        />
        {/* Center-Right Blurred Shape */}
        <div 
          className="absolute top-[30%] -right-[15%] w-[45%] aspect-square rounded-full filter blur-[140px] opacity-[0.25] dark:opacity-[0.1] transition-colors duration-1000"
          style={{
            background: "radial-gradient(circle, var(--color-secondary) 0%, rgba(255,255,255,0) 70%)"
          }}
        />
        {/* Bottom-Left Blurred Shape */}
        <div 
          className="absolute -bottom-[10%] -left-[5%] w-[40%] aspect-square rounded-full filter blur-[100px] opacity-[0.2] dark:opacity-[0.08] transition-colors duration-1000"
          style={{
            background: "radial-gradient(circle, var(--color-primary) 0%, rgba(255,255,255,0) 70%)"
          }}
        />

        {/* Decorative Concentric Circular Line Patterns (25%-40% visible) */}
        <TopLeftArcs />
        <CenterMeshLines />
        <BottomRightArcs />
      </div>

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-[13px] font-bold tracking-widest text-primary uppercase block mb-3" style={{ ...textShadowStyle, WebkitTextStroke: "1px rgba(0, 0, 0, 0.35)" }}>
            BENEFITS & OUTCOMES
          </span>
          <h2 className="font-serif text-[33px] md:text-[53px] font-bold tracking-tight text-text leading-none" style={textShadowStyle}>
            Why schools excel.
          </h2>
          <p className="mt-4 text-[13px] md:text-[15.5px] text-muted leading-relaxed font-semibold" style={textShadowStyle}>
            See how converting to an integrated school operating engine increases efficiency and parent trust.
          </p>
        </div>

        {/* Alternating Split Rows */}
        <div className="flex flex-col gap-24 md:gap-36 max-w-6xl mx-auto">
          {BENEFITS.map((benefit, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={benefit.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                onViewportEnter={() => setActiveIndex(idx + 1)}
                viewport={{ margin: isMobile ? "-10% 0px -10% 0px" : "-30% 0px -30% 0px" }} // Triggers change immediately when card enters the viewport center
              >
                {/* Visual Image Column */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
                  transition={{ duration: 0.7, ease: LUXURY_EASE }}
                  className={`lg:col-span-6 flex justify-center ${isEven ? "" : "lg:order-2"}`}
                >
                  {/* Highly Elevated Visual Image Container with rotating neon border on hover */}
                  <div className="relative group w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/50 dark:border-white/15 bg-white/25 dark:bg-black/20 backdrop-blur-xs">
                    {/* Rotating Black Neon border */}
                    <div
                      className="benefit-neon-spin absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{
                        inset: "-100%",
                        background: "conic-gradient(from 0deg, transparent 0%, transparent 55%, #000000 64%, #555555 70%, #000000 76%, transparent 83%)",
                      }}
                    />

                    {/* Inner image wrapper */}
                    <div className="relative m-[3px] rounded-[13px] overflow-hidden h-[calc(100%-6px)] w-[calc(100%-6px)]">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 550px"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Content Details Column */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
                  transition={{ duration: 0.7, ease: LUXURY_EASE, delay: isMobile ? 0.05 : 0.1 }}
                  className={`lg:col-span-6 flex flex-col gap-4 ${isEven ? "" : "lg:order-1"}`}
                >
                  <span className="text-[11px] font-black uppercase text-primary tracking-widest leading-none block" style={{ ...textShadowStyle, WebkitTextStroke: "1px rgba(0, 0, 0, 0.35)" }}>
                    {benefit.tag}
                  </span>
                  <h3 className="font-serif text-[26px] md:text-[39px] font-bold text-text leading-tight" style={textShadowStyle}>
                    {benefit.title}
                  </h3>
                  <p className="text-[13px] md:text-[15.5px] text-muted leading-relaxed font-semibold max-w-md" style={textShadowStyle}>
                    {benefit.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </motion.section>
  );
}
