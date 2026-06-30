"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { PRICING_PLANS } from "@/data/pricing";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [displayYearly, setDisplayYearly] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);


  const [rotateYVal, setRotateYVal] = useState(0);
  const [scaleVal, setScaleVal] = useState<number | number[]>(1);
  const [yVal, setYVal] = useState<number | number[]>(0);

  const toggleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lockTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggle = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    const nextYearly = !isYearly;
    setIsYearly(nextYearly);

    // Clear active timeouts to avoid race conditions
    if (toggleTimeoutRef.current) clearTimeout(toggleTimeoutRef.current);
    if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);

    // Set the target transitions for Y-axis rotation and transient lift/scale keyframes
    setRotateYVal(nextYearly ? 360 : 0);
    setScaleVal([1, 1.04, 1]);
    setYVal([0, -12, 0]);

    // Swap card contents at exactly 450ms (75% of the 600ms vertical rotation duration).
    // At this midpoint, cards are edge-on to the user and invisible, providing a seamless swap.
    toggleTimeoutRef.current = setTimeout(() => {
      setDisplayYearly(nextYearly);
    }, 450);

    // Lock transition state for exactly 600ms to guarantee animation completes smoothly.
    // Reset scale and y back to static values to prevent conflicts with hover exit timing.
    lockTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setScaleVal(1);
      setYVal(0);
    }, 600);
  };

  // Timeout cleanup on component unmount
  useEffect(() => {
    return () => {
      if (toggleTimeoutRef.current) clearTimeout(toggleTimeoutRef.current);
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    };
  }, []);

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-36 overflow-hidden scroll-section"
    >
      {/* Native CSS keyframes for floating background sprinkles */}
      <style>{`
        @keyframes floatSprinklesSilver {
          0% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
          50% {
            transform: translate3d(-6px, -8px, 0) scale(1.04);
          }
          100% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
        }
        @keyframes floatSprinklesGold {
          0% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
          50% {
            transform: translate3d(6px, 8px, 0) scale(1.04);
          }
          100% {
            transform: translate3d(0px, 0px, 0) scale(1.02);
          }
        }
      `}</style>

      {/* Background Depth Layers */}
      
      {/* Layer 1: Base Fixed Background Image (Monthly - Silver) */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 z-[0]`}
        style={{
          backgroundImage: "url('/silver_bg.jpg')",
          backgroundAttachment: "fixed",
          opacity: isYearly ? 0 : 1,
        }}
      />

      {/* Layer 1b: Animated Sprinkle Layer (Monthly - Silver) */}
      <div
        className={`absolute -inset-6 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 z-[1] pointer-events-none`}
        style={{
          backgroundImage: "url('/silver_bg.jpg')",
          backgroundAttachment: "fixed",
          opacity: isYearly ? 0 : 0.65,
          mixBlendMode: "screen",
          animation: "floatSprinklesSilver 14s ease-in-out infinite",
        }}
      />

      {/* Layer 2: Base Fixed Background Image (Yearly - Gold) */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 z-[0]`}
        style={{
          backgroundImage: "url('/golden_sprinkle.webp')",
          backgroundAttachment: "fixed",
          opacity: isYearly ? 1 : 0,
        }}
      />

      {/* Layer 2b: Animated Sprinkle Layer (Yearly - Gold) */}
      <div
        className={`absolute -inset-6 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 z-[1] pointer-events-none`}
        style={{
          backgroundImage: "url('/golden_sprinkle.webp')",
          backgroundAttachment: "fixed",
          opacity: isYearly ? 0.70 : 0,
          mixBlendMode: "screen",
          animation: "floatSprinklesGold 16s ease-in-out infinite",
        }}
      />

      {/* Layer 3: Dedicated Backdrop Blur Overlay (Sits directly behind cards to blur particles only) */}
      <div
        className="absolute inset-0 backdrop-blur-[10px] pointer-events-none z-[2]"
      />

      {/* Layer 3b: Radial Lighting Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none mix-blend-overlay opacity-40 transition-all duration-1000 z-[3] ${
          isYearly
            ? "bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.22),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(241,245,249,0.38),transparent_70%)]"
        }`}
      />

      {/* Layer 4: Soft Blurred Glow Bubble */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] blur-[150px] rounded-full pointer-events-none transition-all duration-1000 z-[3]"
        style={{
          backgroundColor: isYearly ? "rgba(251, 191, 36, 0.12)" : "rgba(148, 163, 184, 0.1)",
        }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`text-xs font-bold tracking-widest uppercase block mb-3 transition-colors duration-500 ${
              isYearly ? "text-amber-600 dark:text-amber-400" : "text-slate-650 dark:text-slate-400"
            }`}
          >
            PRICING OPTIONS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text leading-none">
            Simple pricing.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold">
            All subscriptions include a 14-day setup trial period. No hidden fees.
          </p>
        </div>

        {/* Toggle Billing Capsule */}
        <div className="mb-16 flex items-center justify-center gap-4 relative z-10">
          <span
            className={`text-xs font-bold transition-all duration-300 ${
              !isYearly
                ? "text-slate-800 dark:text-slate-100 scale-105"
                : "text-muted"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            onClick={handleToggle}
            className={`relative h-7 w-14 rounded-full transition-all duration-500 focus:outline-none cursor-pointer flex items-center px-1 border shadow-xs ${
              isYearly
                ? "bg-amber-100/80 dark:bg-amber-950/30 border-amber-300/40 shadow-[0_0_12px_rgba(225,185,100,0.3)]"
                : "bg-slate-200/80 dark:bg-slate-800/50 border-slate-300/30 shadow-[0_0_12px_rgba(200,205,215,0.2)]"
            }`}
          >
            <motion.span
              layout
              className={`h-5 w-5 rounded-full shadow-md transition-colors duration-500 ${
                isYearly ? "bg-amber-500" : "bg-slate-700 dark:bg-slate-300"
              }`}
              animate={{ x: isYearly ? 26 : 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
            />
          </button>
          <span
            className={`text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
              isYearly
                ? "text-amber-600 dark:text-amber-400 scale-105"
                : "text-muted"
            }`}
          >
            Yearly
            <span
              className={`text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase transition-all duration-500 ${
                isYearly
                  ? "text-amber-700 dark:text-amber-300 bg-amber-500/25 shadow-sm"
                  : "text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800/60"
              }`}
            >
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl lg:max-w-6xl mx-auto items-stretch px-4 md:px-0">
          {PRICING_PLANS.map((plan, index) => {
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: index * 0.1, ease: LUXURY_EASE }
                }}
                viewport={{ once: true }}
                className="flex flex-col shrink-0 relative"
                style={{ perspective: 1000 }}
              >

                <motion.div
                  animate={{
                    rotateY: rotateYVal,
                    scale: scaleVal,
                    y: yVal,
                    transition: {
                      rotateY: { duration: 0.6, ease: "easeInOut" },
                      scale: { duration: 0.6, ease: "easeInOut" },
                      y: { duration: 0.6, ease: "easeInOut" }
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: displayYearly
                      ? "0 25px 50px rgba(225, 185, 100, 0.15), 0 0 20px rgba(225, 185, 100, 0.3)"
                      : "0 25px 50px rgba(0, 0, 0, 0.12), 0 0 20px rgba(200, 205, 215, 0.25)",
                    transition: { duration: 0.16, ease: "easeOut" } // highly responsive hover scale speed
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }} // responsive hover exit transition
                  style={{
                    // Prevent GPU texture text-blurring quirk when cards are static.
                    // Conditionally flat/visible keeps vector font rendering crystal clear and sharp.
                    transformStyle: isTransitioning ? "preserve-3d" : "flat",
                    backfaceVisibility: isTransitioning ? "hidden" : "visible",
                  }}
                  className={`flex flex-col p-6 lg:p-8 rounded-2xl transition-colors duration-500 relative h-full z-[10] ${
                    plan.popular
                      ? displayYearly
                        ? "border-2 border-amber-400/40 dark:border-amber-500/30 bg-gradient-to-br from-white/95 to-amber-50/95 dark:from-[#201C15]/95 dark:to-[#171410]/95 shadow-[0_0_35px_rgba(225,185,100,0.25)] lg:scale-[1.03]"
                        : "border-2 border-slate-300/60 dark:border-slate-650 bg-gradient-to-br from-white/95 to-slate-50/95 dark:from-[#1B2527]/95 dark:to-[#121A1C]/95 shadow-[0_0_30px_rgba(200,205,215,0.2)] lg:scale-[1.03]"
                      : displayYearly
                      ? "border border-amber-200/50 dark:border-amber-900/20 bg-white/80 dark:bg-[#1E1A14]/80 shadow-[0_8px_30px_rgba(225,185,100,0.03)]"
                      : "border border-white/60 dark:border-white/10 bg-white/80 dark:bg-[#151F21]/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  {plan.popular && (
                    <div
                      className={`absolute -top-3 left-6 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border shadow-xs transition-colors duration-500 ${
                        displayYearly
                          ? "bg-amber-500 border-amber-400 text-white"
                          : "bg-slate-600 dark:bg-slate-700 border-slate-500 dark:border-slate-600 text-white"
                      }`}
                    >
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`font-serif text-xl font-bold transition-colors duration-500 ${
                        displayYearly ? "text-amber-800 dark:text-amber-300" : "text-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-[10px] font-bold text-muted uppercase tracking-wider">{plan.description}</p>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6 h-12 flex items-baseline gap-1.5 border-b border-border/20 pb-4 overflow-hidden">
                    {plan.customPricing ? (
                      <span
                        className={`font-serif text-lg font-bold transition-colors duration-500 ${
                          displayYearly ? "text-amber-600 dark:text-amber-400" : "text-slate-850 dark:text-slate-100"
                        }`}
                      >
                        Custom Enterprise
                      </span>
                    ) : (
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={displayYearly ? "yearly" : "monthly"}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25, ease: LUXURY_EASE }}
                          className="flex items-baseline gap-1"
                        >
                          <span
                            className={`font-serif text-4xl font-bold transition-colors duration-500 tracking-tight ${
                              displayYearly ? "text-amber-600 dark:text-amber-400" : "text-slate-850 dark:text-slate-100"
                            }`}
                          >
                            ${displayYearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-[10px] font-bold text-muted uppercase">
                            {displayYearly ? "/ year" : "/ mo"}
                          </span>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="mb-8 flex flex-col gap-3 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          className={`h-4 w-4 shrink-0 mt-0.5 transition-colors duration-500 ${
                            displayYearly ? "text-amber-500" : "text-slate-500 dark:text-slate-400"
                          }`}
                        />
                        <span className="text-xs font-semibold text-text/80 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={plan.cta === "Start Free Trial" ? "/start-free-trial" : "/book-demo"}
                    className={`w-full py-2.5 text-center text-xs font-bold rounded-full transition-all duration-500 ${
                      plan.popular
                        ? displayYearly
                          ? "bg-amber-500 text-white hover:bg-amber-600 shadow-sm hover:shadow-[0_4px_12px_rgba(245,158,11,0.3)]"
                          : "bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-white text-white dark:text-slate-950 shadow-sm border border-slate-700 dark:border-slate-300"
                        : displayYearly
                        ? "border border-amber-300/40 dark:border-amber-800/40 hover:border-amber-500 hover:text-amber-500 text-amber-900 dark:text-amber-300 bg-amber-50/10 dark:bg-amber-950/10"
                        : "border border-slate-300/80 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-slate-700 dark:text-slate-300 bg-white/40 dark:bg-white/5"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
