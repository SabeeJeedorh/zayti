import CategoryView from "../../components/CategoryView"
import { getCategory, getProductsByCategory } from "../../lib/products"

export const metadata = {
  title: "Shea Butter",
  description:
    "Shop Zayti Naturals pure shea butter by Sabee'a. Jars at ₦1,000 and ₦1,500.",
}

export default function SheaButterPage() {
  return (
    <CategoryView
      category={getCategory("shea-butter")}
      products={getProductsByCategory("shea-butter")}
    />
  )
}
