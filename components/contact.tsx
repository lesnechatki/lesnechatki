"use client"

import type React from "react"

import { useState } from "react"
import { toast } from "sonner"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Loader2 } from "lucide-react"

const FORMSPREE_URL = "https://formspree.io/f/xpqrzprg"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      if (response.ok) {
        toast.success("Wiadomość wysłana!", {
          description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
        })
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        throw new Error("Błąd wysyłania")
      }
    } catch {
      toast.error("Wystąpił błąd", {
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Kontakt</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Skontaktuj się z nami - odpowiemy na wszystkie Twoje pytania
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-forest mb-6">Dane kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest mb-1">Telefon</p>
                    <a href="tel:+48786888498" className="text-foreground/80 hover:text-forest transition-colors">
                      +48 786 888 498
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest mb-1">E-mail</p>
                    <a
                      href="mailto:rezerwacje@lesnechatki.com"
                      className="text-foreground/80 hover:text-forest transition-colors"
                    >
                      rezerwacje@lesnechatki.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest mb-1">Adres</p>
                    <p className="text-foreground/80">
                      Koniaków 1248/A
                      <br />
                      43-474 Koniaków
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 rounded-3xl border-2 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-forest mb-2">
                    Imię
                  </label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-forest mb-2">
                    Nazwisko
                  </label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="rounded-xl"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-xl"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                  Wiadomość
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl min-h-32"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-forest hover:bg-forest/90 text-white rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  "Wyślij wiadomość"
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
