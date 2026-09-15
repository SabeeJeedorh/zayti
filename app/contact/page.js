import PalmFrond from "../../components/PalmFrond";
import DividerDiamond from "../../components/DividerDiamond";
import ContactForm from "./ContactForm";
import { WhatsAppIcon } from "../../components/icons";
import { WHATSAPP_LINK } from "../../lib/site";

export const metadata = {
  title: "Contact — Zayti",
};

export default function Contact() {
  return (
    <section className="relative overflow-hidden">
      <PalmFrond className="absolute -bottom-16 -left-10 w-72 h-72 text-bronze/10 pointer-events-none" />
      <div className="container-zayti py-16 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-olive-dark mb-4">
            Get In Touch
          </p>
          <DividerDiamond className="mb-6" />
          <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-6">
            Questions, orders, or bulk pricing.
          </h1>
          <p className="text-ink/70 leading-relaxed max-w-sm mb-8">
            Whether you&apos;re asking about an order, want to stock Zayti in
            your shop, or just want to know more about how it&apos;s made —
            write to us, or message us directly.
          </p>

          <a
            href={WHATSAPP_LINK()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ink text-ivory px-6 py-3.5 rounded-full hover:bg-bronze-dark transition-colors mb-8"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Chat on WhatsApp
          </a>

          <dl className="space-y-3 text-ink/75">
            <div className="flex gap-3">
              <dt className="text-bronze-dark w-16 shrink-0">Email</dt>
              <dd>hello@zayti.co</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-bronze-dark w-16 shrink-0">Based in</dt>
              <dd>Lagos, Nigeria</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
