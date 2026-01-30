"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const cabinPricingLinks = [
  { href: "/jodla#cennik", label: "Jodła", subtitle: "8 osób" },
  { href: "/swierk#cennik", label: "Świerk", subtitle: "4 osoby" },
  { href: "/sosna#cennik", label: "Sosna", subtitle: "5-6 osób" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pricingOpen, setPricingOpen] = useState(false)
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false)
  const pricingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close pricing dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pricingRef.current && !pricingRef.current.contains(event.target as Node)) {
        setPricingOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const menuItems = [
    { href: "/#home", label: "Start" },
    { href: "/#chatki", label: "Chatki" },
    { href: "/okolica", label: "Okolica" },
    { href: "/#kontakt", label: "Kontakt" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-effect shadow-lg shadow-forest/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative group">
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`text-2xl font-semibold transition-colors duration-300 ${
                scrolled ? "text-forest" : "text-white drop-shadow-lg"
              }`}
            >
              Leśne Chatki
            </motion.span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-forest"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Menu with stagger animation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Start */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <Link
                href="/#home"
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  scrolled ? "text-foreground/70 hover:text-forest" : "text-white/90 hover:text-white drop-shadow"
                }`}
              >
                Start
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>

            {/* Chatki */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/#chatki"
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  scrolled ? "text-foreground/70 hover:text-forest" : "text-white/90 hover:text-white drop-shadow"
                }`}
              >
                Chatki
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>

            {/* Cennik dropdown */}
            <motion.div
              ref={pricingRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <button
                onClick={() => setPricingOpen(!pricingOpen)}
                className={`text-sm font-medium transition-all duration-300 relative group flex items-center gap-1 ${
                  scrolled ? "text-foreground/70 hover:text-forest" : "text-white/90 hover:text-white drop-shadow"
                }`}
              >
                Cennik
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${pricingOpen ? "rotate-180" : ""}`} 
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full" />
              </button>

              <AnimatePresence>
                {pricingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white rounded-xl shadow-xl border border-border/50 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {cabinPricingLinks.map((cabin, idx) => (
                        <Link
                          key={cabin.href}
                          href={cabin.href}
                          onClick={() => setPricingOpen(false)}
                          className="flex items-center justify-between px-4 py-3 hover:bg-sand/50 transition-colors"
                        >
                          <span className="font-medium text-forest">{cabin.label}</span>
                          <span className="text-xs text-muted-foreground">{cabin.subtitle}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Okolica */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/okolica"
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  scrolled ? "text-foreground/70 hover:text-forest" : "text-white/90 hover:text-white drop-shadow"
                }`}
              >
                Okolica
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>

            {/* Kontakt */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/#kontakt"
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  scrolled ? "text-foreground/70 hover:text-forest" : "text-white/90 hover:text-white drop-shadow"
                }`}
              >
                Kontakt
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                onClick={() => {
                  const contactElement = document.getElementById("kontakt")
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: "smooth" })
                  } else {
                    window.location.href = "/#kontakt"
                  }
                }}
                className="bg-forest hover:bg-forest/90 text-white rounded-full px-8 shadow-lg hover:shadow-xl hover:shadow-forest/20 transition-all duration-300 hover:scale-105"
              >
                Zarezerwuj
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors z-50 relative ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Full-Screen Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  {/* Header with close button */}
                  <div className="flex items-center justify-between p-6 border-b border-border">
                    <h2 className="text-xl font-semibold text-foreground">Menu</h2>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="Close menu"
                    >
                      <X size={28} className="text-foreground" />
                    </motion.button>
                  </div>

                  {/* Menu Items */}
                  <nav className="flex-1 px-6 py-8 space-y-2">
                    {/* Start */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0 }}
                    >
                      <Link
                        href="/#home"
                        onClick={() => setIsOpen(false)}
                        className="block text-lg font-medium text-foreground hover:text-forest transition-colors py-4 px-4 rounded-lg hover:bg-muted/50 active:bg-muted"
                      >
                        Start
                      </Link>
                    </motion.div>

                    {/* Chatki */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      <Link
                        href="/#chatki"
                        onClick={() => setIsOpen(false)}
                        className="block text-lg font-medium text-foreground hover:text-forest transition-colors py-4 px-4 rounded-lg hover:bg-muted/50 active:bg-muted"
                      >
                        Chatki
                      </Link>
                    </motion.div>

                    {/* Cennik - expandable */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <button
                        onClick={() => setMobilePricingOpen(!mobilePricingOpen)}
                        className="w-full flex items-center justify-between text-lg font-medium text-foreground hover:text-forest transition-colors py-4 px-4 rounded-lg hover:bg-muted/50 active:bg-muted"
                      >
                        Cennik
                        <ChevronDown 
                          size={20} 
                          className={`transition-transform duration-200 ${mobilePricingOpen ? "rotate-180" : ""}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {mobilePricingOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-1 pb-2">
                              {cabinPricingLinks.map((cabin) => (
                                <Link
                                  key={cabin.href}
                                  href={cabin.href}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center justify-between text-base text-foreground/80 hover:text-forest transition-colors py-3 px-4 rounded-lg hover:bg-muted/50 active:bg-muted"
                                >
                                  <span>{cabin.label}</span>
                                  <span className="text-xs text-muted-foreground">{cabin.subtitle}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Okolica */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      <Link
                        href="/okolica"
                        onClick={() => setIsOpen(false)}
                        className="block text-lg font-medium text-foreground hover:text-forest transition-colors py-4 px-4 rounded-lg hover:bg-muted/50 active:bg-muted"
                      >
                        Okolica
                      </Link>
                    </motion.div>

                    {/* Kontakt */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Link
                        href="/#kontakt"
                        onClick={() => setIsOpen(false)}
                        className="block text-lg font-medium text-foreground hover:text-forest transition-colors py-4 px-4 rounded-lg hover:bg-muted/50 active:bg-muted"
                      >
                        Kontakt
                      </Link>
                    </motion.div>
                  </nav>

                  {/* CTA Button */}
                  <div className="p-6 border-t border-border">
                    <Button
                      onClick={() => {
                        setIsOpen(false)
                        const contactElement = document.getElementById("kontakt")
                        if (contactElement) {
                          contactElement.scrollIntoView({ behavior: "smooth" })
                        } else {
                          window.location.href = "/#kontakt"
                        }
                      }}
                      className="w-full bg-forest hover:bg-forest/90 text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      Zarezerwuj
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
