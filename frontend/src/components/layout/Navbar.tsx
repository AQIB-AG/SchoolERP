"use client";

import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1280px] h-[72px] flex items-center transition-all duration-300"
      style={{ transform: "translate3d(0, 0, 150px)" }}
    >
      <div
        className={cn(
          "w-full h-full flex items-center justify-between px-6 rounded-full glass transition-all duration-300",
          scrolled
            ? "shadow-lg bg-surface/90 dark:bg-[#18181b]/90 border-primary/20 dark:border-white/10"
            : "bg-surface/75 dark:bg-[#18181b]/75 border-border/80"
        )}
      >
        {/* Left Side: Logo & Text */}
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold text-text group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="SchoolManager home"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/20">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="font-extrabold bg-gradient-to-r from-text to-muted bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary-hover transition-all duration-300">
              SchoolManager
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-2 text-sm font-semibold text-muted transition-all duration-200 hover:text-primary hover:scale-[1.03] group rounded-full hover:bg-surface-muted dark:hover:bg-white/5"
            >
              {link.label}
              <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-1/3" />
            </a>
          ))}
        </div>

        {/* Right Side: Theme Toggle & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            href="#"
            className="text-sm font-bold hover:scale-[1.03] active:scale-[0.98] transition-transform"
          >
            Login
          </Button>
          <Button
            size="sm"
            href="#contact"
            className="text-sm font-bold bg-primary text-white hover:bg-primary-hover hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md shadow-primary/10"
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-text hover:bg-surface-muted dark:hover:bg-white/5 transition-colors border border-transparent"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-4 top-[88px] z-50 overflow-hidden rounded-[24px] border border-border bg-surface/95 dark:bg-[#18181b]/95 p-6 shadow-2xl backdrop-blur-2xl lg:hidden max-w-md mx-auto"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-base font-bold px-4 py-2.5 rounded-xl text-text hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                <Button variant="ghost" href="#" onClick={handleNavClick} className="w-full font-bold">
                  Login
                </Button>
                <Button href="#contact" onClick={handleNavClick} className="bg-primary hover:bg-primary-hover w-full font-bold text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
