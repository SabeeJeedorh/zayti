import PalmFrond from "../../components/PalmFrond";
import OilDrop from "../../components/OilDrop";
import DividerDiamond from "../../components/DividerDiamond";

export const metadata = {
  title: "About — Zayti",
};

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
    body: "The oil rests and is filtered to remove sediment — nothing else is taken out or put in.",
  },
  {
    title: "Bottled by hand",
    body: "Each jar is filled, labelled and checked by hand in small runs, not on an automated line.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <PalmFrond className="absolute -top-8 -right-16 w-72 h-72 text-bronze/15 pointer-events-none" />
        <div className="container-zayti pt-16 pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-olive-dark mb-4">
              Our Story
            </p>
            <DividerDiamond className="mb-6" />
            <h1 className="font-display text-4xl md:text-5xl leading-tight text-ink max-w-lg">
              A kitchen habit that turned into Zayti.
            </h1>
            <p className="mt-6 text-ink/70 leading-relaxed max-w-md">
              Sabee&apos;a started pressing coconut oil at home, the way her
              own family always had — for cooking, for skin, for hair. What
              she made for her household, neighbours started asking to buy.
              Zayti is that same oil, made at a slightly larger table.
            </p>
          </div>
          <OilDrop className="w-56 md:w-72 justify-self-center" />
        </div>
      </section>

      <section className="bg-paper border-y border-ink/10">
        <div className="container-zayti py-20">
          <p className="text-olive-dark mb-3">How it&apos;s made</p>
          <h2 className="font-display text-3xl text-ink max-w-lg mb-12">
            Four steps. No shortcuts in any of them.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((s, i) => (
              <div key={s.title} className="border-t border-ink/15 pt-5">
                <p className="text-bronze-dark font-display text-2xl mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-lg text-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-ink/65 text-[15px] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-zayti grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-display text-3xl text-ink mb-5 max-w-md">
              Why &quot;Zayti&quot;?
            </h2>
            <p className="text-ink/70 leading-relaxed max-w-md mb-4">
              Zayt means oil — the word sits at the root of how a lot of
              people first learned to describe what&apos;s pressed from a
              fruit rather than manufactured in a plant. It felt right for a
              brand built on doing one thing plainly.
            </p>
            <p className="text-ink/70 leading-relaxed max-w-md">
              The palm on the mark is the tree it comes from. The drop is
              what we&apos;re actually selling: not a lifestyle, just good
              oil.
            </p>
          </div>
          <div className="bg-olive-dark rounded-3xl p-10 text-ivory">
            <p className="font-display text-2xl leading-snug mb-4">
              &quot;I still taste-test every batch myself before it&apos;s
              bottled.&quot;
            </p>
            <p className="text-ivory/70">— Sabee&apos;a, founder</p>
          </div>
        </div>
      </section>
    </>
  );
}
