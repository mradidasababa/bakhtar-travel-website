"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function BookingPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    nationality: "",
    passport: "",
    passengers: "",
    from_city: "DXB",
    to_city: "KBL",
    departure_date: "",
    return_date: "",
    airline: "Kam Air",
    cabin: "Economy",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("bookings").insert([form]);

    setLoading(false);

    if (error) {
      alert("Booking failed: " + error.message);
      return;
    }

    router.push("/confirmation");
  }

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-10"
      >
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
          Booking Request
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          Traveler Details
        </h1>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              required={key !== "return_date"}
              type={key.includes("date") ? "date" : "text"}
              value={(form as any)[key]}
              onChange={(e) =>
                setForm({ ...form, [key]: e.target.value })
              }
              placeholder={key.replace("_", " ").toUpperCase()}
              className="rounded-2xl p-4 text-black"
            />
          ))}
        </div>

        <button
          disabled={loading}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-400 disabled:opacity-60"
        >
          <Send size={20} />
          {loading ? "Saving Booking..." : "Submit Booking Request"}
        </button>
      </form>
    </main>
  );
}