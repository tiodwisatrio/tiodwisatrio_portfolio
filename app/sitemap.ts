import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tiodwisatrio.com";

  // Add your main pages here
  const routes = ["", "/sentry-example-page"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.5,
  }));

  // Add sections (anchors) for better SEO
  const sections = [
    { url: `${baseUrl}#about`, priority: 0.9 },
    { url: `${baseUrl}#projects`, priority: 0.9 },
    { url: `${baseUrl}#services`, priority: 0.8 },
    { url: `${baseUrl}#contact`, priority: 0.8 },
  ].map((section) => ({
    ...section,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...sections];
}
