import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OkolicaHero } from "@/components/okolica-hero"
import { OkolicaGallery } from "@/components/okolica-gallery"
import { OkolicaInfo } from "@/components/okolica-info"
import { AreaAttractions } from "@/components/area-attractions"

export const metadata = {
  title: "Okolica - Leśne Chatki w Koniakowie",
  description:
    "Koniaków to najwyżej położona wieś Beskidu Śląskiego. Poznaj okolicę, atrakcje i piękno Beskidów.",
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
