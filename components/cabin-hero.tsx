"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import type { CabinDetails } from "@/lib/cabins-data"
import Image from "next/image"

interface CabinHeroProps {
  cabin: CabinDetails
}

export function CabinHero({ cabin }: CabinHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.6, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  // Get first image from the folder as hero image
  const getHeroImage = () => {
    // We'll use a placeholder approach - in production you'd list files
    // For now, we'll use a known pattern or the first image
    const imageFolder = cabin.imageFolder
    if (imageFolder === "lesnechatki.jodla") return "/lesnechatki.jodla/IMG_3620.webp"
    if (imageFolder === "lesnechatki.swierk") return "/lesnechatki.swierk/IMG_3853.webp"
    if (imageFolder === "lesnechatki.sosna") return "/lesnechatki.sosna/sosna.home.webp"
    if (imageFolder === "lesnechatki.modrzew") return "/lesnechatki.modrzew/IMG_1147.webp"
    return "/zdjecie-glowne.webp"
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest/5 to-background"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src={getHeroImage()}
          alt={cabin.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-background/90" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="inline-block mb-8"
          >
            <div className="glass-effect px-6 py-3 rounded-full text-white/90 text-sm font-light backdrop-blur-xl border border-white/20">
              {cabin.comingSoon ? "Wkrótce dostępne" : "Leśne Chatki"}
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 text-balance tracking-tight leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {cabin.name}
            <br />
            <span className="text-5xl md:text-7xl lg:text-8xl font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              {cabin.description}
            </span>
          </motion.h1>
        </motion.div>

        {cabin.specialNote && (
          <motion.p
            className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto mb-14 leading-relaxed text-pretty font-light"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {cabin.specialNote}
          </motion.p>
        )}

        {!cabin.comingSoon && (
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={() => {
                  window.location.href = "/#kontakt"
                }}
                className="bg-forest hover:bg-forest-light text-white rounded-full px-12 py-8 text-lg group shadow-2xl hover:shadow-forest/30 transition-all duration-500"
              >
                Zarezerwuj termin
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  window.location.href = "/#kontakt"
                }}
                className="rounded-full px-12 py-8 text-lg glass-effect border-2 border-white/50 text-white hover:bg-white hover:text-forest shadow-2xl transition-all duration-500 bg-transparent"
              >
                Skontaktuj się
              </Button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
