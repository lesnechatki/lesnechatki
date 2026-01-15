"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function OkolicaInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            Koniaków
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-forest/30 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-foreground/80 leading-relaxed font-light mb-6">
              Nasze miejsce znajduje się w sercu Koniakowa – najwyżej położonej wsi w Beskidzie Śląskim. To nie jest
              zwykła lokalizacja – to miejsce, gdzie góry nie są tylko tłem, ale częścią codzienności. Z działki
              wychodzi się prosto na szlak na Baranią Górę, a jeśli dobrze się wsłuchać – w lesie za domem słychać nie
              tylko wiatr, ale i historię.
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed font-light mb-6">
              Bo Koniaków to wieś o silnych korzeniach. Znana z koronki koniakowskiej, która powstaje tutaj od pokoleń.
              Ręcznie szydełkowane serwety, bieżniki i… bielizna – z misternych nici, cierpliwości i talentu, o których
              najlepiej opowie Pani Lucyna w Centrum Koronki Koniakowskiej.
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed font-light mb-6">
              W okolicy nie brakuje także dobrego jedzenia. Tradycyjne karczmy i lokalne restauracje serwują regionalne
              dania, sery z okolicznych bacówek i domowe wypieki. To idealne uzupełnienie górskich spacerów i wieczorów
              spędzonych w Leśnych Chatkach.
            </p>

            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              A gdy przychodzi zima – robi się jak w bajce. Śnieg przykrywa wszystko grubą pierzyną, a dzieci (i dorośli
              też) zjeżdżają na sankach z naszej górki. W okolicy znajdziecie trasy biegowe, wyciągi narciarskie i
              możliwość kuligu. A wieczorem? Balia pod gwiazdami, książka i gorąca herbata z widokiem na ośnieżony las.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 p-8 bg-sand/50 rounded-3xl border border-forest/10"
          >
            <p className="text-center text-lg text-foreground/80 leading-relaxed font-light italic">
              Koniaków jest świetną bazą wypadową, a jednocześnie miejscem, do którego chce się wracać.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
