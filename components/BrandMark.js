import Image from "next/image"

export default function BrandMark({
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 70vw, 280px",
}) {
  return (
    <span
      className={`relative block aspect-[720/460] shrink-0 overflow-hidden bg-[#FBF4E2] ${className}`}
    >
      <Image
        src="/images/brand.jpeg"
        alt="Zayti by Sabee'a"
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
      />
    </span>
  )
}
