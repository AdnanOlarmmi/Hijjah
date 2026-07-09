"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { cn } from "@/lib/utils";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formState, setFormState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (formData: FormData) => {
    const newErrors: FormErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.length < 2) {
      newErrors.name = "Name is required";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Valid email is required";
    }
    if (!message || message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormState("submitting");

    setTimeout(() => {
      setFormState("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormState("idle"), 5000);
    }, 1000);
  };

  return (
    <AnimatedSection id="contact">
      <SectionHeading
        title="Get in Touch"
        subtitle="Have questions? We're here to help you begin your journey."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
        <div className="space-y-6">
          {[
            {
              icon: Phone,
              label: "Call Us",
              value: "+1 (234) 567-890",
              href: "tel:+1234567890",
            },
            {
              icon: Mail,
              label: "Email Us",
              value: "info@hijja.com",
              href: "mailto:info@hijja.com",
            },
            {
              icon: MapPin,
              label: "Visit Us",
              value: "123 Peace Street, Lagos, Nigeria",
            },
            {
              icon: Clock,
              label: "Office Hours",
              value: "Mon - Sat: 9:00 AM - 6:00 PM",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground">
                  {item.label}
                </h4>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}

          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-success/10 text-success px-6 py-3 rounded-xl font-medium text-sm hover:bg-success/20 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Chat on WhatsApp
          </motion.a>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
          noValidate
        >
          <input
            type="text"
            name="honeypot"
            className="absolute -left-[9999px]"
            tabIndex={-1}
            autoComplete="off"
          />
          <div>
            <Label htmlFor="name" className="text-sm font-medium">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              className={cn("mt-1.5", errors.name && "border-destructive")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="flex items-center gap-1 text-xs text-destructive mt-1">
                <AlertCircle className="h-3 w-3" />
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              className={cn("mt-1.5", errors.email && "border-destructive")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="flex items-center gap-1 text-xs text-destructive mt-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (234) 567-890"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your journey..."
              rows={4}
              className={cn("mt-1.5 resize-none", errors.message && "border-destructive")}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="flex items-center gap-1 text-xs text-destructive mt-1">
                <AlertCircle className="h-3 w-3" />
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={formState === "submitting"}
          >
            {formState === "submitting" ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Sending...
              </span>
            ) : formState === "success" ? (
              <span className="flex items-center gap-2 text-success-foreground">
                <Send className="h-4 w-4" />
                Message Sent!
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </span>
            )}
          </Button>
        </motion.form>
      </div>
    </AnimatedSection>
  );
}
