"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import type { CabinDetails } from "@/lib/cabins-data"
import { Home, Users, Droplets, Wifi, Tv, Calendar } from "lucide-react"

interface CabinDetailsProps {
  cabin: CabinDetails
}

export function CabinDetails({ cabin }: CabinDetailsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  if (cabin.comingSoon) {
    return (
      <section ref={ref} className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-forest mb-8">O chatce</h2>
            <p className="text-xl text-foreground/80 leading-relaxed font-light">{cabin.specialNote}</p>
          </motion.div>
        </div>
      </section>
    )
  }

  const specifications = [
    { icon: Home, label: "Powierzchnia", value: cabin.specifications.area },
    { icon: Users, label: "Liczba sypialni", value: cabin.specifications.bedrooms },
    { icon: Droplets, label: "Liczba łazienek", value: cabin.specifications.bathrooms },
    { icon: Tv, label: "TV z Netflix", value: cabin.specifications.tvs },
    { icon: Wifi, label: "WiFi", value: cabin.specifications.wifi },
    { icon: Calendar, label: "Doba hotelowa", value: cabin.specifications.checkIn },
  ]

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-10 w-72 h-72 bg-forest/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-forest mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            O chatce
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-forest/30 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-forest mb-6">Wyposażenie</h3>
            <ul className="space-y-4">
              {cabin.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <span className="text-forest mt-1">•</span>
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-forest mb-6">Specyfikacja</h3>
            <div className="grid grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="p-6 rounded-3xl border border-border/30 hover:border-forest/30 transition-all duration-300">
                    <spec.icon className="w-8 h-8 text-forest mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                    <p className="text-xl font-bold text-forest">{spec.value}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
