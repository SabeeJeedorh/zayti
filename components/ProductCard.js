import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative aspect-[4/5] bg-paper rounded-t-full overflow-hidden border border-ink/10 flex items-end justify-center pt-6">
        <span className="absolute top-4 left-4 z-10 text-xs tracking-wide text-olive bg-olive/10 px-3 py-1 rounded-full">
          {product.tagline}
        </span>
        <Image
          src="/bottle.png"
          alt={`${product.name} — ${product.size}`}
          width={573}
          height={1536}
          className="h-[85%] w-auto object-contain"
        />
      </div>
      <div className="pt-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-xl text-ink">{product.name}</h3>
          <span className="text-bronze-dark font-medium whitespace-nowrap">
            {product.price}
          </span>
        </div>
        <p className="text-ink/60 text-sm mt-1">{product.size}</p>
        <p className="text-ink/70 mt-3 leading-relaxed text-[15px]">
          {product.description}
        </p>
      </div>
    </div>
  );
}
