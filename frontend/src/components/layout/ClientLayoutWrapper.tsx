"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/start-free-trial" || pathname === "/book-demo";
  const isHomepage = pathname === "/";

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen flex flex-col justify-between"
    >
      {!isAuthRoute && <Navbar />}
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      {!isAuthRoute && <Footer />}

      {/* Floating Back to Home Button */}
      <AnimatePresence>
        {!isHomepage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-50 pointer-events-auto"
          >
            <Link
              href="/"
              aria-label="Back to home"
              className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-[#1E2824] backdrop-blur-md text-white shadow-xl hover:shadow-2xl hover:scale-110 hover:border-white/30 hover:bg-[#141C19] active:scale-95 transition-all duration-200"
            >
              <Home className="h-6 w-6 stroke-[2.5]" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

