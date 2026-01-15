import { Card } from "@/components/ui/card"
import { Clock, CreditCard, Key, Shield, PartyPopper } from "lucide-react"

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
    icon: PartyPopper,
    label: "Imprezy specjalne",
    value: "1000 zł",
  },
]

export function BookingConditions() {
  return (
    <section className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Warunki rezerwacji</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {conditions.map((condition, index) => (
            <Card key={index} className="p-6 rounded-3xl border-2 border-border/50 text-center">
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
