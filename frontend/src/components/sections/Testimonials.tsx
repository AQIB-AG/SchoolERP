"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";

export function Testimonials() {
  // Triplicate testimonials to ensure seamless marquee wrapping on all screen widths
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="section-padding bg-surface-muted relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading title="Loved by Leaders in Education" />
      </Container>

      {/* Infinite Marquee Container */}
      <div className="relative mt-16 w-full overflow-hidden py-4">
        {/* Shadow overlays on edges for Stripe-style transition */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-surface-muted to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-surface-muted to-transparent md:w-32" />

        {/* Scrolling tape */}
        <div className="flex w-max">
          <div className="flex gap-6 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] px-3">
            {marqueeItems.map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                className="w-[340px] md:w-[400px] shrink-0"
              >
                <TiltCard
                  glowColor="rgba(79, 70, 229, 0.15)"
                  className="flex h-full flex-col justify-between border border-border/80 bg-surface/80 p-6 md:p-8 dark:bg-[#18181b]/80 backdrop-blur-md"
                >
                  <div>
                    {/* Stars */}
                    <div className="mb-4 flex gap-1 text-amber-400">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-sm md:text-base text-text dark:text-[#FFFFFF]/90 italic leading-relaxed font-medium">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="mt-6 flex items-center gap-4 border-t border-border/40 pt-4">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-primary/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text">{testimonial.name}</p>
                      <p className="text-xs text-muted font-medium">
                        {testimonial.designation}, {testimonial.school}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Injector */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
