import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl sm:text-7xl font-heading font-bold text-primary">
        404
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">
        This page does not exist.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Perhaps you were looking for something else?
      </p>
      <Button render={<Link href="/" />} className="mt-8">
        Return Home
      </Button>
    </main>
  );
}
