import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PilgrimJourney } from "@/components/sections/PilgrimJourney";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <WhyChooseUs />
      <PilgrimJourney />
      <Testimonials />
      <Gallery />
      <FAQ />
      <ContactSection />
    </>
  );
}
