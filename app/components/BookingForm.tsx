"use client";

import { Plane, Search, Users, CalendarDays } from "lucide-react";

export default function BookingForm() {
  return (
    <section className="relative z-20 mx-auto -mt-10 max-w-7xl px-4 pb-16 sm:px-6">
      <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-400">
              Premium Flight Search
            </p>
            <h2 className="text-2xl font-bold md:text-4xl">
              Find Your Best Flight Deal
            </h2>
          </div>

          <div className="flex rounded-full bg-black/30 p-1 text-sm">
            <button className="rounded-full bg-emerald-500 px-5 py-2 font-bold text-white">
              Round Trip
            </button>
            <button className="px-5 py-2 text-white/70">One Way</button>
            <button className="px-5 py-2 text-white/70">Multi City</button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 text-black">
            <label className="text-xs font-bold uppercase text-gray-500">
              From
            </label>
            <div className="mt-2 flex items-center gap-3">
              <Plane className="text-emerald-600" size={22} />
              <input
                className="w-full outline-none"
                placeholder="Dubai DXB"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 text-black">
            <label className="text-xs font-bold uppercase text-gray-500">
              To
            </label>
            <div className="mt-2 flex items-center gap-3">
              <Plane className="text-emerald-600" size={22} />
              <input
                className="w-full outline-none"
                placeholder="Kabul KBL / Worldwide"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 text-black">
            <label className="text-xs font-bold uppercase text-gray-500">
              Departure
            </label>
            <div className="mt-2 flex items-center gap-3">
              <CalendarDays className="text-emerald-600" size={22} />
              <input className="w-full outline-none" type="date" />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 text-black">
            <label className="text-xs font-bold uppercase text-gray-500">
              Return
            </label>
            <div className="mt-2 flex items-center gap-3">
              <CalendarDays className="text-emerald-600" size={22} />
              <input className="w-full outline-none" type="date" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-4">
          <div className="rounded-2xl bg-white p-4 text-black">
            <label className="text-xs font-bold uppercase text-gray-500">
              Travelers
            </label>
            <div className="mt-2 flex items-center gap-3">
              <Users className="text-emerald-600" size={22} />
              <select className="w-full outline-none">
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>Family</option>
                <option>Group Booking</option>
              </select>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 text-black">
            <label className="text-xs font-bold uppercase text-gray-500">
              Cabin Class
            </label>
            <select className="mt-2 w-full outline-none">
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>

          <div className="rounded-2xl bg-white p-4 text-black">
            <label className="text-xs font-bold uppercase text-gray-500">
              Service
            </label>
            <select className="mt-2 w-full outline-none">
              <option>Flight Ticket</option>
              <option>Hotel Booking</option>
              <option>UAE Visa</option>
              <option>Umrah Package</option>
              <option>Holiday Package</option>
            </select>
          </div>

          <a
            href="/flights"
            target="_blank"
            className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 p-4 text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:bg-emerald-400"
          >
            <Search size={22} />
            Search Flights
          </a>
        </div>
      </div>
    </section>
  );
}