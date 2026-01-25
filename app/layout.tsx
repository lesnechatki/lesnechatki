import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Leśne Chatki w Koniakowie | Domki w Beskidach",
  description:
    "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
  generator: "v0.app",
  keywords: [
    "Koniaków",
    "Twójwieś",
    "domki Koniaków",
    "noclegi Koniaków",
    "Koniaków Beskidy",
    "Leśne Chatki",
    "domki w Beskidach",
    "noclegi Beskidy Śląskie",
    "chatki Koniaków",
  ],
  authors: [{ name: "Leśne Chatki" }],
  creator: "Leśne Chatki",
  publisher: "Leśne Chatki",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Leśne Chatki w Koniakowie",
    title: "Leśne Chatki w Koniakowie | Domki w Beskidach",
    description:
      "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
    images: [
      {
        url: "/zdjecie-glowne.webp",
        width: 1200,
        height: 630,
        alt: "Leśne Chatki w Koniakowie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leśne Chatki w Koniakowie | Domki w Beskidach",
    description:
      "Leśne Chatki - miejsce stworzone do zwolnienia tempa, spacerów między drzewami i poranków bez planu. Domki w Koniakowie, najwyżej położonej wsi Beskidu Śląskiego.",
    images: ["/zdjecie-glowne.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <head>
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
