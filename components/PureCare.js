import Image from "next/image"
import Link from "next/link"

const benefits = [
  {
    title: "Hair Care",
    image: "/images/hair-care.png",
    alt: "Zayti hair care",
    copy: "A little coconut oil for stronger, shinier hair.",
    fit: "cover",
  },
  {
    title: "Skin Care",
    image: "/images/skin-care.jpg",
    alt: "Zayti skin care",
    copy: "Soft, smooth skin, kept simple.",
    fit: "cover",
  },
  {
    title: "Cooking",
    image: "/images/cooking.jpg",
    alt: "Cooking with Zayti coconut oil",
    copy: "Natural richness for everyday meals.",
    fit: "cover",
  },
  {
    title: "Body Care",
    image: "/images/shea.png",
    alt: "Zayti pure shea butter",
    copy: "Pure shea butter for skin and hair.",
    fit: "contain",
  },
]

export default function PureCare() {
  return (
    <section className="bg-[#FBF6ED] py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">
        <div className="max-w-xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.32em] text-[#683519]">
            Brand benefits
          </p>
          <div className="mt-5 flex items-center gap-2">
            <span className="h-[1px] w-[92px] bg-[#C38738]" />
            <span className="h-[7px] w-[7px] rotate-45 bg-[#C38738]" />
            <span className="h-[1px] w-[48px] bg-[#C38738]" />
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-[#683519] md:text-5xl">
            Care, kept simple.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-[#704E34]">
            Coconut oil for the kitchen, the hair, and the skin. Shea butter
            when the body wants something richer. Both are pure, and neither
            asks you to read a long label.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-[148px] w-[148px] items-center justify-center rounded-full border border-[#C38738] p-[6px]">
                <div
                  className={`relative h-full w-full rounded-full border border-[#C38738]/50 bg-white ${
                    item.fit === "cover" ? "overflow-hidden" : ""
                  }`}
                >
                  {item.fit === "contain" ? (
                    <div className="absolute inset-3">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="148px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="148px"
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
              <h3 className="mt-6 font-display text-[23px] text-[#683519]">
                {item.title}
              </h3>
              <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                <span className="h-[1px] w-[30px] bg-[#C38738]" />
                <span className="h-[5px] w-[5px] rotate-45 bg-[#C38738]" />
                <span className="h-[1px] w-[30px] bg-[#C38738]" />
              </div>
              <p className="mx-auto mt-4 max-w-[190px] text-[14px] leading-[1.65] text-[#704E34]">
                {item.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link
            href="/about"
            className="inline-flex items-center gap-4 rounded-full border border-[#683519] px-7 py-3.5 text-[14px] font-medium text-[#683519] transition-all duration-300 hover:bg-[#683519] hover:text-white"
          >
            About Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
