"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const cabins = [
  {
    name: "Jodła",
    description: "Dla 8 osób",
    image: "/lesnechatki.jodla/IMG_2719.webp",
    href: "/jodla",
  },
  {
    name: "Świerk",
    description: "Dla 4 osób",
    image: "/lesnechatki.swierk/3707B5EB-1276-4AA1-AE73-A0DD6676ADF9.webp",
    href: "/swierk",
  },
  {
    name: "Sosna",
    description: "Dla 5-6 osób",
    image: "/lesnechatki.sosna/IMG_1835.webp",
    href: "/sosna",
  },
  {
    name: "Modrzew",
    description: "Wkrótce",
    image: "/lesnechatki.modrzew/IMG_1147.webp",
    href: "/modrzew",
    comingSoon: true,
  },
]

export function CabinsOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="chatki" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-forest/5 to-background" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-forest/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-forest/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="forest-glass px-6 py-2 rounded-full text-forest text-sm font-medium border border-forest/20">
              Cztery unikalne miejsca
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold text-forest mb-6 tracking-tight leading-tight"
          >
            Nasze Chatki
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
          >
            Każdy domek zaprojektowany z myślą o Twoim komforcie i bliskości z naturą
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cabins.map((cabin, index) => (
            <motion.div
              key={cabin.name}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
              transition={{
                duration: 0.9,
                delay: 0.15 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={cabin.href}>
                <motion.div whileHover={{ y: -12 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                  <Card className="overflow-hidden border border-border/30 hover:border-forest/30 transition-all duration-700 group cursor-pointer rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-forest/10 bg-white/50 backdrop-blur-sm">
                    <div className="relative h-80 overflow-hidden">
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Image
                          src={cabin.image || "/placeholder.svg"}
                          alt={`${cabin.name} - Leśne Chatki w Koniakowie`}
                          fill
                          quality={85}
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>

                      {cabin.comingSoon && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 glass-effect flex items-center justify-center"
                        >
                          <span className="text-forest font-semibold text-xl px-6 py-3 bg-white/90 rounded-full">
                            Wkrótce
                          </span>
                        </motion.div>
                      )}

                      <motion.div
                        className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-xl"
                        initial={{ scale: 0, rotate: -45 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-forest" />
                      </motion.div>
                    </div>

                    <div className="p-8 text-center bg-gradient-to-b from-white/80 to-sand/50 backdrop-blur-sm">
                      <h3 className="text-3xl font-bold text-forest mb-2 group-hover:text-forest-light transition-colors duration-300">
                        {cabin.name}
                      </h3>
                      <p className="text-muted-foreground text-lg font-light">{cabin.description}</p>
                    </div>
                  </Card>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
