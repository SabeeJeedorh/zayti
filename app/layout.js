import { Fraunces, Work_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { CartProvider } from "../components/CartProvider"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-worksans",
  display: "swap",
})

export const metadata = {
  title: {
    default: "Zayti Naturals by Sabee'a",
    template: "%s · Zayti Naturals",
  },
  description:
    "Zayti Naturals by Sabee'a. Pure coconut oil and pure shea butter for cooking, skin, and hair.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
