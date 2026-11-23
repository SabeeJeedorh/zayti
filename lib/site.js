export const BRAND_NAME = "Zayti Naturals"
export const BRAND_LINE = "Zayti Naturals by Sabee'a"

export const WHATSAPP_NUMBER = "2347057249377"
export const WHATSAPP_LINK = (
  message = "Hi! I'd like to order from Zayti Naturals."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/coconut-oil", label: "Coconut Oil" },
  { href: "/shea-butter", label: "Shea Butter" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]
