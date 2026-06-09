"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { FOOTER_LINKS } from "@/data/footer";
import { Container } from "@/components/ui/Container";

// Custom inline SVG icons for social platforms
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const socialLinkDetails = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface-muted dark:bg-[#17201D] text-text transition-colors duration-300 py-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-[20%] w-[300px] h-[200px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
          
          {/* Logo & Description Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-xl font-bold group"
              aria-label="SchoolManager home"
            >
              {/* Floating logo mark */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/20"
              >
                <GraduationCap className="h-5.5 w-5.5" aria-hidden="true" />
              </motion.div>
              <span className="font-serif font-bold text-xl text-text group-hover:text-primary transition-colors duration-300">
                SchoolManager
              </span>
            </Link>
            
            <p className="max-w-xs text-sm text-muted font-medium leading-relaxed">
              The modern administrative workspace trusted by educational institutions worldwide. Simplifying billing ledgers, scheduling sheets, and parent engagement.
            </p>
          </div>

          {/* Dynamic Link Columns (Product, Company, Support) (Span 2 each) */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-text">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-muted hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links Column (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-text">
              Social Links
            </h3>
            <ul className="space-y-3">
              {socialLinkDetails.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 text-sm font-semibold text-muted hover:text-primary transition-colors duration-200 group"
                    >
                      <Icon className="shrink-0 transition-transform duration-200 group-hover:scale-110" />
                      <span>{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row text-xs font-bold text-muted">
          <p>
            &copy; {new Date().getFullYear()} SchoolManager. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
