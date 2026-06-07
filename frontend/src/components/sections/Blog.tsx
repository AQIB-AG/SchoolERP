"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Blog() {
  return (
    <section id="blog" className="section-padding bg-surface">
      <Container>
        <SectionHeading
          title="Latest from Our Blog"
          subtitle="Insights, tips, and best practices for modern school management."
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                className="group flex h-full flex-col overflow-hidden p-0 transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <Badge className="mb-3 w-fit">{post.category}</Badge>
                  <h3 className="text-lg font-bold text-text">{post.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
