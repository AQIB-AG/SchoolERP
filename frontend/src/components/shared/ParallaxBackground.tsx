"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxBackgroundProps {
  imageUrl: string;
  targetRef: React.RefObject<HTMLElement | null>;
  opacity?: number;
}

export function ParallaxBackground({
  imageUrl,
  targetRef,
  opacity = 0.3,
}: ParallaxBackgroundProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });

  // Calculate parallax y offset. 
  // We extend the background image boundaries using negative top/bottom margins
  // and animate y translation to achieve a clip-free parallax scroll.
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-x-0 -top-[15%] -bottom-[15%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          y,
          opacity,
        }}
      />
      {/* Subtle blend overlay & gradients to guarantee text readability & contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/45 to-background dark:from-background/25 dark:via-background/55 dark:to-background" />
    </div>
  );
}
