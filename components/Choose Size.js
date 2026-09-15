import Link from "next/link";
import Image from "next/image";

const sizes = [
  { size: "50ml", price: "₦1,000" },
  { size: "100ml", price: "₦1,500" },
  { size: "250ml", price: "₦4,000" },
  { size: "500ml", price: "₦8,000" },
  { size: "750ml", price: "₦12,000" },
  { size: "1L", price: "₦16,000" },
];

export default function ChooseSize() {
  return (
    <section className="relative overflow-hidden bg-[#5a3018] text-[#fbf6ed]">

      {/* Decorative background */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[45%] opacity-[0.07]">
        <div className="absolute right-[-80px] top-[-100px] h-[500px] w-[500px] rounded-full border border-[#e4bf83]" />
        <div className="absolute right-[-20px] top-[-40px] h-[400px] w-[400px] rounded-full border border-[#e4bf83]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:px-16">

        {/* ================= TOP CONTENT ================= */}
        <div className="grid min-h-[520px] items-center lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <div className="relative z-10 py-20 lg:py-24">

            <p className="text-[12px] font-medium uppercase tracking-[0.35em] text-[#f1d9b5]">
              Our Products
            </p>

            {/* Gold divider */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-[1px] w-[85px] bg-[#c9954b]" />

              <span className="h-[7px] w-[7px] rotate-45 bg-[#c9954b]" />

              <span className="h-[1px] w-[48px] bg-[#c9954b]" />
            </div>

            <h2 className="mt-6 max-w-[430px] font-serif text-[52px] leading-[0.98] tracking-[-0.035em] md:text-[66px]">
              Choose
              <br />
              Your Size
            </h2>

            <p className="mt-7 max-w-[360px] text-[15px] leading-7 text-[#ead8c2]">
              Pure coconut goodness, available in a size for every need.
              Choose the bottle that fits your everyday routine.
            </p>

            <Link
              href="/products"
              className="group mt-9 inline-flex items-center gap-5 rounded-full border border-[#d7aa68] px-7 py-3.5 text-[14px] font-medium transition-all duration-300 hover:bg-[#fbf6ed] hover:text-[#5a3018]"
            >
              <span>Shop Now</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>


          {/* ================= BOTTLES ================= */}
          <div className="relative flex h-[520px] items-end justify-center lg:h-[560px]">

            {/* Soft ground shadow */}
            <div className="absolute bottom-[48px] left-1/2 h-[35px] w-[75%] -translate-x-1/2 rounded-[50%] bg-black/20 blur-2xl" />

            <div className="relative h-[500px] w-full max-w-[650px]">

              <Image
                src="/images/size.jpeg"
                alt="Zayti Natural Coconut Oil bottles"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-contain drop-shadow-[0_35px_30px_rgba(20,8,2,.35)]"
              />

            </div>

          </div>

        </div>


        {/* ================= SIZE SELECTOR ================= */}
        <div className="border-t border-[#e2bd80]/30 py-10">

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">

            {sizes.map((item, index) => (
              <Link
                href="/products"
                key={item.size}
                className={`
                  group relative
                  flex flex-col items-center
                  px-4 py-4
                  text-center
                  transition-all duration-300
                  ${
                    index !== sizes.length - 1
                      ? "lg:border-r lg:border-[#e2bd80]/20"
                      : ""
                  }
                `}
              >

                {/* Size */}
                <span className="font-serif text-[25px] text-[#fbf6ed] transition-transform duration-300 group-hover:-translate-y-1">
                  {item.size}
                </span>

                {/* Gold ornament */}
                <div className="my-3 flex items-center gap-2">
                  <span className="h-[1px] w-[24px] bg-[#c9954b]" />
                  <span className="h-[5px] w-[5px] rotate-45 bg-[#c9954b]" />
                  <span className="h-[1px] w-[24px] bg-[#c9954b]" />
                </div>

                {/* Price */}
                <span className="text-[14px] tracking-[0.04em] text-[#ead8c2]">
                  {item.price}
                </span>

              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}