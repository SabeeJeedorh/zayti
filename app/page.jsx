import Link from "next/link"
import Image from "next/image"
import BrandMark from "../components/BrandMark"
import PureCare from "../components/PureCare"
import ChooseSize from "../components/Choose Size"
import DividerDiamond from "../components/DividerDiamond"
import ProductCard from "../components/ProductCard"
import { ArrowIcon, WhatsAppIcon } from "../components/icons"
import { WHATSAPP_LINK } from "../lib/site"
import { getProductsByCategory } from "../lib/products"

const sheaProducts = getProductsByCategory("shea-butter")

export default function Home() {
  return (
    <div className="bg-[#FAF7F0] text-[#683519]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/wallpaper.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F0] via-[#FAF7F0]/93 to-[#FAF7F0]/55" />
        </div>

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-16 lg:py-24">
          <BrandMark className="w-full max-w-[460px]" priority sizes="460px" />

          <div className="max-w-[560px]">
            <p className="text-[13px] font-medium uppercase tracking-[0.32em] text-[#704E34]">
              Zayti Naturals by Sabee&apos;a
            </p>
            <DividerDiamond className="my-6 w-[260px]" />
            <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.03em] text-[#683519] sm:text-6xl lg:text-7xl">
              Nature,
              <br />
              kept whole.
            </h1>
            <p className="mt-7 max-w-[460px] text-[16px] leading-[1.75] text-[#704E34]">
              Pure coconut oil and pure shea butter. Two quiet essentials for
              cooking, skin, and hair, prepared with care and nothing added.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-4 rounded-full bg-[#683519] px-8 py-4 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(90,48,24,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#C38738]"
              >
                Shop Now
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-[#683519] px-8 py-4 text-[14px] font-semibold text-[#683519] transition duration-300 hover:bg-[#683519] hover:text-white"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ChooseSize />

      <section className="bg-[#FBF6ED] py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.32em] text-[#683519]">
            Shea Butter
          </p>
          <DividerDiamond className="my-5" />
          <h2 className="max-w-xl font-display text-4xl leading-tight text-[#683519] md:text-5xl">
            The second pure thing we make.
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-[#704E34]">
            Pure shea butter for skin and hair, at ₦1,000 and ₦1,500. The same
            quiet standard as the oil, in a richer form.
          </p>
          <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:max-w-3xl">
            {sheaProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 xl:px-16">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.32em] text-[#683519]">
              About Zayti
            </p>
            <DividerDiamond className="my-5" />
            <h2 className="font-display text-4xl leading-tight text-[#683519] md:text-5xl">
              A love for coconut that grew into Zayti.
            </h2>
            <p className="mt-6 leading-relaxed text-[#704E34]">
              My love for coconut and its beautiful natural scent inspired me
              to start Zayti. My mum has been selling coconut oil, and growing
              up around it made me appreciate its simplicity and versatility.
            </p>
            <p className="mt-4 leading-relaxed text-[#704E34]">
              Zayti Naturals is that same care, now offered in two forms: pure
              coconut oil, and pure shea butter.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-4 rounded-full bg-[#683519] px-7 py-3.5 text-[14px] font-medium text-white transition hover:bg-[#C38738]"
            >
              About Us
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 items-center gap-4">
            <div className="relative aspect-[699/1280] border border-[#C38738]/25 bg-white">
              <Image
                src="/images/size.jpeg"
                alt="Zayti natural coconut oil bottles"
                fill
                sizes="(max-width: 1024px) 40vw, 280px"
                className="object-contain"
              />
            </div>
            <div className="relative aspect-square border border-[#C38738]/25 bg-white">
              <Image
                src="/images/shea.png"
                alt="Zayti pure shea butter"
                fill
                sizes="(max-width: 1024px) 40vw, 280px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <PureCare />

      <section className="bg-[#5A3018] py-20 text-[#FBF6ED] lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#C38738]">
            From Sabee&apos;a
          </p>
          <blockquote className="mt-8 font-display text-3xl leading-snug md:text-4xl">
            “I still taste-test every batch myself before it&apos;s bottled.”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[#FBF6ED]/75">
            Sabee&apos;a, Jeedorh · Founder
          </p>
        </div>
      </section>

      <section className="bg-[#FAF7F0] py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-[12px] uppercase tracking-[0.32em] text-[#C38738]">
            The shop
          </p>
          <h2 className="mt-5 font-display text-4xl text-[#683519] md:text-5xl">
            Take Zayti home.
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-[#704E34]">
            Coconut oil and shea butter, ready when you are. Add them to your
            cart, then send the order on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/coconut-oil"
              className="rounded-full bg-[#683519] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#C38738]"
            >
              Shop Coconut Oil
            </Link>
            <Link
              href="/shea-butter"
              className="rounded-full border border-[#683519] px-7 py-3.5 text-sm font-medium text-[#683519] transition hover:bg-[#683519] hover:text-white"
            >
              Shop Shea Butter
            </Link>
            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-[#683519] underline decoration-[#C38738] underline-offset-4"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
