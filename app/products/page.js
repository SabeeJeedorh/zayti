import Link from "next/link"
import PalmFrond from "../../components/PalmFrond"
import ProductGrid from "../../components/ProductGrid"
import DividerDiamond from "../../components/DividerDiamond"
import { categories, getProductsByCategory } from "../../lib/products"

export const metadata = {
  title: "Shop",
  description:
    "Shop Zayti Naturals by Sabee'a. Pure coconut oil and pure shea butter.",
}

export default function Products() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF7F0]">
        <PalmFrond className="pointer-events-none absolute -left-12 -top-10 h-64 w-64 text-[#C38738]/20" />
        <div className="container-zayti pb-14 pt-16">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#C38738]">
            The shop
          </p>
          <DividerDiamond className="mb-6" />
          <h1 className="max-w-xl font-display text-4xl text-[#683519] md:text-5xl">
            Coconut oil and shea butter, in one quiet collection.
          </h1>
          <p className="mt-5 max-w-lg leading-relaxed text-[#704E34]">
            Choose the oil for the kitchen, hair, and skin, or the shea butter
            for a richer daily ritual. Both are made to stay simple.
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const items = getProductsByCategory(category.slug)
        return (
          <section
            key={category.slug}
            id={category.slug}
            className="scroll-mt-32 border-t border-[#683519]/10 bg-[#FBF6ED] py-16 md:py-20"
          >
            <div className="container-zayti">
              <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#C38738]">
                    {category.eyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-[#683519] md:text-4xl">
                    {category.name}
                  </h2>
                  <p className="mt-3 leading-relaxed text-[#704E34]">
                    {category.summary}
                  </p>
                </div>
                <Link
                  href={category.href}
                  className="text-xs uppercase tracking-[0.16em] text-[#683519] underline decoration-[#C38738] underline-offset-4"
                >
                  Shop {category.shortName}
                </Link>
              </div>
              <ProductGrid products={items} />
              {category.note && (
                <p className="mt-10 max-w-2xl text-sm leading-relaxed text-[#704E34]">
                  {category.note}
                </p>
              )}
            </div>
          </section>
        )
      })}

      <section className="border-t border-[#683519]/10 bg-[#FAF7F0]">
        <div className="container-zayti grid gap-10 py-16 md:grid-cols-2">
          <div>
            <h2 className="mb-3 font-display text-2xl text-[#683519]">
              Ordering in bulk?
            </h2>
            <p className="max-w-md leading-relaxed text-[#704E34]">
              Restaurants, salons, and shops can order Zayti Naturals in larger
              quantities.{" "}
              <Link href="/contact" className="underline decoration-[#C38738] underline-offset-4">
                Write to us
              </Link>{" "}
              and we will work out what suits you.
            </p>
          </div>
          <div>
            <h2 className="mb-3 font-display text-2xl text-[#683519]">
              Checkout
            </h2>
            <p className="max-w-md leading-relaxed text-[#704E34]">
              Add what you need, then send the basket on WhatsApp. We confirm
              availability and delivery from there.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
