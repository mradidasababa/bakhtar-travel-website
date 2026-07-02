"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function loadAdmin() {
      const { data: sessionData } = await supabase.auth.getSession();

      if (!sessionData.session) {
        router.push("/login");
        return;
      }

      const { data } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });

      setBookings(data || []);
      setChecking(false);
    }

    loadAdmin();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#030712] text-white">
        Checking access...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black">Admin Dashboard</h1>
            <p className="mt-2 text-gray-400">
              Real booking requests from Supabase
            </p>
          </div>

          <button
            onClick={logout}
            className="rounded-full bg-red-500 px-6 py-3 font-bold text-white"
          >
            Logout
          </button>
        </div>

        <div className="mt-8 grid gap-4">
          {bookings.map((b) => (
            <div key={b.id} className="rounded-3xl bg-white/10 p-6">
              <h2 className="text-2xl font-bold">{b.full_name}</h2>
              <p>{b.phone}</p>
              <p>{b.email}</p>
              <p className="mt-3 text-emerald-400">
                {b.from_city} → {b.to_city} | {b.airline}
              </p>
              <p className="text-gray-400">Status: {b.status}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}