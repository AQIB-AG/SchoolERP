"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FixedBackgroundRevealSectionProps {
  /** The URL/path of the background image */
  bgImage: string;
  /** The content elements to render inside the section */
  children: ReactNode;
  /** Additional classes for the outer container */
  className?: string;
  /** Optional ID for linking/navigation */
  id?: string;
  /** Custom overlay color/opacity in light mode. Default: "rgba(255,255,255,0.20)" (20% white glass overlay) */
  overlayLight?: string;
  /** Custom overlay color/opacity in dark mode. Default: "rgba(17,24,39,0.25)" (25% dark glass overlay) */
  overlayDark?: string;
  /** Backdrop blur style for the overlay. Default: "backdrop-blur-[10px]" (approx 10px blur) */
  overlayBlur?: string;
  /**
   * The parallax implementation technique:
   * - "clip-path" (default): Modern container clipping with a fixed background child. Reliable on mobile (iOS/Android).
   * - "fixed-attachment": Native CSS background-attachment: fixed.
   */
  parallaxType?: "clip-path" | "fixed-attachment";
}

export function FixedBackgroundRevealSection({
  bgImage,
  children,
  className,
  id,
  overlayLight = "rgba(255, 255, 255, 0.20)",
  overlayDark = "rgba(17, 24, 39, 0.25)",
  overlayBlur = "backdrop-blur-[10px]",
  parallaxType = "clip-path",
}: FixedBackgroundRevealSectionProps) {
  // Common inline styles for overlay configuration
  const customVariables = {
    "--overlay-light": overlayLight,
    "--overlay-dark": overlayDark,
  } as React.CSSProperties;

  if (parallaxType === "fixed-attachment") {
    return (
      <section
        id={id}
        className={cn(
          "relative w-full overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed",
          className
        )}
        style={{
          backgroundImage: `url(${bgImage})`,
          ...customVariables,
        }}
      >
        {/* Subtle Overlay Layer with Backdrop Blur for Text Readability */}
        <div 
          className={cn(
            "absolute inset-0 bg-[var(--overlay-light)] dark:bg-[var(--overlay-dark)] transition-colors duration-300 pointer-events-none z-1",
            overlayBlur
          )} 
          aria-hidden="true"
        />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </section>
    );
  }

  // Modern "clip-path" method (Highly reliable on mobile and Safari)
  return (
    <section
      id={id}
      className={cn("relative w-full overflow-hidden", className)}
      style={customVariables}
    >
      {/* Background Masking and Parallax Container */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-1"
        style={{ clipPath: "inset(0 0 0 0)" }}
        aria-hidden="true"
      >
        {/* Fixed image element styled to act as background */}
        <div
          className="absolute lg:fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        />

        {/* Subtle Overlay Layer with Backdrop Blur for Text Readability */}
        <div 
          className={cn(
            "absolute inset-0 bg-[var(--overlay-light)] dark:bg-[var(--overlay-dark)] transition-colors duration-300 pointer-events-none",
            overlayBlur
          )} 
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}
