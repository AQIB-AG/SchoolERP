"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  // Duplicate testimonials list to make the infinite loop visually seamless
  const doubledTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="about" className="py-24 md:py-32 premium-gradient border-y border-border/40 dark:border-white/5 scroll-section overflow-hidden">
      <style>{`
        @keyframes neonBorderSpinTestimonials {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .testimonial-neon-spin {
          animation: neonBorderSpinTestimonials 2.2s linear infinite;
          will-change: transform;
        }
      `}</style>
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}>
            TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text leading-none">
            Loved by leaders.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-black dark:text-white leading-relaxed font-semibold">
            Hear from the administrative teams, teachers, and directors driving operational transformation.
          </p>
        </div>

      </Container>

      {/* Infinite Horizontal Marquee - Moved outside Container to enable full-width edge-to-edge layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: LUXURY_EASE }}
        className="marquee-container w-full py-4 relative"
      >
        <div className="animate-marquee items-stretch">
          {doubledTestimonials.map((testimonial, idx) => {
            return (
              <div key={idx} className="px-3 md:px-4 shrink-0 flex">
                <div
                  className="relative group flex flex-col justify-between w-[290px] md:w-[380px] bg-white/80 dark:bg-[#151F21]/80 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  {/* Pink Rotating Neon Border (visible on hover) */}
                  <div
                    className="testimonial-neon-spin absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{
                      inset: "-100%",
                      background: "conic-gradient(from 0deg, transparent 0%, transparent 55%, rgba(236,72,153,0.90) 64%, rgba(255,200,220,1) 70%, rgba(236,72,153,0.90) 78%, transparent 85%)",
                    }}
                  />

                  {/* Inner card content wrapper leaving 3px gap */}
                  <div className="relative m-[3px] rounded-[13px] bg-white dark:bg-[#151F21] p-8 h-[calc(100%-6px)] flex flex-col justify-between flex-1">
                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 text-primary mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current stroke-current" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-xs md:text-sm font-semibold text-text/90 leading-relaxed italic mb-8">
                        &ldquo;{testimonial.review}&rdquo;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 border-t border-border/40 dark:border-white/5 pt-6 mt-auto">
                      <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden border border-border/40">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-bold text-text leading-none">
                          {testimonial.name}
                        </h4>
                        <p className="text-[9px] text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                          {testimonial.designation} &bull; <span className="text-primary">{testimonial.school}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

