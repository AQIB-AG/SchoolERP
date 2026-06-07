import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { Features } from "@/components/sections/Features";

const HowItWorks = dynamic(() =>
  import("@/components/sections/HowItWorks").then((m) => m.HowItWorks),
);
const Benefits = dynamic(() =>
  import("@/components/sections/Benefits").then((m) => m.Benefits),
);
const Pricing = dynamic(() =>
  import("@/components/sections/Pricing").then((m) => m.Pricing),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => m.Testimonials),
);
const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => m.FAQ),
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => m.Contact),
);
const Blog = dynamic(() =>
  import("@/components/sections/Blog").then((m) => m.Blog),
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustSection />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
