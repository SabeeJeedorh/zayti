import CategoryView from "../../components/CategoryView"
import { getCategory, getProductsByCategory } from "../../lib/products"

export const metadata = {
  title: "Coconut Oil",
  description:
    "Shop Zayti Naturals coconut oil by Sabee'a. Cold-pressed sizes for cooking, skin, and hair.",
}

export default function CoconutOilPage() {
  return (
    <CategoryView
      category={getCategory("coconut-oil")}
      products={getProductsByCategory("coconut-oil")}
    />
  )
}
