import Link from "next/link";
import { Clock, Luggage, Plane, ShieldCheck } from "lucide-react";

const flights = [
  {
    airline: "Kam Air",
    from: "DXB",
    to: "KBL",
    depart: "10:30",
    arrive: "14:15",
    duration: "3h 15m",
    baggage: "30kg",
    price: "AED 899",
    stops: "Direct",
  },
  {
    airline: "Ariana Afghan Airlines",
    from: "DXB",
    to: "KBL",
    depart: "13:45",
    arrive: "17:20",
    duration: "3h 05m",
    baggage: "25kg",
    price: "AED 820",
    stops: "Direct",
  },
  {
    airline: "Flydubai",
    from: "DXB",
    to: "IST",
    depart: "08:20",
    arrive: "12:10",
    duration: "4h 50m",
    baggage: "20kg",
    price: "AED 1,250",
    stops: "Direct",
  },
];

export default function FlightsPage() {
  return (
    <main className="min-h-screen bg-[#030712] px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-400">
            Flight Results
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">
            Available Flights
          </h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Select your preferred flight and continue to traveler details.
          </p>
        </div>

        <div className="grid gap-5">
          {flights.map((flight) => (
            <div
              key={`${flight.airline}-${flight.depart}`}
              className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:p-6"
            >
              <div className="grid gap-6 md:grid-cols-[1.2fr_2fr_1fr] md:items-center">
                <div>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20">
                    <Plane className="text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-black">{flight.airline}</h2>
                  <p className="mt-1 text-sm text-gray-400">{flight.stops}</p>
                </div>

                <div className="grid grid-cols-3 items-center gap-4 text-center">
                  <div>
                    <p className="text-3xl font-black">{flight.depart}</p>
                    <p className="mt-1 text-gray-400">{flight.from}</p>
                  </div>

                  <div>
                    <div className="mx-auto mb-2 h-px w-full bg-white/20" />
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <Clock size={16} />
                      {flight.duration}
                    </div>
                  </div>

                  <div>
                    <p className="text-3xl font-black">{flight.arrive}</p>
                    <p className="mt-1 text-gray-400">{flight.to}</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-black/30 p-5 text-center">
                  <div className="mb-3 flex items-center justify-center gap-2 text-sm text-gray-300">
                    <Luggage size={16} />
                    {flight.baggage}
                  </div>

                  <p className="text-3xl font-black text-emerald-400">
                    {flight.price}
                  </p>

                  <Link
                    href="/booking"
                    className="mt-4 flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-bold text-white transition hover:bg-emerald-400"
                  >
                    <ShieldCheck size={18} />
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}