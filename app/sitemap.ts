import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bakhtartravel.ae",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://bakhtartravel.ae/#about",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://bakhtartravel.ae/#services",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://bakhtartravel.ae/#destinations",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://bakhtartravel.ae/#umrah",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://bakhtartravel.ae/#visa",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://bakhtartravel.ae/#contact",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}