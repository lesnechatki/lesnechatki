"use client"

import { motion, useInView } from "framer-motion"
import { Trees, Droplets, PawPrint, Flame, Home, Car } from "lucide-react"
import { useRef } from "react"

const features = [
  { icon: Trees, label: "Prywatny las", description: "Spacery w ciszy" },
  { icon: Droplets, label: "Balia dla gości", description: "Relaks w ciepłej wodzie" },
  { icon: PawPrint, label: "Przyjazne psom", description: "Twój pupil mile widziany" },
  { icon: Flame, label: "Ognisko i grill", description: "Wieczory przy ogniu" },
  { icon: Home, label: "Kameralny kompleks", description: "Tylko 3 domki" },
  { icon: Car, label: "Prywatny parking", description: "W cenie pobytu" },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="features" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-10 w-72 h-72 bg-forest/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-forest/10 rounded-full blur-3xl"
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
            Co oferujemy
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-forest/30 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.8 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center text-center gap-5 group cursor-default"
            >
              <motion.div
                className="relative w-28 h-28 rounded-3xl forest-glass forest-glass-hover flex items-center justify-center border border-forest/10 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <feature.icon className="w-12 h-12 text-forest" strokeWidth={1.5} />
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-forest/0 group-hover:bg-forest/5 transition-colors duration-500"
                  whileHover={{ boxShadow: "0 0 30px rgba(89, 130, 108, 0.3)" }}
                />
              </motion.div>
              <div>
                <p className="text-base font-semibold text-forest mb-1">{feature.label}</p>
                <p className="text-xs text-muted-foreground font-light">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
