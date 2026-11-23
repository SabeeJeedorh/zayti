import Link from "next/link"
import Image from "next/image"
import PalmFrond from "../../components/PalmFrond"
import OilDrop from "../../components/OilDrop"
import DividerDiamond from "../../components/DividerDiamond"

export const metadata = {
  title: "About Us",
  description:
    "The story of Zayti Naturals by Sabee'a. Pure coconut oil and pure shea butter, made with care.",
}

const steps = [
  {
    title: "The coconuts are sourced fresh",
    body: "We work with a small group of growers and buy only what we can press within days, not months.",
  },
  {
    title: "Pressed cold, once",
    body: "No heat, no chemical extraction. The oil is pressed out mechanically and left otherwise alone.",
  },
  {
    title: "Filtered and settled",
    body: "The oil rests and is filtered to remove sediment. Nothing else is taken out or put in.",
  },
  {
    title: "Bottled by hand",
    body: "Each jar is filled, labelled and checked by hand in small runs, not on an automated line.",
  },
]

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF7F0]">
        <PalmFrond className="pointer-events-none absolute -right-16 -top-8 h-72 w-72 text-[#C38738]/20" />
        <div className="container-zayti grid items-center gap-14 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#C38738]">
              About Us
            </p>
            <DividerDiamond className="mb-6" />
            <h1 className="max-w-lg font-display text-4xl leading-tight text-[#683519] md:text-5xl">
              A love for coconut that grew into Zayti.
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-[#704E34]">
              My love for coconut and its beautiful natural scent inspired me
              to start Zayti. My mum has been selling coconut oil, and growing
              up around it made me appreciate its simplicity and versatility.
              What began as a personal love for coconut has grown into a
              passion for sharing its goodness with others.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-[#704E34]">
              Zayti Naturals by Sabee&apos;a now holds two offerings: pure
              coconut oil, and pure shea butter.
            </p>
          </div>
          <OilDrop className="w-56 justify-self-center md:w-72" />
        </div>
      </section>

      <section className="border-y border-[#683519]/10 bg-[#FBF6ED]">
        <div className="container-zayti grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          <Link href="/coconut-oil" className="group grid grid-cols-[140px_1fr] items-center gap-5 sm:grid-cols-[180px_1fr]">
            <div className="relative aspect-[699/1280] bg-white">
              <Image
                src="/images/size.jpeg"
                alt="Zayti natural coconut oil bottles"
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C38738]">
                Coconut Oil
              </p>
              <h2 className="mt-2 font-display text-3xl text-[#683519]">
                Natural Coconut Oil
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#704E34]">
                Cold-pressed, for cooking, skin, and hair.
              </p>
              <span className="mt-4 inline-block text-xs uppercase tracking-[0.16em] text-[#683519] underline decoration-[#C38738] underline-offset-4">
                Shop Coconut Oil
              </span>
            </div>
          </Link>

          <Link href="/shea-butter" className="grid grid-cols-[140px_1fr] items-center gap-5 sm:grid-cols-[180px_1fr]">
            <div className="relative aspect-square bg-white">
              <Image
                src="/images/shea.png"
                alt="Zayti pure shea butter"
                fill
                sizes="180px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C38738]">
                Shea Butter
              </p>
              <h2 className="mt-2 font-display text-3xl text-[#683519]">
                Pure Shea Butter
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#704E34]">
                ₦1,000 and ₦1,500, for skin and hair.
              </p>
              <span className="mt-4 inline-block text-xs uppercase tracking-[0.16em] text-[#683519] underline decoration-[#C38738] underline-offset-4">
                Shop Shea Butter
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#FAF7F0]">
        <div className="container-zayti py-20">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#C38738]">
            How the coconut oil is made
          </p>
          <h2 className="mb-12 max-w-lg font-display text-3xl text-[#683519]">
            Four steps. No shortcuts in any of them.
          </h2>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="border-t border-[#683519]/15 pt-5">
                <p className="mb-2 font-display text-2xl text-[#C38738]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 font-display text-lg text-[#683519]">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#704E34]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBF6ED] py-24">
        <div className="container-zayti grid items-center gap-14 md:grid-cols-2">
          <div>
            <h2 className="mb-5 max-w-md font-display text-3xl text-[#683519]">
              Why &quot;Zayti&quot;?
            </h2>
            <p className="mb-4 max-w-md leading-relaxed text-[#704E34]">
              Zayt means oil. The word sits at the root of how a lot of people
              first learned to describe what is pressed from a fruit rather
              than manufactured in a plant. It felt right for a brand built on
              doing a few things plainly.
            </p>
            <p className="max-w-md leading-relaxed text-[#704E34]">
              The palm on the coconut mark is the tree the oil comes from. The
              drop is what we bottle. Shea butter is the same idea, in a
              second form: pure, and close to the source.
            </p>
          </div>
          <div className="rounded-3xl bg-[#5A3018] p-10 text-[#FBF6ED]">
            <p className="mb-4 font-display text-2xl leading-snug">
              &quot;I still taste-test every batch myself before it&apos;s
              bottled.&quot;
            </p>
            <p className="text-[#FBF6ED]/75">
              — Sabee&apos;a, Jeedorh (founder)
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
