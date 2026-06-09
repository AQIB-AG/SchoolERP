"use client";

import Link from "next/link";
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
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 w-full",
        scrolled 
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Side: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group transition-transform duration-200"
          aria-label="SchoolManager home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/20 group-hover:rotate-6 transition-transform duration-300">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight text-text group-hover:text-primary transition-colors duration-300">
            SchoolManager
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold text-text/80 transition-colors duration-200 hover:text-primary rounded-full hover:bg-primary/5 group"
            >
              {link.label}
              <motion.span
                className="absolute bottom-1 left-4 right-4 h-[1.5px] bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        {/* Right Side: Theme Toggle & Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            href="/book-demo"
            className="text-sm font-bold text-text hover:text-primary hover:scale-[1.02] transition-all"
          >
            Book Demo
          </Button>
          <Button
            size="sm"
            href="/start-free-trial"
            className="text-sm font-bold bg-primary text-white hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-primary/10 px-5"
          >
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-text hover:bg-primary/10 transition-colors border border-transparent"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden flex flex-col p-8 border-t border-border/50 shadow-2xl"
          >
            <div className="flex flex-col gap-4 max-w-md mx-auto w-full mt-4">
              {NAV_LINKS.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-xl font-serif font-bold py-2 text-text hover:text-primary transition-colors border-b border-border/20 flex flex-col"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4 border-t border-border/40 pt-6">
                <Button 
                  variant="outline" 
                  href="/book-demo" 
                  onClick={handleNavClick} 
                  className="w-full font-bold border-primary text-primary hover:bg-primary/5 py-3.5"
                >
                  Book Demo
                </Button>
                <Button 
                  href="/start-free-trial" 
                  onClick={handleNavClick} 
                  className="bg-primary hover:bg-primary-hover w-full font-bold text-white py-3.5"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
