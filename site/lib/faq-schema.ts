import { BUSINESS } from "@/lib/business";

export const faqs = [
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

export const faqSchema = {
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
