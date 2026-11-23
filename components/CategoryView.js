import Image from "next/image"
import Link from "next/link"
import DividerDiamond from "./DividerDiamond"
import ProductCard from "./ProductCard"
import ProductGrid from "./ProductGrid"

export default function CategoryView({ category, products }) {
  const single = products.length === 1

  return (
    <>
      {single ? (
        <section className="bg-[#FAF7F0] py-16 md:py-24">
          <div className="container-zayti">
            <ProductCard
              product={products[0]}
              layout="feature"
              titleAs="h1"
              showCategoryLink={false}
            />
            <Link
              href="/products"
              className="mt-10 inline-flex text-xs uppercase tracking-[0.18em] text-[#683519] underline decoration-[#C38738] underline-offset-4"
            >
              View the full shop
            </Link>
          </div>
        </section>
      ) : (
        <>
          <section className="bg-[#FAF7F0]">
            <div className="container-zayti grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-[#C38738]">
                  {category.eyebrow}
                </p>
                <DividerDiamond className="my-5" />
                <h1 className="font-display text-4xl leading-tight text-[#683519] md:text-6xl">
                  {category.name}
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-[#704E34]">
                  {category.summary}
                </p>
                <Link
                  href="/products"
                  className="mt-8 inline-flex text-xs uppercase tracking-[0.18em] text-[#683519] underline decoration-[#C38738] underline-offset-4"
                >
                  View the full shop
                </Link>
              </div>

              <div className={`relative mx-auto w-full ${category.frame}`}>
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 320px"
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#FBF6ED] py-16 md:py-24">
            <div className="container-zayti">
              <ProductGrid products={products} />
            </div>
          </section>
        </>
      )}

      {category.note && (
        <section className="border-t border-[#683519]/10 bg-[#FAF7F0]">
          <div className="container-zayti py-14">
            <h2 className="font-display text-2xl text-[#683519]">Good to know</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[#704E34]">
              {category.note}
            </p>
          </div>
        </section>
      )}
    </>
  )
}
