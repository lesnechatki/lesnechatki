import { MetadataRoute } from "next"
import { cabinsData } from "@/lib/cabins-data"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://lesnechatki.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const cabins = Object.values(cabinsData).map((cabin) => ({
    url: `${baseUrl}/${cabin.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/okolica`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...cabins,
  ]
}
