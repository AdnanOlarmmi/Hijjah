"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : isHome
            ? "bg-black/10 backdrop-blur-sm"
            : "bg-background/80 backdrop-blur-xl border-b border-border"
      )}
    >
      <nav className="content-max-w flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={cn(
              "text-xl sm:text-2xl font-heading font-semibold transition-colors duration-300",
              scrolled || !isHome ? "text-primary" : "text-off-white"
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300 relative group",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-off-white/80 hover:text-off-white"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {resolvedTheme && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "p-2 rounded-full transition-colors duration-300",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-off-white/80 hover:text-off-white"
              )}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          )}

          <a
            href="tel:+2348130036768"
            className={cn(
              "hidden sm:flex items-center gap-2 text-sm font-medium transition-colors duration-300",
              scrolled
                ? "text-primary hover:text-primary/80"
                : "text-off-white/80 hover:text-off-white"
            )}
          >
            <Phone className="h-4 w-4" />
            <span>+234 813 003 6768</span>
          </a>

          <Button
            render={<Link href="/packages" />}
            className={cn(
              "hidden sm:inline-flex transition-all duration-300",
              !scrolled && "border-off-white/60 bg-white/10 text-off-white hover:bg-white/20 hover:text-off-white backdrop-blur-sm"
            )}
            size="sm"
            variant={scrolled ? "default" : "outline"}
          >
            Book Your Journey
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu" className={cn(!scrolled && "text-off-white hover:text-off-white hover:bg-white/15")}>
                  <Menu className="h-5 w-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-80 sm:w-96">
              <div className="flex flex-col h-full pt-12">
                <div className="flex flex-col gap-4 px-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-auto px-4 pb-8">
                  <Button render={<Link href="/packages" />} className="w-full" size="lg">
                    Book Your Journey
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
