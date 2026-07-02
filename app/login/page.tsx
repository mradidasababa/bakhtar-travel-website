"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white">
      <form
        onSubmit={login}
        className="mx-auto max-w-md rounded-3xl bg-white/10 p-8"
      >
        <h1 className="text-4xl font-black">Login</h1>

        <input
          className="mt-6 w-full rounded-2xl p-4 text-black"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="mt-4 w-full rounded-2xl p-4 text-black"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="mt-6 w-full rounded-full bg-emerald-500 py-4 font-bold">
          Login
        </button>
      </form>
    </main>
  );
}