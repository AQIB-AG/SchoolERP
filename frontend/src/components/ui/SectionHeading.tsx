"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2 className="font-serif tracking-tight text-[36px] font-bold leading-tight text-text md:text-[46px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted md:text-[18px]">{subtitle}</p>
      )}
    </motion.div>
  );
}
