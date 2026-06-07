import {
  GraduationCap,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  Briefcase,
  Smartphone,
} from "lucide-react";
import type { Feature } from "@/types";

export const FEATURES: Feature[] = [
  {
    title: "Student Management",
    description:
      "Centralize enrollment, academic records, and student profiles in one secure hub.",
    icon: GraduationCap,
  },
  {
    title: "Attendance Tracking",
    description:
      "Real-time daily attendance with automated absence alerts to parents.",
    icon: CalendarCheck,
  },
  {
    title: "Fee Management",
    description:
      "Generate invoices, track payments, and send automated fee reminders.",
    icon: CreditCard,
  },
  {
    title: "Parent Communication",
    description:
      "Direct messaging, announcements, and a digital notice board for families.",
    icon: MessageSquare,
  },
  {
    title: "Staff Management",
    description:
      "Manage staff profiles, roles, schedules, and payroll from one dashboard.",
    icon: Briefcase,
  },
  {
    title: "Mobile App Access",
    description:
      "Full-featured mobile experience for admins, teachers, parents, and students.",
    icon: Smartphone,
  },
];
