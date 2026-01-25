import { Card } from "@/components/ui/card"
import { Clock, CreditCard, Key, Shield, PawPrint } from "lucide-react"

const conditions = [
  {
    icon: Clock,
    label: "Minimalny pobyt",
    value: "2 noce",
  },
  {
    icon: CreditCard,
    label: "Zadatek",
    value: "20% (faktura VAT)",
  },
  {
    icon: Key,
    label: "Doba hotelowa",
    value: "15:00 – 11:00",
  },
  {
    icon: Shield,
    label: "Kaucja",
    value: "500 zł",
  },
  {
    icon: PawPrint,
    label: "Opłata za psa",
    value: "50 zł za cały pobyt",
  },
]

export function BookingConditions() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Warunki rezerwacji</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {conditions.map((condition, index) => (
            <Card key={index} className="p-6 rounded-3xl border-2 border-forest/20 hover:border-forest/40 transition-all duration-300 text-center bg-white/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                <condition.icon className="w-6 h-6 text-forest" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-forest mb-2">{condition.label}</h3>
              <p className="text-foreground/80 font-medium">{condition.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
