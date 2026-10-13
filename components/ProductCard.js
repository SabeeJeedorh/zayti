// "use client";

// import Image from "next/image";
// import { useCart } from "./CartProvider";

// export default function ProductCard({ product }) {
//   const { addToCart, cart } = useCart();

//   const quantity =
//     cart.find((item) => item.slug === product.slug)?.quantity || 0;

//   return (
//     <div className="group">
//       <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-ink/10 bg-paper">
//         <Image
//           src={product.image}
//           alt={`${product.name} — ${product.size}`}
//           fill
//           sizes="(max-width: 768px) 100vw, 33vw"
//           className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       <div className="pt-5">
//         <h3 className="font-display text-xl text-ink">
//           {product.name}
//         </h3>

//         <p className="mt-1 text-sm text-ink/60">{product.size}</p>

//         <p className="mt-2 font-medium text-bronze-dark">
//           {product.price}
//         </p>

//         <p className="mt-3 text-sm leading-relaxed text-ink/70">
//           {product.description}
//         </p>

//         <button
//           type="button"
//           onClick={() => addToCart(product)}
//           className="mt-5 w-full bg-[#683519] px-5 py-4 text-xs uppercase tracking-[0.15em] text-white transition hover:bg-[#C38738]"
//         >
//           {quantity > 0
//             ? `Added to Cart (${quantity})`
//             : "Add to Cart"}
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();

  const quantity =
    cart.find((item) => item.slug === product.slug)?.quantity || 0;

  return (
    <div className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-full border border-ink/10 bg-paper">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.size}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pt-5">
        <h3 className="font-display text-xl text-ink">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-ink/60">
          {product.size}
        </p>

        <p className="mt-2 font-medium text-bronze-dark">
          {product.price}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-ink/70">
          {product.description}
        </p>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-5 w-full bg-[#683519] px-5 py-4 text-xs uppercase tracking-[0.15em] text-white transition hover:bg-[#C38738]"
        >
          {quantity > 0
            ? `Added to Cart (${quantity})`
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
