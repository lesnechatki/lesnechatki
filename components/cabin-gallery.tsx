"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X } from "lucide-react"
import type { CabinDetails } from "@/lib/cabins-data"

interface CabinGalleryProps {
  cabin: CabinDetails
}

// Image lists for each cabin folder
const cabinImages: Record<string, string[]> = {
  "lesnechatki.jodla": [
    "/lesnechatki.jodla/17185461-D11D-45A2-B2AF-E24271EF60B0.webp",
    "/lesnechatki.jodla/56B7387D-5D84-46DE-8998-FBF6B4591D38.webp",
    "/lesnechatki.jodla/69AED2B3-330E-4ED0-AC43-C2B8E76465C1.webp",
    "/lesnechatki.jodla/6AF12BE3-EE44-46A7-B951-F6E208F8B7D0.webp",
    "/lesnechatki.jodla/afguky05g38v4xpwd0ap.webp",
    "/lesnechatki.jodla/c5mmywgfffy1foszl4om.webp",
    "/lesnechatki.jodla/dlybl9lukara00ktdnj7.webp",
    "/lesnechatki.jodla/igllpspviar18ckzjzag.webp",
    "/lesnechatki.jodla/IMG_1752.webp",
    "/lesnechatki.jodla/IMG_1760.webp",
    "/lesnechatki.jodla/IMG_1761.webp",
    "/lesnechatki.jodla/IMG_1763.webp",
    "/lesnechatki.jodla/IMG_1771.webp",
    "/lesnechatki.jodla/IMG_1778.webp",
    "/lesnechatki.jodla/IMG_2572.webp",
    "/lesnechatki.jodla/IMG_2593.webp",
    "/lesnechatki.jodla/IMG_2719.webp",
    "/lesnechatki.jodla/IMG_2801.webp",
    "/lesnechatki.jodla/IMG_3598.webp",
    "/lesnechatki.jodla/IMG_3620.webp",
    "/lesnechatki.jodla/IMG_6788.webp",
    "/lesnechatki.jodla/n7o6xnlrcesh5fyr9adu.webp",
    "/lesnechatki.jodla/nc1vcifdett3kt73i9v0.webp",
    "/lesnechatki.jodla/nh0hawywmfgtfny2fvxt.webp",
    "/lesnechatki.jodla/rmzenpv3thnzwfdt45hk.webp",
    "/lesnechatki.jodla/za9l3eyiynijjmcm7agy.webp",
  ],
  "lesnechatki.swierk": [
    "/lesnechatki.swierk/3707B5EB-1276-4AA1-AE73-A0DD6676ADF9.webp",
    "/lesnechatki.swierk/40E57B86-2321-4DD0-BFAA-1E0B4A4501A4.webp",
    "/lesnechatki.swierk/IMG_3853.webp",
    "/lesnechatki.swierk/IMG_3856.webp",
    "/lesnechatki.swierk/IMG_3864.webp",
    "/lesnechatki.swierk/IMG_3866.webp",
    "/lesnechatki.swierk/IMG_3867.webp",
    "/lesnechatki.swierk/IMG_3869.webp",
    "/lesnechatki.swierk/IMG_3872.webp",
    "/lesnechatki.swierk/IMG_3873.webp",
    "/lesnechatki.swierk/IMG_3874.webp",
    "/lesnechatki.swierk/IMG_3875.webp",
    "/lesnechatki.swierk/IMG_3880.webp",
  ],
  "lesnechatki.sosna": [
    "/lesnechatki.sosna/IMG_1835.webp",
    "/lesnechatki.sosna/IMG_6772.webp",
    "/lesnechatki.sosna/IMG_6777.webp",
    "/lesnechatki.sosna/IMG_6781.webp",
    "/lesnechatki.sosna/IMG_6788.webp",
    "/lesnechatki.sosna/IMG_6789.webp",
    "/lesnechatki.sosna/IMG_6803.webp",
    "/lesnechatki.sosna/IMG_6812.webp",
  ],
  "lesnechatki.modrzew": ["/lesnechatki.modrzew/IMG_1147.webp"],
}

export function CabinGallery({ cabin }: CabinGalleryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = cabinImages[cabin.imageFolder] || []

  if (images.length === 0) {
    return null
  }

  return (
    <>
      <section ref={ref} className="py-32 bg-sand relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-forest/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-forest mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Galeria
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-forest/30 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${cabin.name} - zdjęcie ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-forest transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            src={selectedImage}
            alt={cabin.name}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  )
}
