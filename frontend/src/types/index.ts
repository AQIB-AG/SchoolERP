import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: string[];
  popular?: boolean;
  cta: string;
  customPricing?: boolean;
}

export interface Testimonial {
  name: string;
  school: string;
  designation: string;
  review: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  category: string;
  image: string;
  slug: string;
  excerpt: string;
  date: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  schoolName: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  submittedAt: string;
}

export interface ToastMessage {
  id: string;
  type: "success" | "error";
  message: string;
}
