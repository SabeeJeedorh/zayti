import PalmFrond from "../../components/PalmFrond"
import DividerDiamond from "../../components/DividerDiamond"
import ContactForm from "./ContactForm"
import { WhatsAppIcon } from "../../components/icons"
import { WHATSAPP_LINK } from "../../lib/site"

export const metadata = {
  title: "Contact",
  description:
    "Contact Zayti Naturals by Sabee'a for orders, questions, and bulk pricing on coconut oil and shea butter.",
}

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F0]">
      <PalmFrond className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 text-[#C38738]/15" />
      <div className="container-zayti grid gap-16 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#C38738]">
            Contact
          </p>
          <DividerDiamond className="mb-6" />
          <h1 className="mb-6 font-display text-4xl leading-tight text-[#683519] md:text-5xl">
            Questions, orders, or bulk pricing.
          </h1>
          <p className="mb-8 max-w-sm leading-relaxed text-[#704E34]">
            Ask about coconut oil, shea butter, an order already on its way,
            or stocking Zayti Naturals in your shop. Write to us, or message
            us directly.
          </p>

          <a
            href={WHATSAPP_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#683519] px-6 py-3.5 text-[#FAF7F0] transition-colors hover:bg-[#C38738]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat on WhatsApp
          </a>

          <dl className="space-y-3 text-[#704E34]">
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-[#C38738]">Email</dt>
              <dd>
                <a href="mailto:zaytinaturals@gmail.com" className="hover:text-[#683519]">
                  zaytinaturals@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-[#C38738]">Based in</dt>
              <dd>Bauchi, Nigeria</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
