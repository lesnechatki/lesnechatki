"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { CabinDetails } from "@/lib/cabins-data"

interface CabinPricingProps {
  cabin: CabinDetails
}

export function CabinPricing({ cabin }: CabinPricingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  if (cabin.comingSoon) {
    return (
      <section ref={ref} className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Cennik</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 rounded-3xl border-2 border-border/50 text-center">
              <p className="text-xl text-muted-foreground italic">Wkrótce dostępny</p>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  // Special handling for Świerk and Sosna - show combined option
  const showCombinedOption = cabin.slug === "swierk" || cabin.slug === "sosna"

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-forest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cennik
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transparentne ceny za nocleg w {cabin.name}
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 rounded-3xl border-2 border-forest/20 hover:border-forest/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-forest mb-2">
                {cabin.name} {cabin.slug === "jodla" && "z balią na wyłączność"}
                {cabin.slug === "swierk" && "4-osobowy (parter)"}
                {cabin.slug === "sosna" && "5-6 osobowy (piętro)"}
              </h3>
              {cabin.pricing.length > 0 ? (
                <div className="space-y-4 mt-6">
                  {cabin.pricing.map((price, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center pb-4 border-b border-border/40 last:border-0"
                    >
                      <span className="text-foreground/80 text-lg">{price.guests}</span>
                      <span className="text-2xl font-bold text-forest">{price.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground italic mt-6">Już wkrótce</p>
              )}
            </Card>
          </motion.div>

          {/* Combined option for Świerk and Sosna */}
          {showCombinedOption && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="p-8 rounded-3xl border-2 border-forest/20 hover:border-forest/40 transition-all duration-300 bg-sand/30">
                <h3 className="text-2xl font-bold text-forest mb-2">
                  Apartament Świerk i Sosna (cały domek) z balią na wyłączność
                </h3>
                <div className="space-y-4 mt-6">
                  <div className="flex justify-between items-center pb-4 border-b border-border/40">
                    <span className="text-foreground/80 text-lg">4-6 osób</span>
                    <span className="text-2xl font-bold text-forest">800 zł</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/80 text-lg">8-10 osób</span>
                    <span className="text-2xl font-bold text-forest">1000 zł</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-8 bg-forest border-0 rounded-3xl">
              <p className="text-center text-white leading-relaxed mb-6">
                W przypadku dłuższych pobytów (powyżej 5 nocy), większych grup oraz Świąt ofertę wyceniamy indywidualnie.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#kontakt"
                  }}
                  className="bg-forest hover:bg-forest-light text-white rounded-full px-12 py-6 text-lg group shadow-lg hover:shadow-xl hover:shadow-forest/20 transition-all duration-300"
                >
                  Zarezerwuj termin
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
