import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = portfolio.site.deploymentUrl ?? portfolio.site.repositoryUrl;
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
