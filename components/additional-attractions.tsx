import { Card } from "@/components/ui/card"
import { Flame, Truck, Music } from "lucide-react"

const attractions = [
  {
    icon: Flame,
    name: "Ognisko",
    price: "100 zł",
    description: "W cenie misa ogniskowa, drewno, kijki do kiełbasek",
  },
  {
    icon: Truck,
    name: "Kulig",
    price: "350 zł / wóz / max 10 osób",
    description: "Tradycyjna przejażdżka kuligiem",
  },
  {
    icon: Music,
    name: "Kapela góralska",
    price: "od 500 zł",
    description: "Tradycyjna muzyka góralska",
  },
]

export function AdditionalAttractions() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Atrakcje dodatkowe</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Wzbogać swój pobyt o wyjątkowe doświadczenia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {attractions.map((attraction) => (
            <Card
              key={attraction.name}
              className="p-8 rounded-3xl border-2 border-border/50 text-center hover:border-forest/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                <attraction.icon className="w-8 h-8 text-forest" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-forest mb-2">{attraction.name}</h3>
              <p className="text-2xl font-bold text-forest mb-3">{attraction.price}</p>
              <p className="text-sm text-muted-foreground">{attraction.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
