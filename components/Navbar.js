"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon, CartIcon } from "./icons";
import { useCart } from "./CartProvider";
import { WHATSAPP_LINK } from "../lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-xl">

      <div className="hidden md:block">
        <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10 xl:px-14">
          <div className="relative flex h-[108px] items-center">
          

            <div className="flex flex-1 items-center">
              <nav className="flex items-center">
                
                {links.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="group relative flex items-center px-5 py-3 text-[13px] font-medium uppercase tracking-[0.24em] text-[#683519] transition-colors duration-300 hover:text-[#C38738]"
                  >
                    <span>{link.label}</span>

                    {index === 0 && (
                      <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#C38738]" />
                    )}

                    <span className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-[#C38738] transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ))}
              </nav>
            </div>

          
            <Link
              href="/"
              aria-label="Zayti Home"
              className="group absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            >
              <div className="relative flex h-[125px] w-[125px] items-center justify-center rounded-full bg-[#FAF7F0] px-2 shadow-[0_8px_30px_rgba(104,53,25,0.08)] transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="Zayti Natural Coconut Oil"
                  width={125}
                  height={125}
                  priority
                  className="h-[118px] w-[118px] object-contain mix-blend-multiply"
                />
              </div>
            </Link>

          
            <div className="ml-auto flex flex-1 items-center justify-end">
              <div className="flex items-center gap-2 rounded-full border border-[#C38738]/30 bg-white/55 p-2 shadow-[0_8px_24px_rgba(104,53,25,0.08)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-[#C38738]/50 hover:shadow-[0_14px_36px_rgba(104,53,25,0.14)]">
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="group relative isolate flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full px-4 text-[#683519] transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-[#683519] hover:text-white active:scale-95"
              >
                <span className="absolute inset-y-0 -left-1/2 -z-10 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ease-out group-hover:left-[125%]" />
                <WhatsAppIcon className="h-[23px] w-[23px] transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-110" />
                <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-500 group-hover:tracking-[0.2em] xl:inline">
                  WhatsApp
                </span>
              </a>

              <span className="h-8 w-px bg-[#C38738]/25" />

              <Link
                href="/cart"
                aria-label={`Shopping cart, ${cartCount} items`}
                className="group relative isolate flex h-12 w-12 items-center justify-center rounded-full text-[#683519] transition-all duration-500 ease-out hover:scale-[1.06] hover:bg-[#C38738] hover:text-white hover:shadow-[0_8px_20px_rgba(195,135,56,0.3)] active:scale-95"
              >
                <span className="absolute inset-0 -z-10 overflow-hidden rounded-full">
                  <span className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-700 ease-out group-hover:left-[125%]" />
                </span>
                <CartIcon className="h-[24px] w-[24px] transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:rotate-[-4deg] group-hover:scale-110" />

                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#FAF7F0] bg-[#683519] px-1 text-[9px] font-bold text-white shadow-sm transition-transform duration-500 ease-out group-hover:scale-110">
                  {cartCount}
                </span>
              </Link>
              </div>
            </div>
          </div>

          {/* Gold Divider */}
          <div className="relative h-px bg-[#C38738]/35">
            <span className="absolute left-1/2 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#C38738] bg-[#FAF7F0]" />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="flex h-[78px] items-center justify-between px-5">
          {/* Mobile Logo */}
          <Link
            href="/"
            aria-label="Zayti Home"
            className="group flex items-center"
          >
            <div className="relative flex h-[62px] w-[62px] items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Zayti Natural Coconut Oil"
                width={62}
                height={62}
                priority
                className="h-[62px] w-[62px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center gap-5">
            {/* Mobile Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              className="relative flex items-center justify-center text-[#683519]"
            >
              <CartIcon className="h-[22px] w-[22px]" />

              <span className="absolute -right-3 -top-3 flex h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#C38738] px-1 text-[8px] font-semibold text-white">
                {cartCount}
              </span>
            </Link>

            {/* Menu Button */}
            <button
              type="button"
              className="flex w-8 flex-col gap-[6px]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={`h-[1.5px] w-full bg-[#683519] transition-transform duration-300 ${open ? "translate-y-[7.5px] rotate-45" : ""
                  }`}
              />

              <span
                className={`h-[1.5px] w-full bg-[#683519] transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"
                  }`}
              />

              <span
                className={`h-[1.5px] w-full bg-[#683519] transition-transform duration-300 ${open ? "-translate-y-[7.5px] -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="border-t border-[#C38738]/25 bg-[#FAF7F0]">
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
              {links.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[#C38738]/15 py-4 text-[13px] font-medium uppercase tracking-[0.22em] text-[#683519] transition-colors hover:text-[#C38738]"
                >
                  <span className="flex items-center justify-between">
                    {link.label}

                    {index === 0 && (
                      <span className="h-[5px] w-[5px] rotate-45 bg-[#C38738]" />
                    )}
                  </span>
                </Link>
              ))}

              {/* Mobile WhatsApp */}
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-3 rounded-full border border-[#683519] px-5 py-3 text-[12px] font-medium uppercase tracking-[0.16em] text-[#683519] transition-all duration-300 hover:bg-[#683519] hover:text-white"
              >
                <WhatsAppIcon className="h-[17px] w-[17px]" />
                Order on WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}