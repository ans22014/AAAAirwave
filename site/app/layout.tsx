import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";

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

const title = "AAA Airwaves, Inc. | 24-Hour HVAC Repair & Installation in Tampa, FL";
const description =
  "Family-owned HVAC company serving Tampa, FL for 20+ years. 24-hour emergency AC & heating repair, installation, and maintenance for homes and businesses. Licensed CAC1816350.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaa-airwaves.com"),
  title,
  description,
  keywords:
    "HVAC Tampa, AC repair Tampa, air conditioning installation, emergency AC repair, commercial HVAC Tampa, heating repair Tampa, AAA Airwaves",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "AAA Airwaves, Inc.",
    images: ["/images/hero-establishing.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-establishing.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: BUSINESS.name,
  image: "https://aaa-airwaves.com/images/hero-establishing.jpg",
  url: "https://aaa-airwaves.com",
  telephone: BUSINESS.phonePrimary,
  email: BUSINESS.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: "US",
  },
  areaServed: BUSINESS.serviceCounties.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "Florida HVAC Contractor License",
    identifier: BUSINESS.license,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.aggregateRating.ratingValue,
    reviewCount: BUSINESS.aggregateRating.reviewCount,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
