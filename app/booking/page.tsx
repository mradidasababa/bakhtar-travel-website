"use client";

import { Send, User, Mail, Phone, Plane } from "lucide-react";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
          Booking Request
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          Traveler Details
        </h1>

        <p className="mt-4 text-gray-400">
          Fill your details and Bakhtar Travel will contact you for confirmation.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl p-4 text-black" placeholder="Full Name" />
          <input className="rounded-2xl p-4 text-black" placeholder="Mobile Number" />
          <input className="rounded-2xl p-4 text-black" placeholder="Email Address" />
          <input className="rounded-2xl p-4 text-black" placeholder="Nationality" />
          <input className="rounded-2xl p-4 text-black" placeholder="Passport Number" />
          <input className="rounded-2xl p-4 text-black" placeholder="Number of Passengers" />
        </div>

        <textarea
          className="mt-4 min-h-32 w-full rounded-2xl p-4 text-black"
          placeholder="Write your travel request here..."
        />

        <a
          href="/payment"
          className="mt-6 flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-400"
        >
          <Send size={20} />
          Submit Booking Request
        </a>
      </div>
    </main>
  );
}