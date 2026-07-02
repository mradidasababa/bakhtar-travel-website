"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex gap-3 md:hidden">
      <a
        href="tel:+971508564493"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-blue-600 py-4 font-bold text-white shadow-xl"
      >
        <Phone size={18} />
        Call
      </a>

      <a
        href="https://wa.me/971508564493"
        target="_blank"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 py-4 font-bold text-white shadow-xl"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}