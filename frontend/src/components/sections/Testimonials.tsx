"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  return (
    <section id="about" className="py-24 md:py-32 premium-gradient border-y border-border/40 dark:border-white/5 scroll-section">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            TESTIMONIALS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text leading-none">
            Loved by leaders.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold">
            Hear from the administrative teams, teachers, and directors driving operational transformation.
          </p>
        </div>

        {/* Static Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {TESTIMONIALS.map((testimonial, idx) => {
            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: LUXURY_EASE }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                className="flex flex-col justify-between bg-white/80 dark:bg-[#151F21]/80 backdrop-blur-md border border-white/50 dark:border-white/10 p-8 rounded-2xl shadow-xs relative hover:shadow-md transition-all duration-300"
              >
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
                  <div>
                    <h4 className="text-xs font-bold text-text leading-none">
                      {testimonial.name}
                    </h4>
                    <p className="text-[9px] text-muted font-bold uppercase tracking-wider mt-1.5 leading-none">
                      {testimonial.designation} &bull; <span className="text-primary">{testimonial.school}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

