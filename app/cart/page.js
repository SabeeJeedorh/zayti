"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../components/CartProvider";
import { WHATSAPP_LINK } from "../../lib/site";

function getPrice(price) {
  return Number(String(price).replace(/[^\d]/g, ""));
}

function formatPrice(price) {
  return `₦${price.toLocaleString("en-NG")}`;
}

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + getPrice(item.price) * item.quantity,
    0
  );

  function handleWhatsAppOrder() {
    if (cart.length === 0) return;

    const message = [
      "Hello Zayti Naturals! I would like to place an order:",
      "",
      ...cart.map(
        (item) =>
          `${item.name} (${item.size}) x ${item.quantity} - ${formatPrice(
            getPrice(item.price) * item.quantity
          )}`
      ),
      "",
      `Total: ${formatPrice(total)}`,
      "",
      "Please confirm availability and delivery details.",
    ].join("\n");

    const whatsappUrl = new URL(WHATSAPP_LINK());
    whatsappUrl.searchParams.set("text", message);

    window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen bg-[#FAF7F0] px-5 py-16 text-[#683519] md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C38738]">
          Zayti Naturals
        </p>

        <h1 className="mb-4 font-display text-4xl md:text-5xl">
          Your Shopping Cart
        </h1>

        <p className="mb-12 text-sm text-[#683519]/65">
          Your favourite natural essentials, gathered in one place.
        </p>

        {cart.length === 0 ? (
          <div className="border-y border-[#683519]/15 py-16 text-center">
            <div className="mb-6 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>

            <h2 className="font-display text-2xl">
              Your cart is empty
            </h2>

            <p className="mx-auto mb-8 mt-3 max-w-md text-sm leading-6 text-[#683519]/65">
              It looks like you haven't added anything yet. Explore our
              collection and find something you love.
            </p>

            <Link
              href="/products"
              className="inline-block bg-[#683519] px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C38738]"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
            <section className="space-y-6">
              {cart.map((item) => (
                <article
                  key={item.slug}
                  className="flex gap-4 border-b border-[#683519]/15 pb-6 sm:gap-6"
                >
                  <div className="relative h-32 w-28 shrink-0 overflow-hidden bg-white sm:h-40 sm:w-36">
                    <Image
                      src={item.image}
                      alt={`${item.name} ${item.size}`}
                      fill
                      sizes="144px"
                      className="object-contain p-2"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 sm:flex-row">
                    <div>
                      <h2 className="font-display text-xl">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-sm text-[#683519]/60">
                        {item.size}
                      </p>

                      <p className="mt-3 font-medium">
                        {item.price}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.slug)}
                        className="mt-4 text-xs text-[#683519]/60 underline underline-offset-4 transition hover:text-[#C38738]"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex h-fit items-center gap-4 border border-[#683519]/20 px-3 py-2">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name} ${item.size}`}
                        onClick={() =>
                          updateQuantity(item.slug, item.quantity - 1)
                        }
                        className="text-lg"
                      >
                        −
                      </button>

                      <span className="min-w-4 text-center text-sm">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name} ${item.size}`}
                        onClick={() =>
                          updateQuantity(item.slug, item.quantity + 1)
                        }
                        className="text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              <Link
                href="/products"
                className="inline-block pt-2 text-xs uppercase tracking-[0.15em] underline underline-offset-4 hover:text-[#C38738]"
              >
                ← Continue Shopping
              </Link>
            </section>

            <aside className="h-fit border border-[#683519]/15 p-6 md:p-8">
              <h2 className="font-display text-2xl">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between gap-4 border-b border-[#683519]/15 pb-5 text-sm">
                <span>
                  Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
                </span>

                <span className="font-medium">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="mt-5 text-xs leading-6 text-[#683519]/65">
                Delivery fees and availability will be confirmed when you
                place your order.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="mt-7 w-full bg-[#683519] px-5 py-4 text-xs uppercase tracking-[0.12em] text-white transition hover:bg-[#C38738]"
              >
                Order on WhatsApp
              </button>

              <p className="mt-4 text-center text-xs text-[#683519]/55">
                Your order will be sent to Zayti via WhatsApp.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}