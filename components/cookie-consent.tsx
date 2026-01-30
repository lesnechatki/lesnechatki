"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show after 1 second delay for better UX
      setTimeout(() => setShowConsent(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="rounded-3xl p-6 shadow-2xl border border-border bg-background md:bg-white/10 md:backdrop-blur-md md:border-white/20">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Ciasteczka i prywatność</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Używamy plików cookie, aby zapewnić najlepsze wrażenia z przeglądania naszej strony. Kontynuując
                  korzystanie z witryny, zgadzasz się na ich użycie.
                </p>
              </div>
              <button
                onClick={declineCookies}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={acceptCookies}
                className="flex-1 bg-forest/90 hover:bg-forest text-white rounded-2xl h-11 font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                Akceptuję
              </Button>
              <Button
                onClick={declineCookies}
                variant="outline"
                className="flex-1 rounded-2xl h-11 font-medium border-border/50 hover:border-border transition-all duration-300 bg-transparent"
              >
                Odrzuć
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Więcej informacji w naszej{" "}
              <a href="#" className="underline hover:text-foreground transition-colors">
                polityce prywatności
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
