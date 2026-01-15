"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export function AboutLocation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="py-32 bg-sand relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-forest/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.div style={{ y: imageY }} className="relative w-full h-[110%]">
              <Image
                src="/koniak-w-beskid-mountains-village-landscape.jpg"
                alt="Koniaków - najwyżej położona wieś Beskidu Śląskiego, Twójwieś"
                fill
                quality={85}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-forest mb-8 text-balance leading-tight"
            >
              Koniaków to najwyżej położona wieś Beskidu Śląskiego
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-foreground/80 leading-relaxed mb-8 font-light"
            >
              W Koniakowie znaliśmy slowlife zanim to się stało modne. To miejsce, gdzie wszystko nabiera innego
              znaczenia - czas płynie wolniej, a natura otacza nas ze wszystkich stron.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link href="/okolica">
                <Button
                  variant="outline"
                  className="rounded-full group border-2 bg-white hover:bg-forest hover:text-white hover:border-forest transition-all duration-500 px-8 py-6 text-lg shadow-lg"
                >
                  Zobacz okolicę
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
