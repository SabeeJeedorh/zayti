"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { WhatsAppIcon, CartIcon } from "./icons"
import { useCart } from "./CartProvider"
import { WHATSAPP_LINK, navLinks } from "../lib/site"
import BrandMark from "./BrandMark"

function isActive(href, pathname) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

function NavItem({ link, pathname, onClick, compact = false }) {
  const active = isActive(link.href, pathname)

  return (
    <Link
      href={link.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative flex items-center whitespace-nowrap text-[#683519] transition-colors duration-300 hover:text-[#C38738] ${
        compact
          ? "border-b border-[#C38738]/15 py-4 text-[13px] font-medium uppercase tracking-[0.18em]"
          : "px-2 py-3 text-[11px] font-medium uppercase tracking-[0.14em] xl:px-3.5 xl:text-[13px] xl:tracking-[0.18em]"
      }`}
    >
      <span className="flex w-full items-center justify-between">
        {link.label}
        {compact && active && (
          <span className="h-[5px] w-[5px] rotate-45 bg-[#C38738]" />
        )}
      </span>
      {!compact && (
        <span
          className={`absolute bottom-1 left-2 right-2 h-[2px] origin-left bg-[#C38738] transition-transform duration-300 xl:left-3.5 xl:right-3.5 ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      )}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { cartCount } = useCart()
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-xl">
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1500px] px-5 xl:px-10">
          <div className="flex h-[112px] items-center gap-4">
            <Link
              href="/"
              aria-label="Zayti Naturals home"
              className="shrink-0"
            >
              <BrandMark className="w-[138px] xl:w-[156px]" priority sizes="156px" />
            </Link>

            <nav className="flex min-w-0 flex-1 items-center justify-center">
              {navLinks.map((link) => (
                <NavItem key={link.href} link={link} pathname={pathname} />
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#C38738]/30 bg-white/55 p-2 shadow-[0_8px_24px_rgba(104,53,25,0.08)]">
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="group relative isolate flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-full px-3 text-[#683519] transition-all duration-500 ease-out hover:scale-[1.03] hover:bg-[#683519] hover:text-white xl:px-4"
              >
                <WhatsAppIcon className="h-[23px] w-[23px]" />
                <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] xl:inline">
                  WhatsApp
                </span>
              </a>
              <span className="h-8 w-px bg-[#C38738]/25" />
              <Link
                href="/cart"
                aria-label={`Shopping cart, ${cartCount} items`}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full text-[#683519] transition-all duration-500 hover:bg-[#C38738] hover:text-white"
              >
                <CartIcon className="h-[24px] w-[24px]" />
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#FAF7F0] bg-[#683519] px-1 text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>

          <div className="relative h-px bg-[#C38738]/35">
            <span className="absolute left-1/2 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#C38738] bg-[#FAF7F0]" />
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex h-[84px] items-center justify-between px-5">
          <Link href="/" aria-label="Zayti Naturals home">
            <BrandMark className="w-[108px]" priority sizes="108px" />
          </Link>

          <div className="flex items-center gap-5">
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
            <button
              type="button"
              className="flex w-8 flex-col gap-[6px]"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={`h-[1.5px] w-full bg-[#683519] transition-transform duration-300 ${
                  open ? "translate-y-[7.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-[#683519] transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[1.5px] w-full bg-[#683519] transition-transform duration-300 ${
                  open ? "-translate-y-[7.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-[#C38738]/25 bg-[#FAF7F0]">
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
              {navLinks.map((link) => (
                <NavItem
                  key={link.href}
                  link={link}
                  pathname={pathname}
                  compact
                  onClick={() => setOpen(false)}
                />
              ))}
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
  )
}
