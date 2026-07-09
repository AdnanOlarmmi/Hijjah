import type { Metadata } from "next";
import { PackagesGrid } from "./PackagesGrid";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Browse our premium Hajj and Umrah packages. From economy to VIP, find the perfect journey for you.",
};

export default function PackagesPage() {
  return (
    <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
      <PackagesGrid />
    </main>
  );
}
