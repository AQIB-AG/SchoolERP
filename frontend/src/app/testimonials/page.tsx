"use client";

import { Testimonials } from "@/components/sections/Testimonials";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

const DETAILED_REVIEWS = [
  {
    author: "Elena Rostova",
    role: "Registrar, St. Jude Prep",
    text: "Admissions used to require three different applications and a mountain of paper forms. Now parents fill out details on their mobile devices, files upload securely, and we process enrollments in under ten minutes.",
    rating: 5,
    tag: "Admissions",
  },
  {
    author: "James Peterson",
    role: "Math Teacher, Oakridge Middle School",
    text: "Entering attendance and grading assessments is incredibly fast. I love the template setup. The dashboard lets me send lesson updates directly to parents, improving classroom response rates.",
    rating: 5,
    tag: "Academics",
  },
  {
    author: "Fatima Al-Sayed",
    role: "Parent Association Lead",
    text: "Having a single app for school announcements, invoice details, and class chats makes things so easy. We no longer lose newsletters in student backpacks. It keeps our community connected.",
    rating: 5,
    tag: "Parent Hub",
  },
  {
    author: "Robert Vance",
    role: "Finance Director, Crestview Academy",
    text: "The collections dashboard tracks outstanding invoices automatically, emailing reminders and collecting payments online. Our delinquent payment rates dropped by 80% in our first semester.",
    rating: 5,
    tag: "Billing",
  },
  {
    author: "Dr. Marcus Vance",
    role: "Superintendent, District 12",
    text: "The consolidated reporting displays student progress indicators across campuses instantly. Transitioning systems was clean, and support resolved questions in minutes.",
    rating: 5,
    tag: "Analytics",
  },
  {
    author: "Clara Oswald",
    role: "Primary Educator, Beacon School",
    text: "Student reports load with high visual clarity. Grading modules save time, letting us focus on students rather than formatting paper logs. A premium workspace.",
    rating: 5,
    tag: "Academics",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-background pt-32 pb-24 min-h-screen">
      {/* Page Header */}
      <Container className="relative z-10 mb-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4.5 py-1.5 text-xs font-semibold text-secondary mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>REAL RESULTS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-[42px] md:text-[56px] font-bold text-text tracking-tight leading-[1.1]"
        >
          Loved by leaders in <span className="text-primary italic font-medium">modern education</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Hear from administrators, educators, and parents who transitioned to SchoolManager for smooth daily management.
        </motion.p>
      </Container>

      {/* Main Testimonial Carousel */}
      <Testimonials />

      {/* Grid Masonry Reviews Board */}
      <Container className="mt-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl font-bold text-text">More Success Stories</h2>
          <p className="text-muted mt-2 text-sm">Feedback from administrators, parents, and teachers.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DETAILED_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-surface border border-border/70 rounded-[24px] p-6 shadow-md hover:scale-[1.02] transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] uppercase font-bold text-primary tracking-wider bg-primary/10 px-2.5 py-1 rounded-full mb-4">
                  {review.tag}
                </span>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent stroke-accent" />
                  ))}
                </div>

                <p className="text-sm text-text leading-relaxed font-medium mb-6 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="border-t border-border/20 pt-4 flex flex-col">
                <span className="text-sm font-bold text-text">{review.author}</span>
                <span className="text-xs text-muted font-bold uppercase mt-0.5">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
