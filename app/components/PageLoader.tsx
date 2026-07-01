"use client";

import { Plane } from "lucide-react";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#030712] text-white">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-cyan-400 text-black shadow-[0_0_40px_rgba(34,211,238,0.8)]">
          <Plane size={38} />
        </div>

        <h1 className="text-3xl font-black">Bakhtar Travel</h1>
        <p className="mt-2 text-sm uppercase tracking-[0.35em] text-cyan-300">
          Premium Travel Experience
        </p>
      </div>
    </div>
  );
}