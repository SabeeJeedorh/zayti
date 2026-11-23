"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "./CartProvider"
import { categories, displayPrice, parsePrice } from "../lib/products"

export default function ProductCard({
  product,
  layout = "grid",
  titleAs = "h3",
  showCategoryLink = false,
}) {
  const { addToCart, cart } = useCart()
  const quantity = cart.find((item) => item.slug === product.slug)?.quantity || 0
  const category = categories.find((item) => item.slug === product.category)
  const Title = titleAs === "h1" ? "h1" : titleAs === "h2" ? "h2" : "h3"
  const unpriced = parsePrice(product.price) == null
  const frame =
    product.category === "shea-butter"
      ? "aspect-square max-w-[520px] bg-white"
      : "aspect-[3/4] max-w-[420px] bg-white"

  const buttonLabel =
    quantity > 0 ? `Added to Cart (${quantity})` : "Add to Cart"

  const button = (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className={`${
        layout === "grid" ? "mt-5 w-full" : ""
      } bg-[#683519] px-6 py-4 text-xs uppercase tracking-[0.15em] text-white transition hover:bg-[#C38738]`}
    >
      {buttonLabel}
    </button>
  )

  if (layout === "feature") {
    return (
      <article
        id={product.slug}
        className="grid scroll-mt-36 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <div className={`relative mx-auto w-full ${frame}`}>
          <Image
            src={product.image}
            alt={`${product.name}, ${product.size}`}
            fill
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-contain"
          />
        </div>

        <div className="max-w-xl">
          {category && (
            <p className="text-xs uppercase tracking-[0.28em] text-[#C38738]">
              {category.name}
            </p>
          )}
          <Title className="mt-4 font-display text-4xl leading-tight text-[#683519] md:text-5xl">
            {product.name}
          </Title>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[#704E34]">
            {product.size}
          </p>
          <p className="mt-5 font-display text-3xl text-[#5A3018]">
            {displayPrice(product)}
          </p>
          {unpriced && (
            <p className="mt-2 text-sm text-[#704E34]">
              We confirm the price on WhatsApp when you send your order.
            </p>
          )}
          <p className="mt-5 text-lg text-[#683519]">{product.tagline}</p>
          <p className="mt-4 leading-relaxed text-[#704E34]">{product.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {button}
            {showCategoryLink && category && (
              <Link
                href={category.href}
                className="inline-flex items-center justify-center border border-[#683519] px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#683519] transition hover:bg-[#683519] hover:text-white"
              >
                Shop {category.shortName}
              </Link>
            )}
          </div>
        </div>
      </article>
    )
  }

  return (
    <div id={product.slug} className="scroll-mt-36">
      <div className="relative aspect-[3/4] border border-[#683519]/10 bg-white">
        <div className="absolute inset-4">
          <Image
            src={product.image}
            alt={`${product.name}, ${product.size}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain"
          />
        </div>
      </div>

      <div className="pt-5">
        {category && (
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C38738]">
            {category.shortName}
          </p>
        )}
        <h3 className="mt-2 font-display text-xl text-[#683519]">{product.name}</h3>
        <p className="mt-1 text-sm text-[#704E34]">{product.size}</p>
        <p className="mt-2 font-medium text-[#5A3018]">{displayPrice(product)}</p>
        {unpriced && (
          <p className="mt-1 text-xs text-[#704E34]">Confirmed on WhatsApp.</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-[#704E34]">
          {product.description}
        </p>
        {button}
      </div>
    </div>
  )
}
