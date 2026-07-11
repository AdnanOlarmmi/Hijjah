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
        subtitle="Have questions? We're here to help you begin your sacred journey."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              Phone
            </h4>
            <div className="space-y-2 ml-6">
              <a
                href="tel:+2348130036768"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +234 813 003 6768
              </a>
              <a
                href="tel:+2348140381945"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +234 814 038 1945
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              Email
            </h4>
            <div className="ml-6">
              <a
                href="mailto:info@hijjahservices.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                info@hijjahservices.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Office Locations
            </h4>
            <div className="space-y-3 ml-6">
              <p className="text-sm text-muted-foreground">
                Adeniyi Street,
                <br />
                Ikorodu,
                <br />
                Lagos.
              </p>
              <p className="text-sm text-muted-foreground">
                Beside Dunmichin Junction,
                <br />
                Ijapo Extension,
                <br />
                Akure,
                <br />
                Ondo State.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Office Hours
            </h4>
            <div className="ml-6 space-y-1">
              <p className="text-sm text-muted-foreground">
                Monday – Friday: 9:00 AM – 5:00 PM
              </p>
              <p className="text-sm text-muted-foreground">
                Saturday: 10:00 AM – 2:00 PM
              </p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
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
              placeholder="+234 800 000 0000"
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
