"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "../../components/CartProvider"
import { WHATSAPP_LINK } from "../../lib/site"
import {
  categories,
  displayPrice,
  formatNaira,
  lineAmount,
} from "../../lib/products"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, isLoaded } = useCart()

  const pricedLines = cart.map((item) => lineAmount(item))
  const hasUnpriced = pricedLines.some((amount) => amount == null)
  const total = pricedLines.reduce((sum, amount) => sum + (amount || 0), 0)

  function handleWhatsAppOrder() {
    if (cart.length === 0) return

    const message = [
      "Hello Zayti Naturals! I would like to place an order:",
      "",
      ...cart.map((item) => {
        const amount = lineAmount(item)
        const category = categories.find((entry) => entry.slug === item.category)
        const name = [category?.shortName, `${item.name} (${item.size})`]
          .filter(Boolean)
          .join(" — ")
        const cost = amount == null ? "price to confirm" : formatNaira(amount)
        return `${name} x ${item.quantity} — ${cost}`
      }),
      "",
      hasUnpriced && total > 0
        ? `Subtotal for priced items: ${formatNaira(total)}`
        : hasUnpriced
          ? "Total: to confirm on WhatsApp"
          : `Total: ${formatNaira(total)}`,
      "",
      "Please confirm availability, any remaining prices, and delivery details.",
    ].join("\n")

    const whatsappUrl = new URL(WHATSAPP_LINK())
    whatsappUrl.searchParams.set("text", message)
    window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer")
  }

  if (!isLoaded) {
    return <div className="min-h-[60vh] bg-[#FAF7F0]" />
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] px-5 py-16 text-[#683519] md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C38738]">
          Zayti Naturals by Sabee&apos;a
        </p>
        <h1 className="mb-4 font-display text-4xl md:text-5xl">Your Shopping Cart</h1>
        <p className="mb-12 text-sm text-[#704E34]">
          Coconut oil and shea butter, gathered in one place.
        </p>

        {cart.length === 0 ? (
          <div className="border-y border-[#683519]/15 py-16 text-center">
            <h2 className="font-display text-2xl">Your cart is empty</h2>
            <p className="mx-auto mb-8 mt-3 max-w-md text-sm leading-6 text-[#704E34]">
              Explore the collection and find the size, or the shea butter, you want at home.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="inline-block bg-[#683519] px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C38738]"
              >
                Shop
              </Link>
              <Link
                href="/coconut-oil"
                className="inline-block border border-[#683519] px-8 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-[#683519] hover:text-white"
              >
                Coconut Oil
              </Link>
              <Link
                href="/shea-butter"
                className="inline-block border border-[#683519] px-8 py-4 text-xs uppercase tracking-[0.18em] transition hover:bg-[#683519] hover:text-white"
              >
                Shea Butter
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            <section className="space-y-6">
              {cart.map((item) => {
                const category = categories.find((entry) => entry.slug === item.category)
                return (
                  <article
                    key={item.slug}
                    className="flex gap-4 border-b border-[#683519]/15 pb-6 sm:gap-6"
                  >
                    <div className="relative h-32 w-28 shrink-0 bg-white sm:h-40 sm:w-36">
                      <div className="absolute inset-2">
                        <Image
                          src={item.image}
                          alt={`${item.name} ${item.size}`}
                          fill
                          sizes="144px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 sm:flex-row">
                      <div>
                        {category && (
                          <p className="text-[11px] uppercase tracking-[0.16em] text-[#C38738]">
                            {category.shortName}
                          </p>
                        )}
                        <h2 className="font-display text-xl">{item.name}</h2>
                        <p className="mt-1 text-sm text-[#704E34]">{item.size}</p>
                        <p className="mt-3 font-medium">{displayPrice(item)}</p>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.slug)}
                          className="mt-4 text-xs text-[#704E34] underline underline-offset-4 transition hover:text-[#C38738]"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="flex h-fit items-center gap-4 border border-[#683519]/20 px-3 py-2">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name} ${item.size}`}
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          className="text-lg"
                        >
                          −
                        </button>
                        <span className="min-w-4 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name} ${item.size}`}
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          className="text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
              <Link
                href="/products"
                className="inline-block pt-2 text-xs uppercase tracking-[0.15em] underline underline-offset-4 hover:text-[#C38738]"
              >
                ← Continue Shopping
              </Link>
            </section>

            <aside className="h-fit border border-[#683519]/15 bg-[#FBF6ED] p-6 md:p-8">
              <h2 className="font-display text-2xl">Order Summary</h2>
              <div className="mt-6 flex justify-between gap-4 border-b border-[#683519]/15 pb-5 text-sm">
                <span>
                  Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
                </span>
                <span className="font-medium">
                  {total > 0 ? formatNaira(total) : "To confirm"}
                </span>
              </div>
              {hasUnpriced && (
                <p className="mt-5 text-xs leading-6 text-[#704E34]">
                  Any item without a price is confirmed on WhatsApp
                  {total > 0 ? ", along with this subtotal" : ""}.
                </p>
              )}
              <p className="mt-5 text-xs leading-6 text-[#704E34]">
                Delivery fees and availability will be confirmed when you place your order.
              </p>
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="mt-7 w-full bg-[#683519] px-5 py-4 text-xs uppercase tracking-[0.12em] text-white transition hover:bg-[#C38738]"
              >
                Order on WhatsApp
              </button>
              <p className="mt-4 text-center text-xs text-[#704E34]">
                Your order will be sent to Zayti Naturals via WhatsApp.
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
