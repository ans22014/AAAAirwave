import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AAA Airwaves, Inc. | 24-Hour HVAC Repair & Installation in Tampa, FL",
  description:
    "Family-owned HVAC company serving Tampa, FL for 20+ years. 24-hour emergency AC & heating repair, installation, and maintenance for homes and businesses. Licensed CAC1816350.",
  keywords:
    "HVAC Tampa, AC repair Tampa, air conditioning installation, emergency AC repair, commercial HVAC Tampa, heating repair Tampa, AAA Airwaves",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
