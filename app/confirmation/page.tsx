import Link from "next/link";
import { CheckCircle, Download, Home } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl md:p-10">
        <CheckCircle className="mx-auto text-emerald-400" size={80} />

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Booking Request Confirmed
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          Thank you. Bakhtar Travel & Tourism team will contact you shortly to confirm your ticket and payment.
        </p>

        <div className="mt-8 rounded-3xl bg-black/30 p-6 text-left">
          <p className="text-gray-400">Reference Number</p>
          <h2 className="mt-2 text-3xl font-black text-emerald-400">
            BTT-2026-001
          </h2>

          <p className="mt-6 text-gray-400">Route</p>
          <p className="text-xl font-bold">Dubai DXB → Kabul KBL</p>

          <p className="mt-4 text-gray-400">Status</p>
          <p className="font-bold text-emerald-400">Pending final confirmation</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <button className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 font-bold text-white">
            <Download size={18} />
            Download Invoice
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 font-bold text-white hover:bg-emerald-400"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}