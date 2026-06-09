"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { School, Settings, LineChart, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 85%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.001,
  });

  const renderStepMockup = (number: number) => {
    switch (number) {
      case 1:
        return (
          <div className="w-full bg-surface border border-border/70 rounded-[24px] shadow-lg p-5 flex flex-col gap-3.5 dark:bg-[#1E2824]/90 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border/30 pb-3">
              <span className="text-[10px] font-bold text-muted">ORGANIZATION SETUP</span>
              <School className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col gap-1">
                <label className="text-[8px] font-bold text-text">Institution Name</label>
                <div className="h-7 w-full rounded-lg bg-background border border-border/40 flex items-center px-2.5 text-[10px] text-text font-semibold">
                  Greenfield Academy
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] font-bold text-text">Region</label>
                  <div className="h-7 w-full rounded-lg bg-background border border-border/40 flex items-center px-2.5 text-[9px] text-muted">
                    North America
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[8px] font-bold text-text">Syllabus</label>
                  <div className="h-7 w-full rounded-lg bg-background border border-border/40 flex items-center px-2.5 text-[9px] text-muted">
                    Cambridge Int.
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full h-8 bg-primary hover:bg-primary-hover text-white font-bold text-[10px] rounded-lg shadow-sm flex items-center justify-center gap-1">
              <span>Create Institution</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        );
      case 2:
        return (
          <div className="w-full bg-surface border border-border/70 rounded-[24px] shadow-lg p-5 flex flex-col gap-3.5 dark:bg-[#1E2824]/90 relative">
            <div className="flex items-center justify-between border-b border-border/30 pb-3">
              <span className="text-[10px] font-bold text-muted">SCHEDULE MAKER</span>
              <Settings className="h-4 w-4 text-secondary" />
            </div>
            
            <div className="flex flex-col gap-2">
              {[
                { time: "09:00 AM", subj: "Algebra I", room: "Room 102", active: true },
                { time: "10:30 AM", subj: "Chemistry II", room: "Lab A", active: false },
              ].map((c, idx) => (
                <div key={idx} className={`p-2.5 rounded-xl border flex items-center justify-between transition-colors ${c.active ? "bg-primary/5 border-primary/20" : "bg-background border-border/30"}`}>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${c.active ? "bg-primary" : "bg-muted/40"}`} />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-text">{c.subj}</span>
                      <span className="text-[8px] text-muted">{c.time}</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-bold text-muted bg-background px-1.5 py-0.5 rounded border border-border/20">{c.room}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full bg-surface border border-border/70 rounded-[24px] shadow-lg p-5 flex flex-col gap-3.5 dark:bg-[#1E2824]/90 relative">
            <div className="flex items-center justify-between border-b border-border/30 pb-3">
              <span className="text-[10px] font-bold text-muted">ANALYTICS REPORT</span>
              <LineChart className="h-4 w-4 text-accent" />
            </div>
            <div className="flex items-center justify-between p-3 bg-background border border-border/30 rounded-xl">
              <div className="flex flex-col">
                <span className="text-[8px] font-bold text-muted uppercase">GPA IMPROVEMENT</span>
                <span className="text-lg font-serif font-bold text-text mt-0.5">+14.2%</span>
              </div>
              <div className="h-8 w-16 flex items-end gap-1">
                <div className="h-1/3 w-3 bg-primary/20 rounded-sm" />
                <div className="h-2/3 w-3 bg-primary/40 rounded-sm" />
                <div className="h-full w-3 bg-primary rounded-sm animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[9px] font-bold text-text">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              <span>Report dispatched to parent portal</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const stepsData = [
    {
      number: 1,
      title: "Add School",
      description: "Register your institution and configure core settings in a matter of minutes. Import default class blueprints and syllabus tracks with absolute ease."
    },
    {
      number: 2,
      title: "Manage Operations",
      description: "Onboard students, staff, and teacher profiles. Setup automated class schedules, custom grading policies, and payment terms."
    },
    {
      number: 3,
      title: "Track Progress",
      description: "Monitor real-time progress reports, coordinate communication threads, collect fee payments, and unlock administrative efficiency."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
            ONBOARDING WORKFLOW
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            How It Works
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted leading-relaxed font-medium">
            A simplified setup process designed to transition your school onto a modern operations engine.
          </p>
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-5xl">
          
          {/* Scroll-Linked Timeline Vertical Line */}
          <div
            className="absolute left-8 top-12 hidden h-[calc(100%-8rem)] w-1 bg-border/40 rounded-full md:left-1/2 md:block md:-translate-x-1/2"
            aria-hidden="true"
          >
            <motion.div
              style={{ scaleY }}
              className="h-full w-full origin-top rounded-full bg-gradient-to-b from-primary via-secondary to-accent"
            />
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {stepsData.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-16 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  
                  {/* Step Description Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: LUXURY_EASE }}
                    className="flex-1 w-full"
                  >
                    <div className={`flex flex-col ${isEven ? "md:text-right md:items-end" : "md:text-left md:items-start"}`}>
                      <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                        STAGE 0{step.number}
                      </span>
                      <h3 className="font-serif text-3xl font-bold text-text mb-4">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted leading-relaxed font-medium max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Step Timeline Node (Center Icon) */}
                  <div className="absolute left-8 top-0 -translate-x-1/2 z-10 flex md:relative md:left-auto md:top-auto md:translate-x-0 shrink-0 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.1 }}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-surface border border-border/80 text-primary shadow-md hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
                    >
                      <span className="font-serif font-black text-lg text-secondary">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Step Visual Mockup Column */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20, y: 12 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.1 }}
                    className="flex-1 w-full max-w-sm"
                  >
                    {renderStepMockup(step.number)}
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
