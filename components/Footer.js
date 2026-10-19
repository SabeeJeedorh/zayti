import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "./icons";
import { WHATSAPP_LINK } from "../lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#5C371B] text-[#FDFBF6]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-12 border-b border-[#DDD0BB]/20 pb-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Zayti Naturals home"
              className="inline-flex flex-col items-start"
            >
              <Image
                src="/images/logo.png"
                alt="Zayti Naturals"
                width={105}
                height={105}
                className="h-[88px] w-[88px] object-contain"
              />

              <span className="mt-3 font-serif text-3xl tracking-wide">
                Zayti Naturals
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-[#FDFBF6]/70">
              Nature, bottled with care. Pure coconut oil for your everyday
              rituals, from your kitchen to your self-care routine.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#DDD0BB]">
              Explore
            </h2>

            <ul className="space-y-4 text-sm text-[#FDFBF6]/80">
              <li>
                <Link
                  href="/products"
                  className="transition-colors duration-300 hover:text-[#DDD0BB]"
                >
                  Shop our collection
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors duration-300 hover:text-[#DDD0BB]"
                >
                  Our story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-[#DDD0BB]"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#DDD0BB]">
              Stay Connected
            </h2>

            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-[#FDFBF6]/85 transition-colors duration-300 hover:text-[#DDD0BB]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat with us on WhatsApp
            </a>

            <a
              href="mailto:zaytinaturals@gmail.com"
              className="mt-4 block text-sm text-[#FDFBF6]/70 transition-colors duration-300 hover:text-[#DDD0BB]"
            >
              zaytinaturals@gmail.com
            </a>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <a
                href="https://instagram.com/zayti.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#DDD0BB]"
              >
                Instagram
              </a>

              <a
                href="https://tiktok.com/@zayti.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#DDD0BB]"
              >
                TikTok
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#DDD0BB]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs tracking-wide text-[#FDFBF6]/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Zayti Naturals. All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
}