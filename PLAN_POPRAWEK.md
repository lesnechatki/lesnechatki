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
- ✅ ~~Usunięcie sekcji `AreaAttractions` ze stron domków~~

#### 4. **CABINS OVERVIEW (Przegląd Chatki)** ✅
- ✅ ~~Zmiana zdjęć - tylko zewnętrzne zdjęcia chatki na stronie głównej~~
  - Jodła: `/lesnechatki.jodla/IMG_2719.webp`
  - Świerk: `/lesnechatki.swierk/3707B5EB-1276-4AA1-AE73-A0DD6676ADF9.webp`
  - Sosna: pozostawione bez zmian
- ✅ ~~Ukrycie domku Modrzew (zakomentowane w kodzie, łatwo odkomentować)~~
- ✅ ~~Zmiana tekstu z "Cztery unikalne miejsca" na "Trzy unikalne miejsca"~~
- ✅ ~~Zmiana gridu z `lg:grid-cols-4` na `lg:grid-cols-3`~~
- ✅ ~~Poprawka problemu z ikonami - zmiana "Tylko 4 domki" na "Tylko 3 domki" w Features~~
- ✅ ~~Poprawka formatowania zdjęć - `object-cover object-center` (wypełniają kontener bez pasów)~~

#### 5. **WARUNKI REZERWACJI (BookingConditions)** ✅
- ✅ ~~Usunięcie ikony "Imprezy specjalne" (PartyPopper)~~
- ✅ ~~Dodanie zamiast tego: "Opłata za psa 50 zł za cały pobyt" (z ikoną PawPrint)~~
- ✅ ~~Dodanie wyświetlania "Doba hotelowa 15:00-11:00" na stronach szczegółów chatki (zmiana formatu w cabins-data.ts)~~
- ✅ ~~Ujednolicenie formatowania - spójne z CabinPricing (tło, border, hover effects)~~

#### 6. **CENNIK (Pricing)** ✅
- ✅ ~~Zmiana tła tekstu o dłuższych pobytach na zielone (obecnie `bg-sand`, zmienić na `bg-forest` z białym tekstem)~~
- ✅ ~~Zmiana również w CabinPricing komponencie~~

#### 7. **ATRAKCJE DODATKOWE (AdditionalAttractions)** ✅
- ✅ ~~Poprawka: "kulligiem" → "kuligiem" (jedno 'l')~~
- ✅ ~~Zmiana: "Autentyczna muzyka góralska" → "Tradycyjna muzyka góralska"~~
- ✅ ~~Ujednolicenie formatowania - spójne z CabinPricing (tło, border, hover effects)~~

#### 8. **OKOLICA - ATRAKCJE (AreaAttractions)** ✅
- ✅ ~~Zmiana formatu wyświetlania - duża nazwa, pod nią mniejszy opis~~
- ✅ ~~Aktualizacja listy atrakcji zgodnie z nowym formatem (12 atrakcji)~~

#### 10. **KONTAKT** ✅
- ✅ ~~Zmiana numeru telefonu: "+47 786 888 498" → "+48 786 888 498" (wszędzie gdzie występuje)~~

#### 11. **CZCIONKA TYTUŁÓW** ✅
- ✅ ~~Zmiana czcionki tytułów z Playfair Display na Poppins~~
- ✅ ~~Aktualizacja w app/layout.tsx (import i zmienna)~~
- ✅ ~~Aktualizacja w app/globals.css (zmienna CSS)~~

#### 12. **ZDJĘCIE KONIAKOWA** ✅
- ✅ ~~Zmiana zdjęcia w AboutLocation na `/lesnechatki.okolica/IMG_2700.webp`~~
- ✅ ~~Poprawka formatowania - `object-cover object-center` (wypełnia kontener bez pasów)~~

#### 13. **DANE DO WPŁAT (PaymentInfo)** ✅
- ✅ ~~Ujednolicenie formatowania - spójne z CabinPricing (tło, border, hover effects)~~

---

### 📝 CO POZOSTAŁO DO ZROBIENIA:

#### 9. **GALERIA OKOLICY** ✅
- ✅ ~~Aktualizacja galerii okolicy (sortowanie)~~
- ✅ ~~Zmiana kolejności - najpierw: IMG_2698, IMG_2700, IMG_3529, IMG_3531, IMG_3554, IMG_3563, IMG_3569, IMG_6046, potem reszta~~
- ⬜ Aktualizacja galerii poszczególnych chatki (jeśli są nowe zdjęcia)

---

## 📦 CO POTRZEBUJĘ DO DOSTARCZENIA:

1. **Nowe zdjęcie główne** (`zdjecie-glowne.webp`) - format zoptymalizowany pod mobile

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
14. ✅ Usunięcie sekcji AreaAttractions ze stron domków

### ✅ **ETAP 4: Warunki rezerwacji i cennik** - WYKONANE
15. ✅ Usunięcie ikony "Imprezy specjalne" z BookingConditions
16. ✅ Dodanie "Opłata za psa 50 zł za cały pobyt" w BookingConditions (z ikoną PawPrint)
17. ✅ Zmiana tła tekstu o dłuższych pobytach na zielone w Pricing i CabinPricing
18. ✅ Dodanie wyświetlania "Doba hotelowa 15:00-11:00" na stronach szczegółów chatki (zmiana formatu w cabins-data.ts)
19. ✅ Ujednolicenie formatowania sekcji (BookingConditions, AdditionalAttractions, PaymentInfo)

### ✅ **ETAP 5: Cabins Overview - zdjęcia** - WYKONANE
20. ✅ Zmiana zdjęć chatki na stronie głównej - tylko zewnętrzne
    - Jodła: IMG_2719.webp
    - Świerk: 3707B5EB-1276-4AA1-AE73-A0DD6676ADF9.webp
    - Sosna: pozostawione
21. ✅ Ukrycie domku Modrzew (zakomentowane)
22. ✅ Poprawka problemu z ikonami - "Tylko 3 domki" w Features
23. ✅ Poprawka formatowania zdjęć - wypełniają kontener bez pasów

### ✅ **ETAP 6: Atrakcje okolicy - nowy format** - WYKONANE
24. ✅ Zmiana formatu wyświetlania atrakcji - duża nazwa, pod nią mniejszy opis
25. ✅ Aktualizacja listy atrakcji zgodnie z nowym formatem (12 atrakcji)

### ✅ **ETAP 7: Galerie** - WYKONANE (galeria okolicy)
26. ✅ Aktualizacja galerii okolicy - sortowanie (najpierw 8 wskazanych zdjęć, potem reszta)
27. ⬜ Aktualizacja galerii poszczególnych chatki (jeśli są nowe zdjęcia)

### ✅ **ETAP 8: Czcionka tytułów** - WYKONANE
28. ✅ Zmiana czcionki tytułów na Poppins (lub podobną minimalistyczną)
29. ✅ Aktualizacja CSS i zmiennych czcionek

### ✅ **ETAP 9: Zdjęcie Koniakowa** - WYKONANE
30. ✅ Zmiana zdjęcia w AboutLocation na IMG_2700.webp
31. ✅ Poprawka formatowania - wypełnia kontener bez pasów

---

## ⚠️ UWAGI I ZAGADNIENIA DO WYJAŚNIENIA:

1. ~~**Sortowanie galerii okolicy**~~ – wykonane według podanej kolejności (8 zdjęć na początku, reszta na końcu)

---

## 📊 POSTĘP

- ✅ **Wykonane:** ETAP 1, ETAP 2 (bez wymiany zdjęcia), ETAP 3, ETAP 4, ETAP 5, ETAP 6, ETAP 7 (galeria okolicy), ETAP 8, ETAP 9
- ⏳ **Oczekiwanie:** Nowe zdjęcie główne
- ⬜ **Do zrobienia:** ETAP 7 – galerie chatki (tylko przy nowych zdjęciach)

**Postęp: 9 z 9 etapów wykonanych (100%)** – pozostało tylko zdjęcie główne i ewent. galerie chatki

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
   - Usunięcie sekcji AreaAttractions ze stron domków

4. **Cabins Overview:**
   - Zmiana zdjęć na zewnętrzne (Jodła, Świerk)
   - Ukrycie Modrzew (zakomentowane)
   - Zmiana "Cztery unikalne miejsca" → "Trzy unikalne miejsca"
   - Poprawka gridu na 3 kolumny
   - Poprawka formatowania zdjęć (wypełniają kontener)

5. **Features:**
   - Zmiana "Tylko 4 domki" → "Tylko 3 domki"

6. **Warunki rezerwacji:**
   - Usunięcie "Imprezy specjalne"
   - Dodanie "Opłata za psa 50 zł za cały pobyt"
   - Ujednolicenie formatowania (spójne z CabinPricing)

7. **Cennik:**
   - Zmiana tła tekstu o dłuższych pobytach na zielone (w Pricing i CabinPricing)

8. **Doba hotelowa:**
   - Zmiana formatu z "15-11" na "15:00-11:00" w cabins-data.ts

9. **Teksty:**
   - "kulligiem" → "kuligiem"
   - "Autentyczna" → "Tradycyjna"

10. **Kontakt:**
    - Zmiana numeru telefonu z +47 na +48 (wszędzie)

11. **Atrakcje okolicy:**
    - Nowy format wyświetlania (duża nazwa, pod nią opis)
    - Zaktualizowana lista 12 atrakcji

12. **Czcionka tytułów:**
    - Zmiana z Playfair Display na Poppins
    - Aktualizacja w layout.tsx i globals.css

13. **Zdjęcie Koniakowa:**
    - Zmiana zdjęcia w AboutLocation na IMG_2700.webp
    - Poprawka formatowania (wypełnia kontener)

14. **Ujednolicenie formatowania sekcji:**
    - BookingConditions, AdditionalAttractions, PaymentInfo - spójne style z CabinPricing
    - Alternujące tła (background/sand) dla lepszego flow
    - Spójne border, hover effects, backdrop-blur

15. **Formatowanie zdjęć:**
    - Zdjęcia domków i okolicy wypełniają kontener bez pasów po bokach

16. **Galeria okolicy:**
    - Sortowanie zdjęć – najpierw 8 wskazanych (IMG_2698, 2700, 3529, 3531, 3554, 3563, 3569, 6046), potem reszta

---

## 📝 POZOSTAŁE ZADANIA:

### ETAP 7: Galerie
- ✅ Sortowanie galerii okolicy – wykonane
- ⬜ Aktualizacja galerii poszczególnych chatki (jeśli są nowe zdjęcia)

---

## 📝 NOTATKI TECHNICZNE:

- Wszystkie zmiany zostały wprowadzone etapami
- Galeria okolicy: kolejność zdjęć w `components/okolica-gallery.tsx`
- Pliki do modyfikacji (pozostałe): `components/cabin-gallery.tsx` (jeśli są nowe zdjęcia chatki)
