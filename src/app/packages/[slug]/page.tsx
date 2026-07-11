import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/constants";

interface PackageDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: PackageDetailPageProps): Promise<Metadata> {
  const slug = (await params).slug;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return { title: "Package Not Found" };
  }

  return {
    title: `${pkg.title}`,
    description: `${pkg.title} — from ${pkg.currency || "$"}${pkg.price}. ${pkg.duration}, ${pkg.hotel} hotel, ${pkg.flight}.`,
  };
}

export default async function PackageDetailPage({
  params,
}: PackageDetailPageProps) {
  const slug = (await params).slug;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <main className="pt-24 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-heading font-bold mb-4">
          Package Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The package you are looking for does not exist.
        </p>
        <Button render={<Link href="/packages" />}>
          View All Packages
        </Button>
      </main>
    );
  }

  const currency = pkg.currency || "$";

  return (
    <main className="pt-24 pb-16">
      <div className="content-max-w px-4 sm:px-6 lg:px-8">
        <Button render={<Link href="/packages" />} variant="ghost" className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Packages
        </Button>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            {pkg.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {pkg.isDeposit ? "Deposit" : "From"}{" "}
            <span className="text-3xl font-bold text-primary">
              {currency}{pkg.price.toLocaleString()}
            </span>{" "}
            per person
          </p>

          {pkg.earlyBirdPrice && (
            <p className="mt-2 text-success font-medium">
              Early bird: {currency}{pkg.earlyBirdPrice.toLocaleString()}
              {pkg.earlyBirdDiscount && (
                <span className="text-muted-foreground ml-1">
                  (save {currency}{pkg.earlyBirdDiscount.toLocaleString()})
                </span>
              )}
            </p>
          )}

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { label: "Duration", value: pkg.duration },
              { label: "Hotel", value: pkg.hotel },
              { label: "Flight", value: pkg.flight },
              { label: "Meals", value: pkg.meals },
              { label: "Visa", value: pkg.visa ? "Included" : "Not included" },
              { label: "Transport", value: pkg.transport },
              { label: "Scholar", value: pkg.scholar ? "Available" : "Not available" },
            ].map((detail) => (
              <div
                key={detail.label}
                className="p-4 rounded-xl border border-border bg-card"
              >
                <p className="text-sm text-muted-foreground">{detail.label}</p>
                <p className="text-base font-medium text-foreground mt-1">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4">
            <Button
              render={<Link href={`/packages/${pkg.slug}/book`} />}
              size="lg"
              className="w-full sm:w-auto px-10"
            >
              {pkg.isDeposit ? `Pay Deposit — ${currency}${pkg.price.toLocaleString()}` : `Book Now — ${currency}${pkg.price.toLocaleString()}`}
            </Button>
            <p className="text-sm text-muted-foreground">
              {pkg.isDeposit
                ? "Full payment plan available. Contact us for details."
                : pkg.remainingSeats > 0
                  ? `${pkg.remainingSeats} seats remaining`
                  : "Fully booked"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
