"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function OkolicaHero() {
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
      ref={containerRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-forest/5 to-background"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="/lesnechatki.okolica/IMG_0975.webp"
          alt="Koniaków - okolica"
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
              Najwyżej położona wieś Beskidu Śląskiego
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 text-balance tracking-tight leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Okolica
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
              Koniaków i Beskidy
            </span>
          </motion.h1>
        </motion.div>
      </motion.div>
    </section>
  )
}
