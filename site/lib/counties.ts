export const COUNTIES = [
  {
    slug: "pasco-county",
    name: "Pasco County",
    cities: ["Hudson", "New Port Richey", "Land O' Lakes"],
  },
  {
    slug: "pinellas-county",
    name: "Pinellas County",
    cities: ["Clearwater", "St. Petersburg", "Largo"],
  },
  {
    slug: "hillsborough-county",
    name: "Hillsborough County",
    cities: ["Tampa", "Brandon", "Riverview"],
  },
  {
    slug: "sarasota-county",
    name: "Sarasota County",
    cities: ["Sarasota", "Venice", "North Port"],
  },
] as const;

export type County = (typeof COUNTIES)[number];
