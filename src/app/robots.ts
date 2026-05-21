import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = portfolio.site.deploymentUrl ?? portfolio.site.repositoryUrl;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
