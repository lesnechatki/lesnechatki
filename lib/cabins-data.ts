export interface CabinPricing {
  guests: string
  price: string
}

export interface CabinDetails {
  name: string
  slug: string
  description: string
  capacity: string
  imageFolder: string
  features: string[]
  specifications: {
    area: string
    bedrooms: string
    bathrooms: string
    tvs: string
    wifi: string
    checkIn: string
  }
  pricing: CabinPricing[]
  comingSoon?: boolean
  specialNote?: string
}

export const cabinsData: Record<string, CabinDetails> = {
  jodla: {
    name: "Jodła",
    slug: "jodla",
    description: "Dla 8 osób",
    capacity: "8 osób",
    imageFolder: "lesnechatki.jodla",
    features: [
      "Salon z kuchnią i jadalnią",
      "Wyposażona kuchnia wraz z płytą indukcyjną, piekarnikiem, lodówką i zmywarką",
      "3 sypialnie (dwa łóżka małżeńskie i dwa łóżka pojedyncze) i rozkładana kanapa w salonie",
      "Łazienka z prysznicem i dodatkowe WC na piętrze",
      "Duży taras z kompletem wypoczynkowym i grillem oraz balkon",
      "Balia na wyłączność",
      "Ogrzewanie bezobsługowe elektryczne",
    ],
    specifications: {
      area: "75m²",
      bedrooms: "3",
      bathrooms: "2",
      tvs: "3",
      wifi: "TAK",
      checkIn: "15-11",
    },
    pricing: [
      { guests: "8 osób", price: "800,00 zł" },
      { guests: "2 osoby", price: "600,00 zł" },
    ],
  },
  swierk: {
    name: "Świerk",
    slug: "swierk",
    description: "Dla 4 osób",
    capacity: "4 osoby",
    imageFolder: "lesnechatki.swierk",
    features: [
      "Salon z kuchnią i jadalnią",
      "Wyposażona kuchnia wraz z płytą indukcyjną, piekarnikiem, lodówką i zmywarką",
      "1 sypialnia z łóżkiem małżeńskim i rozkładana kanapa w salonie",
      "Łazienka z prysznicem",
      "Duży taras z kompletem wypoczynkowym i grillem",
      "Ogrzewanie bezobsługowe elektryczne",
    ],
    specifications: {
      area: "35m²",
      bedrooms: "1",
      bathrooms: "1",
      tvs: "2",
      wifi: "TAK",
      checkIn: "15-11",
    },
    pricing: [
      { guests: "4 osoby", price: "550,00 zł" },
      { guests: "3 osoby", price: "450,00 zł" },
      { guests: "2 osoby", price: "350,00 zł" },
    ],
    specialNote:
      "Jeden domek. Dwie niezależne przestrzenie. Możesz wynająć apartament Świerk osobno lub cały domek (Świerk i Sosna) razem.",
  },
  sosna: {
    name: "Sosna",
    slug: "sosna",
    description: "Dla 5-6 osób",
    capacity: "5-6 osób",
    imageFolder: "lesnechatki.sosna",
    features: [
      "Salon z kuchnią i jadalnią",
      "Wyposażona kuchnia wraz z płytą indukcyjną, piekarnikiem, lodówką i zmywarką",
      "2 sypialnie (dwa łóżka małżeńskie) i rozkładana kanapa w salonie",
      "Łazienka z prysznicem i dodatkowe WC na piętrze",
      "Balkon z kompletem wypoczynkowym",
      "Ogrzewanie bezobsługowe elektryczne",
    ],
    specifications: {
      area: "35m²",
      bedrooms: "2",
      bathrooms: "1",
      tvs: "2",
      wifi: "TAK",
      checkIn: "15-11",
    },
    pricing: [
      { guests: "6 osób", price: "600 zł" },
      { guests: "4 osoby", price: "550,00 zł" },
      { guests: "3 osoby", price: "450,00 zł" },
      { guests: "2 osoby", price: "350 zł" },
    ],
    specialNote:
      "Jeden domek. Dwie niezależne przestrzenie. Możesz wynająć apartament Sosna osobno lub cały domek (Świerk i Sosna) razem z balią na wyłączność.",
  },
  modrzew: {
    name: "Modrzew",
    slug: "modrzew",
    description: "Dla 8 osób",
    capacity: "8 osób",
    imageFolder: "lesnechatki.modrzew",
    features: [],
    specifications: {
      area: "-",
      bedrooms: "-",
      bathrooms: "-",
      tvs: "-",
      wifi: "-",
      checkIn: "-",
    },
    pricing: [],
    comingSoon: true,
    specialNote: "Tutaj tworzymy nową przestrzeń do odpoczynku – wśród drzew, w ciszy i blisko natury. Dostępny już wkrótce.",
  },
}

// Helper function to get all images for a cabin
export function getCabinImages(imageFolder: string): string[] {
  // This will be handled dynamically on the client side
  // For now, we return the folder path
  return []
}
