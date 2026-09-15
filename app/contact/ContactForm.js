"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-paper border border-ink/10 rounded-2xl p-10 text-center">
        <h3 className="font-display text-2xl text-ink mb-2">Message sent</h3>
        <p className="text-ink/70">
          We usually reply within a day or two. Thanks for reaching out.
        </p>
      </div>
    );
  }

  return (
    <div onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-ink/70 text-sm mb-1.5">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-3 text-ink placeholder:text-ink/35 focus:border-bronze-dark outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-ink/70 text-sm mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-3 text-ink placeholder:text-ink/35 focus:border-bronze-dark outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-ink/70 text-sm mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full bg-paper border border-ink/20 rounded-xl px-4 py-3 text-ink placeholder:text-ink/35 focus:border-bronze-dark outline-none resize-none"
          placeholder="What can we help with?"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-ink text-ivory px-7 py-3.5 rounded-full hover:bg-bronze-dark transition-colors"
      >
        Send message
      </button>
    </div>
  );
}
