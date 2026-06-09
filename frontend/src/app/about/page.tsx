"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Sparkles, Shield, Heart, Lightbulb, Users, Milestone } from "lucide-react";
import Image from "next/image";

const CORE_VALUES = [
  {
    title: "Student-First Design",
    desc: "Every module, line of code, and interaction is designed to optimize learning outcomes and classroom happiness.",
    icon: Heart,
    color: "bg-secondary/15 text-secondary border-secondary/20",
  },
  {
    title: "Uncompromising Security",
    desc: "We protect sensitive school and student records with state-of-the-art encryption and strict data regulations.",
    icon: Shield,
    color: "bg-primary/15 text-primary border-primary/20",
  },
  {
    title: "Constant Innovation",
    desc: "Integrating automation and modern intelligence to eliminate manual, repetitive administrative workloads.",
    icon: Lightbulb,
    color: "bg-accent/15 text-accent border-accent/20",
  },
];

const TIMELINE = [
  { year: "2021", title: "The Spark", desc: "Founded by a group of educators frustrated by mechanical legacy school software." },
  { year: "2023", title: "Scale Phase", desc: "Expanded to support over 100 institutions across primary and secondary academies." },
  { year: "2024", title: "Parent Hub Release", desc: "Launched our real-time messaging workspace, fostering parent-educator collaborations." },
  { year: "2026", title: "The Next Era", desc: "Upgraded our entire core engine to Next.js 16/Tailwind v4 with 60fps animations." },
];

const TEAM = [
  { name: "Sarah Jenkins", role: "CEO & Co-Founder", bio: "Former Principal with 15+ years in educational leadership.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
  { name: "David Chen", role: "CTO & Co-Founder", bio: "Former systems architect at leading SaaS platforms.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face" },
  { name: "Amelia Rodriguez", role: "VP of Product", bio: "EdTech designer dedicated to beautiful school interfaces.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" },
];

export default function AboutPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      {/* Page Header */}
      <Container className="relative z-10 mb-20 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4.5 py-1.5 text-xs font-semibold text-primary mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>OUR MISSION</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-[42px] md:text-[56px] font-bold text-text tracking-tight leading-[1.1]"
        >
          Connecting technology with the <span className="text-primary italic font-medium">heart of learning</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
        >
          We build systems that reduce paperwork, simplify administrative tasks, and give teachers back their most valuable asset: time.
        </motion.p>
      </Container>

      {/* Story Grid Block */}
      <Container className="mb-24 max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-text leading-tight">
              A platform built for educators, by educators.
            </h2>
            <p className="text-muted leading-relaxed">
              We started SchoolManager because we saw schools drowning in archaic administrative spreadsheets. Teachers spent hours entering numbers into static databases instead of planning inspiring lessons.
            </p>
            <p className="text-muted leading-relaxed">
              Today, SchoolManager supports hundreds of top-tier schools, serving thousands of educators and families. We are committed to crafting beautiful, high-efficiency systems that make administration seamless.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-border/70 shadow-2xl"
          >
            <Image
              src="/hero_library.png"
              alt="School environment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>

      {/* Core Values Section */}
      <div className="bg-surface-muted/30 border-y border-border/40 py-24 mb-24">
        <Container className="max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-text">Our Core Values</h2>
            <p className="text-muted mt-2 text-sm">The parameters that guide our service and product designs.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-surface border border-border/70 rounded-[24px] p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                >
                  <div className={`h-11 w-11 rounded-xl flex items-center justify-center border ${val.color} mb-5`}>
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{val.title}</h3>
                  <p className="text-sm text-muted leading-relaxed font-medium">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Milestones Timeline */}
      <Container className="mb-24 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-text">Our Journey</h2>
          <p className="text-muted mt-2 text-sm">Milestones along our mission to improve administrative tech.</p>
        </div>

        <div className="relative border-l border-border/60 pl-8 ml-4 space-y-12">
          {TIMELINE.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-sm" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                <span className="font-serif text-2xl font-bold text-primary">{item.year}</span>
                <div>
                  <h3 className="text-lg font-bold text-text">{item.title}</h3>
                  <p className="text-sm text-muted mt-1 max-w-2xl leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Leadership/Team Grid */}
      <Container className="max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-text">Meet Our Leaders</h2>
          <p className="text-muted mt-2 text-sm">Educators, system architects, and designers working for you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="relative h-64 w-full rounded-[24px] overflow-hidden border border-border/70 shadow-md mb-4.5 bg-surface-muted">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-text">{member.name}</h3>
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mt-0.5">{member.role}</p>
              <p className="text-sm text-muted mt-2 px-2 leading-relaxed font-medium">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
