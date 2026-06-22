"use client";

import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0E1516] border-t border-border/40 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-200 w-fit"
              aria-label="SchoolManager home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-xs">
                <GraduationCap className="h-4.5 w-4.5" />
              </div>
              <span className="font-sans font-extrabold text-lg tracking-tight text-text">
                SchoolManager
              </span>
            </Link>
            <p className="text-xs font-semibold text-muted leading-relaxed max-w-sm">
              Modern ERP platform helping schools streamline administration, communication, attendance, academics, and reporting.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text">Product</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Features", href: "#features" },
                { label: "Benefits", href: "#benefits" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-muted hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text">Company</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Blog", href: "#blog" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-muted hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-text">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@schoolmanager.com"
                className="flex items-center gap-2.5 text-xs font-semibold text-muted hover:text-primary transition-colors group w-fit"
              >
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>hello@schoolmanager.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2.5 text-xs font-semibold text-muted hover:text-primary transition-colors group w-fit"
              >
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-start gap-2.5 text-xs font-semibold text-muted">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>123 Education Lane, San Francisco</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider">
            &copy; {currentYear} SchoolManager. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold text-muted uppercase tracking-wider">
            <Link href="#" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
