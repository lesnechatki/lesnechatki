"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useRef } from "react"
import Image from "next/image"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.6, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest/5 to-background"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/zdjecie-glowne.webp"
          alt="Leśne Chatki w Koniakowie"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-background/90" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 text-balance tracking-tight leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Leśne Chatki
            <br />
            <span className="text-5xl md:text-7xl lg:text-8xl font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              w Koniakowie
            </span>
          </motion.h1>
        </motion.div>

        <p className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto mb-14 leading-relaxed text-pretty font-light">
          Wiemy, że najlepsze wspomnienia tworzą się wtedy, gdy zwalniamy i doświadczamy miejsca wszystkimi zmysłami. Dlatego nasze domki stoją na dużej, zielonej działce z prywatnym lasem. Miejsce stworzone do spacerów między drzewami i poranków bez planu.
        </p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
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
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-12 py-8 text-lg glass-effect border-2 border-white/50 text-white hover:bg-white hover:text-forest shadow-2xl transition-all duration-500 bg-transparent"
            >
              Skontaktuj się
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/70 text-sm font-light">Przewiń w dół</span>
            <ChevronDown className="w-6 h-6 text-white/70" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
