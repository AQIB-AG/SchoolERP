import { GraduationCap } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data/footer";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-slate-900 text-white dark:bg-slate-950">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-bold"
              aria-label="SchoolManager home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              SchoolManager
            </a>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              The all-in-one school management platform trusted by 500+ schools
              worldwide. Simplify operations, engage parents, and empower education.
            </p>

            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 items-center justify-center rounded-xl bg-white/10 px-3 text-sm font-medium text-white transition-colors hover:bg-primary"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} SchoolManager. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
