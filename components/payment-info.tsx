import { Card } from "@/components/ui/card"

export function PaymentInfo() {
  return (
    <section className="py-24 bg-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Dane do wpłat</h2>
        </div>

        <Card className="max-w-2xl mx-auto p-8 rounded-3xl border-2 border-border/50 bg-background">
          <div className="space-y-6 text-center">
            <div>
              <p className="font-bold text-forest text-lg mb-1">WoodHomeDeco – Barbara Macoszek-Drobny</p>
              <p className="text-foreground/80">Koniaków 1248/A</p>
              <p className="text-foreground/80">43-474 Koniaków</p>
              <p className="text-foreground/80">NIP: 5482735115</p>
            </div>

            <div className="pt-4 border-t border-border/40">
              <p className="text-sm text-muted-foreground mb-2">Numer konta:</p>
              <p className="text-xl font-bold text-forest font-mono">81 1050 1096 1000 0009 2833 2558</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
