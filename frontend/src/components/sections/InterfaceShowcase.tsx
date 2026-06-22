"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  Search,
  Bell,
  Sparkles,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Award
} from "lucide-react";
import { Container } from "@/components/ui/Container";

type PortalType = "admin" | "teacher" | "parent" | "student";

interface Portal {
  id: PortalType;
  label: string;
  title: string;
  description: string;
}

const PORTALS: Portal[] = [
  {
    id: "admin",
    label: "Admin Dashboard",
    title: "Configure policies and audit financial flows.",
    description: "A centralized system for registrar records, invoice schedules, bulk student intake registry, and analytics audit dashboards."
  },
  {
    id: "teacher",
    label: "Teacher Dashboard",
    title: "Lightweight toolkits built for instruction.",
    description: "Manage grades records, classroom schedules, course syllabi, and dispatch daily attendance absence sheet indicators."
  },
  {
    id: "parent",
    label: "Parent Portal",
    title: "Keeping families updated on progress.",
    description: "A dedicated mobile-responsive viewport for invoice payments, homework schedules, attendance logs, and text dialogue channels."
  },
  {
    id: "student",
    label: "Student Portal",
    title: "Active learning profiles for pupils.",
    description: "Access course materials, log homework files, track semester GPA scores, and verify test schedules."
  }
];

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function InterfaceShowcase() {
  const [activeTab, setActiveTab] = useState<PortalType>("admin");

  const activePortal = PORTALS.find((p) => p.id === activeTab)!;

  const renderDashboardMockup = () => {
    switch (activeTab) {
      case "admin":
        return (
          <div className="w-full bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-border/30 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-wider text-text">SchoolManager Admin</span>
              </div>
              <div className="h-6 w-24 bg-background border border-border/60 rounded flex items-center px-2 text-[8px] text-muted">
                <Search className="h-2.5 w-2.5 mr-1" />
                <span>Search files...</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1 border-r border-border/20 pr-2 flex flex-col gap-1">
                {["Overview", "Registrar", "Billing", "Reports"].map((label, idx) => (
                  <span
                    key={label}
                    className={`text-[8.5px] font-bold p-1 rounded transition-colors ${
                      idx === 0 ? "bg-primary/10 text-primary" : "text-muted hover:bg-background"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="col-span-2 flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-background border border-border/30 p-2 rounded flex flex-col justify-between h-14">
                    <span className="text-[7.5px] font-bold text-muted uppercase">Term Revenue</span>
                    <span className="text-xs font-bold text-text">$124,850</span>
                  </div>
                  <div className="bg-background border border-border/30 p-2 rounded flex flex-col justify-between h-14">
                    <span className="text-[7.5px] font-bold text-muted uppercase">Attendance Rate</span>
                    <span className="text-xs font-bold text-primary">98.4%</span>
                  </div>
                </div>
                <div className="bg-background border border-border/30 p-2 rounded flex flex-col gap-1.5">
                  <span className="text-[8px] font-bold text-text">Invoiced Ledger</span>
                  <div className="h-6 flex items-end gap-1">
                    {[35, 60, 45, 90, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/20 rounded-t-xs h-full" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "teacher":
        return (
          <div className="w-full bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-border/30 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
                <span className="text-[10px] font-black uppercase tracking-wider text-text">Teacher Dashboard</span>
              </div>
              <span className="text-[8px] bg-secondary/15 text-secondary border border-secondary/20 px-2 py-0.5 rounded font-black">Class 11-A</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[8px] font-bold text-muted border-b border-border/10 pb-1">
                <span>STUDENT LOG</span>
                <span>STATUS</span>
              </div>
              {[
                { name: "Sophia Martinez", status: "Present", color: "text-primary bg-primary/10" },
                { name: "Daniel Henderson", status: "Present", color: "text-primary bg-primary/10" },
                { name: "Eleanor Vance", status: "Absent", color: "text-secondary bg-secondary/10" },
              ].map((s, i) => (
                <div key={i} className="flex justify-between items-center p-2 rounded-lg border border-border/20 bg-background/50">
                  <span className="text-[9.5px] font-bold text-text">{s.name}</span>
                  <span className={`text-[7.5px] font-black px-2 py-0.5 rounded-full ${s.color}`}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "parent":
        return (
          <div className="w-60 bg-white dark:bg-[#151F21] border-4 border-border rounded-[28px] shadow-xl p-4 flex flex-col gap-3 mx-auto relative overflow-hidden" style={{ aspectRatio: "9/16" }}>
            <div className="flex justify-between items-center px-1 text-[7px] font-bold text-muted border-b border-border/20 pb-2">
              <span>Parent Portal App</span>
              <span>100% Charged</span>
            </div>
            
            <div className="bg-background border border-border/30 rounded-xl p-2.5 flex flex-col gap-1 mt-1 shadow-sm">
              <span className="text-[7.5px] font-bold text-secondary uppercase">ABSENCE ALERT</span>
              <p className="text-[8.5px] font-bold text-text leading-tight">Eleanor Vance marked absent today.</p>
              <span className="text-[7px] text-primary font-black mt-1">Acknowledge Alert</span>
            </div>

            <div className="bg-background border border-border/30 rounded-xl p-2.5 flex flex-col gap-2 shadow-sm">
              <span className="text-[7.5px] font-bold text-primary uppercase">MESSAGE SUMMARY</span>
              <div className="bg-primary/5 rounded-lg p-2 text-[8px] text-text font-medium leading-snug">
                Sophia scored 95% on the chemistry assignment today!
              </div>
            </div>
          </div>
        );
      case "student":
        return (
          <div className="w-full bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-border/30 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-[10px] font-black uppercase tracking-wider text-text">Student Portal</span>
              </div>
              <span className="text-[8.5px] font-bold px-2 py-0.5 rounded bg-background border border-border/60 text-text">GPA: 3.92</span>
            </div>
            
            <div className="grid grid-cols-2 gap-3.5">
              <div className="flex flex-col gap-2">
                <span className="text-[7.5px] font-bold text-muted uppercase">CLASSES TODAY</span>
                {[
                  { title: "Algebra II", time: "09:00 AM" },
                  { title: "Physics I", time: "10:30 AM" },
                ].map((c, i) => (
                  <div key={i} className="p-2 rounded bg-background border border-border/20 flex flex-col">
                    <span className="text-[9.5px] font-bold text-text">{c.title}</span>
                    <span className="text-[7.5px] text-muted">{c.time}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[7.5px] font-bold text-muted uppercase">HOMEWORK</span>
                <div className="bg-background border border-border/20 p-2 rounded flex flex-col gap-1">
                  <span className="text-[9.5px] font-bold text-text">Lab Report</span>
                  <span className="text-[7.5px] text-secondary font-black">Due Tomorrow</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="solutions" className="py-24 md:py-36 bg-white dark:bg-[#0E1516] scroll-section">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            PRODUCT SHOWCASE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-tight text-text leading-none">
            Tailored roles, unified.
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold">
            Observe the clean portals engineered for administrators, classroom educators, parents, and students.
          </p>
        </div>

        {/* Tab Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto mt-16">
          
          {/* Tabs Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-2 bg-[#F8FAFA] dark:bg-[#151F21]/40 border border-border/50 p-2 rounded-2xl">
            {PORTALS.map((portal) => (
              <button
                key={portal.id}
                onClick={() => setActiveTab(portal.id)}
                className="relative w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between group cursor-pointer"
              >
                {activeTab === portal.id && (
                  <motion.div
                    layoutId="active-showcase-tab-bg-v3"
                    className="absolute inset-0 bg-white dark:bg-[#151F21] border border-border/60 dark:border-white/10 rounded-xl shadow-xs z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${activeTab === portal.id ? "text-primary font-black" : "text-muted hover:text-text"}`}>
                  {portal.label}
                </span>
                <ArrowRight className={`h-3 w-3 relative z-10 transition-all ${
                  activeTab === portal.id ? "text-primary opacity-100 translate-x-0" : "opacity-0 translate-x-[-2px]"
                }`} />
              </button>
            ))}
          </div>

          {/* Tab Viewer panel */}
          <div className="lg:col-span-8 flex justify-center items-center min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: LUXURY_EASE }}
                className="w-full max-w-md"
              >
                {renderDashboardMockup()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </Container>
    </section>
  );
}
