"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  Search,
  Bell,
  Sparkles,
  BookOpen,
  CheckCircle,
  FileText
} from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="w-full relative max-w-2xl mx-auto lg:max-w-none">
      {/* Visual layered background plates for depth */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="absolute w-[98%] h-[92%] border border-border/40 dark:border-white/5 rounded-2xl bg-surface/30 dark:bg-surface/5 shadow-xs rotate-[1deg] translate-x-2 translate-y-2 scale-[0.99] z-0" />
        <div className="absolute w-[98%] h-[92%] border border-border/40 dark:border-white/5 rounded-2xl bg-surface/10 dark:bg-surface/5 shadow-xs rotate-[-1deg] -translate-x-2 -translate-y-2 scale-[0.98] z-0" />
      </div>

      {/* Main mockup viewport */}
      <div className="w-full relative z-10 bg-white dark:bg-[#151F21] border border-border/80 dark:border-white/10 rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-4 md:gap-5 overflow-hidden">
        
        {/* Window controls and header */}
        <div className="flex items-center justify-between pb-3 border-b border-border/30 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 block" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80 block" />
            </div>
            <div className="h-4 w-px bg-border/40 dark:bg-white/10 mx-1" />
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black uppercase tracking-wider text-text">SchoolManager Portal</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6.5 w-24 md:w-36 bg-background border border-border/60 dark:border-white/10 rounded-md flex items-center px-2 text-[8px] text-muted">
              <Search className="h-2.5 w-2.5 mr-1 shrink-0" />
              <span className="truncate">Search files...</span>
            </div>
            <div className="h-6.5 w-6.5 rounded-full bg-background border border-border/60 dark:border-white/10 flex items-center justify-center text-text relative">
              <Bell className="h-3 w-3" />
              <span className="absolute top-1.5 right-1.5 h-1 w-1 bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Left: Student Records & Fees */}
          <div className="md:col-span-7 flex flex-col gap-4">
            
            {/* Student Records card */}
            <div className="bg-background/50 dark:bg-surface-muted/30 border border-border/50 dark:border-white/5 rounded-xl p-4 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-border/20 dark:border-white/5 mb-3">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-text">Student Records</span>
                </div>
                <span className="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-black">942 Active</span>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Sophia Martinez", grade: "Grade 11-A", code: "STU-2042", avatar: "SM" },
                  { name: "Daniel Henderson", grade: "Grade 10-B", code: "STU-2051", avatar: "DH" },
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg border border-border/20 dark:border-white/5 bg-white dark:bg-surface/40">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-primary/10 text-primary text-[8px] font-black flex items-center justify-center">
                        {s.avatar}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9.5px] font-bold text-text leading-none">{s.name}</span>
                        <span className="text-[7.5px] text-muted mt-0.5">{s.grade} &bull; {s.code}</span>
                      </div>
                    </div>
                    <span className="h-1 w-1 rounded-full bg-primary" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tuition Fees card */}
            <div className="bg-background/50 dark:bg-surface-muted/30 border border-border/50 dark:border-white/5 rounded-xl p-4 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-border/20 dark:border-white/5 mb-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-secondary" />
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-text">Tuition Billing ledger</span>
                </div>
                <span className="text-[8px] text-text font-black">$12,450 Pending</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="p-2 rounded-lg border border-border/20 bg-white dark:bg-surface/40 flex items-center justify-between text-[9px]">
                  <span className="font-bold text-text">Term 3 Invoice &bull; Sophia</span>
                  <span className="text-[8px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-black">PAID</span>
                </div>
                <div className="p-2 rounded-lg border border-border/20 bg-white dark:bg-surface/40 flex items-center justify-between text-[9px]">
                  <span className="font-bold text-text">Science Lab Fee &bull; Daniel</span>
                  <span className="text-[8px] bg-secondary/15 text-secondary px-1.5 py-0.5 rounded font-black">PENDING</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Attendance, Communication, Exams */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            {/* Attendance card */}
            <div className="bg-background/50 dark:bg-surface-muted/30 border border-border/50 dark:border-white/5 rounded-xl p-4 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <CalendarCheck className="h-4 w-4 text-primary" />
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-text">Daily Attendance</span>
                </div>
                <span className="text-[9.5px] font-black text-primary">98.4%</span>
              </div>
              <div className="h-1.5 w-full bg-border/40 dark:bg-white/10 rounded-full overflow-hidden mb-1">
                <div className="h-full bg-primary rounded-full w-[94%]" />
              </div>
              <span className="text-[7.5px] text-muted font-bold block text-right">940 checked-in today</span>
            </div>

            {/* Parent Communication chat alert */}
            <div className="bg-background/50 dark:bg-surface-muted/30 border border-border/50 dark:border-white/5 rounded-xl p-4 shadow-xs flex flex-col gap-2">
              <div className="flex items-center gap-1.5 border-b border-border/20 pb-1.5">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-text">Parent Advisor Chat</span>
              </div>
              <div className="bg-white dark:bg-surface/40 p-2 rounded-lg text-[8px] text-text font-medium leading-snug border border-border/10">
                <div className="flex justify-between font-bold text-primary mb-0.5">
                  <span>Mrs. Jenkins</span>
                  <span className="text-muted font-normal text-[7px]">11:20 AM</span>
                </div>
                <p className="font-semibold">Sophia scored 95% in the chemistry exam!</p>
              </div>
            </div>

            {/* Exam Marks card */}
            <div className="bg-background/50 dark:bg-surface-muted/30 border border-border/50 dark:border-white/5 rounded-xl p-4 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-secondary" />
                  <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-text">Exam Ledger</span>
                </div>
                <span className="text-[8px] bg-secondary/15 text-secondary border border-secondary/20 px-1.5 py-0.5 rounded font-black uppercase">Term 2</span>
              </div>
              <div className="flex flex-col gap-1.5 text-[8.5px] font-bold text-text">
                <div className="flex justify-between border-b border-border/10 pb-1">
                  <span>Algebra II Mark</span>
                  <span className="text-primary">A (94%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Physics I Mark</span>
                  <span className="text-primary">A- (90%)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
