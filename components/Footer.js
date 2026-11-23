import Link from "next/link"
import { WhatsAppIcon } from "./icons"
import { WHATSAPP_LINK, navLinks } from "../lib/site"
import BrandMark from "./BrandMark"

export default function Footer() {
  return (
    <footer className="bg-[#5A3018] text-[#FBF6ED]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid gap-12 border-b border-[#FBF6ED]/15 pb-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div className="max-w-sm">
            <Link href="/" aria-label="Zayti Naturals home" className="inline-flex">
              <BrandMark className="w-[210px]" sizes="210px" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[#FBF6ED]/75">
              Zayti Naturals by Sabee&apos;a. Pure coconut oil and pure shea
              butter for the kitchen, the skin, and the hair.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#C38738]">
              Explore
            </h2>
            <ul className="space-y-4 text-sm text-[#FBF6ED]/85">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[#C38738]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#C38738]">
              Stay Connected
            </h2>
            <a
              href={WHATSAPP_LINK()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-[#FBF6ED]/90 transition-colors duration-300 hover:text-[#C38738]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat with us on WhatsApp
            </a>
            <a
              href="mailto:zaytinaturals@gmail.com"
              className="mt-4 block text-sm text-[#FBF6ED]/75 transition-colors duration-300 hover:text-[#C38738]"
            >
              zaytinaturals@gmail.com
            </a>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <a
                href="https://instagram.com/zayti.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#C38738]"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@zayti.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#C38738]"
              >
                TikTok
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#C38738]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <p className="pt-6 text-xs tracking-wide text-[#FBF6ED]/55">
          © {new Date().getFullYear()} Zayti Naturals by Sabee&apos;a. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
