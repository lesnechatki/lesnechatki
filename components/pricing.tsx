import { Card } from "@/components/ui/card"

const pricingData = [
  {
    name: "Jodła",
    subtitle: "8-osobowa z balią",
    prices: [
      { guests: "8 osób", price: "800 zł" },
      { guests: "2 osoby", price: "600 zł" },
    ],
  },
  {
    name: "Świerk",
    subtitle: "4-osobowy",
    prices: [
      { guests: "4 osoby", price: "550 zł" },
      { guests: "3 osoby", price: "450 zł" },
      { guests: "2 osoby", price: "350 zł" },
    ],
  },
  {
    name: "Sosna",
    subtitle: "5-6 osób",
    prices: [
      { guests: "6 osób", price: "600 zł" },
      { guests: "4 osoby", price: "550 zł" },
      { guests: "3 osoby", price: "450 zł" },
      { guests: "2 osoby", price: "350 zł" },
    ],
  },
  {
    name: "Świerk i Sosna",
    subtitle: "Cały domek z balią",
    prices: [
      { guests: "4-6 osób", price: "800 zł" },
      { guests: "8-10 osób", price: "1000 zł" },
    ],
  },
  {
    name: "Modrzew",
    subtitle: "Wkrótce dostępny",
    prices: [],
  },
]

export function Pricing() {
  return (
    <section id="cennik" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Cennik</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparentne ceny za nocleg w naszych domkach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {pricingData.map((cabin) => (
            <Card key={cabin.name} className="p-8 rounded-3xl border-2 border-border/50">
              <h3 className="text-2xl font-bold text-forest mb-2">{cabin.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{cabin.subtitle}</p>
              {cabin.prices.length > 0 ? (
                <div className="space-y-4">
                  {cabin.prices.map((price, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center pb-3 border-b border-border/40 last:border-0"
                    >
                      <span className="text-foreground/80">{price.guests}</span>
                      <span className="text-xl font-bold text-forest">{price.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground italic">Już wkrótce</p>
              )}
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-forest border-0 rounded-3xl">
            <p className="text-center text-white leading-relaxed">
              W przypadku dłuższych pobytów (powyżej 5 nocy), większych grup oraz Świąt ofertę wyceniamy indywidualnie.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
