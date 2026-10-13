import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon } from "./icons";
import { WHATSAPP_LINK } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory mt-32">
      <div className="container-zayti py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Zayti"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-display text-2xl">Zayti</span>
          </div>
          <p className="text-ivory/70 max-w-xs leading-relaxed">
            Cold-pressed coconut oil, made by Sabee&apos;a. One fruit, one
            process, nothing added.
          </p>
        </div>

        <div>
          <p className="text-sm tracking-wide text-bronze mb-4">Explore</p>
          <ul className="space-y-2 text-ivory/80">
            <li><Link href="/products" className="hover:text-bronze">Products</Link></li>
            <li><Link href="/about" className="hover:text-bronze">About</Link></li>
            <li><Link href="/contact" className="hover:text-bronze">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm tracking-wide text-bronze mb-4">Get in touch</p>
          <ul className="space-y-2 text-ivory/80">
            <li>zaytinaturals@gmail</li>
            <li>Bauchi, Nigeria</li>
            <li>
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-bronze"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm tracking-wide text-bronze mb-4">Follow us</p>
          <ul className="space-y-2 text-ivory/80">
            <li>
              <a
                href="https://instagram.com/zayti.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze"
              >
                Instagram <span className="ml-1 text-ivory/50">zayti.ng</span>
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@zayti.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze"
              >
                TikTok <span className="ml-1 text-ivory/50">zayti.ng</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bronze"
              >
                Facebook <span className="ml-1 text-ivory/50">Zayti Oil</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-zayti py-6 text-sm text-ivory/50">
          © {new Date().getFullYear()} Zayti by Sabee&apos;a. All rights reserved.
        </div>
      </div>
    </footer>
  );
}