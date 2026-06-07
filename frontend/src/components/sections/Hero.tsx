"use client";

import { motion } from "framer-motion";
import {
  Users,
  BarChart3,
  CreditCard,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const dashboardCards = [
  {
    icon: Users,
    label: "Student Count",
    value: "2,450",
    change: "+12%",
    color: "bg-primary/10 text-primary dark:bg-primary/20",
  },
  {
    icon: BarChart3,
    label: "Attendance Rate",
    value: "94.2%",
    change: "Today",
    color: "bg-success/10 text-success dark:bg-success/20",
  },
  {
    icon: CreditCard,
    label: "Fee Collection",
    value: "$48.2K",
    change: "+8%",
    color: "bg-secondary/10 text-secondary dark:bg-secondary/20",
  },
  {
    icon: HeartHandshake,
    label: "Parent Engagement",
    value: "87%",
    change: "+15%",
    color: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <Container className="relative pb-16 md:pb-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-6">
              All-in-One School Management Platform
            </Badge>

            <h1 className="text-[36px] font-bold leading-[1.1] tracking-tight text-text sm:text-[44px] lg:text-[56px]">
              Manage Your Entire School From One Powerful Platform
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted">
              SchoolManager helps schools streamline administration, automate
              operations, improve communication, and track student
              performance—all from a single dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" href="#contact" size="lg">
                Book Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[24px] border border-border bg-surface p-4 shadow-2xl shadow-primary/10 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted">Dashboard</p>
                  <p className="text-lg font-bold text-text">School Overview</p>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                  <TrendingUp className="h-3 w-3" />
                  Live
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {dashboardCards.map((card, index) => (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className={`rounded-2xl p-4 ${card.color} ${
                      index === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <card.icon className="h-4 w-4" aria-hidden="true" />
                      <span className="text-xs font-medium opacity-80">
                        {card.label}
                      </span>
                    </div>
                    <p className="mt-2 text-xl font-bold">{card.value}</p>
                    <p className="text-xs opacity-70">{card.change}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 h-24 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-4 dark:from-primary/10 dark:to-secondary/10">
                <p className="text-xs font-medium text-muted">
                  Attendance Analytics
                </p>
                <div className="mt-3 flex h-12 items-end gap-1">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-primary/60"
                        style={{ height: `${h}%` }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 rounded-2xl border border-border bg-surface p-3 shadow-lg md:-right-6"
            >
              <p className="text-xs text-muted">New Enrollment</p>
              <p className="font-bold text-success">+24 today</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-surface p-3 shadow-lg md:-left-6"
            >
              <p className="text-xs text-muted">Fee Collected</p>
              <p className="font-bold text-primary">$2.4K today</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
