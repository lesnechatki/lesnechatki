const attractions = [
  { name: "Szlaki piesze i rowerowe", description: "start praktycznie spod domku", isBold: false },
  { name: "Stoki narciarskie Złoty Groń i Zagroń", description: "trasy o różnym stopniu trudności", isBold: false },
  { name: "Park Wodny Olza", description: "baseny zewnętrzne i wewnętrzne", isBold: false },
  { name: "Centrum Koronki Koniakowskiej", description: "Muzeum i sklep", isBold: false },
  { name: "Karczma Świstak", description: "kuchnia regionalna", isBold: false },
  { name: "Centrum Pasterskie 1 km", description: "tradycja pasterska, bacówka i sklep", isBold: false },
  { name: "Ochodzita", description: "najpiękniejsze zachody słońca", isBold: false },
  { name: "Złoty Groń", description: "kolej linowa, punkt widokowy, trasy enduro", isBold: false },
  { name: "Base Camp", description: "park linowy, paintball", isBold: false },
  { name: "Trasy narciarstwa biegowego i biathlonu Kubalonka", description: "malownicze pętle leśne", isBold: true },
  { name: "Trójstyk granic PL-CZ-SK", description: "punkt styku granic trzech państw", isBold: false },
  { name: "Barania Góra", description: "źródła Wisły, widoki", isBold: false },
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
              <div key={index} className="p-4 bg-background rounded-2xl">
                <div className="flex flex-col">
                  <h3 className={`text-lg md:text-xl mb-1 ${attraction.isBold ? "font-bold" : "font-semibold"} text-forest`}>
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
