"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function TiltCard({
  children,
  className,
  glowColor = "rgba(16, 185, 129, 0.15)",
  ...props
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for buttery movement
  const rotateXSpring = useSpring(x, { damping: 25, stiffness: 150 });
  const rotateYSpring = useSpring(y, { damping: 25, stiffness: 150 });

  // Transform percent values to degrees
  const rotateX = useTransform(rotateXSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(rotateYSpring, [-0.5, 0.5], [-10, 10]);

  // Spotlights positions
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation pct (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(yPct);
    y.set(xPct);

    // Set spotlight relative coordinates
    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative overflow-hidden rounded-[24px] border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/5 dark:hover:shadow-primary/10 glass",
        className
      )}
      {...props}
    >
      {/* Background Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([sx, sy]) =>
              `radial-gradient(400px circle at ${sx}px ${sy}px, ${glowColor}, transparent 80%)`
          ),
        }}
      />

      {/* Content wrapper with perspective */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
