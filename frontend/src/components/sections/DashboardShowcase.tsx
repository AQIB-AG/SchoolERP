"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  BarChart3,
  CreditCard,
  GraduationCap,
  MessageSquare,
  CalendarCheck,
  CheckCircle,
  FileText,
  User,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Bookmark,
  Bell,
  Search,
  BookOpen
} from "lucide-react";
import { Container } from "@/components/ui/Container";

type PortalType = "admin" | "teacher" | "parent" | "student";

interface PortalTab {
  id: PortalType;
  label: string;
  title: string;
  description: string;
  bullets: string[];
}

const PORTALS: PortalTab[] = [
  {
    id: "admin",
    label: "Admin Dashboard",
    title: "Institutional operations in perfect sync.",
    description: "Equip your administrators with a complete institutional operating system. Monitor financial flows, configure classroom policies, manage staff roles, and track system health metrics from one central hub.",
    bullets: [
      "Real-time revenue & collections ledger",
      "Automated bulk student registration workflows",
      "Dynamic campus scheduling engine",
      "Institution-wide KPI report generations"
    ]
  },
  {
    id: "teacher",
    label: "Teacher Portal",
    title: "Elevating the art of classroom instruction.",
    description: "Empower educators with lightweight class utilities. Manage grades record books, run daily attendance checks, track curriculum milestones, and message parent councils without leaving the instruction view.",
    bullets: [
      "Quick attendance registry logs with automated alerts",
      "Integrated coursework planner & assignment grading",
      "Direct channel messaging to families & students",
      "Academic performance charts per class section"
    ]
  },
  {
    id: "parent",
    label: "Parent Mobile App",
    title: "Keeping families close to the classroom.",
    description: "Provide parents with immediate visibility into their child's day. A dedicated responsive portal keeps them updated on attendance logs, grade notifications, upcoming billing, and teacher direct messages.",
    bullets: [
      "Direct parent-teacher dialogue channels",
      "Instant push alerts for absences & report cards",
      "One-click mobile tuition payments",
      "Daily activity logs & assignment deadlines"
    ]
  },
  {
    id: "student",
    label: "Student Portal",
    title: "A simplified interface for active learning.",
    description: "Inspire students to stay organized and engaged. A modern portal streamlines homework submissions, displays daily course timetables, tracks overall GPA stats, and highlights test reminders.",
    bullets: [
      "Personalized daily timetable & class lists",
      "Interactive assignments checklist",
      "Progress tracking with historical GPA logs",
      "Extracurricular events calendars"
    ]
  }
];

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState<PortalType>("admin");

  const activePortal = PORTALS.find((p) => p.id === activeTab)!;

  // Render high-fidelity realistic UI dashboard screen for each tab
  const renderDashboardScreen = () => {
    switch (activeTab) {
      case "admin":
        return (
          <motion.div
            key="admin-screen"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
            className="w-full bg-surface border border-border/70 rounded-[28px] shadow-2xl p-5 flex flex-col gap-4 dark:bg-[#1E2824]/90 relative"
          >
            {/* Window header */}
            <div className="flex items-center justify-between pb-3 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-primary text-white">
                  <GraduationCap className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-serif font-black text-text">SchoolManager Admin</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-24 bg-background border border-border/40 rounded-lg flex items-center px-2 text-[9px] text-muted">
                  <Search className="h-2.5 w-2.5 mr-1" />
                  <span>Search records...</span>
                </div>
                <div className="h-6 w-6 rounded-full bg-background border border-border/40 flex items-center justify-center text-text">
                  <Bell className="h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="flex-1 grid grid-cols-3 gap-3">
              {/* Sidebar Navigation mockup */}
              <div className="col-span-1 border-r border-border/40 pr-2.5 flex flex-col gap-1.5 pt-1">
                {[
                  { label: "Overview", icon: BarChart3, active: true },
                  { label: "Student Registry", icon: Users },
                  { label: "Fee Collections", icon: CreditCard },
                  { label: "System Health", icon: Sparkles },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                      item.active ? "bg-primary text-white" : "text-muted hover:bg-primary/5 hover:text-text"
                    }`}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main dashboard stats/grid mockup */}
              <div className="col-span-2 flex flex-col gap-3">
                {/* 2 Stats columns */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-background border border-border/40 p-3 rounded-xl flex flex-col justify-between h-18">
                    <span className="text-[8px] font-bold text-muted uppercase">Term Revenue</span>
                    <span className="text-sm font-bold text-text">$124,850</span>
                  </div>
                  <div className="bg-background border border-border/40 p-3 rounded-xl flex flex-col justify-between h-18">
                    <span className="text-[8px] font-bold text-muted uppercase">Attendance Rate</span>
                    <span className="text-sm font-bold text-primary">98.4%</span>
                  </div>
                </div>

                {/* Collections chart preview with staggered height reveals */}
                <div className="flex-1 bg-background border border-border/40 p-3 rounded-xl flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-text">Monthly Invoice Ledger</span>
                  <div className="flex-1 flex items-end gap-2.5 pt-2">
                    {[30, 60, 45, 90, 80, 95].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.8, ease: LUXURY_EASE, delay: i * 0.05 }}
                          className="w-full bg-primary/20 rounded-t-sm relative"
                        >
                          {i === 5 && <div className="absolute inset-0 bg-primary rounded-t-sm" />}
                        </motion.div>
                        <span className="text-[7px] text-muted font-bold">M{i+1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case "teacher":
        return (
          <motion.div
            key="teacher-screen"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
            className="w-full bg-surface border border-border/70 rounded-[28px] shadow-2xl p-5 flex flex-col gap-4 dark:bg-[#1E2824]/90 relative"
          >
            {/* Window header */}
            <div className="flex items-center justify-between pb-3 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-secondary text-white">
                  <CalendarCheck className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-serif font-black text-text">Teacher Workspace</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary">Class 11-A</span>
              </div>
            </div>

            {/* Attendance checklist list with staggered reveals */}
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex justify-between items-center text-[10px] font-bold text-muted border-b border-border/20 pb-1.5">
                <span>STUDENT CHECK-IN REGISTRY</span>
                <span>STATUS</span>
              </div>
              
              <div className="flex flex-col gap-2">
                {[
                  { name: "Sophia Martinez", roll: "Roll 12", active: true },
                  { name: "Daniel Henderson", roll: "Roll 15", active: true },
                  { name: "Eleanor Vance", roll: "Roll 18", active: false },
                ].map((s, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: LUXURY_EASE, delay: idx * 0.08 }}
                    className="flex justify-between items-center p-2.5 rounded-xl border border-border/30 bg-background"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-6 w-6 rounded-full bg-secondary/15 text-secondary font-bold text-[9px] flex items-center justify-center">
                        {s.name[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-text">{s.name}</span>
                        <span className="text-[8px] text-muted">{s.roll}</span>
                      </div>
                    </div>
                    
                    <button className={`h-6 px-3 rounded-lg text-[9px] font-bold flex items-center justify-center gap-1 transition-all ${
                      s.active 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "bg-secondary/10 text-secondary border border-secondary/20"
                    }`}>
                      <CheckCircle className="h-3 w-3" />
                      <span>{s.active ? "Present" : "Absent"}</span>
                    </button>
                  </motion.div>
                ))}
              </div>
              
              <motion.button 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="w-full h-8 bg-primary hover:bg-primary-hover text-white text-[10px] font-bold rounded-lg mt-2 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <CheckCircle className="h-3.5 w-3.5" />
                <span>Submit Attendance Ledger</span>
              </motion.button>
            </div>
          </motion.div>
        );
      case "parent":
        return (
          <motion.div
            key="parent-screen"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
            className="w-full max-w-[340px] bg-surface border-4 border-border/80 rounded-[32px] shadow-2xl p-4 flex flex-col gap-4 dark:bg-[#1E2824]/90 mx-auto relative overflow-hidden"
            style={{ aspectRatio: "9/16" }}
          >
            {/* Mobile status bar mockup */}
            <div className="flex justify-between items-center px-1 text-[8px] font-bold text-muted border-b border-border/20 pb-2">
              <span>SchoolManager Parents</span>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>LTE</span>
              </div>
            </div>

            {/* Child profile overview toggle */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-background border border-border/30 mt-1">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">E</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text">Eleanor Vance</span>
                  <span className="text-[7.5px] text-muted">Grade 11-A</span>
                </div>
              </div>
              <span className="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-bold">Switch child</span>
            </div>

            {/* Feed items staggered */}
            <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-1">
              {/* Notif 1 */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: LUXURY_EASE, delay: 0.1 }}
                className="bg-background border border-border/30 rounded-xl p-3 flex flex-col gap-1.5 shadow-sm"
              >
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-secondary">
                  <Bell className="h-3 w-3" />
                  <span>ALERT</span>
                </div>
                <p className="text-[9px] font-bold text-text leading-tight">Term 3 report card generated.</p>
                <a href="#" className="text-[7.5px] text-primary font-black inline-flex items-center gap-0.5 mt-1">
                  <span>View Grades Report</span>
                  <ArrowRight className="h-2.5 w-2.5" />
                </a>
              </motion.div>

              {/* Chat thread */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: LUXURY_EASE, delay: 0.2 }}
                className="bg-background border border-border/30 rounded-xl p-3 flex flex-col gap-2.5 shadow-sm"
              >
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-primary">
                  <MessageSquare className="h-3 w-3" />
                  <span>CLASS MESSAGE</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="bg-surface-muted/60 rounded-lg p-2 text-[8px] text-text font-semibold">
                    Liam did exceptionally well in today's exam!
                  </div>
                  <span className="text-[6.5px] text-muted text-right">Delivered 12:42 PM</span>
                </div>
              </motion.div>

              {/* Bill Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: LUXURY_EASE, delay: 0.3 }}
                className="bg-background border border-border/30 rounded-xl p-3 flex flex-col gap-2 shadow-sm"
              >
                <div className="flex items-center justify-between text-[8px] font-bold text-muted border-b border-border/20 pb-1.5">
                  <span>TUITION INVOICE</span>
                  <span className="text-secondary">$1,250</span>
                </div>
                <button className="w-full h-6 bg-primary text-white text-[8px] font-bold rounded-lg shadow-sm flex items-center justify-center">
                  Pay with Credit Card
                </button>
              </motion.div>
            </div>
          </motion.div>
        );
      case "student":
        return (
          <motion.div
            key="student-screen"
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
            className="w-full bg-surface border border-border/70 rounded-[28px] shadow-2xl p-5 flex flex-col gap-4 dark:bg-[#1E2824]/90 relative"
          >
            {/* Window header */}
            <div className="flex items-center justify-between pb-3 border-b border-border/30">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded bg-accent text-text">
                  <BookOpen className="h-3.5 w-3.5" />
                </div>
                <span className="text-[11px] font-serif font-black text-text">Student Portal</span>
              </div>
              <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-background border border-border/40 text-text">GPA: 3.92</span>
            </div>

            {/* Timetable planner with staggered reveals */}
            <div className="flex-1 grid grid-cols-12 gap-3.5">
              {/* Timetable slots */}
              <div className="col-span-7 flex flex-col gap-2">
                <span className="text-[8px] font-bold text-muted uppercase tracking-wider block mb-1">CLASSES TODAY</span>
                {[
                  { time: "09:00 AM", title: "Algebra II", code: "MAT-201", room: "Room 102", active: true },
                  { time: "10:30 AM", title: "Physics I", code: "PHY-110", room: "Lab C", active: false },
                  { time: "01:00 PM", title: "English Comp", code: "ENG-104", room: "Room 304", active: false },
                ].map((c, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: LUXURY_EASE, delay: idx * 0.08 }}
                    className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                      c.active ? "bg-primary/5 border-primary/20 shadow-sm" : "bg-background border-border/30"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`h-1.5 w-1.5 rounded-full ${c.active ? "bg-primary" : "bg-muted/40"}`} />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-text leading-tight">{c.title}</span>
                        <span className="text-[7px] text-muted mt-0.5">{c.time} &bull; {c.code}</span>
                      </div>
                    </div>
                    <span className="text-[7.5px] font-bold text-muted bg-background border border-border/20 px-1.5 py-0.5 rounded">{c.room}</span>
                  </motion.div>
                ))}
              </div>

              {/* Todo checklist */}
              <div className="col-span-5 flex flex-col gap-2 border-l border-border/20 pl-3.5">
                <span className="text-[8px] font-bold text-muted uppercase tracking-wider block mb-1">HOMEWORK INBOX</span>
                {[
                  { task: "Biology Lab Report", status: "Due tomorrow", urgent: true },
                  { task: "History Quiz Chapter 5", status: "Friday", urgent: false },
                ].map((t, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: LUXURY_EASE, delay: 0.15 + idx * 0.1 }}
                    className="bg-background border border-border/30 p-2.5 rounded-xl flex flex-col gap-1 shadow-sm"
                  >
                    <span className="text-[9px] font-bold text-text leading-tight">{t.task}</span>
                    <span className={`text-[7px] font-extrabold ${t.urgent ? "text-secondary" : "text-muted"}`}>{t.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="dashboard-showcase" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Persona Details & Tabs selector */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">
              INTERACTIVE PREVIEW
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight mb-6">
              One platform, four tailored portals.
            </h2>

            {/* Premium tab buttons selector container */}
            <div className="flex flex-col gap-2 mb-8 bg-surface-muted/30 border border-border/50 p-2 rounded-[20px]">
              {PORTALS.map((portal) => (
                <button
                  key={portal.id}
                  onClick={() => setActiveTab(portal.id)}
                  className="relative w-full text-left px-4.5 py-3.5 rounded-[12px] text-sm font-bold transition-all flex items-center justify-between group cursor-pointer"
                >
                  {/* Sliding layout selector bg */}
                  {activeTab === portal.id && (
                    <motion.div
                      layoutId="active-showcase-tab-bg"
                      className="absolute inset-0 bg-surface border border-border/70 rounded-[12px] shadow-sm z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${activeTab === portal.id ? "text-primary font-black" : "text-muted hover:text-text"}`}>
                    {portal.label}
                  </span>
                  <ArrowRight className={`h-4 w-4 relative z-10 transition-all ${
                    activeTab === portal.id 
                      ? "text-primary translate-x-0 opacity-100" 
                      : "text-muted/0 translate-x-[-4px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-text/60"
                  }`} />
                </button>
              ))}
            </div>

            {/* Persona Content Display Panel */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePortal.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: LUXURY_EASE }}
                >
                  <h3 className="font-serif text-2xl font-bold text-text mb-4">
                    {activePortal.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed font-medium mb-6">
                    {activePortal.description}
                  </p>
                  
                  {/* Custom checklist bullets */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                    {activePortal.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-bold text-text">
                        <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Dynamic Mockup Screen Layout */}
          <div className="lg:col-span-7 flex justify-center items-center relative min-h-[420px] md:min-h-[500px]">
            {/* Visual Screen Wrapper Container */}
            <div className="w-full flex justify-center items-center">
              <AnimatePresence mode="wait">
                {renderDashboardScreen()}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
