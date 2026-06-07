import { School, Settings, LineChart } from "lucide-react";
import type { Step } from "@/types";

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Add School",
    description:
      "Register your school and configure basic settings in minutes.",
    icon: School,
  },
  {
    number: 2,
    title: "Manage Operations",
    description:
      "Add students, staff, and classes. Set up attendance and fee rules.",
    icon: Settings,
  },
  {
    number: 3,
    title: "Track Progress",
    description:
      "Monitor real-time reports, communicate with parents, and grow.",
    icon: LineChart,
  },
];
