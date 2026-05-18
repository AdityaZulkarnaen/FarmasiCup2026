import type { MetadataRoute } from "next";

// Ganti lewat env var NEXT_PUBLIC_SITE_URL saat domain produksi sudah final.
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://farmasicup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
