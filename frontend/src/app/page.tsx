import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { Features } from "@/components/sections/Features";
import { InterfaceShowcase } from "@/components/sections/InterfaceShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Blog } from "@/components/sections/Blog";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustSection />
      <Features />
      <InterfaceShowcase />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Blog />
    </div>
  );
}

