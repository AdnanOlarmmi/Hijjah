import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/Contact";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}. We're here to answer your questions and help you plan your sacred journey.`,
};

export default function ContactPage() {
  return (
    <main className="pt-24 sm:pt-28">
      <ContactSection />
    </main>
  );
}
