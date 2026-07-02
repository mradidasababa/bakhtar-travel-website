"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message || JSON.stringify(error));
      return;
    }

    console.log(data);
    alert("Account created. Please check your email.");
  }

  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white">
      <form onSubmit={register} className="mx-auto max-w-md rounded-3xl bg-white/10 p-8">
        <h1 className="text-4xl font-black">Register</h1>

        <input
          required
          className="mt-6 w-full rounded-2xl p-4 text-black"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          required
          minLength={6}
          className="mt-4 w-full rounded-2xl p-4 text-black"
          placeholder="Password minimum 6 characters"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="mt-6 w-full rounded-full bg-emerald-500 py-4 font-bold">
          Register
        </button>
      </form>
    </main>
  );
}