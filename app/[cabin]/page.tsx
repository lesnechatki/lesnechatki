import { notFound } from "next/navigation"
import { cabinsData } from "@/lib/cabins-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CabinHero } from "@/components/cabin-hero"
import { CabinDetails } from "@/components/cabin-details"
import { CabinGallery } from "@/components/cabin-gallery"
import { CabinPricing } from "@/components/cabin-pricing"

export async function generateStaticParams() {
  return Object.keys(cabinsData).map((slug) => ({
    cabin: slug,
  }))
}

export async function generateMetadata({ params }: { params: { cabin: string } }) {
  const cabin = cabinsData[params.cabin]

  if (!cabin) {
    return {
      title: "Chatka nie znaleziona",
    }
  }

  return {
    title: `${cabin.name} - Leśne Chatki w Koniakowie`,
    description: `${cabin.name} - ${cabin.description}. ${cabin.specialNote || ""}`,
  }
}

export default function CabinPage({ params }: { params: { cabin: string } }) {
  const cabin = cabinsData[params.cabin]

  if (!cabin) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <CabinHero cabin={cabin} />
      <CabinDetails cabin={cabin} />
      <CabinGallery cabin={cabin} />
      <CabinPricing cabin={cabin} />
      <Footer />
    </main>
  )
}
