import { Hero } from "@/components/hero"
import { CabinsOverview } from "@/components/cabins-overview"
import { AboutLocation } from "@/components/about-location"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { BookingConditions } from "@/components/booking-conditions"
import { AdditionalAttractions } from "@/components/additional-attractions"
import { AreaAttractions } from "@/components/area-attractions"
import { Contact } from "@/components/contact"
import { PaymentInfo } from "@/components/payment-info"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

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
