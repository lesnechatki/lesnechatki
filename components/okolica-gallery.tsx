"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { X } from "lucide-react"

const okolicaImages = [
  "/lesnechatki.okolica/IMG_2698.webp",
  "/lesnechatki.okolica/IMG_2700.webp",
  "/lesnechatki.okolica/IMG_3529.webp",
  "/lesnechatki.okolica/IMG_3531.webp",
  "/lesnechatki.okolica/IMG_3554.webp",
  "/lesnechatki.okolica/IMG_3563.webp",
  "/lesnechatki.okolica/IMG_3569.webp",
  "/lesnechatki.okolica/IMG_6046.webp",
  "/lesnechatki.okolica/IMG_0975.webp",
  "/lesnechatki.okolica/IMG_0998.webp",
  "/lesnechatki.okolica/IMG_1001.webp",
  "/lesnechatki.okolica/IMG_2820.webp",
  "/lesnechatki.okolica/IMG_5161.webp",
]

export function OkolicaGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
              Galeria okolicy
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-forest/30 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {okolicaImages.map((image, index) => (
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
                  alt={`Okolica Koniakowa - zdjęcie ${index + 1}`}
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
            alt="Okolica Koniakowa"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  )
}
