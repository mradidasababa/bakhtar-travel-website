"use client";

import { Menu, MessageCircle, Plane, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = ["Home", "About", "Services", "Destinations", "Umrah", "Visa", "Contact"];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const current = links
        .map((link) => link.toLowerCase())
        .find((id) => {
          const section = document.getElementById(id);
          if (!section) return false;
          const rect = section.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        });

      if (current) setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
          scrolled
            ? "border-cyan-400/40 bg-black/85 py-3"
            : "border-white/10 bg-white/10 py-4"
        }`}
      >
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-black shadow-lg shadow-cyan-400/30 transition group-hover:rotate-12">
            <Plane size={23} />
          </div>

          <div>
            <h1 className="text-lg font-extrabold leading-none text-white">
              Bakhtar Travel
            </h1>
            <p className="text-xs tracking-wide text-cyan-300">
              Travel & Tourism L.L.C
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 text-sm font-medium text-gray-200 md:flex">
          {links.map((link) => {
            const id = link.toLowerCase();
            const isActive = active === id;

            return (
              <a
                key={link}
                href={`#${id}`}
                className={`rounded-full px-4 py-2 transition ${
                  isActive
                    ? "bg-cyan-400 text-black"
                    : "hover:bg-white/10 hover:text-cyan-300"
                }`}
              >
                {link}
              </a>
            );
          })}
        </nav>

        <a
          href="https://wa.me/971508094913"
          target="_blank"
          className="hidden items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-bold text-black shadow-lg shadow-cyan-400/30 transition hover:-translate-y-0.5 hover:bg-cyan-300 md:flex"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <button
          className="rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-black/95 p-6 text-white shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => {
              const id = link.toLowerCase();

              return (
                <a
                  key={link}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 ${
                    active === id ? "bg-cyan-400 text-black" : "bg-white/5"
                  }`}
                >
                  {link}
                </a>
              );
            })}

            <a
              href="https://wa.me/971508094913"
              target="_blank"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 font-bold text-black"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}