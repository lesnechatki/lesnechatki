import type { CabinDetails } from "@/lib/cabins-data"

interface StructuredDataProps {
  type: "Organization" | "LocalBusiness" | "LodgingBusiness"
  cabin?: CabinDetails
}

export function StructuredData({ type, cabin }: StructuredDataProps) {
  const baseUrl = "https://lesnechatki.com" // TODO: Zmień na rzeczywisty URL

  if (type === "Organization") {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Leśne Chatki",
      url: baseUrl,
      logo: `${baseUrl}/icon.svg`,
      description:
        "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Koniaków 1248/A",
        addressLocality: "Koniaków",
        postalCode: "43-474",
        addressCountry: "PL",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+48-786-888-498",
        contactType: "Rezerwacje",
        email: "rezerwacje@lesnechatki.com",
      },
      sameAs: [],
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    )
  }

  if (type === "LocalBusiness") {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Leśne Chatki w Koniakowie",
      description:
        "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
      image: `${baseUrl}/zdjecie-glowne.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Koniaków 1248/A",
        addressLocality: "Koniaków",
        addressRegion: "Śląskie",
        postalCode: "43-474",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "49.8167",
        longitude: "18.9500",
      },
      telephone: "+47-786-888-498",
      email: "rezerwacje@lesnechatki.com",
      url: baseUrl,
      priceRange: "$$",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "WiFi",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Taras",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Grill",
          value: true,
        },
      ],
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    )
  }

  if (type === "LodgingBusiness" && cabin) {
    const lodgingSchema = {
      "@context": "https://schema.org",
      "@type": "LodgingReservation",
      name: `${cabin.name} - Leśne Chatki w Koniakowie`,
      description: `${cabin.name} - ${cabin.description}. ${cabin.specialNote || ""}`,
      image: `${baseUrl}/${cabin.imageFolder}/IMG_3620.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Koniaków 1248/A",
        addressLocality: "Koniaków",
        addressRegion: "Śląskie",
        postalCode: "43-474",
        addressCountry: "PL",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "49.8167",
        longitude: "18.9500",
      },
      numberOfRooms: cabin.specifications.bedrooms,
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "WiFi",
          value: cabin.specifications.wifi === "TAK",
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Powierzchnia",
          value: cabin.specifications.area,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Liczba sypialni",
          value: cabin.specifications.bedrooms,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Liczba łazienek",
          value: cabin.specifications.bathrooms,
        },
      ],
      containedIn: {
        "@type": "LodgingBusiness",
        name: "Leśne Chatki w Koniakowie",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Koniaków",
          addressRegion: "Śląskie",
          postalCode: "43-474",
          addressCountry: "PL",
        },
      },
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
    )
  }

  return null
}
