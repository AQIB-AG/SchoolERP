"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const BENEFITS = [
  {
    title: "Save Administrative Time",
    description: "Automate repetitive administrative duties like scheduling, class assignments, and admissions to free up staff time for student success.",
    image: "/save_time.png",
    tag: "Efficiency"
  },
  {
    title: "Reduce Paperwork",
    description: "Move all pupil directory files, student report cards, fee tracking charts, and enrollments online to eliminate physical paperwork directories.",
    image: "/reduce_paperwork.png",
    tag: "Digitalization"
  },
  {
    title: "Improve Parent Engagement",
    description: "Provide real-time messaging circular alerts, fee collection reminders, and grading ledger updates directly to parent and family screens.",
    image: "/parent_engagement.png",
    tag: "Engagement"
  },
  {
    title: "Real-Time Reporting",
    description: "Instantly compile student enrollment statistics, class average marks, payment collection metrics, and daily check-in histories.",
    image: "/real_time_reporting.png",
    tag: "Analytics"
  }
];

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-36 bg-[#F8FAFA] dark:bg-[#0E1516]/50 scroll-section">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            BENEFITS & OUTCOMES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text leading-none">
            Why schools excel.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold">
            See how converting to an integrated school operating engine increases efficiency and parent trust.
          </p>
        </div>

        {/* Alternating Split Rows */}
        <div className="flex flex-col gap-24 md:gap-36 max-w-6xl mx-auto">
          {BENEFITS.map((benefit, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={benefit.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Visual Image Column */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: LUXURY_EASE }}
                  className={`lg:col-span-6 flex justify-center ${isEven ? "" : "lg:order-2"}`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xs border border-border/60">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 550px"
                    />
                  </div>
                </motion.div>

                {/* Content Details Column */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: LUXURY_EASE, delay: 0.1 }}
                  className={`lg:col-span-6 flex flex-col gap-4 ${isEven ? "" : "lg:order-1"}`}
                >
                  <span className="text-[10px] font-black uppercase text-primary tracking-widest leading-none block">
                    {benefit.tag}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3.5xl font-bold text-text leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed font-semibold max-w-md">
                    {benefit.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}

