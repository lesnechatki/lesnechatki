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
          url: `${currentUrl}/zdjecie-glowne.webp`,
          width: 1200,
          height: 630,
          alt: "Leśne Chatki w Koniakowie",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Leśne Chatki w Koniakowie | Domki w Beskidach",
      description:
        "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
      images: [`${currentUrl}/zdjecie-glowne.webp`],
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
const Pricing = dynamic(() => import("@/components/pricing").then(mod => ({ default: mod.Pricing })), { ssr: true })
const BookingConditions = dynamic(() => import("@/components/booking-conditions").then(mod => ({ default: mod.BookingConditions })), { ssr: true })
const AdditionalAttractions = dynamic(() => import("@/components/additional-attractions").then(mod => ({ default: mod.AdditionalAttractions })), { ssr: true })
const AreaAttractions = dynamic(() => import("@/components/area-attractions").then(mod => ({ default: mod.AreaAttractions })), { ssr: true })
const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), { ssr: true })
const PaymentInfo = dynamic(() => import("@/components/payment-info").then(mod => ({ default: mod.PaymentInfo })), { ssr: true })

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <CabinsOverview />
      <AboutLocation />
      <Pricing />
      <BookingConditions />
      <AdditionalAttractions />
      <AreaAttractions />
      <Contact />
      <PaymentInfo />
      <Footer />
    </main>
  )
}
