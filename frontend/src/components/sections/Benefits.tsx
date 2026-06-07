"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BENEFITS } from "@/data/benefits";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-background">
      <Container>
        <SectionHeading title="Why Schools Love SchoolManager" />

        <div className="flex flex-col gap-16">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-[24px] ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10"
                    : "bg-gradient-to-br from-success/10 to-primary/10"
                } p-8 md:p-12`}
              >
                {index === 0 ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=450&fit=crop"
                      alt="School administrator using SchoolManager dashboard"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-5xl font-bold text-primary md:text-6xl">
                      {benefit.stat}
                    </p>
                    <p className="mt-2 text-lg text-muted">{benefit.statLabel}</p>
                  </div>
                )}
              </div>

              <Card hover className="flex flex-col gap-4">
                <div className="inline-flex w-fit rounded-2xl bg-primary/10 px-4 py-2 text-2xl font-bold text-primary dark:bg-primary/20">
                  {benefit.stat}
                </div>
                <p className="text-sm font-medium uppercase tracking-wide text-muted">
                  {benefit.statLabel}
                </p>
                <h3 className="text-2xl font-bold text-text">{benefit.title}</h3>
                <p className="text-lg text-muted">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
