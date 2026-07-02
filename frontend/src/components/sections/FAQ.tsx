"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/faq";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────────────────────────────
   FaqIllustration
   Faithful SVG recreation of the LottieFiles FAQ reference:
   - Large blue rotated diamond background
   - Flat-design bearded man in red shirt + black pants
   - Big floating yellow question mark (animated)
   - Small gray background question marks
   All animations loop infinitely via Framer Motion.
───────────────────────────────────────────────────────────── */
function FaqIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
      <svg
        viewBox="0 0 420 490"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* ── Ground shadow ── */}
        <ellipse cx="212" cy="476" rx="148" ry="16" fill="rgba(94,114,228,0.12)" />

        {/* ── Back blue diamond (large, rotated 45°) ── */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="58" y="58"
            width="308" height="308"
            rx="44"
            fill="#5B6FD4"
            transform="rotate(45 212 212)"
          />
        </motion.g>

        {/* ── Front lighter diamond overlay ── */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="105" y="105"
            width="214" height="214"
            rx="32"
            fill="#8295E8"
            opacity="0.5"
            transform="rotate(45 212 212)"
          />
        </motion.g>

        {/* ── Small background question marks ── */}
        {/* Bottom-right */}
        <text
          x="316" y="344"
          fontSize="52"
          fill="#B8C4E8"
          fontWeight="900"
          fontFamily="Arial Black, Arial, sans-serif"
        >
          ?
        </text>
        {/* Bottom-left */}
        <text
          x="44" y="370"
          fontSize="36"
          fill="#C8D0EC"
          fontWeight="900"
          fontFamily="Arial Black, Arial, sans-serif"
        >
          ?
        </text>

        {/* ── Large floating yellow question mark ── */}
        <motion.g
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <text
            x="72" y="240"
            fontSize="190"
            fill="#F9C825"
            fontWeight="900"
            fontFamily="Arial Black, Impact, Arial, sans-serif"
            opacity="0.97"
          >
            ?
          </text>
        </motion.g>

        {/* ══════════════════════════════════════
            Person — flat design illustration
        ══════════════════════════════════════ */}

        {/* Left leg */}
        <rect x="192" y="352" width="26" height="98" rx="10" fill="#1A1C2E" />
        {/* Right leg */}
        <rect x="226" y="352" width="26" height="98" rx="10" fill="#1A1C2E" />
        {/* Left shoe */}
        <rect x="172" y="434" width="52" height="17" rx="9" fill="#0D0E1E" />
        {/* Right shoe */}
        <rect x="226" y="434" width="52" height="17" rx="9" fill="#0D0E1E" />

        {/* Torso — red shirt */}
        <rect x="174" y="252" width="94" height="106" rx="18" fill="#E24C4C" />

        {/* Left arm (hanging down-left) */}
        <rect
          x="152" y="262"
          width="26" height="74"
          rx="12"
          fill="#E24C4C"
          transform="rotate(10 152 262)"
        />
        {/* Left hand */}
        <circle cx="145" cy="334" r="13" fill="#F5C09A" />

        {/* Right arm (raised up, holding card) */}
        <rect
          x="258" y="224"
          width="26" height="82"
          rx="12"
          fill="#E24C4C"
          transform="rotate(-42 264 238)"
        />
        {/* Right hand/wrist */}
        <circle cx="300" cy="178" r="14" fill="#F5C09A" />

        {/* Small orange card held in right hand */}
        <motion.g
          animate={{ rotate: [-18, -14, -18] }}
          style={{ originX: "290px", originY: "163px" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="280" y="140"
            width="42" height="50"
            rx="7"
            fill="#F5901E"
            transform="rotate(-18 290 163)"
          />
          <text
            x="291" y="174"
            fontSize="22"
            fill="white"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            transform="rotate(-18 291 166)"
          >
            ?
          </text>
        </motion.g>

        {/* Neck */}
        <rect x="204" y="230" width="28" height="28" rx="8" fill="#F5C09A" />

        {/* Head */}
        <circle cx="218" cy="210" r="44" fill="#F5C09A" />

        {/* Hair — dark, covers top & sides of head */}
        <path
          d="M 177 208
             Q 176 162 218 158
             Q 260 162 260 208
             Q 254 174 244 166
             Q 232 156 218 156
             Q 204 156 192 166
             Q 181 174 177 208 Z"
          fill="#1A1C2E"
        />
        {/* Hair sideburns */}
        <rect x="176" y="200" width="10" height="22" rx="4" fill="#1A1C2E" />
        <rect x="258" y="200" width="10" height="22" rx="4" fill="#1A1C2E" />

        {/* Beard — lower face */}
        <path
          d="M 184 226
             Q 186 250 218 252
             Q 250 250 252 226
             Q 242 240 218 242
             Q 194 240 184 226 Z"
          fill="#1A1C2E"
        />
        {/* Moustache */}
        <path
          d="M 205 223 Q 218 228 231 223"
          stroke="#1A1C2E"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left eye */}
        <circle cx="204" cy="207" r="5" fill="#1A1C2E" />
        <circle cx="206" cy="205" r="1.8" fill="white" />
        {/* Right eye */}
        <circle cx="232" cy="207" r="5" fill="#1A1C2E" />
        <circle cx="234" cy="205" r="1.8" fill="white" />

        {/* Eyebrows */}
        <path
          d="M 196 196 Q 204 191 212 196"
          stroke="#1A1C2E" strokeWidth="2.8" fill="none" strokeLinecap="round"
        />
        <path
          d="M 224 196 Q 232 191 240 196"
          stroke="#1A1C2E" strokeWidth="2.8" fill="none" strokeLinecap="round"
        />

        {/* Subtle shirt collar */}
        <path
          d="M 204 252 L 218 262 L 232 252"
          stroke="#C93A3A" strokeWidth="2" fill="none" strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   FAQ Section
───────────────────────────────────────────────────────────── */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-36 relative overflow-hidden scroll-section"
    >
      {/* Next.js Optimized High-quality background image with a subtle blur (2-5px / 3px) for readability */}
      <Image
        src="/pinterest_bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover pointer-events-none z-0 blur-[3px] scale-[1.03]"
      />
      {/* Subtle overlay (5-15% opacity) to maintain high text contrast and readability */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/15 pointer-events-none z-0" />

      <Container className="relative z-10">

        {/* ── Full-width section header (above both columns) ── */}
        <div className="mb-14 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-primary dark:text-[#000000] uppercase block mb-3">
            QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text dark:text-[#000000] leading-none">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ── Two-column row: accordion left | GIF right ── */}
        {/* The GIF naturally aligns beside the accordion questions, not the heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">

          {/* LEFT: Accordion */}
          <div className="flex-1 min-w-0">
            <div className="max-w-3xl border-t border-border/60 dark:border-[#111111]">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question} className="border-b border-border/60 dark:border-[#111111] py-6 transition-all duration-300">
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      className="flex w-full items-center justify-between gap-6 text-left focus:outline-none cursor-pointer group"
                      aria-expanded={isOpen}
                      id={`faq-question-v2-${index}`}
                    >
                      <span className={`text-sm md:text-base font-bold transition-colors ${
                        isOpen ? "text-primary dark:text-[#000000]" : "text-text dark:text-[#000000] hover:text-primary"
                      }`}>
                        {faq.question}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: LUXURY_EASE }}
                        className={`h-7 w-7 rounded-full border border-border dark:border-[#111111] flex items-center justify-center shrink-0 ${
                          isOpen
                            ? "bg-primary/5 border-primary text-primary dark:bg-black/5 dark:border-[#000000] dark:text-[#000000]"
                            : "text-muted dark:text-[#000000] group-hover:border-primary group-hover:text-primary"
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: LUXURY_EASE }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pr-12 text-xs md:text-sm text-muted dark:text-[#000000] leading-relaxed font-semibold max-w-2xl">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Animated illustration — desktop only, vertically centered beside accordion */}
          <motion.div
            className="hidden lg:flex flex-shrink-0 w-72 xl:w-[360px] items-center justify-center h-[400px] xl:h-[440px]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: LUXURY_EASE }}
            aria-hidden="true"
          >
            <FaqIllustration />
          </motion.div>

        </div>

        {/* Mobile: GIF shown below accordion, centered */}
        <motion.div
          className="lg:hidden flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: LUXURY_EASE }}
          aria-hidden="true"
        >
          <div className="w-64 h-64">
            <FaqIllustration />
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
