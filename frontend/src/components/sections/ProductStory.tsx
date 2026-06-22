"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

const STORIES = [
  {
    num: "01",
    title: "Student Management",
    subtitle: "A digital workspace for student directories.",
    description: "Replace dusty filing cabinets and legacy spreadsheets with a secure database. Access pupil registration histories, medical information, parent contacts, and transcript logs from a single panel.",
    visual: (
      <div className="bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3 shadow-md max-w-sm w-full mx-auto">
        <div className="flex items-center justify-between pb-2 border-b border-border/40 dark:border-white/5">
          <span className="text-[9px] font-black uppercase text-primary">Student Profile Sheet</span>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center border border-primary/20">
            SM
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-text">Sophia Martinez</span>
            <span className="text-[9px] text-muted">Grade 11-A &bull; Enroll Year: 2024</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[9px] font-semibold text-muted pt-2 border-t border-border/20">
          <div>
            <p className="text-[7.5px] uppercase tracking-wider">Guardian</p>
            <p className="text-text font-bold mt-0.5">Mrs. Elena Martinez</p>
          </div>
          <div>
            <p className="text-[7.5px] uppercase tracking-wider">Attendance Rate</p>
            <p className="text-primary font-bold mt-0.5">98.4% Present</p>
          </div>
        </div>
      </div>
    )
  },
  {
    num: "02",
    title: "Attendance Tracking",
    subtitle: "Capturing attendance with immediate triggers.",
    description: "Taking daily attendance sheet checks should take seconds, not minutes. Classroom advisors take roll calls with simple toggles that trigger automatic updates to the database.",
    visual: (
      <div className="bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3 shadow-md max-w-sm w-full mx-auto">
        <div className="flex items-center justify-between pb-2 border-b border-border/40 dark:border-white/5">
          <span className="text-[9px] font-black uppercase text-secondary">Attendance Roll Call</span>
          <span className="text-[8px] bg-secondary/15 text-secondary border border-secondary/20 px-2 py-0.5 rounded font-black">Today</span>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { name: "Daniel Henderson", status: "Present", color: "text-primary bg-primary/10 border-primary/10" },
            { name: "Eleanor Vance", status: "Absent (Alert Sent)", color: "text-secondary bg-secondary/15 border-secondary/20" },
          ].map((s, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 rounded-lg border border-border/20 bg-background/50">
              <span className="text-[10px] font-bold text-text">{s.name}</span>
              <span className={`text-[8px] font-black px-1.5 py-0.5 rounded-full border ${s.color}`}>{s.status}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    num: "03",
    title: "Direct Communications",
    subtitle: "Connecting teachers and families organically.",
    description: "Align families with progress developments. Automatic reports, absence triggers, and private advisor text channels create an engaged educational council.",
    visual: (
      <div className="bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3 shadow-md max-w-sm w-full mx-auto">
        <div className="flex items-center gap-1 text-[9px] font-black text-primary border-b border-border/40 dark:border-white/5 pb-2">
          <span>Mrs. Jenkins (Grade 11 Advisor)</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-background/80 dark:bg-surface-muted/60 rounded-xl p-2.5 text-[9px] text-text font-medium leading-snug max-w-[85%] self-start">
            Hello, Liam did exceptionally well in today's chemistry laboratory exam!
          </div>
          <div className="bg-primary text-background rounded-xl p-2.5 text-[9px] font-bold leading-snug max-w-[85%] self-end">
            Thank you for the update! We are very proud of him.
          </div>
        </div>
      </div>
    )
  },
  {
    num: "04",
    title: "Tuition & Fee Ledgers",
    subtitle: "Billing schedules without the manual audit.",
    description: "Disburse student fee schedules, configure payment installment policies, and coordinate payment records. Eliminate billing friction with immediate receipt listings.",
    visual: (
      <div className="bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3 shadow-md max-w-sm w-full mx-auto">
        <div className="flex items-center justify-between pb-2 border-b border-border/40 dark:border-white/5">
          <span className="text-[9px] font-black uppercase text-text">Tuition Billing Sheet</span>
          <span className="text-[9px] font-black text-text">$1,250 due</span>
        </div>
        <div className="bg-background/50 border border-border/20 p-2.5 rounded-xl flex items-center justify-between text-[9px]">
          <div className="flex flex-col">
            <span className="font-bold text-text">Term 3 Invoice</span>
            <span className="text-[7.5px] text-muted">Sophia Martinez</span>
          </div>
          <span className="text-[8px] bg-primary/15 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-black">PAID</span>
        </div>
      </div>
    )
  },
  {
    num: "05",
    title: "Real-Time Reporting",
    subtitle: "Auditing metrics with absolute clarity.",
    description: "Compile and audit classroom average marks, daily check-in histories, and ledger billing revenue profiles directly inside one streamlined dashboard portal.",
    visual: (
      <div className="bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl p-5 flex flex-col justify-between shadow-md max-w-sm w-full mx-auto min-h-[140px]">
        <div className="flex items-center justify-between pb-2 border-b border-border/40 dark:border-white/5">
          <span className="text-[9px] font-black uppercase text-text">Operational Growth</span>
          <span className="text-[9px] text-primary font-black">99.2% accuracy</span>
        </div>
        <div className="flex items-end justify-between gap-1.5 h-12 pt-2">
          {[20, 45, 30, 65, 55, 95, 75].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/20 dark:bg-primary/10 rounded-t-sm h-full relative" style={{ height: `${h}%` }}>
              {i === 5 && <div className="absolute inset-0 bg-primary rounded-t-sm" />}
            </div>
          ))}
        </div>
      </div>
    )
  }
];

export function ProductStory() {
  return (
    <section id="features" className="py-24 md:py-36 bg-[#F8FAFA] dark:bg-[#0E1516]/50 scroll-section">
      <Container>
        
        {/* Section Header */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            PRODUCT STORY
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text leading-none">
            Reimagining school administration.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold max-w-lg">
            Instead of standard widgets, we built five narrative systems coordinates that connect your classrooms, teachers, offices, and families.
          </p>
        </div>

        {/* Stories List */}
        <div className="flex flex-col gap-24 md:gap-36">
          {STORIES.map((story, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={story.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Visual Side */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: LUXURY_EASE }}
                  className={`lg:col-span-6 flex justify-center ${isEven ? "" : "lg:order-2"}`}
                >
                  <div className="w-full bg-white dark:bg-[#151F21]/40 border border-border/60 dark:border-white/5 p-8 md:p-12 rounded-[28px] shadow-sm flex items-center justify-center">
                    {story.visual}
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.1 }}
                  className={`lg:col-span-6 flex flex-col gap-4 ${isEven ? "" : "lg:order-1"}`}
                >
                  <span className="font-serif text-lg font-normal text-primary">
                    {story.num} &mdash; {story.title}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal text-text leading-tight">
                    {story.subtitle}
                  </h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed font-semibold max-w-md">
                    {story.description}
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
