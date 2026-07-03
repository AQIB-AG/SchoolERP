"use client";

import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight
} from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const featuresLinks = [
    { label: "Student Management", href: "#features" },
    { label: "Attendance Tracking", href: "#features" },
    { label: "Fee Management", href: "#features" },
    { label: "Parent Communication", href: "#features" },
    { label: "Staff Management", href: "#features" },
    { label: "Mobile App Access", href: "#features" },
  ];

  const resourcesLinks = [
    { label: "Blog", href: "#blog" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Help Center", href: "#" },
    { label: "Product Updates", href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
    { label: "Book Demo", href: "#contact" },
    { label: "Start Free Trial", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
  ];

  const popularResources = [
    { label: "How to Improve School Administration", href: "#" },
    { label: "Digital Attendance Management Guide", href: "#" },
    { label: "Parent Communication Best Practices", href: "#" },
    { label: "School Fee Automation", href: "#" },
    { label: "Student Data Management", href: "#" },
    { label: "School ERP Implementation Guide", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A1214] to-[#050809] text-gray-300 border-t border-white/5 py-20 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 group transition-transform duration-200 w-fit"
              aria-label="SchoolManager home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-md">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-sans font-extrabold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
                SchoolManager
              </span>
            </Link>
            <p className="text-xs font-semibold text-gray-400 leading-relaxed max-w-sm">
              Helping schools streamline administration, communication, attendance, academics, and reporting through one unified platform.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
                { icon: TwitterIcon, href: "https://twitter.com", label: "X/Twitter" },
                { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary border border-white/10 hover:border-primary/30 flex items-center justify-center transition-all duration-300 text-gray-400"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Features */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Features</h4>
            <nav className="flex flex-col gap-3">
              {featuresLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Resources</h4>
            <nav className="flex flex-col gap-3">
              {resourcesLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Company</h4>
            <nav className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-gray-400 hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 5: Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Contact</h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:hello@schoolmanager.com"
                className="flex items-center gap-3 text-xs font-semibold text-gray-400 hover:text-primary transition-colors duration-200 group w-fit"
              >
                <Mail className="h-4.5 w-4.5 text-primary shrink-0" />
                <span>hello@schoolmanager.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-xs font-semibold text-gray-400 hover:text-primary transition-colors duration-200 group w-fit"
              >
                <Phone className="h-4.5 w-4.5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </a>
              <div className="flex items-start gap-3 text-xs font-semibold text-gray-400">
                <Clock className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Monday – Friday</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase mt-0.5">9:00 AM – 6:00 PM</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-xs font-semibold text-gray-400">
                <MapPin className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                <span>123 Education Lane, San Francisco</span>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Footer Resource Area */}
        <div className="py-12 border-b border-white/5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Popular Resources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularResources.map((resource, i) => (
              <Link
                key={i}
                href={resource.href}
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 md:hover:bg-white/[0.05] md:hover:border-white/10 md:hover:shadow-sm md:transition-all md:duration-300 group cursor-pointer"
              >
                <span className="text-xs font-bold text-gray-300 md:group-hover:text-primary transition-colors pr-2 leading-snug">
                  {resource.label}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-gray-500 md:group-hover:text-primary md:transition-all md:duration-300 md:group-hover:-translate-y-0.5 md:group-hover:translate-x-0.5 shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <p>
            &copy; {currentYear} SchoolManager ERP. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
