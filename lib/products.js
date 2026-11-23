export const categories = [
  {
    slug: "coconut-oil",
    name: "Natural Coconut Oil",
    shortName: "Coconut Oil",
    href: "/coconut-oil",
    image: "/images/size.jpeg",
    imageAlt: "Zayti natural coconut oil bottles",
    frame: "aspect-[699/1280] max-w-[280px]",
    eyebrow: "The oil",
    summary:
      "Cold-pressed coconut oil for cooking, skin, and hair. Four sizes, plus a set for sharing. The oil itself does not change.",
    note: "Coconut oil solidifies below about 24°C and turns liquid above it. That is the oil, not a fault. Both states are exactly as usable.",
  },
  {
    slug: "shea-butter",
    name: "Shea Butter",
    shortName: "Shea Butter",
    href: "/shea-butter",
    image: "/images/shea.png",
    imageAlt: "Zayti pure shea butter",
    frame: "aspect-square max-w-[460px]",
    eyebrow: "The butter",
    summary:
      "Pure shea butter by Sabee'a, for skin and hair. Two jars: ₦1,000 and ₦1,500.",
    note: "Keep the jar sealed, cool, and away from direct sun. Warmth can soften the surface. It is still the same butter.",
  },
]

export const products = [
  {
    slug: "pure-coconut-oil-50",
    category: "coconut-oil",
    name: "Pure Coconut Oil",
    size: "50ml",
    price: "₦1,000",
    image: "/images/50ml.png",
    tagline: "Small bottle, everyday goodness",
    description:
      "Our pure coconut oil in a handy, travel-friendly size. Perfect for trying Zayti for the first time or keeping a little bottle close wherever you go.",
  },
  {
    slug: "pure-coconut-oil-100",
    category: "coconut-oil",
    name: "Pure Coconut Oil",
    size: "100ml",
    price: "₦1,500",
    image: "/images/100ml.png",
    tagline: "Your little everyday essential",
    description:
      "A convenient size for everyday use. Keep it close for your hair care routine, skin care, or other everyday needs.",
  },
  {
    slug: "pure-coconut-oil-250",
    category: "coconut-oil",
    name: "Pure Coconut Oil",
    size: "250ml",
    price: "₦4,000",
    image: "/images/250ml.png",
    tagline: "A little jar goes a long way",
    description:
      "Your everyday jar of pure coconut oil. Keep it in the kitchen for cooking or on your shelf for your hair and skin care routine. Simple, versatile, and made with care.",
  },
  {
    slug: "pure-coconut-oil-500",
    category: "coconut-oil",
    name: "Pure Coconut Oil",
    size: "500ml",
    price: "₦8,000",
    image: "/images/500ml.png",
    tagline: "More of what you love",
    description:
      "Our larger jar is ideal for households that use coconut oil regularly. Enjoy the same pure coconut oil for your kitchen, hair care, and body care routine.",
  },
  {
    slug: "gift-set",
    category: "coconut-oil",
    name: "The Zayti Set",
    size: "2 × 250ml",
    price: "₦7,800",
    image: "/images/set.jpeg",
    tagline: "One for you, one to share",
    description:
      "Two jars of our pure coconut oil in one thoughtful set. A lovely choice for housewarmings, special occasions, or sharing a little taste of Zayti with someone you care about.",
  },
  {
    slug: "pure-shea-butter-1000",
    category: "shea-butter",
    name: "Pure Shea Butter",
    size: "Jar",
    price: "₦1,000",
    image: "/images/shea.png",
    tagline: "Pure shea, for skin and hair",
    description:
      "A jar of pure shea butter from Zayti Naturals by Sabee'a. Smooth it over skin, or work a little through hair, when you want one ingredient and nothing added.",
  },
  {
    slug: "pure-shea-butter-1500",
    category: "shea-butter",
    name: "Pure Shea Butter",
    size: "Jar",
    price: "₦1,500",
    image: "/images/shea.png",
    tagline: "Pure shea, for skin and hair",
    description:
      "A jar of pure shea butter from Zayti Naturals by Sabee'a. Smooth it over skin, or work a little through hair, when you want one ingredient and nothing added.",
  },
]

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug)
}

export function getProductsByCategory(slug) {
  return products.filter((product) => product.category === slug)
}

export function parsePrice(price) {
  const digits = String(price ?? "").replace(/[^\d]/g, "")
  return digits ? Number(digits) : null
}

export function formatNaira(amount) {
  return `₦${Number(amount).toLocaleString("en-NG")}`
}

export function displayPrice(product) {
  if (parsePrice(product?.price) != null) return product.price
  return product?.priceLabel || "Price on request"
}

export function lineAmount(item) {
  const unit = parsePrice(item?.price)
  if (unit == null) return null
  return unit * (item.quantity || 1)
}
