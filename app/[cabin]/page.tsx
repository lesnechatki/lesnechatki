import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { cabinsData } from "@/lib/cabins-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CabinHero } from "@/components/cabin-hero"
import { CabinDetails } from "@/components/cabin-details"
import { CabinGallery } from "@/components/cabin-gallery"
import { CabinPricing } from "@/components/cabin-pricing"
import { StructuredData } from "@/components/structured-data"
import { BookingConditions } from "@/components/booking-conditions"
import { AdditionalAttractions } from "@/components/additional-attractions"
import { PaymentInfo } from "@/components/payment-info"

export async function generateStaticParams() {
  return Object.keys(cabinsData).map((slug) => ({
    cabin: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ cabin: string }> }): Promise<Metadata> {
  const headersList = await headers()
  const host = headersList.get("host") || ""
  const protocol = headersList.get("x-forwarded-proto") || "https"
  const baseUrl = `${protocol}://${host}`

  const { cabin: cabinSlug } = await params
  const cabin = cabinsData[cabinSlug]

  if (!cabin) {
    return {
      title: "Chatka nie znaleziona",
    }
  }

  const title = `${cabin.name} - Leśne Chatki w Koniakowie`
  const description = `${cabin.name} - ${cabin.description}. ${cabin.specialNote || ""} Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.`
  const url = `${baseUrl}/${cabin.slug}`
  const imageUrl = `${baseUrl}/${cabin.imageFolder}/IMG_3620.webp`

  return {
    title,
    description,
    keywords: [
      `${cabin.name} Koniaków`,
      `domki ${cabin.name} Koniaków`,
      `noclegi ${cabin.name}`,
      "Koniaków",
      "Twójwieś",
      "Beskidy Śląskie",
    ],
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url,
      siteName: "Leśne Chatki w Koniakowie",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${cabin.name} - Leśne Chatki w Koniakowie`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function CabinPage({ params }: { params: Promise<{ cabin: string }> }) {
  const { cabin: cabinSlug } = await params
  const cabin = cabinsData[cabinSlug]

  if (!cabin) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <StructuredData type="LodgingBusiness" cabin={cabin} />
      <Navigation />
      <CabinHero cabin={cabin} />
      <CabinDetails cabin={cabin} />
      <CabinGallery cabin={cabin} />
      <CabinPricing cabin={cabin} />
      <BookingConditions />
      <AdditionalAttractions />
      <PaymentInfo />
      <Footer />
    </main>
  )
}
