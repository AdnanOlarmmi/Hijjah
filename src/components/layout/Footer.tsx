"use client";

import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig, navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-off-white">
      <div className="content-max-w px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-heading font-semibold text-gold">
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground/70 leading-relaxed max-w-xs">
              Premium Hajj & Umrah services. Guiding pilgrims on their sacred
              journey with care, dignity, and excellence since 2010.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-off-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-off-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-gold transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@hijja.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-gold transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  info@hijja.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-muted-foreground/70">
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                  123 Peace Street, Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-off-white mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground/70 mb-4">
              Subscribe for updates, tips, and special packages.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const input = form.elements.namedItem(
                  "email"
                ) as HTMLInputElement;
                if (input.value) {
                  alert(
                    "Thank you for subscribing! We'll be in touch."
                  );
                  input.value = "";
                }
              }}
              className="flex gap-2"
            >
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-white/10 border-white/20 text-off-white placeholder:text-muted-foreground/50"
              />
              <Button
                type="submit"
                variant="secondary"
                className="bg-gold text-charcoal hover:bg-gold/90 shrink-0"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-sm text-muted-foreground/50 flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" />{" "}
            for the Guests of Allah
          </p>
        </div>
      </div>
    </footer>
  );
}
