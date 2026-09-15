import Link from "next/link";
import Image from "next/image";

export default function PureCare() {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ed] py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.8fr] lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[390px]">

            <p className="text-[12px] font-medium uppercase tracking-[0.38em] text-[#633716]">
              Pure Care From Nature
            </p>

            {/* Decorative divider */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-[1px] w-[92px] bg-[#b77a27]" />

              <span className="relative flex h-[7px] w-[7px] rotate-45 bg-[#b77a27]">
                <span className="absolute inset-0 scale-[0.45] bg-[#fbf6ed]" />
              </span>

              <span className="h-[1px] w-[48px] bg-[#b77a27]" />
            </div>

            <h2 className="mt-7 max-w-[360px] font-serif text-[46px] leading-[1.02] tracking-[-0.025em] text-[#633716] md:text-[52px]">
              More than just
              <br />
              coconut oil.
            </h2>

            <p className="mt-7 max-w-[350px] text-[16px] leading-[1.75] text-[#704e34]">
              Zayti is your natural companion for healthier hair, glowing skin,
              and wholesome meals — the pure goodness of coconut, in every drop.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-5 rounded-full border border-[#633716] px-7 py-3.5 text-[14px] font-medium text-[#633716] transition-all duration-300 hover:bg-[#633716] hover:text-white"
            >
              <span>Learn More</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* ================= CARE CATEGORIES ================= */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-7 lg:gap-10">

            {/* HAIR CARE */}
            <div className="group text-center">

              <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-full border border-[#b77a27] p-[5px] transition-transform duration-500 group-hover:scale-[1.04]">
                <div className="h-full w-full overflow-hidden rounded-full border border-[#d7a45d]">
                  <Image
                    src="/images/hair-care.png"
                    alt="Zayti hair care"
                    width={132}
                    height={132}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h3 className="mt-6 font-serif text-[23px] font-semibold text-[#633716]">
                Hair Care
              </h3>

              <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                <span className="h-[1px] w-[30px] bg-[#c58b39]" />
                <span className="h-[5px] w-[5px] rotate-45 bg-[#c58b39]" />
                <span className="h-[1px] w-[30px] bg-[#c58b39]" />
              </div>

              <p className="mx-auto mt-4 max-w-[180px] text-[14px] leading-[1.65] text-[#704e34]">
                Stronger, shinier,
                <br />
                healthier hair.
              </p>
            </div>

            {/* SKIN CARE */}
            <div className="group text-center">

              <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-full border border-[#b77a27] p-[5px] transition-transform duration-500 group-hover:scale-[1.04]">
                <div className="h-full w-full overflow-hidden rounded-full border border-[#d7a45d]">
                  <Image
                    src="/images/skin-care.jpg"
                    alt="Zayti skin care"
                    width={132}
                    height={132}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h3 className="mt-6 font-serif text-[23px] font-semibold text-[#633716]">
                Skin Care
              </h3>

              <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                <span className="h-[1px] w-[30px] bg-[#c58b39]" />
                <span className="h-[5px] w-[5px] rotate-45 bg-[#c58b39]" />
                <span className="h-[1px] w-[30px] bg-[#c58b39]" />
              </div>

              <p className="mx-auto mt-4 max-w-[180px] text-[14px] leading-[1.65] text-[#704e34]">
                Soft, smooth,
                <br />
                naturally glowing skin.
              </p>
            </div>

            {/* COOKING */}
            <div className="group text-center">

              <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-full border border-[#b77a27] p-[5px] transition-transform duration-500 group-hover:scale-[1.04]">
                <div className="h-full w-full overflow-hidden rounded-full border border-[#d7a45d]">
                  <Image
                    src="/images/cooking.jpg"
                    alt="Cooking with Zayti coconut oil"
                    width={132}
                    height={132}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h3 className="mt-6 font-serif text-[23px] font-semibold text-[#633716]">
                Cooking
              </h3>

              <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                <span className="h-[1px] w-[30px] bg-[#c58b39]" />
                <span className="h-[5px] w-[5px] rotate-45 bg-[#c58b39]" />
                <span className="h-[1px] w-[30px] bg-[#c58b39]" />
              </div>

              <p className="mx-auto mt-4 max-w-[180px] text-[14px] leading-[1.65] text-[#704e34]">
                Adds natural taste
                <br />
                and richness to
                <br />
                your meals.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}