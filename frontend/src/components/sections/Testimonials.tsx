"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
    scale: 0.99
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: LUXURY_EASE
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0,
    scale: 0.99,
    transition: {
      duration: 0.5,
      ease: LUXURY_EASE
    }
  })
};

export function Testimonials() {
  // Page index and direction tuple
  const [[page, direction], setPage] = useState([0, 0]);

  const activeIndex = page;

  const paginate = (newDirection: number) => {
    const nextIndex = (page + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length;
    setPage([nextIndex, newDirection]);
  };

  const jumpToSlide = (index: number) => {
    const newDirection = index > page ? 1 : -1;
    setPage([index, newDirection]);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface-muted/30 relative overflow-hidden">
      {/* Background decoration glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading title="Loved by Leaders in Education" />

        {/* Carousel Slider Window */}
        <div className="relative max-w-4xl mx-auto mt-16 md:mt-20">
          
          {/* Main testimonial display panel with custom direction support */}
          <div className="relative min-h-[300px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-surface border border-border/70 rounded-[32px] p-8 md:p-12 shadow-xl flex flex-col md:flex-row gap-8 md:gap-12 items-center relative overflow-hidden"
              >
                {/* Visual Editorial Quote Decal */}
                <span className="absolute top-4 left-6 font-serif text-[180px] font-black text-primary/5 select-none leading-none pointer-events-none">
                  “
                </span>

                {/* Profile Image & Meta */}
                <div className="flex flex-col items-center text-center shrink-0 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-border/30 pb-6 md:pb-0 md:pr-8">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20 shadow-md mb-4">
                    <Image
                      src={current.image}
                      alt={current.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text">{current.name}</h3>
                  <p className="text-xs text-muted font-bold uppercase tracking-wider mt-1">{current.designation}</p>
                  <p className="text-[10px] text-primary font-bold mt-0.5">{current.school}</p>
                </div>

                {/* Review Text Area */}
                <div className="flex-1 flex flex-col justify-between pt-2 md:pt-0">
                  <div>
                    {/* Stars */}
                    <div className="mb-4 flex gap-1 text-accent">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-current" />
                      ))}
                    </div>

                    <p className="text-base md:text-lg text-text italic leading-relaxed font-semibold">
                      &ldquo;{current.review}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Overlay */}
          <div className="flex justify-between items-center mt-8 px-4">
            {/* Bubble dot trackers */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => jumpToSlide(i)}
                  aria-label={`Go to slide ${i+1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "w-6 bg-primary" : "w-2.5 bg-border hover:bg-muted"
                  }`}
                />
              ))}
            </div>

            {/* Slider arrows */}
            <div className="flex gap-3">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="h-10 w-10 border border-border/80 hover:border-primary hover:text-primary rounded-full bg-surface shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="h-10 w-10 border border-border/80 hover:border-primary hover:text-primary rounded-full bg-surface shadow-sm flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
