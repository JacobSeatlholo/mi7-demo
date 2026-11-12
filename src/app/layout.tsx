import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const barlow = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mi7 National Group | Armed Response, Medical Rescue and Community Wellness",
  description:
    "Mi7 National Group provides bespoke security, armed response, emergency medical services, surveillance, guarding and community wellness. 24 hour control room. Toll free 0800 647 911. Concept demo website built by Business Hustle.",
  keywords: [
    "Mi7 National Group",
    "armed response Pietermaritzburg",
    "security company KZN",
    "emergency medical services",
    "alarm monitoring",
    "static guarding",
  ],
  openGraph: {
    title: "Mi7 National Group | Your Trust, Our Protection",
    description:
      "Bespoke security, emergency medical services and community wellness. Concept demo website built by Business Hustle.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${barlow.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
