"use client";

import { Container } from "@/components/ui/Container";

const PILLARS = [
  {
    label: "Student Management",
    items: [
      "Student Profiles",
      "Admissions",
      "Academic Records",
      "Class Allocation"
    ],
    leftVw: 2.8,
    bottomVw: 7
  },

  {
    label: "Attendance Tracking",
    items: [
      "Daily Attendance",
      "Leave Requests",
      "Teacher Logs",
      "Real-Time Reports"
    ],
    leftVw: 22.4,
    bottomVw: 9.08
  },

  {
    label: "Fee Management",
    items: [
      "Fee Collection",
      "Payment History",
      "Due Tracking",
      "Invoices"
    ],
    leftVw: 41.2,
    bottomVw: 11.16
  },

  {
    label: "Parent Communication",
    items: [
      "Announcements",
      "Parent Portal",
      "Messages",
      "Notifications"
    ],
    leftVw: 61.1,
    bottomVw: 13.24
  }
];

export function SchoolERPFeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-36 bg-[#F8FAFA] font-sans">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-[#2CAFB0] uppercase block mb-3">
            SchoolManager Features
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#111827] leading-none">
            Everything Your School Needs.
          </h2>
          <div className="mt-3.5 text-base md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2CAFB0] to-[#7CC8C7] uppercase tracking-wider">
            One Unified ERP Platform.
          </div>
          <p className="mt-6 text-xs md:text-sm text-[#6B7280] leading-relaxed font-normal max-w-xl mx-auto">
            Manage students, attendance, communication, staff, and finances from one centralized platform designed for modern educational institutions.
          </p>
        </div>

        {/* Desktop Staircase Layout (Hidden on Mobile/Tablet) */}
        <div className="hidden lg:block relative w-full h-[32vw] min-h-[460px] bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-xs mb-12">
          
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
            <div className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-[#E5E7EB] via-[#E5E7EB]/50 to-transparent" />
            <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-gradient-to-r from-[#E5E7EB] via-[#E5E7EB]/50 to-transparent" />
            <div className="absolute top-[60%] left-0 right-0 h-[1px] bg-gradient-to-r from-[#E5E7EB] via-[#E5E7EB]/50 to-transparent" />
            <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-gradient-to-r from-[#E5E7EB] via-[#E5E7EB]/50 to-transparent" />
            
            <div className="absolute left-[20vw] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5E7EB]/30 to-transparent" />
            <div className="absolute left-[40vw] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5E7EB]/30 to-transparent" />
            <div className="absolute left-[60vw] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5E7EB]/30 to-transparent" />
            <div className="absolute left-[80vw] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#E5E7EB]/30 to-transparent" />
          </div>

          {/* Stepped Connection Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="staircaseGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2CAFB0" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#7CC8C7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2CAFB0" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M 0 85 L 2.8 80 L 22.4 74.1 L 41.2 68.1 L 61.1 62.2 L 100 55"
              fill="none"
              stroke="url(#staircaseGrad)"
              strokeWidth="0.2"
              strokeDasharray="0.6 0.6"
            />
          </svg>

          {/* Staircase Pillars mapping */}
          {PILLARS.map((pillar) => {
            return (
              <div
                key={pillar.label}
                className="absolute bg-white border border-[#E5E7EB] rounded-2xl p-[1.5vw] shadow-xs flex flex-col justify-between z-10"
                style={{
                  left: `${pillar.leftVw}vw`,
                  bottom: `${pillar.bottomVw}vw`,
                  width: "17vw",
                  height: "15vw",
                  minHeight: "220px"
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-2 w-2 rounded-full bg-[#2CAFB0] shrink-0" />
                    <h4 className="font-sans font-bold text-xs xl:text-sm text-[#111827] leading-tight">
                      {pillar.label}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="font-sans font-normal text-[10px] xl:text-xs text-[#6B7280] flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#7CC8C7] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Alternating Layout (Hidden on Desktop) */}
        <div className="lg:hidden flex flex-col gap-6 w-full max-w-md mx-auto mb-12">
          {PILLARS.map((pillar, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={pillar.label}
                className={`bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs flex flex-col ${
                  isEven ? "items-start text-left" : "items-end text-right"
                }`}
              >
                <div className={`flex items-center gap-2 mb-3.5 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="h-2.5 w-2.5 rounded-full bg-[#2CAFB0] shrink-0" />
                  <h4 className="font-sans font-bold text-base text-[#111827]">
                    {pillar.label}
                  </h4>
                </div>
                <ul className={`space-y-2.5 w-full flex flex-col ${isEven ? "items-start" : "items-end"}`}>
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="font-sans font-normal text-xs text-[#6B7280] flex items-center gap-2"
                    >
                      {isEven && <span className="h-1 w-1 rounded-full bg-[#7CC8C7] shrink-0" />}
                      {item}
                      {!isEven && <span className="h-1 w-1 rounded-full bg-[#7CC8C7] shrink-0" />}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Centered Premium Cards (Fifth and Sixth blocks) */}
        <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
          
          {/* Block 5: Staff Management */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <div className="h-3 w-3 rounded-full bg-[#2CAFB0] shrink-0 mt-1" />
              <div>
                <h4 className="font-sans font-bold text-base md:text-lg text-[#111827] leading-none">
                  Staff Management
                </h4>
                <p className="font-sans font-normal text-xs text-[#6B7280] mt-2 max-w-xs leading-normal">
                  Supervise teaching payroll schedules, teacher records, roles allocation, and performance logs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 shrink-0">
              {[
                "Teacher Records",
                "Payroll",
                "Department Management",
                "Performance Tracking"
              ].map((item) => (
                <div key={item} className="font-sans font-normal text-xs text-[#6B7280] flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#7CC8C7] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Block 6: Mobile App Access */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-3">
              <div className="h-3 w-3 rounded-full bg-[#2CAFB0] shrink-0 mt-1" />
              <div>
                <h4 className="font-sans font-bold text-base md:text-lg text-[#111827] leading-none">
                  Mobile App Access
                </h4>
                <p className="font-sans font-normal text-xs text-[#6B7280] mt-2 max-w-xs leading-normal">
                  Provide custom apps and push notification pipelines for parents, students, and educators.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 shrink-0">
              {[
                "Student App",
                "Parent App",
                "Teacher App",
                "Push Notifications"
              ].map((item) => (
                <div key={item} className="font-sans font-normal text-xs text-[#6B7280] flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#7CC8C7] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
