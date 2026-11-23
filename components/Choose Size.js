import Link from "next/link"
import Image from "next/image"
import { WHATSAPP_LINK } from "../lib/site"

const sizes = [
  { size: "50ml", price: "₦1,000", href: "/coconut-oil#pure-coconut-oil-50" },
  { size: "100ml", price: "₦1,500", href: "/coconut-oil#pure-coconut-oil-100" },
  { size: "250ml", price: "₦4,000", href: "/coconut-oil#pure-coconut-oil-250" },
  { size: "500ml", price: "₦8,000", href: "/coconut-oil#pure-coconut-oil-500" },
  {
    size: "750ml",
    price: "₦12,000",
    href: WHATSAPP_LINK("Hi! I'd like to order Zayti coconut oil in 750ml."),
    external: true,
  },
  {
    size: "1L",
    price: "₦16,000",
    href: WHATSAPP_LINK("Hi! I'd like to order Zayti coconut oil in 1L."),
    external: true,
  },
]

export default function ChooseSize() {
  return (
    <section className="relative overflow-hidden bg-[#5A3018] text-[#FBF6ED]">
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-[0.07]">
        <div className="absolute right-[-80px] top-[-100px] h-[500px] w-[500px] rounded-full border border-[#C38738]" />
        <div className="absolute right-[-20px] top-[-40px] h-[400px] w-[400px] rounded-full border border-[#C38738]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">
        <div className="grid min-h-[520px] items-center lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative z-10 py-20 lg:py-24">
            <p className="text-[12px] font-medium uppercase tracking-[0.35em] text-[#C38738]">
              Natural Coconut Oil
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-[1px] w-[85px] bg-[#C38738]" />
              <span className="h-[7px] w-[7px] rotate-45 bg-[#C38738]" />
              <span className="h-[1px] w-[48px] bg-[#C38738]" />
            </div>
            <h2 className="mt-6 max-w-[460px] font-display text-[46px] leading-[0.98] tracking-[-0.035em] md:text-[64px]">
              Choose
              <br />
              your size
            </h2>
            <p className="mt-7 max-w-[380px] text-[15px] leading-7 text-[#FBF6ED]/80">
              Cold-pressed coconut oil for cooking, hair, and skin. Shop 50ml
              through 500ml, or the Zayti Set. For 750ml and 1L, message us
              and we will confirm.
            </p>
            <Link
              href="/coconut-oil"
              className="group mt-9 inline-flex items-center gap-5 rounded-full border border-[#C38738] px-7 py-3.5 text-[14px] font-medium transition-all duration-300 hover:bg-[#FBF6ED] hover:text-[#5A3018]"
            >
              <span>Shop Coconut Oil</span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="relative flex h-[520px] items-end justify-center lg:h-[560px]">
            <div className="relative h-[500px] w-full max-w-[520px]">
              <Image
                src="/images/size.jpeg"
                alt="Zayti natural coconut oil bottles"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#C38738]/30 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {sizes.map((item, index) => {
              const className = `group relative flex flex-col items-center px-4 py-4 text-center transition-all duration-300 ${
                index !== sizes.length - 1
                  ? "lg:border-r lg:border-[#C38738]/25"
                  : ""
              }`
              const inner = (
                <>
                  <span className="font-display text-[25px] text-[#FBF6ED] transition-transform duration-300 group-hover:-translate-y-1">
                    {item.size}
                  </span>
                  <div className="my-3 flex items-center gap-2">
                    <span className="h-[1px] w-[24px] bg-[#C38738]" />
                    <span className="h-[5px] w-[5px] rotate-45 bg-[#C38738]" />
                    <span className="h-[1px] w-[24px] bg-[#C38738]" />
                  </div>
                  <span className="text-[14px] tracking-[0.04em] text-[#FBF6ED]/80">
                    {item.price}
                  </span>
                </>
              )

              if (item.external) {
                return (
                  <a
                    key={item.size}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                )
              }

              return (
                <Link key={item.size} href={item.href} className={className}>
                  {inner}
                </Link>
              )
            })}
          </div>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-[#FBF6ED]/70">
            50ml to 500ml, and the gift set, can be added to your cart. 750ml
            and 1L open a WhatsApp order.
          </p>
        </div>
      </div>
    </section>
  )
}
