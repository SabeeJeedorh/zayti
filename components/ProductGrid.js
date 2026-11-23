import ProductCard from "./ProductCard"

export default function ProductGrid({ products }) {
  return (
    <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  )
}
