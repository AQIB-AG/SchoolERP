"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  Briefcase,
  Smartphone,
  CheckCircle,
  FileText,
  Search,
  Bell,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
  BarChart3,
  Mail
} from "lucide-react";
import { Container } from "@/components/ui/Container";

type InterfaceType = "students" | "attendance" | "fees" | "parent" | "teacher" | "analytics";

interface InterfaceTab {
  id: InterfaceType;
  label: string;
  shortDesc: string;
  title: string;
  description: string;
}

const TABS: InterfaceTab[] = [
  {
    id: "students",
    label: "Student Management",
    shortDesc: "Central student records & registry",
    title: "Centralize student records with absolute ease.",
    description: "Access academic registries, enrollment statuses, and demographic files from a single, responsive panel. Designed to keep pupil directories organized and secure."
  },
  {
    id: "attendance",
    label: "Attendance",
    shortDesc: "Real-time daily logs & notifications",
    title: "Track attendance logs with immediate triggers.",
    description: "Take quick classroom roll calls or check-ins. Absences trigger instant, automated notifications to parent portals to ensure school-home alignment."
  },
  {
    id: "fees",
    label: "Fee Management",
    shortDesc: "Billing ledgers & installment tracking",
    title: "Simplify academic billing and receipts.",
    description: "Generate structured term invoices, configure installments, and collect online payments. Transparent digital receipt logs eliminate administrative overhead."
  },
  {
    id: "parent",
    label: "Parent Portal",
    shortDesc: "Direct messaging & push notifications",
    title: "Keep parents updated with real-time sync.",
    description: "Provide parents with structured mobile viewports for daily updates, progress cards, fee payments, and direct text lines to educators."
  },
  {
    id: "teacher",
    label: "Teacher Portal",
    shortDesc: "Curriculum plans & grades registry",
    title: "Lightweight toolkits built for instruction.",
    description: "Empower teachers with lesson organizers, quick-grade ledgers, course schedules, and substitute coordinator boards directly on the class screen."
  },
  {
    id: "analytics",
    label: "Analytics Dashboard",
    shortDesc: "Metrics reporting & financial charts",
    title: "Actionable metrics at your fingertips.",
    description: "Audit school operations through centralized KPIs. View attendance trends, fee collection projections, and class average grades instantly."
  }
];

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function InterfaceShowcase() {
  const [activeTab, setActiveTab] = useState<InterfaceType>("students");

  const activeData = TABS.find((t) => t.id === activeTab)!;

  // Render high-fidelity realistic UI screen for each portal mockup
  const renderScreenMockup = (id: InterfaceType) => {
    switch (id) {
      case "students":
        return (
          <div className="w-full bg-surface border border-border/80 rounded-2xl shadow-xl p-5 flex flex-col gap-4 dark:bg-[#1E2824]/95">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text">Student Registry</span>
              </div>
              <div className="h-6 w-28 bg-background border border-border/40 rounded-lg flex items-center px-2 text-[8px] text-muted">
                <Search className="h-2.5 w-2.5 mr-1" />
                <span>Search pupils...</span>
              </div>
            </div>
            
            {/* Table Mockup */}
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Sophia Martinez", roll: "STU-2042", grade: "Grade 11-A", status: "Active" },
                { name: "Daniel Henderson", roll: "STU-2051", grade: "Grade 10-B", status: "Active" },
                { name: "Eleanor Vance", roll: "STU-2060", grade: "Grade 12-A", status: "Active" },
              ].map((student, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl border border-border/30 bg-background/50 hover:bg-background transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-[9px] flex items-center justify-center">
                      {student.name[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-text">{student.name}</span>
                      <span className="text-[8px] text-muted">{student.roll} &bull; {student.grade}</span>
                    </div>
                  </div>
                  <span className="text-[8px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-black">
                    {student.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case "attendance":
        return (
          <div className="w-full bg-surface border border-border/80 rounded-2xl shadow-xl p-5 flex flex-col gap-4 dark:bg-[#1E2824]/95">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text">Roll Call Sheet</span>
              </div>
              <span className="text-[8px] font-black text-secondary px-2 py-0.5 rounded bg-secondary/10">Today</span>
            </div>

            {/* Attendance checklist */}
            <div className="flex flex-col gap-2.5">
              {[
                { name: "Sophia Martinez", status: "Present", color: "text-primary bg-primary/10 border-primary/20" },
                { name: "Daniel Henderson", status: "Present", color: "text-primary bg-primary/10 border-primary/20" },
                { name: "Eleanor Vance", status: "Absent (Alerted)", color: "text-secondary bg-secondary/10 border-secondary/20" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl border border-border/30 bg-background/50">
                  <span className="text-[10px] font-bold text-text">{s.name}</span>
                  <span className={`text-[8px] font-extrabold px-2 py-0.5 rounded-full border ${s.color}`}>
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case "fees":
        return (
          <div className="w-full bg-surface border border-border/80 rounded-2xl shadow-xl p-5 flex flex-col gap-4 dark:bg-[#1E2824]/95">
            <div className="flex items-center justify-between pb-3 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text">Collections Ledger</span>
              </div>
              <span className="text-[9px] font-serif font-black text-text">$14,250 Pending</span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-background/50 border border-border/30 p-3 rounded-xl flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-text">Sophia Martinez</span>
                  <span className="text-[7.5px] text-muted">Term 3 Tuition Fee</span>
                </div>
                <span className="text-[8px] font-extrabold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">PAID</span>
              </div>
              <div className="bg-background/50 border border-border/30 p-3 rounded-xl flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-text">Daniel Henderson</span>
                  <span className="text-[7.5px] text-muted">Lab Science Fee</span>
                </div>
                <span className="text-[8px] font-extrabold text-secondary bg-secondary/10 border border-secondary/20 px-2 py-0.5 rounded-full">PENDING</span>
              </div>
            </div>
          </div>
        );
      case "parent":
        return (
          <div className="w-64 bg-surface border-4 border-border rounded-[28px] shadow-2xl p-4 flex flex-col gap-3.5 dark:bg-[#1E2824]/95 mx-auto relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
            <div className="flex justify-between items-center px-1 text-[7.5px] font-bold text-muted border-b border-border/20 pb-2">
              <span>Parent Portal App</span>
              <span>100% Charged</span>
            </div>

            {/* Notification alert */}
            <div className="bg-background border border-border/30 rounded-xl p-2.5 flex flex-col gap-1.5 shadow-sm mt-1">
              <div className="flex items-center gap-1.5 text-[7px] font-bold text-secondary">
                <Bell className="h-2.5 w-2.5" />
                <span>ABSENCE ALERT</span>
              </div>
              <p className="text-[8.5px] font-bold text-text leading-tight">Eleanor Vance marked absent today.</p>
              <span className="text-[7px] text-primary font-black mt-0.5">Acknowledge Alert</span>
            </div>

            {/* Chat Box */}
            <div className="bg-background border border-border/30 rounded-xl p-2.5 flex flex-col gap-2.5 shadow-sm">
              <div className="flex items-center gap-1 text-[7px] font-bold text-primary">
                <MessageSquare className="h-2.5 w-2.5" />
                <span>Mrs. Jenkins (Grade 11 Advisor)</span>
              </div>
              <div className="bg-primary/5 rounded-lg p-2 text-[8px] text-text font-medium leading-snug">
                Sophia scored 95% on the chemistry assignment today!
              </div>
            </div>
          </div>
        );
      case "teacher":
        return (
          <div className="w-full bg-surface border border-border/80 rounded-2xl shadow-xl p-5 flex flex-col gap-4 dark:bg-[#1E2824]/95">
            <div className="flex items-center justify-between pb-3 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text">Class Schedule</span>
              </div>
              <span className="text-[8.5px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">Teacher View</span>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { time: "09:00 AM", subject: "Algebra II", room: "Room 102", status: "Active" },
                { time: "10:30 AM", subject: "Physics I", room: "Science Lab C", status: "Next" },
              ].map((c, i) => (
                <div key={i} className="p-2.5 rounded-xl border border-border/30 bg-background/50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9.5px] font-bold text-text">{c.subject}</span>
                    <span className="text-[7.5px] text-muted">{c.time} &bull; {c.room}</span>
                  </div>
                  <span className={`text-[7.5px] font-extrabold px-2 py-0.5 rounded ${c.status === "Active" ? "bg-primary/10 text-primary" : "bg-muted/10 text-muted"}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="w-full bg-surface border border-border/80 rounded-2xl shadow-xl p-5 flex flex-col gap-4 dark:bg-[#1E2824]/95">
            <div className="flex items-center justify-between pb-3 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text">Analytics Report</span>
              </div>
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-background border border-border/40 p-3 rounded-xl flex flex-col justify-between h-16">
                <span className="text-[7.5px] font-bold text-muted uppercase">Term Collections</span>
                <span className="text-sm font-bold text-text">$124,850</span>
              </div>
              <div className="bg-background border border-border/40 p-3 rounded-xl flex flex-col justify-between h-16">
                <span className="text-[7.5px] font-bold text-muted uppercase">Attendance Rate</span>
                <span className="text-sm font-bold text-primary">98.4%</span>
              </div>
            </div>

            <div className="bg-background border border-border/40 p-3 rounded-xl flex flex-col gap-1.5">
              <span className="text-[8px] font-bold text-text">Revenue Growth</span>
              <div className="h-8 flex items-end gap-1.5 pt-1">
                {[30, 50, 40, 75, 60, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/20 rounded-t-sm h-full relative" style={{ height: `${h}%` }}>
                    {i === 5 && <div className="absolute inset-0 bg-primary rounded-t-sm" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="interface-showcase" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Editorial vector lines behind showcase */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.07] text-primary" fill="none" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path d="M-100,300 C300,150 500,450 900,300 C1300,150 1500,550 1600,400" stroke="currentColor" strokeWidth="1.5" />
        <path d="M-100,650 C200,550 600,750 1000,600 C1300,500 1500,800 1600,700" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" />
      </svg>

      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
            INTERFACE SHOWCASE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight">
            Designed for Intuition
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted leading-relaxed font-medium">
            Explore the clean presentation and beautiful SaaS dashboards tailored for every role in your institution.
          </p>
        </div>

        {/* Dynamic Layout Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Tab Menu Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2 bg-surface-muted/30 border border-border/50 p-2.5 rounded-[24px]">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative w-full text-left px-4.5 py-4 rounded-[16px] text-sm font-bold transition-all flex flex-col gap-1 group cursor-pointer"
              >
                {/* Active Slider Background */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-interface-tab-bg"
                    className="absolute inset-0 bg-surface border border-border/80 rounded-[16px] shadow-sm z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className={`transition-colors ${activeTab === tab.id ? "text-primary font-black" : "text-text"}`}>
                    {tab.label}
                  </span>
                  <ArrowRight className={`h-4 w-4 transition-all ${
                    activeTab === tab.id 
                      ? "text-primary translate-x-0 opacity-100" 
                      : "text-muted/0 translate-x-[-4px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-text/60"
                  }`} />
                </div>
                <span className={`relative z-10 text-xs font-medium transition-colors ${activeTab === tab.id ? "text-muted font-bold" : "text-muted/70"}`}>
                  {tab.shortDesc}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Layered Stack Mockup Viewport */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[420px] md:min-h-[500px]">
            {/* Visual stacked offset mockups in background */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="absolute w-[95%] h-[85%] border border-border/40 rounded-2xl bg-surface/20 shadow-sm rotate-[2deg] translate-x-4 translate-y-4 z-0 scale-[0.97]" />
              <div className="absolute w-[95%] h-[85%] border border-border/40 rounded-2xl bg-surface/10 shadow-sm rotate-[-2deg] -translate-x-4 -translate-y-4 z-0 scale-[0.95]" />
            </div>

            {/* Main Interactive Screen with transition animation */}
            <div className="w-full relative z-10 flex justify-center items-center px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex justify-center"
                >
                  {renderScreenMockup(activeTab)}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
