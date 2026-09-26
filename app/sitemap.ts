import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  // 1. Static Routes
  const staticRoutes = ["", "/layanan", "/tentang", "/kontak", "/blog"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-09-26"),
      changeFrequency: (route === "" ? "daily" : "weekly") as "daily" | "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // 2. Programmatic Local SEO Area Routes (/kota/[area])
  const areaRoutes = siteConfig.areas.map((area) => ({
    url: `${baseUrl}/kota/${area.slug}`,
    lastModified: new Date("2026-09-26"),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Blog Article Detail Routes (/blog/[slug])
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...areaRoutes, ...blogRoutes];
}