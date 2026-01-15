import { Check } from "lucide-react"

const attractions = [
  { name: "Szlaki piesze i rowerowe", distance: "" },
  { name: "Złoty Groń", distance: "4 km" },
  { name: "Park Wodny Olza", distance: "4 km" },
  { name: "Centrum Koronki", distance: "1 km" },
  { name: "Karczma i bacówka", distance: "1 km" },
  { name: "Ochodzita", distance: "3 km" },
  { name: "Base Camp", distance: "5,5 km" },
  { name: "Trójstyk granic", distance: "10 km" },
  { name: "Barania Góra", distance: "13 km" },
]

export function AreaAttractions() {
  return (
    <section id="okolica" className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">Okolica</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Koniaków to najwyżej położona wieś Beskidu Śląskiego, gdzie slow life był znany od zawsze. To miejsce,
              gdzie natura otacza nas ze wszystkich stron, a cisza pozwala odnaleźć spokój. W okolicy znajduje się wiele
              atrakcji, które warto odwiedzić podczas pobytu.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {attractions.map((attraction, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-2xl">
                <div className="w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-forest" strokeWidth={2.5} />
                </div>
                <span className="text-foreground/80 font-medium">{attraction.name}</span>
                {attraction.distance && (
                  <span className="text-sm text-muted-foreground ml-auto">{attraction.distance}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
