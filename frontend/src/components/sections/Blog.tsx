"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/shared/TiltCard";
import { Badge } from "@/components/ui/Badge";

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-background relative overflow-hidden z-10">
      <Container>
        <SectionHeading
          title="Latest from Our Blog"
          subtitle="Insights, tips, and best practices for modern school management."
        />

        <div className="grid gap-8 md:grid-cols-3 md:gap-8 mt-12 max-w-6xl mx-auto">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="h-full flex"
            >
              <TiltCard
                glowColor="rgba(31, 110, 90, 0.15)"
                className="group flex w-full flex-col overflow-hidden p-0 border border-border bg-surface/50 dark:bg-surface/50 backdrop-blur-md relative z-20"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <Badge className="mb-3 w-fit bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 border-none font-bold">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors duration-250 leading-snug">
                    {post.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-muted">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>

                  <p className="mt-3 flex-1 text-sm text-muted leading-relaxed font-medium">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-secondary group/link"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
