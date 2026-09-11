import type { MetadataRoute } from "next";
import { COUNTIES } from "@/lib/counties";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aaa-airwaves.com",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://aaa-airwaves.com/ac-repair-tampa",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://aaa-airwaves.com/commercial-hvac",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...COUNTIES.map((county) => ({
      url: `https://aaa-airwaves.com/service-area/${county.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
