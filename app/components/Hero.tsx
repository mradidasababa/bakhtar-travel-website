"use client";

import Particles from "./Particles";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, MessageCircle, Phone, Plane, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-24 pt-36 text-white">
      <Particles />

      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/dubai-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.25),transparent_35%)]" />

      <div className="pointer-events-none absolute left-[-100px] top-40 z-20 animate-[flyPlane_14s_linear_infinite] text-5xl">
        ✈️
      </div>

      <div className="relative z-10 mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-300">
            Bakhtar Travel & Tourism L.L.C
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            Premium Travel
            <br />
            Services From
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
              Dubai
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-gray-300"
          >
            Book flights, hotels, UAE visas, Umrah packages and worldwide holidays
            with trusted travel experts in Dubai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/971508094913"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-bold text-black shadow-lg shadow-cyan-400/30 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>

            <a
              href="tel:+971508094913"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/20"
            >
              <Phone size={20} />
              +971 50 809 4913
            </a>
          </motion.div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["10+", "Years"],
              ["24/7", "Support"],
              ["Dubai", "Based"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                <h3 className="text-2xl font-black text-cyan-300">{num}</h3>
                <p className="text-sm text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-full bg-cyan-400 p-3 text-black">
              <Plane />
            </div>
            <div>
              <h2 className="text-2xl font-black">Plan Your Trip</h2>
              <p className="text-sm text-gray-300">Quick request to our travel team</p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              [MapPin, "Destination", "Dubai, Kabul, Umrah, Worldwide"],
              [CalendarDays, "Travel Date", "Choose your preferred date"],
              [ShieldCheck, "Service", "Flights, Visa, Hotels, Packages"],
            ].map(([Icon, title, text]: any) => (
              <div key={title} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-black/30 p-4">
                <Icon className="text-cyan-300" />
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="text-sm text-gray-400">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/971508094913?text=Hello%20Bakhtar%20Travel,%20I%20want%20to%20plan%20a%20trip."
            target="_blank"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-4 font-black text-black transition hover:bg-cyan-300"
          >
            Start Booking on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}