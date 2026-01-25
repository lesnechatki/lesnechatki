# PLAN POPRAWEK - Leśne Chatki

## 📋 ANALIZA WYMAGAŃ

### ✅ CO ZOSTAŁO WYKONANE:

#### 1. **NAWIGACJA I MENU** ✅
- ✅ ~~Zmiana "Nasze Chatki" → "Chatki" w menu~~
- ✅ ~~Poprawka linku menu "Okolica" - ma kierować do opisu okolicy (/okolica)~~

#### 2. **STRONA GŁÓWNA - HERO** ✅ (częściowo)
- ✅ ~~Usunięcie buttona/badge "Najwyżej położona wieś Beskidu Śląskiego" z sekcji Hero~~
- ✅ ~~Aktualizacja tekstu głównego - skrócenie do: "Wiemy, że najlepsze wspomnienia tworzą się wtedy, gdy zwalniamy i doświadczamy miejsca wszystkimi zmysłami. Dlatego nasze domki stoją na dużej, zielonej działce z prywatnym lasem. Miejsce stworzone do spacerów między drzewami i poranków bez planu."~~
- ⏳ Wymiana zdjęcia głównego (`/zdjecie-glowne.webp`) - źle wygląda na telefonie (potrzebne nowe zdjęcie) - **OCZEKIWANIE NA ZDJĘCIE**

#### 3. **STRONA GŁÓWNA - USUNIĘCIE SEKCJI** ✅
- ✅ ~~Usunięcie sekcji `Pricing` (Cennik) ze strony głównej~~
- ✅ ~~Usunięcie sekcji `BookingConditions` (Warunki rezerwacji) ze strony głównej~~
- ✅ ~~Usunięcie sekcji `AdditionalAttractions` (Atrakcje dodatkowe) ze strony głównej~~
- ✅ ~~Usunięcie sekcji `AreaAttractions` (Okolica z opisem) ze strony głównej~~
- ✅ ~~Usunięcie sekcji `PaymentInfo` (Dane do wpłat) ze strony głównej~~
- ✅ ~~Dodanie wszystkich tych sekcji na strony poszczególnych domków~~

#### 4. **CABINS OVERVIEW (Przegląd Chatki)**
- ⬜ Zmiana zdjęć - tylko zewnętrzne zdjęcia chatki na stronie głównej (potrzebne potwierdzenie które zdjęcia)
- ⬜ Problem z ikonami - "tylko 3 domki" (sprawdzić co to oznacza - może chodzi o Features?)

#### 5. **WARUNKI REZERWACJI (BookingConditions)** ✅
- ✅ ~~Usunięcie ikony "Imprezy specjalne" (PartyPopper)~~
- ✅ ~~Dodanie zamiast tego: "Opłata za psa 50 zł za cały pobyt" (z ikoną PawPrint)~~
- ✅ ~~Dodanie wyświetlania "Doba hotelowa 15:00-11:00" na stronach szczegółów chatki (zmiana formatu w cabins-data.ts)~~

#### 6. **CENNIK (Pricing)** ✅
- ✅ ~~Zmiana tła tekstu o dłuższych pobytach na zielone (obecnie `bg-sand`, zmienić na `bg-forest` z białym tekstem)~~
- ✅ ~~Zmiana również w CabinPricing komponencie~~

#### 7. **ATRAKCJE DODATKOWE (AdditionalAttractions)** ✅
- ✅ ~~Poprawka: "kulligiem" → "kuligiem" (jedno 'l')~~
- ✅ ~~Zmiana: "Autentyczna muzyka góralska" → "Tradycyjna muzyka góralska"~~

#### 10. **KONTAKT** ✅
- ✅ ~~Zmiana numeru telefonu: "+47 786 888 498" → "+48 786 888 498" (wszędzie gdzie występuje)~~

---

### 📝 CO POZOSTAŁO DO ZROBIENIA:

#### 8. **OKOLICA - ATRAKCJE (AreaAttractions)**
- ⬜ Zmiana formatu wyświetlania - duża nazwa, pod nią mniejszy opis
- ⬜ Aktualizacja listy atrakcji zgodnie z nowym formatem:
  - Szlaki piesze i rowerowe (start praktycznie spod domku)
  - Stoki narciarskie Złoty Groń i Zagroń (trasy o różnym stopniu trudności)
  - Park Wodny Olza (baseny zewnętrzne i wewnętrzne)
  - Centrum Koronki Koniakowskiej (Muzeum i sklep)
  - Karczma Świstak (kuchnia regionalna)
  - Centrum Pasterskie 1 km (tradycja pasterska, bacówka i sklep)
  - Ochodzita (najpiękniejsze zachody słońca)
  - Złoty Groń (kolej linowa, punkt widokowy, trasy enduro)
  - Base Camp (park linowy, paintball)
  - **Trasy narciarstwa biegowego i biathlonu Kubalonka** (malownicze pętle leśne)
  - Trójstyk granic PL-CZ-SK (punkt styku granic trzech państw)
  - Barania Góra (źródła Wisły, widoki)

#### 9. **GALERIA OKOLICY**
- ⬜ Aktualizacja galerii okolicy (dodane nowe zdjęcia)
- ⬜ Zmiana kolejności - najpierw widoki, potem zdjęcia artystyczne (potrzebne potwierdzenie które są które)

#### 11. **CZCIONKA TYTUŁÓW**
- ⬜ Zmiana czcionki tytułów (obecnie zielone) na bardziej przypominającą Poppins, minimalistyczną
- ⬜ Obecnie: `--font-heading: "Playfair Display"` → zmienić na Poppins lub podobną

#### 12. **ZDJĘCIE KONIAKOWA**
- ⬜ Upewnienie się, że zdjęcie `koniak-w-beskid-mountains-village-landscape.jpg` jest używane w AboutLocation

---

## 📦 CO POTRZEBUJĘ DO DOSTARCZENIA:

1. **Nowe zdjęcie główne** (`zdjecie-glowne.webp`) - format zoptymalizowany pod mobile
2. **Potwierdzenie** - które zdjęcia z galerii okolicy są "widokami", a które "artystyczne" (do sortowania)
3. **Potwierdzenie** - które zdjęcia z galerii chatki są zewnętrzne (do użycia na stronie głównej)
4. **Czcionka** - potwierdzenie czy użyć Google Fonts "Poppins" czy inną minimalistyczną

---

## 🗺️ PLAN IMPLEMENTACJI - KROK PO KROKU

### ✅ **ETAP 1: Podstawowe poprawki tekstowe i nawigacja** - WYKONANE
1. ✅ Zmiana numeru telefonu z +47 na +48 (wszystkie miejsca)
2. ✅ Zmiana "Nasze Chatki" → "Chatki" w menu
3. ✅ Poprawka linku menu "Okolica" - kierowanie do /okolica
4. ✅ Poprawka tekstów: "kulligiem" → "kuligiem", "Autentyczna" → "Tradycyjna"

### ✅ **ETAP 2: Strona główna - Hero i tekst** - WYKONANE (bez wymiany zdjęcia)
5. ✅ Usunięcie buttona "Najwyżej położona wieś..." z Hero
6. ✅ Aktualizacja tekstu głównego w Hero (skrócenie)
7. ⏳ Wymiana zdjęcia głównego (oczekiwanie na nowe zdjęcie)

### ✅ **ETAP 3: Strona główna - usunięcie sekcji** - WYKONANE
8. ✅ Usunięcie sekcji Pricing ze strony głównej
9. ✅ Usunięcie sekcji BookingConditions ze strony głównej
10. ✅ Usunięcie sekcji AdditionalAttractions ze strony głównej
11. ✅ Usunięcie sekcji AreaAttractions ze strony głównej
12. ✅ Usunięcie sekcji PaymentInfo ze strony głównej
13. ✅ Dodanie wszystkich sekcji na strony poszczególnych domków

### ✅ **ETAP 4: Warunki rezerwacji i cennik** - WYKONANE
14. ✅ Usunięcie ikony "Imprezy specjalne" z BookingConditions
15. ✅ Dodanie "Opłata za psa 50 zł za cały pobyt" w BookingConditions (z ikoną PawPrint)
16. ✅ Zmiana tła tekstu o dłuższych pobytach na zielone w Pricing i CabinPricing
17. ✅ Dodanie wyświetlania "Doba hotelowa 15:00-11:00" na stronach szczegółów chatki (zmiana formatu w cabins-data.ts)

### **ETAP 5: Cabins Overview - zdjęcia** - DO ZROBIENIA (wymaga potwierdzenia)
18. Zmiana zdjęć chatki na stronie głównej - tylko zewnętrzne (po potwierdzeniu które)
19. Sprawdzenie i poprawka problemu z ikonami (3 domki vs 4)

### **ETAP 6: Atrakcje okolicy - nowy format** - DO ZROBIENIA
20. Zmiana formatu wyświetlania atrakcji - duża nazwa, pod nią mniejszy opis
21. Aktualizacja listy atrakcji zgodnie z nowym formatem

### **ETAP 7: Galerie** - DO ZROBIENIA (wymaga potwierdzenia)
22. Aktualizacja galerii okolicy - sortowanie (widoki → artystyczne)
23. Aktualizacja galerii poszczególnych chatki (nowe zdjęcia)

### **ETAP 8: Czcionka tytułów** - DO ZROBIENIA
24. Zmiana czcionki tytułów na Poppins (lub podobną minimalistyczną)
25. Aktualizacja CSS i zmiennych czcionek

### **ETAP 9: Zdjęcie Koniakowa** - DO ZROBIENIA
26. Upewnienie się, że zdjęcie `koniak-w-beskid-mountains-village-landscape.jpg` jest używane w AboutLocation

---

## ⚠️ UWAGI I ZAGADNIENIA DO WYJAŚNIENIA:

1. **Ikony - "tylko 3 domki"** - nie jest jasne co to oznacza. Może chodzi o:
   - Features (obecnie 5 ikon)?
   - Coś innego?

2. **Zdjęcia zewnętrzne chatki** - które konkretnie zdjęcia są zewnętrzne dla każdej chatki?

3. **Sortowanie galerii okolicy** - które zdjęcia są "widokami", a które "artystyczne"?

4. **Czcionka** - czy użyć Google Fonts "Poppins" czy inną minimalistyczną?

5. **Format zdjęcia głównego** - jaki format będzie najlepszy dla mobile? (WebP, optymalne wymiary)

---

## 📊 POSTĘP

- ✅ **Wykonane:** ETAP 1, ETAP 2 (bez wymiany zdjęcia), ETAP 3, ETAP 4
- ⏳ **Oczekiwanie:** Nowe zdjęcie główne
- ⬜ **Do zrobienia:** ETAP 5, 6, 7, 8, 9
- ❓ **Wymaga potwierdzenia:** ETAP 5 (zdjęcia zewnętrzne), ETAP 7 (sortowanie galerii)

---

## 📝 PODSUMOWANIE WYKONANYCH ZMIAN:

### ✅ Wykonane zadania:

1. **Nawigacja i menu:**
   - Zmiana "Nasze Chatki" → "Chatki"
   - Poprawka linku "Okolica" → `/okolica`

2. **Hero:**
   - Usunięcie buttona "Najwyżej położona wieś..."
   - Skrócenie tekstu głównego

3. **Strona główna:**
   - Usunięcie 5 sekcji (Pricing, BookingConditions, AdditionalAttractions, AreaAttractions, PaymentInfo)
   - Dodanie tych sekcji na strony poszczególnych domków

4. **Warunki rezerwacji:**
   - Usunięcie "Imprezy specjalne"
   - Dodanie "Opłata za psa 50 zł za cały pobyt"

5. **Cennik:**
   - Zmiana tła tekstu o dłuższych pobytach na zielone (w Pricing i CabinPricing)

6. **Doba hotelowa:**
   - Zmiana formatu z "15-11" na "15:00-11:00" w cabins-data.ts

7. **Teksty:**
   - "kulligiem" → "kuligiem"
   - "Autentyczna" → "Tradycyjna"

8. **Kontakt:**
   - Zmiana numeru telefonu z +47 na +48 (wszędzie)

---

## 📝 NOTATKI TECHNICZNE:

- Wszystkie zmiany będą wprowadzane etapami
- Po każdym etapie będzie możliwość sprawdzenia i akceptacji
- Pliki do modyfikacji (pozostałe):
  - `components/area-attractions.tsx`
  - `components/cabins-overview.tsx`
  - `components/okolica-gallery.tsx`
  - `components/cabin-gallery.tsx`
  - `app/globals.css`
  - `app/layout.tsx`
  - `components/about-location.tsx`
