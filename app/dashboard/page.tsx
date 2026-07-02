"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        router.push("/login");
        return;
      }

      setUserEmail(data.session.user.email || "");
    }

    checkUser();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black">My Dashboard</h1>
            <p className="mt-2 text-gray-400">{userEmail}</p>
          </div>

          <button
            onClick={logout}
            className="rounded-full bg-red-500 px-6 py-3 font-bold"
          >
            Logout
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white/10 p-6">
            <h2 className="text-xl font-bold">My Bookings</h2>
            <p className="mt-2 text-gray-400">View ticket requests</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6">
            <h2 className="text-xl font-bold">My Visa Requests</h2>
            <p className="mt-2 text-gray-400">Track visa status</p>
          </div>

          <div className="rounded-3xl bg-white/10 p-6">
            <h2 className="text-xl font-bold">My Payments</h2>
            <p className="mt-2 text-gray-400">Invoices and receipts</p>
          </div>
        </div>
      </div>
    </main>
  );
}