import { MapPin, Plane } from "lucide-react";

export default function WorldMap() {
  const routes = [
    "Dubai → Kabul",
    "Dubai → Istanbul",
    "Dubai → Makkah",
    "Dubai → Bangkok",
    "Dubai → London",
  ];

  return (
    <section className="relative overflow-hidden bg-[#030712] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          Global Network
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          Connecting Dubai to the World
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          From Dubai to worldwide destinations, Bakhtar Travel supports families,
          businesses, groups, and spiritual journeys with trusted travel services.
        </p>

        <div className="relative mx-auto mt-16 h-[420px] max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-0 bg-[url('/images/world-map.png')] bg-contain bg-center bg-no-repeat opacity-25" />

          <div className="absolute left-[52%] top-[50%] flex items-center gap-2 text-cyan-300">
            <MapPin size={22} />
            <span className="font-bold">Dubai Hub</span>
          </div>

          <Plane className="absolute left-[20%] top-[30%] animate-pulse text-cyan-300" />
          <Plane className="absolute right-[20%] top-[35%] animate-pulse text-cyan-300" />
          <Plane className="absolute bottom-[25%] left-[35%] animate-pulse text-cyan-300" />

          <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-5">
            {routes.map((route) => (
              <div
                key={route}
                className="rounded-full border border-cyan-400/30 bg-black/50 px-4 py-3 text-sm text-cyan-100"
              >
                {route}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}