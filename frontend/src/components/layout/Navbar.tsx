"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features", id: "features" },
  { label: "Benefits", href: "#benefits", id: "benefits" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
  { label: "Blog", href: "#blog", id: "blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight logic
      const scrollPosition = window.scrollY + 160;

      // Bottom check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("blog");
        return;
      }

      let currentSection = "";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = link.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 w-full",
        scrolled 
          ? "py-3 bg-white/90 dark:bg-[#121A1C]/90 backdrop-blur-md border-b border-border/60 dark:border-white/10 shadow-xs" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group transition-transform duration-200"
          aria-label="SchoolManager home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-xs">
            <GraduationCap className="h-4.5 w-4.5" />
          </div>
          <span className="font-sans font-extrabold text-lg tracking-tight text-text">
            SchoolManager
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors duration-200",
                  isActive 
                    ? "text-primary font-bold" 
                    : "text-[#111827] dark:text-[#F8FAFA] hover:text-primary dark:hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Theme Toggle & Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/book-demo"
            className="text-xs font-bold border-2 border-[#000000] text-text hover:bg-surface-muted px-4 py-2.5 rounded-full transition-all"
          >
            Book Demo
          </Link>
          <Link
            href="/start-free-trial"
            className="text-xs font-bold bg-primary hover:bg-primary-hover text-background px-5 py-2.5 rounded-full transition-all shadow-xs"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-text hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] bottom-0 z-40 bg-[#F8FAFA] dark:bg-[#0E1516] backdrop-blur-lg lg:hidden flex flex-col p-8 border-t border-border/40 shadow-xl overflow-y-auto"
          >
            <div className="flex flex-col gap-5 max-w-md mx-auto w-full mt-6">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      "text-xl font-bold py-2 border-b border-border/20 transition-colors duration-250",
                      isActive ? "text-primary" : "text-text"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-8 flex flex-col gap-4">
                <Link 
                  href="/book-demo" 
                  onClick={handleNavClick} 
                  className="border-2 border-[#000000] text-center text-text font-bold py-3 rounded-full"
                >
                  Book Demo
                </Link>
                <Link 
                  href="/start-free-trial" 
                  onClick={handleNavClick} 
                  className="bg-primary text-center text-background font-bold py-3 rounded-full"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
