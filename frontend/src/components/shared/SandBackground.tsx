"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export function SandBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const maxParticles = isMobile ? 60 : 250;
    const interactionRadius = isMobile ? 70 : 120;
    const forceFactor = 0.15;
    const springFactor = 0.025;
    const friction = 0.88;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const getParticleColor = (theme: string | undefined) => {
      const isDark = theme === "dark";
      const colors = isDark
        ? [
            "rgba(44, 175, 176, 0.25)",  // Primary Teal
            "rgba(124, 200, 199, 0.2)",   // Secondary Teal
            "rgba(216, 238, 238, 0.15)",  // Accent Mint
          ]
        : [
            "rgba(44, 175, 176, 0.15)",   // Primary Teal
            "rgba(124, 200, 199, 0.15)",  // Secondary Teal
            "rgba(216, 238, 238, 0.12)",  // Accent Mint
          ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const initParticles = () => {
      particles = [];
      const currentTheme = resolvedTheme;
      for (let i = 0; i < maxParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          homeX: x,
          homeY: y,
          vx: 0,
          vy: 0,
          radius: Math.random() * 2 + 1,
          color: getParticleColor(currentTheme),
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    // Initialize
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Set initial size
    resizeCanvas();

    let lastTime = 0;
    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const timeFactor = timestamp * 0.0005;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Mouse Interaction (Repulsion)
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < interactionRadius) {
            const force = (interactionRadius - dist) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * forceFactor * 12;
            p.vy += Math.sin(angle) * force * forceFactor * 12;
          }
        }

        // 2. Spring force back to home position
        const homeDx = p.homeX - p.x;
        const homeDy = p.homeY - p.y;
        p.vx += homeDx * springFactor;
        p.vy += homeDy * springFactor;

        // 3. Gentle environmental waving (sand flow field)
        const waveX = Math.sin(timeFactor + p.homeY * 0.01) * 0.12;
        const waveY = Math.cos(timeFactor + p.homeX * 0.01) * 0.12;
        p.vx += waveX;
        p.vy += waveY;

        // 4. Update Position with Friction
        p.vx *= friction;
        p.vy *= friction;
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      id="sand-particles-canvas"
      className="absolute inset-0 block h-full w-full opacity-60 dark:opacity-50"
    />
  );
}
