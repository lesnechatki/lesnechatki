import type { Metadata } from "next"
import { headers } from "next/headers"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers()
  const host = headersList.get("host") || ""
  const protocol = headersList.get("x-forwarded-proto") || "https"
  const baseUrl = `${protocol}://${host}`
  const currentUrl = baseUrl

  return {
    title: "Leśne Chatki w Koniakowie | Domki w Beskidach",
    description:
      "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url: currentUrl,
      siteName: "Leśne Chatki w Koniakowie",
      title: "Leśne Chatki w Koniakowie | Domki w Beskidach",
      description:
        "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
      images: [
        {
          url: `${currentUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Leśne Chatki - domki w lesie w Koniakowie, Beskidy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Leśne Chatki w Koniakowie | Domki w Beskidach",
      description:
        "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
      images: [`${currentUrl}/og-image.png`],
    },
    alternates: {
      canonical: currentUrl,
    },
  }
}

// Lazy load below-the-fold components to reduce initial bundle size
const Features = dynamic(() => import("@/components/features").then(mod => ({ default: mod.Features })), { ssr: true })
const CabinsOverview = dynamic(() => import("@/components/cabins-overview").then(mod => ({ default: mod.CabinsOverview })), { ssr: true })
const AboutLocation = dynamic(() => import("@/components/about-location").then(mod => ({ default: mod.AboutLocation })), { ssr: true })
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <CabinsOverview />
      <AboutLocation />
      <Contact />
      <Footer />
    </main>
  )
}
