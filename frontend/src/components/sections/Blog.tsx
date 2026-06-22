"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { Container } from "@/components/ui/Container";

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-36 bg-white dark:bg-[#0E1516] scroll-section">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">
            Blog & Resources
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-text leading-none">
            Latest Insights & Resources
          </h2>
          <p className="mt-4 text-xs md:text-sm text-muted leading-relaxed font-semibold">
            Explore our latest articles covering educational technology, school management, ERP best practices, digital transformation, and school administration.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="flex"
            >
              <article className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border/80 dark:border-white/10 bg-white dark:bg-[#151F21] shadow-xs transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] relative">
                {/* Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Category Badge */}
                  <span className="mb-3 w-fit text-[10px] font-black uppercase text-primary tracking-wider leading-none">
                    {post.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors duration-200 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3 flex-1 text-xs text-muted leading-relaxed font-semibold">
                    {post.excerpt}
                  </p>

                  {/* Footer metadata */}
                  <div className="mt-6 pt-4 border-t border-border/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted uppercase tracking-wider">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-primary-hover transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
