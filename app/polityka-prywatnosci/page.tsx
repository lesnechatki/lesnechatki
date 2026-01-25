import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Polityka Prywatności - Leśne Chatki",
  description: "Polityka prywatności i ochrony danych osobowych Leśne Chatki w Koniakowie.",
}

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="max-w-none">
          <h1 className="text-4xl font-bold mb-8 font-heading">Polityka Prywatności</h1>
          <p className="text-muted-foreground mb-12">Ostatnia aktualizacja: 9 stycznia 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">1. Informacje ogólne</h2>
            <p className="mb-4">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług świadczonych przez Leśne Chatki dostępne pod adresem lesnechatki.com.
            </p>
            <div className="bg-section-bg p-6 rounded-lg mb-4">
              <h3 className="font-semibold mb-2 font-heading">Administrator danych:</h3>
              <p className="mb-1">WoodHomeDeco – Barbara Macoszek-Drobny</p>
              <p className="mb-1">NIP: 5482735115</p>
              <p className="mb-1">Koniaków 1248/A</p>
              <p className="mb-1">43-474 Koniaków, Polska</p>
              <p className="mb-1">Telefon: +48 786 888 498</p>
              <p>Email: rezerwacje@lesnechatki.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">2. Rodzaje przetwarzanych danych</h2>
            <p className="mb-4">
              W ramach świadczonych usług Leśne Chatki możemy przetwarzać następujące kategorie danych osobowych:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Dane identyfikacyjne (imię, nazwisko)</li>
              <li>Dane kontaktowe (adres e-mail, numer telefonu, adres korespondencyjny)</li>
              <li>Dane dotyczące rezerwacji (daty pobytu, liczba gości, wybrana chatka)</li>
              <li>Dane dotyczące płatności (dane do faktury, informacje o transakcjach)</li>
              <li>Dane dotyczące preferencji i specjalnych życzeń gości</li>
              <li>Dane techniczne (adres IP, informacje o przeglądarce, logi systemowe)</li>
              <li>Dane dotyczące korespondencji i komunikacji</li>
              <li>Dane dotyczące opinii i recenzji</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">3. Cele i podstawy prawne przetwarzania</h2>
            <p className="mb-4">Dane osobowe przetwarzamy w następujących celach:</p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li>
                <strong>Realizacja rezerwacji i świadczenie usług noclegowych</strong>
                <br />
                <span className="text-muted-foreground">Podstawa prawna: wykonanie umowy (art. 6 ust. 1 lit. b RODO)</span>
              </li>
              <li>
                <strong>Kontakt z gośćmi w sprawie rezerwacji i pobytu</strong>
                <br />
                <span className="text-muted-foreground">Podstawa prawna: wykonanie umowy (art. 6 ust. 1 lit. b RODO)</span>
              </li>
              <li>
                <strong>Wystawianie faktur i rozliczenia</strong>
                <br />
                <span className="text-muted-foreground">Podstawa prawna: wykonanie umowy oraz obowiązek prawny (art. 6 ust. 1 lit. b i c RODO)</span>
              </li>
              <li>
                <strong>Marketing bezpośredni i promocja usług</strong>
                <br />
                <span className="text-muted-foreground">Podstawa prawna: prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO) lub zgoda (art. 6 ust. 1 lit. a RODO)</span>
              </li>
              <li>
                <strong>Zapewnienie bezpieczeństwa i zapobieganie nadużyciom</strong>
                <br />
                <span className="text-muted-foreground">Podstawa prawna: prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)</span>
              </li>
              <li>
                <strong>Prowadzenie statystyk i analiz</strong>
                <br />
                <span className="text-muted-foreground">Podstawa prawna: prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)</span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">4. Okres przechowywania danych</h2>
            <p className="mb-4">Dane osobowe przechowujemy przez okres:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Niezbędny do realizacji umowy i świadczenia usług noclegowych</li>
              <li>Wymagany przepisami prawa (np. przepisy podatkowe - 5 lat dla dokumentów księgowych)</li>
              <li>Do momentu wycofania zgody (w przypadku przetwarzania na podstawie zgody)</li>
              <li>Do momentu wniesienia sprzeciwu wobec przetwarzania danych w celach marketingowych</li>
              <li>Dane dotyczące rezerwacji mogą być przechowywane przez okres niezbędny do rozliczeń i ewentualnych roszczeń</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">5. Prawa użytkowników</h2>
            <p className="mb-4">Przysługują Państwu następujące prawa:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Prawo dostępu do danych osobowych</li>
              <li>Prawo do sprostowania danych</li>
              <li>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</li>
              <li>Prawo do ograniczenia przetwarzania</li>
              <li>Prawo do przenoszenia danych</li>
              <li>Prawo sprzeciwu wobec przetwarzania</li>
              <li>Prawo do wycofania zgody w dowolnym momencie</li>
              <li>Prawo do wniesienia skargi do organu nadzorczego (Prezes Urzędu Ochrony Danych Osobowych)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">6. Udostępnianie danych</h2>
            <p className="mb-4">
              Dane osobowe mogą być udostępniane wyłącznie podmiotom uprawnionym na podstawie przepisów prawa oraz naszym zaufanym partnerom technologicznym w zakresie niezbędnym do świadczenia usług, w tym:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Dostawcy hostingu i infrastruktury chmurowej</li>
              <li>Systemy płatności i rozliczeń</li>
              <li>Narzędzia do zarządzania rezerwacjami</li>
              <li>Dostawcy usług analitycznych (w zakresie anonimowych danych)</li>
              <li>Dostawcy usług emailowych</li>
              <li>Organy państwowe na podstawie obowiązujących przepisów prawa</li>
            </ul>
            <p>
              Wszyscy nasi partnerzy są zobowiązani do przestrzegania odpowiednich standardów bezpieczeństwa danych zgodnych z RODO.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">7. Bezpieczeństwo danych</h2>
            <p className="mb-4">
              Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo przetwarzanych danych osobowych, w tym:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Zabezpieczenia przed nieuprawnionym dostępem</li>
              <li>Ochrona przed utratą, zniszczeniem lub uszkodzeniem danych</li>
              <li>Szyfrowanie danych wrażliwych</li>
              <li>Regularne kopie zapasowe</li>
              <li>Monitorowanie i wykrywanie nieprawidłowości</li>
              <li>Ograniczony dostęp do danych tylko dla uprawnionych pracowników</li>
              <li>Regularne aktualizacje systemów bezpieczeństwa</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">8. Pliki cookies</h2>
            <p className="mb-4">
              Nasza strona internetowa lesnechatki.com wykorzystuje pliki cookies w celu:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Zapewnienia prawidłowego funkcjonowania serwisu</li>
              <li>Utrzymania sesji użytkownika</li>
              <li>Analizy ruchu na stronie</li>
              <li>Personalizacji treści i doświadczenia użytkownika</li>
              <li>Zapamiętywania preferencji użytkownika</li>
            </ul>
            <p>
              Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce. Wyłączenie cookies może wpłynąć na funkcjonalność niektórych elementów serwisu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">9. Kontakt</h2>
            <p className="mb-4">
              W sprawach dotyczących ochrony danych osobowych można kontaktować się z nami:
            </p>
            <div className="bg-section-bg p-6 rounded-lg mb-4">
              <p className="mb-1">Email: rezerwacje@lesnechatki.com</p>
              <p className="mb-1">Telefon: +48 786 888 498</p>
              <p className="mb-1">Koniaków 1248/A</p>
              <p>43-474 Koniaków, Polska</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">10. Zmiany w polityce prywatności</h2>
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich istotnych zmianach będziemy informować użytkowników poprzez powiadomienia na stronie lub drogą elektroniczną. Ostatnia aktualizacja polityki prywatności jest zawsze widoczna na górze niniejszego dokumentu.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/"
              className="text-forest hover:text-forest-light font-semibold transition-colors"
            >
              ← Powrót do strony głównej
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
