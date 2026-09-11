import type { MetadataRoute } from "next";

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
  ];
}
