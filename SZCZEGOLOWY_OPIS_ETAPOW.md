# SZCZEGÓŁOWY OPIS ETAPÓW IMPLEMENTACJI

## 🎯 ETAP 1: Podstawowe poprawki tekstowe i nawigacja

### Co będzie się działo:

**1.1. Zmiana numeru telefonu z +47 na +48**
- **Pliki do modyfikacji:**
  - `components/contact.tsx` (linia 48-49)
  - `components/footer.tsx` (linia 44)
  - `components/structured-data.tsx` (linie 29, 65)
  - `app/polityka-prywatnosci/page.tsx` (linie 30, 174)
- **Zmiany:**
  - Wszystkie wystąpienia `+47 786 888 498` → `+48 786 888 498`
  - Wszystkie wystąpienia `+47-786-888-498` → `+48-786-888-498`
  - Wszystkie wystąpienia `tel:+47786888498` → `tel:+48786888498`
- **Efekt:** Numer telefonu będzie poprawny z polskim kodem kraju

**1.2. Zmiana "Nasze Chatki" → "Chatki" w menu**
- **Plik do modyfikacji:**
  - `components/navigation.tsx` (linia 23)
- **Zmiana:**
  - `{ href: "/#chatki", label: "Nasze Chatki" }` → `{ href: "/#chatki", label: "Chatki" }`
- **Efekt:** W menu nawigacji będzie krótsza nazwa "Chatki"

**1.3. Poprawka linku menu "Okolica"**
- **Plik do modyfikacji:**
  - `components/navigation.tsx` (linia 25)
- **Zmiana:**
  - `{ href: "/#okolica", label: "Okolica" }` - sprawdzenie czy link działa poprawnie
  - Jeśli nie działa, zmiana na `href: "/okolica"` lub poprawa anchor linku
- **Efekt:** Kliknięcie "Okolica" w menu będzie kierować do sekcji okolicy

**1.4. Poprawka tekstów: "kulligiem" → "kuligiem" i "Autentyczna" → "Tradycyjna"**
- **Plik do modyfikacji:**
  - `components/additional-attractions.tsx` (linie 15, 21)
- **Zmiany:**
  - `"Tradycyjna przejażdżka kulligiem"` → `"Tradycyjna przejażdżka kuligiem"`
  - `"Autentyczna muzyka góralska"` → `"Tradycyjna muzyka góralska"`
- **Efekt:** Poprawione błędy ortograficzne i zmiana słownictwa

---

## 🎯 ETAP 2: Strona główna - Hero i tekst

### Co będzie się działo:

**2.1. Usunięcie buttona "Najwyżej położona wieś..." z Hero**
- **Plik do modyfikacji:**
  - `components/hero.tsx` (linie 45-54)
- **Zmiana:**
  - Usunięcie całego bloku `<motion.div>` z klasą `inline-block mb-8` zawierającego badge z tekstem "Najwyżej położona wieś Beskidu Śląskiego"
- **Efekt:** Badge zniknie z sekcji Hero

**2.2. Aktualizacja tekstu głównego w Hero**
- **Plik do modyfikacji:**
  - `components/hero.tsx` (linia 71)
- **Zmiana:**
  - Obecny tekst (długi) → skrócony tekst: "Wiemy, że najlepsze wspomnienia tworzą się wtedy, gdy zwalniamy i doświadczamy miejsca wszystkimi zmysłami. Dlatego nasze domki stoją na dużej, zielonej działce z prywatnym lasem. Miejsce stworzone do spacerów między drzewami i poranków bez planu."
- **Efekt:** Krótszy, bardziej zwięzły tekst w sekcji Hero

**2.3. Wymiana zdjęcia głównego**
- **Plik do modyfikacji:**
  - `components/hero.tsx` (linia 28)
- **Zmiana:**
  - Jeśli dostarczysz nowe zdjęcie, zamienię `/zdjecie-glowne.webp` na nowy plik
  - Jeśli nie, pozostawię obecne i dodam notatkę o potrzebie wymiany
- **Efekt:** Nowe zdjęcie główne (lub notatka o potrzebie wymiany)

---

## 🎯 ETAP 3: Strona główna - usunięcie sekcji

### Co będzie się działo:

**3.1-3.5. Usunięcie 5 sekcji ze strony głównej**
- **Plik do modyfikacji:**
  - `app/page.tsx` (linie 60-77)
- **Zmiany:**
  - Usunięcie importu i użycia komponentu `<Pricing />` (linie 53, 68)
  - Usunięcie importu i użycia komponentu `<BookingConditions />` (linie 54, 69)
  - Usunięcie importu i użycia komponentu `<AdditionalAttractions />` (linie 55, 70)
  - Usunięcie importu i użycia komponentu `<AreaAttractions />` (linie 56, 71)
  - Usunięcie importu i użycia komponentu `<PaymentInfo />` (linie 58, 73)
- **Efekt:** Strona główna będzie zawierać tylko:
  - Navigation
  - Hero
  - Features
  - CabinsOverview
  - AboutLocation
  - Contact
  - Footer

**Uwaga:** Te sekcje nadal będą dostępne na innych stronach (np. Pricing może być na stronie chatki, BookingConditions może być w stopce, itp.)

---

## 🎯 ETAP 4: Warunki rezerwacji i cennik

### Co będzie się działo:

**4.1. Usunięcie ikony "Imprezy specjalne" z BookingConditions**
- **Plik do modyfikacji:**
  - `components/booking-conditions.tsx` (linie 4, 25-29)
- **Zmiana:**
  - Usunięcie importu `PartyPopper` z lucide-react (jeśli nie jest używany gdzie indziej)
  - Usunięcie obiektu z tablicy `conditions` zawierającego ikonę PartyPopper i tekst "Imprezy specjalne"
- **Efekt:** Zamiast 5 kart będzie 4 karty w sekcji warunków rezerwacji

**4.2. Dodanie "Opłata za psa 50 zł za cały pobyt"**
- **Plik do modyfikacji:**
  - `components/booking-conditions.tsx` (linie 2-3, tablica conditions)
- **Zmiana:**
  - Dodanie nowego obiektu do tablicy `conditions` z ikoną (np. `PawPrint` z lucide-react) i tekstem "Opłata za psa" / "50 zł za cały pobyt"
- **Efekt:** Nowa karta z informacją o opłacie za psa

**4.3. Zmiana tła tekstu o dłuższych pobytach na zielone**
- **Plik do modyfikacji:**
  - `components/pricing.tsx` (linia 82)
- **Zmiana:**
  - `bg-sand` → `bg-forest`
  - Dodanie klasy `text-white` dla tekstu
- **Efekt:** Tekst o dłuższych pobytach będzie na zielonym tle z białym tekstem

**4.4. Dodanie wyświetlania "Doba hotelowa 15:00-11:00" na stronach szczegółów chatki**
- **Plik do modyfikacji:**
  - `components/cabin-details.tsx` (linia 41)
- **Zmiana:**
  - Sprawdzenie czy już jest wyświetlane w sekcji "Specyfikacja"
  - Jeśli nie, upewnienie się że `checkIn: "15-11"` jest poprawnie wyświetlane jako "15:00-11:00"
- **Efekt:** Doba hotelowa będzie widoczna na stronach szczegółów każdej chatki

---

## 🎯 ETAP 5: Cabins Overview - zdjęcia

### Co będzie się działo:

**5.1. Zmiana zdjęć chatki na stronie głównej - tylko zewnętrzne**
- **Plik do modyfikacji:**
  - `components/cabins-overview.tsx` (linie 10-36)
- **Zmiana:**
  - Dla każdej chatki (Jodła, Świerk, Sosna, Modrzew) zmiana właściwości `image` na zdjęcie zewnętrzne
  - Obecnie:
    - Jodła: `/lesnechatki.jodla/IMG_3620.webp`
    - Świerk: `/lesnechatki.swierk/IMG_3853.webp`
    - Sosna: `/lesnechatki.sosna/IMG_1835.webp`
  - **Potrzebne potwierdzenie:** Które zdjęcia są zewnętrzne dla każdej chatki?
- **Efekt:** Na stronie głównej będą tylko zewnętrzne zdjęcia chatki

**5.2. Sprawdzenie i poprawka problemu z ikonami (3 domki vs 4)**
- **Pliki do sprawdzenia:**
  - `components/features.tsx` (obecnie 5 ikon)
  - `components/cabins-overview.tsx` (obecnie 4 chatki)
- **Analiza:**
  - Sprawdzę czy problem dotyczy Features (5 ikon) czy CabinsOverview (4 chatki)
  - Jeśli chodzi o Features - może trzeba usunąć jedną ikonę lub zmienić tekst?
  - Jeśli chodzi o CabinsOverview - może Modrzew nie powinien być liczony?
- **Efekt:** Wyjaśnienie i poprawka problemu z ikonami

---

## 🎯 ETAP 6: Atrakcje okolicy - nowy format

### Co będzie się działo:

**6.1. Zmiana formatu wyświetlania atrakcji**
- **Plik do modyfikacji:**
  - `components/area-attractions.tsx` (cały komponent)
- **Zmiana struktury:**
  - Obecnie: nazwa i odległość w jednej linii, ewentualna notatka pod spodem
  - Nowy format: **Duża nazwa** (większy font, bold) + **Pod nią mniejszy opis** (mniejszy font, normalny)
- **Zmiana w CSS/strukturze:**
  - Nazwa atrakcji: większy font (np. `text-lg` lub `text-xl`), bold
  - Opis: mniejszy font (np. `text-sm`), normalny, kolor muted
  - Usunięcie wyświetlania odległości jako osobnego elementu (lub przeniesienie do opisu)
- **Efekt:** Wizualnie czytelniejszy układ - duża nazwa, pod nią opis

**6.2. Aktualizacja listy atrakcji**
- **Plik do modyfikacji:**
  - `components/area-attractions.tsx` (linie 3-15)
- **Zmiana tablicy `attractions`:**
  - Przebudowanie struktury danych:
    - `name`: nazwa atrakcji (duża)
    - `description`: opis (mały, pod nazwą)
    - Usunięcie `distance` i `note` lub włączenie ich do `description`
- **Nowa lista atrakcji:**
  1. Szlaki piesze i rowerowe → "start praktycznie spod domku"
  2. Stoki narciarskie Złoty Groń i Zagroń → "trasy o różnym stopniu trudności"
  3. Park Wodny Olza → "baseny zewnętrzne i wewnętrzne"
  4. Centrum Koronki Koniakowskiej → "Muzeum i sklep"
  5. Karczma Świstak → "kuchnia regionalna"
  6. Centrum Pasterskie 1 km → "tradycja pasterska, bacówka i sklep"
  7. Ochodzita → "najpiękniejsze zachody słońca"
  8. Złoty Groń → "kolej linowa, punkt widokowy, trasy enduro"
  9. Base Camp → "park linowy, paintball"
  10. **Trasy narciarstwa biegowego i biathlonu Kubalonka** (bold) → "malownicze pętle leśne"
  11. Trójstyk granic PL-CZ-SK → "punkt styku granic trzech państw"
  12. Barania Góra → "źródła Wisły, widoki"
- **Efekt:** Zaktualizowana lista atrakcji w nowym formacie

---

## 🎯 ETAP 7: Galerie

### Co będzie się działo:

**7.1. Aktualizacja galerii okolicy - sortowanie**
- **Plik do modyfikacji:**
  - `components/okolica-gallery.tsx` (linie 7-21)
- **Zmiana:**
  - Przegrupowanie tablicy `okolicaImages`:
    - Najpierw zdjęcia "widoków" (scenic views)
    - Potem zdjęcia "artystyczne" (artistic photos)
  - **Potrzebne potwierdzenie:** Które zdjęcia są widokami, a które artystyczne?
- **Efekt:** Galeria okolicy będzie posortowana - najpierw widoki, potem artystyczne

**7.2. Aktualizacja galerii poszczególnych chatki**
- **Plik do modyfikacji:**
  - `components/cabin-gallery.tsx` (linie 13-68)
- **Zmiana:**
  - Sprawdzenie czy wszystkie nowe zdjęcia są już w tablicach `cabinImages`
  - Jeśli nie, dodanie nowych zdjęć do odpowiednich folderów:
    - `lesnechatki.jodla`
    - `lesnechatki.swierk`
    - `lesnechatki.sosna`
    - `lesnechatki.modrzew`
- **Efekt:** Wszystkie nowe zdjęcia będą widoczne w galeriach chatki

---

## 🎯 ETAP 8: Czcionka tytułów

### Co będzie się działo:

**8.1. Zmiana czcionki tytułów na Poppins**
- **Pliki do modyfikacji:**
  - `app/layout.tsx` (dodanie importu Google Fonts)
  - `app/globals.css` (zmiana zmiennej czcionki)
- **Zmiany:**
  1. **W `app/layout.tsx`:**
     - Dodanie importu: `import { Poppins } from 'next/font/google'`
     - Konfiguracja czcionki: `const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })`
     - Dodanie klasy do `<body>` lub stworzenie zmiennej CSS
  2. **W `app/globals.css`:**
     - Zmiana: `--font-heading: "Playfair Display"` → `--font-heading: "Poppins"` (lub użycie zmiennej z layout.tsx)
     - Ewentualna zmiana koloru tytułów z zielonego na inny (jeśli potrzebne)
- **Efekt:** Wszystkie tytuły (h1, h2, h3, etc.) będą używać czcionki Poppins zamiast Playfair Display

**8.2. Aktualizacja CSS i zmiennych czcionek**
- **Plik do modyfikacji:**
  - `app/globals.css` (sekcja typography)
- **Zmiany:**
  - Upewnienie się, że wszystkie tytuły używają `var(--font-heading)`
  - Sprawdzenie czy nie ma hardcoded `font-family` w komponentach
  - Ewentualne dostosowanie wag czcionek (400, 500, 600, 700)
- **Efekt:** Spójna czcionka Poppins we wszystkich tytułach

---

## 🎯 ETAP 9: Zdjęcie Koniakowa

### Co będzie się działo:

**9.1. Sprawdzenie użycia zdjęcia Koniakowa**
- **Plik do sprawdzenia:**
  - `components/about-location.tsx` (linia 37)
- **Sprawdzenie:**
  - Czy zdjęcie `/koniak-w-beskid-mountains-village-landscape.jpg` jest już używane
  - Jeśli tak, potwierdzenie że jest poprawne
  - Jeśli nie, zmiana na to zdjęcie
- **Efekt:** Pewność, że właściwe zdjęcie jest używane w sekcji AboutLocation

---

## 📊 PODSUMOWANIE ETAPÓW

### Etapy szybkie (tekstowe):
- **ETAP 1:** ~5-10 minut - podstawowe poprawki tekstowe
- **ETAP 2:** ~5-10 minut - Hero (bez wymiany zdjęcia)
- **ETAP 3:** ~5 minut - usunięcie sekcji
- **ETAP 4:** ~10-15 minut - warunki i cennik
- **ETAP 9:** ~2 minuty - sprawdzenie zdjęcia

### Etapy wymagające potwierdzenia:
- **ETAP 5:** ~10-15 minut - po potwierdzeniu które zdjęcia są zewnętrzne
- **ETAP 7:** ~10-15 minut - po potwierdzeniu sortowania galerii

### Etapy bardziej złożone:
- **ETAP 6:** ~20-30 minut - przebudowa komponentu atrakcji
- **ETAP 8:** ~15-20 minut - zmiana czcionki i testowanie

### Łączny czas: ~1.5-2 godziny (bez czasu na testowanie i poprawki)

---

## ✅ CO BĘDZIE SPRAWDZANE PO KAŻDYM ETAPIE:

1. **Czy kod się kompiluje** - brak błędów TypeScript/ESLint
2. **Czy zmiany są widoczne** - wizualna weryfikacja
3. **Czy nie zepsułem niczego** - sprawdzenie czy inne funkcjonalności działają
4. **Czy responsywność działa** - sprawdzenie na różnych rozdzielczościach

---

## 🚀 GOTOWOŚĆ DO STARTU

Wszystkie etapy są szczegółowo opisane i gotowe do implementacji. Mogę rozpocząć od **ETAPU 1** gdy tylko dasz zielone światło! 🎯
