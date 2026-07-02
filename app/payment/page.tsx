import Link from "next/link";
import { CreditCard, ShieldCheck } from "lucide-react";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
          Secure Payment
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          Complete Your Booking
        </h1>

        <div className="mt-8 rounded-3xl bg-black/30 p-6">
          <p className="text-gray-400">Selected Flight</p>
          <h2 className="mt-2 text-2xl font-black">Dubai DXB → Kabul KBL</h2>
          <p className="mt-2 text-gray-300">Kam Air • Direct • 30kg baggage</p>
          <p className="mt-6 text-4xl font-black text-emerald-400">AED 899</p>
        </div>

        <div className="mt-6 grid gap-4">
          <input className="rounded-2xl p-4 text-black" placeholder="Cardholder Name" />
          <input className="rounded-2xl p-4 text-black" placeholder="Card Number" />
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl p-4 text-black" placeholder="Expiry MM/YY" />
            <input className="rounded-2xl p-4 text-black" placeholder="CVV" />
          </div>
        </div>

        <Link
          href="/confirmation"
          className="mt-6 flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-400"
        >
          <CreditCard size={20} />
          Pay Securely
        </Link>

        <p className="mt-4 flex items-center gap-2 text-sm text-gray-400">
          <ShieldCheck size={16} />
          Demo payment page. Real gateway can be connected later.
        </p>
      </div>
    </main>
  );
}