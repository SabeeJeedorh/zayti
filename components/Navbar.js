"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon, CartIcon } from "./icons";
import { WHATSAPP_LINK } from "../lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/products#benefits", label: "Benefits" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F0]/95 backdrop-blur-xl">

      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden md:block">
        <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10 xl:px-14">

          <div className="relative flex h-[108px] items-center">

            {/* ================= LEFT NAV ================= */}
            <div className="flex flex-1 items-center">
              <nav className="flex items-center">

                {links.slice(0, 4).map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="
                      group relative flex items-center
                      px-5 py-3
                      text-[13px]
                      font-medium
                      uppercase
                      tracking-[0.24em]
                      text-[#683519]
                      transition-colors
                      duration-300
                      hover:text-[#C38738]
                    "
                  >
                    <span>{link.label}</span>

                    {/* Active Home underline */}
                    {index === 0 && (
                      <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#C38738]" />
                    )}

                    {/* Hover underline */}
                    <span
                      className="
                        absolute bottom-0 left-5 right-5
                        h-[1px]
                        origin-left
                        scale-x-0
                        bg-[#C38738]
                        transition-transform
                        duration-300
                        group-hover:scale-x-100
                      "
                    />
                  </Link>
                ))}

              </nav>
            </div>

            {/* ================= CENTER LOGO ================= */}
            <Link
              href="/"
              aria-label="Zayti Home"
              className="
                group absolute
                left-1/2 top-1/2
                z-20
                flex
                -translate-x-1/2
                -translate-y-1/2
                flex-col
                items-center
              "
            >
              <div
                className="
                  relative
                  flex
                  h-[125px]
                  w-[125px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FAF7F0]
                  px-2
                  shadow-[0_8px_30px_rgba(104,53,25,0.08)]
                  transition-transform
                  duration-500
                  group-hover:scale-[1.02]
                "
              >
                <Image
                  src="/images/logo.png"
                  alt="Zayti Natural Coconut Oil"
                  width={125}
                  height={125}
                  priority
                  className="
                    h-[118px]
                    w-[118px]
                    object-contain
                    mix-blend-multiply
                  "
                />
              </div>
            </Link>

            {/* ================= RIGHT NAV ================= */}
            <div className="ml-auto flex flex-1 items-center justify-end">

              {/* Contact */}
              <Link
                href="/contact"
                className="
                  group relative
                  px-5 py-3
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-[#683519]
                  transition-colors
                  duration-300
                  hover:text-[#C38738]
                "
              >
                Contact

                <span
                  className="
                    absolute
                    bottom-0
                    left-5
                    right-5
                    h-[1px]
                    origin-left
                    scale-x-0
                    bg-[#C38738]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </Link>

              {/* Gold divider */}
              <span className="mx-4 h-8 w-px bg-[#C38738]/40" />

              {/* WhatsApp */}
              <a
                href={WHATSAPP_LINK()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  text-[#683519]
                  transition-colors
                  duration-300
                  hover:text-[#C38738]
                "
              >
                <WhatsAppIcon
                  className="
                    h-[21px]
                    w-[21px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </a>

              {/* Cart */}
              <Link
                href="/products"
                aria-label="View products"
                className="
                  group relative
                  ml-6
                  flex
                  items-center
                  justify-center
                  text-[#683519]
                  transition-colors
                  duration-300
                  hover:text-[#C38738]
                "
              >
                <CartIcon
                  className="
                    h-[23px]
                    w-[23px]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {/* Cart badge */}
                <span
                  className="
                    absolute
                    -right-3
                    -top-3
                    flex
                    h-[17px]
                    min-w-[17px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C38738]
                    px-1
                    text-[9px]
                    font-semibold
                    text-white
                  "
                >
                  0
                </span>
              </Link>

            </div>
          </div>

          {/* ================= LUXURY GOLD LINE ================= */}
          <div className="relative h-px bg-[#C38738]/35">

            {/* Center diamond */}
            <span
              className="
                absolute
                left-1/2
                top-1/2
                h-[9px]
                w-[9px]
                -translate-x-1/2
                -translate-y-1/2
                rotate-45
                border
                border-[#C38738]
                bg-[#FAF7F0]
              "
            />

          </div>

        </div>
      </div>


      {/* ================= MOBILE NAVBAR ================= */}
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
                className="
                  h-[62px]
                  w-[62px]
                  object-contain
                  mix-blend-multiply
                  transition-transform
                  duration-300
                  group-hover:scale-[1.03]
                "
              />
            </div>
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center gap-5">

            {/* Cart */}
            <Link
              href="/products"
              aria-label="View products"
              className="
                relative
                flex
                items-center
                justify-center
                text-[#683519]
              "
            >
              <CartIcon className="h-[22px] w-[22px]" />

              <span
                className="
                  absolute
                  -right-3
                  -top-3
                  flex
                  h-[16px]
                  min-w-[16px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C38738]
                  px-1
                  text-[8px]
                  font-semibold
                  text-white
                "
              >
                0
              </span>
            </Link>

            {/* Menu button */}
            <button
              type="button"
              className="flex w-8 flex-col gap-[6px]"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={`
                  h-[1.5px]
                  w-full
                  bg-[#683519]
                  transition-transform
                  duration-300
                  ${open ? "translate-y-[7.5px] rotate-45" : ""}
                `}
              />

              <span
                className={`
                  h-[1.5px]
                  w-full
                  bg-[#683519]
                  transition-opacity
                  duration-300
                  ${open ? "opacity-0" : "opacity-100"}
                `}
              />

              <span
                className={`
                  h-[1.5px]
                  w-full
                  bg-[#683519]
                  transition-transform
                  duration-300
                  ${open ? "-translate-y-[7.5px] -rotate-45" : ""}
                `}
              />
            </button>

          </div>
        </div>


        {/* ================= MOBILE MENU ================= */}
        {open && (
          <nav className="border-t border-[#C38738]/25 bg-[#FAF7F0]">

            <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">

              {links.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    border-b
                    border-[#C38738]/15
                    py-4
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[#683519]
                    transition-colors
                    hover:text-[#C38738]
                  "
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
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#683519]
                  px-5
                  py-3
                  text-[12px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-[#683519]
                  transition-all
                  duration-300
                  hover:bg-[#683519]
                  hover:text-white
                "
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