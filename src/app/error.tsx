"use client";

import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorPageProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
        Something went wrong
      </h1>
      <p className="mt-4 text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <Button onClick={reset} className="mt-8">
        Try Again
      </Button>
    </main>
  );
}
