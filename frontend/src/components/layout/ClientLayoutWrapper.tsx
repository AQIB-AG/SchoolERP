"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/start-free-trial" || pathname === "/book-demo";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen flex flex-col justify-between"
      >
        {!isAuthRoute && <Navbar />}
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        {!isAuthRoute && <Footer />}
      </motion.div>
    </AnimatePresence>
  );
}
