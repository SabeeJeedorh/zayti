import Link from "next/link";
import Image from "next/image";
import PureCare from "../components/PureCare";
import ChooseSize from "../components/Choose Size";
import DividerDiamond from "../components/DividerDiamond";
import {
  LeafIcon,
  DropletIcon,
  HeartIcon,
  ArrowIcon,
  WhatsAppIcon,
} from "../components/icons";
import { WHATSAPP_LINK } from "../lib/site";

const trustBadges = [
  { icon: LeafIcon, label: "100% Natural" },
  { icon: DropletIcon, label: "No Additives" },
  { icon: HeartIcon, label: "Multi-Purpose" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zayti-cream text-zayti-brown">

<section
  className="relative min-h-[850px] overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/wallpaper.png')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-[#f8efe2]/80 via-[#f8efe2]/25 to-transparent" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,rgba(255,244,218,.45),transparent_38%)]" />

  <div className="relative mx-auto grid min-h-[850px] max-w-[1400px] items-center px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-16 xl:px-20">

    <div className="relative z-10 max-w-[530px] pt-10 lg:pt-0">

      <p className=" text-[13px] font-medium uppercase tracking-[0.38em] text-[#70401f]">
        Natural Coconut Oil
      </p>

      <DividerDiamond className="mb-6 w-[260px]" />

      <h1 className="font-serif text-[64px] font-medium leading-[0.9] tracking-[-0.035em] text-[#60371d] sm:text-[72px] md:text-[82px] lg:text-[88px] xl:text-[92px]">
        Nature
        <br />
        bottled.
      </h1>
{/* 
      <p className="mt-7 text-[18px] tracking-[0.12em] text-[#60371d]">
        Pure
        <span className="mx-3 text-[#b47a28]">•</span>
        Natural
        <span className="mx-3 text-[#b47a28]">•</span>
        Versatile
      </p> */}

      <p className="mt-7 max-w-[430px] text-[16px] leading-[1.7] text-[#704e34]">
        Zayti is cold-pressed coconut oil used for
        cooking, skin and hair. One ingredient, nothing else on the
        label.
      </p>

      <div className="mt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-4 rounded-full bg-[#633716] px-9 py-4 text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(75,40,18,.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#512b12] hover:shadow-xl"
        >
          Shop Now
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>

    </div>

    {/* zayti hero bottle */}
    <div className="relative flex h-full min-h-[700px] items-center justify-center lg:justify-end">

      <div className="relative h-[620px] w-[390px] sm:h-[680px] sm:w-[430px] lg:mr-[-10px] xl:mr-[20px]">

        <Image
          src="/images/bottle.png"
          alt="Zayti Natural Coconut Oil bottle"
          fill
          priority
          sizes="(max-width: 768px) 390px, 430px"
          className="object-contain drop-shadow-[0_30px_30px_rgba(65,38,19,.28)]"
        />

      </div>
    </div>

  </div>
</section>
<PureCare />
<ChooseSize />
    </main>
  );
}