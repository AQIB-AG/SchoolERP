import { Hero } from "@/components/sections/Hero";
import { InterfaceShowcase } from "@/components/sections/InterfaceShowcase";
import { TrustSection } from "@/components/sections/TrustSection";
import { Contact } from "@/components/sections/Contact";
import { Blog } from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <InterfaceShowcase />
      <TrustSection />
      <Contact />
      <Blog />
    </>
  );
}
