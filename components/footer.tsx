import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 bg-forest text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Leśne Chatki</h3>
            <p className="text-white/80 leading-relaxed">
              Miejsce stworzone do zwolnienia tempa i odpoczynku w otoczeniu natury Beskidów.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-white/80 hover:text-white transition-colors">
                  Start
                </Link>
              </li>
              <li>
                <Link href="#chatki" className="text-white/80 hover:text-white transition-colors">
                  Nasze Chatki
                </Link>
              </li>
              <li>
                <Link href="#cennik" className="text-white/80 hover:text-white transition-colors">
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-white/80 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-white/80">
              <li>+47 786 888 498</li>
              <li>rezerwacje@lesnechatki.com</li>
              <li>Koniaków 1248/A</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>© 2026 Leśne Chatki. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
