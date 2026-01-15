import type { Metadata } from "next"
import { headers } from "next/headers"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OkolicaHero } from "@/components/okolica-hero"
import { OkolicaGallery } from "@/components/okolica-gallery"
import { OkolicaInfo } from "@/components/okolica-info"
import { AreaAttractions } from "@/components/area-attractions"

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const host = headersList.get("host") || ""
  const protocol = headersList.get("x-forwarded-proto") || "https"
  const baseUrl = `${protocol}://${host}`
  const currentUrl = `${baseUrl}/okolica`

  return {
    title: "Okolica - Leśne Chatki w Koniakowie",
    description:
      "Koniaków to najwyżej położona wieś Beskidu Śląskiego. Poznaj okolicę, atrakcje i piękno Beskidów. Twójwieś - miejsce pełne historii i tradycji.",
    keywords: [
      "Koniaków",
      "Twójwieś",
      "okolica Koniaków",
      "atrakcje Koniaków",
      "Beskidy Śląskie",
      "Koronka Koniakowska",
      "Barania Góra",
    ],
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url: currentUrl,
      siteName: "Leśne Chatki w Koniakowie",
      title: "Okolica - Leśne Chatki w Koniakowie",
      description:
        "Koniaków to najwyżej położona wieś Beskidu Śląskiego. Poznaj okolicę, atrakcje i piękno Beskidów.",
      images: [
        {
          url: `${baseUrl}/koniak-w-beskid-mountains-village-landscape.jpg`,
          width: 1200,
          height: 630,
          alt: "Koniaków - okolica",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Okolica - Leśne Chatki w Koniakowie",
      description:
        "Koniaków to najwyżej położona wieś Beskidu Śląskiego. Poznaj okolicę, atrakcje i piękno Beskidów.",
      images: [`${baseUrl}/koniak-w-beskid-mountains-village-landscape.jpg`],
    },
    alternates: {
      canonical: currentUrl,
    },
  }
}

export default function OkolicaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <OkolicaHero />
      <OkolicaInfo />
      <OkolicaGallery />
      <AreaAttractions />
      <Footer />
    </main>
  )
}
