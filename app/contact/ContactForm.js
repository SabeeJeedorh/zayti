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
      <div className="rounded-2xl border border-[#683519]/10 bg-[#FBF6ED] p-10 text-center">
        <h2 className="mb-2 font-display text-2xl text-[#683519]">Message sent</h2>
        <p className="text-[#704E34]">
          We usually reply within an hour. Thanks for reaching out.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-[#704E34]">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="w-full rounded-xl border border-[#683519]/20 bg-[#FBF6ED] px-4 py-3 text-[#683519] outline-none placeholder:text-[#683519]/35 focus:border-[#C38738]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-[#704E34]">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-xl border border-[#683519]/20 bg-[#FBF6ED] px-4 py-3 text-[#683519] outline-none placeholder:text-[#683519]/35 focus:border-[#C38738]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-[#704E34]">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-[#683519]/20 bg-[#FBF6ED] px-4 py-3 text-[#683519] outline-none placeholder:text-[#683519]/35 focus:border-[#C38738]"
          placeholder="What can we help with?"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-[#683519] px-7 py-3.5 text-[#FAF7F0] transition-colors hover:bg-[#C38738]"
      >
        Send message
      </button>
    </form>
  );
}
