import type { PricingPlan } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for small schools getting started",
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: [
      "Up to 200 students",
      "Student & attendance management",
      "Basic fee tracking",
      "Email support",
      "Mobile app access",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "Most popular for growing institutions",
    monthlyPrice: 49,
    yearlyPrice: 490,
    popular: true,
    features: [
      "Up to 1,000 students",
      "All Starter features",
      "Parent communication portal",
      "Advanced analytics & reports",
      "Staff management",
      "Priority support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "Custom solution for large school networks",
    monthlyPrice: null,
    yearlyPrice: null,
    customPricing: true,
    features: [
      "Unlimited students",
      "All Professional features",
      "Multi-campus support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA & onboarding",
    ],
    cta: "Contact Sales",
  },
];
