import { BUSINESS } from "@/lib/business";
import { County } from "@/lib/counties";

export type Faq = { question: string; answer: string };

export function buildFaqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const homeFaqs = [
  {
    question: "Do you offer 24-hour emergency AC repair in Tampa?",
    answer:
      `Yes. AAA Airwaves answers emergency calls around the clock, 365 days a year, across Hillsborough, Pinellas, Pasco, and Sarasota counties. Call ${BUSINESS.phonePrimary} and a real technician will pick up — not a call center.`,
  },
  {
    question: "What areas does AAA Airwaves service?",
    answer:
      `We serve ${BUSINESS.serviceArea}, including Tampa, Clearwater, St. Petersburg, Brandon, Riverview, Hudson, New Port Richey, Land O' Lakes, Sarasota, Venice, and North Port.`,
  },
  {
    question: "Is AAA Airwaves licensed and insured?",
    answer:
      `Yes. We hold Florida HVAC contractor license ${BUSINESS.license} and carry full insurance on every residential and commercial job.`,
  },
  {
    question: "Do you offer financing for AC repair or a new system installation?",
    answer:
      "Yes. Through our partnership with Wisetack, qualified customers get 0% financing on repairs and new installs, with a soft credit check and approval in minutes — no impact to your credit score.",
  },
  {
    question: "Do you work on commercial rooftop HVAC units?",
    answer:
      "Yes. We install, repair, and maintain commercial rooftop units and multi-unit retail HVAC systems, including full crane-assisted rooftop replacements for larger commercial properties.",
  },
  {
    question: "How quickly can a technician get to my home or business?",
    answer:
      "Because our vans are staged across the Gulf Coast corridor rather than dispatched from one central shop, most residential calls in our service area get a same-day technician.",
  },
] as const;

export const acRepairFaqs = [
  {
    question: "How fast can you schedule AC repair in Tampa?",
    answer:
      `Most residential AC repairs in the Tampa area get a same-day technician. Call ${BUSINESS.phonePrimary} and we'll confirm the soonest available appointment — and if it's an emergency, we answer 24/7.`,
  },
  {
    question: "Do you repair all AC brands and models?",
    answer:
      "Yes. Our technicians diagnose and repair every major residential AC brand and model, from window units to full split systems, regardless of who installed it originally.",
  },
  {
    question: "Should I repair or replace my air conditioner?",
    answer:
      "It depends on the age of your system, the cost of the repair, and how often it's broken down recently. Our technicians will give you a straightforward recommendation on-site — no upsell pressure, just the option that makes financial sense for your system.",
  },
  {
    question: "Do you offer financing for a new AC installation?",
    answer:
      "Yes. Through our partnership with Wisetack, qualified customers get 0% financing on new AC installations and full system replacements, with approval in minutes and no impact to your credit score.",
  },
  {
    question: "Do you offer AC maintenance plans to prevent future breakdowns?",
    answer:
      "Yes. Our seasonal maintenance plans catch small problems — low refrigerant, worn capacitors, dirty coils — before they turn into a mid-summer breakdown or an expensive repair.",
  },
] as const;

export const commercialHvacFaqs = [
  {
    question: "What brands of commercial rooftop units do you service?",
    answer:
      "We install, repair, and maintain commercial rooftop units from all major manufacturers, including Trane, Carrier, Rheem, Goodman, and Lennox packaged systems.",
  },
  {
    question: "How fast can you respond to a commercial HVAC emergency?",
    answer:
      `Downtime costs money, so we answer commercial emergency calls 24/7. Call ${BUSINESS.phonePrimary} and we'll get a technician dispatched as quickly as possible to minimize disruption to your business.`,
  },
  {
    question: "Can you handle a full commercial rooftop unit replacement?",
    answer:
      "Yes. We handle full crane-lift rooftop unit swaps and multi-ton commercial system installs from start to finish, coordinated to minimize business downtime and scheduled around your operating hours where possible.",
  },
  {
    question: "Do you service multi-tenant and retail properties?",
    answer:
      "Yes. We provide ongoing HVAC service for offices, retail spaces, and multi-tenant properties, including coordinating with property managers and working around tenant schedules.",
  },
  {
    question: "Is AAA Airwaves licensed for commercial HVAC work?",
    answer:
      `Yes. We hold Florida HVAC contractor license ${BUSINESS.license} and carry full commercial insurance coverage on every job.`,
  },
] as const;

export function countyFaqs(county: County): readonly Faq[] {
  const cityList = county.cities.join(", ");
  const primaryCity = county.cities[0];
  return [
    {
      question: `Do you provide HVAC service throughout ${county.name}?`,
      answer: `Yes. We provide residential and commercial HVAC repair, installation, and maintenance throughout ${county.name}, including ${cityList}.`,
    },
    {
      question: `How fast can a technician reach me in ${primaryCity}?`,
      answer: `Our vans are staged across the Gulf Coast corridor rather than dispatched from one central shop, so most residential calls in ${county.name} get a same-day technician. Call ${BUSINESS.phonePrimary} for our soonest available appointment.`,
    },
    {
      question: `Do you offer 24-hour emergency AC repair in ${county.name}?`,
      answer: `Yes. We answer emergency calls around the clock, 365 days a year, for homes and businesses throughout ${county.name}.`,
    },
    {
      question: `Are you licensed to work in ${county.name}?`,
      answer: `Yes. We hold Florida HVAC contractor license ${BUSINESS.license} and carry full insurance for every residential and commercial job in ${county.name}.`,
    },
  ] as const;
}
