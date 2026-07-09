import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const title = `${siteConfig.name} — Premium Hajj & Umrah Services`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Hajj",
    "Umrah",
    "Hajj packages",
    "Umrah packages",
    "pilgrimage",
    "Makkah",
    "Madinah",
  ],
  openGraph: {
    title,
    description:
      "Your journey to the House of Allah begins here.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Your journey to the House of Allah begins here.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
