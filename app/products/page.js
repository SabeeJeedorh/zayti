import PalmFrond from "../../components/PalmFrond";
import ProductCard from "../../components/ProductCard";
import DividerDiamond from "../../components/DividerDiamond";
import { products } from "../../lib/products";

export const metadata = {
  title: "Products — Zayti",
};

export default function Products() {
  return (
    <>
      <section className="relative overflow-hidden">
        <PalmFrond className="absolute -top-10 -left-12 w-64 h-64 text-bronze/15 pointer-events-none" />
        <div className="container-zayti pt-16 pb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-olive-dark mb-4">
            The Range
          </p>
          <DividerDiamond className="mb-6" />
          <h1 className="font-display text-4xl md:text-5xl text-ink max-w-xl">
            Every jar, pressed from the same fruit.
          </h1>
          <p className="mt-5 text-ink/70 max-w-lg leading-relaxed">
            Four ways to bring Zayti into your kitchen and bathroom — the oil
            itself never changes, only the size of the jar.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-zayti grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-paper border-t border-ink/10">
        <div className="container-zayti py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">
              Ordering in bulk?
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-md">
              Restaurants, salons and shops can order Zayti in larger
              quantities at wholesale pricing. Get in touch and we&apos;ll
              work out what suits you.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink mb-3">
              How to store it
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-md">
              Coconut oil solidifies below about 24°C and turns liquid above
              it — that&apos;s the oil, not a fault. Both states are exactly
              as usable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
