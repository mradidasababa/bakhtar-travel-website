import { Bus, CheckCircle2, Hotel, MapPin, ShieldCheck, Stamp } from "lucide-react";

export default function Umrah() {
  const packages = [
    { name: "Sharing", price: "AED 1150" },
    { name: "Triple", price: "AED 1225" },
    { name: "Double", price: "AED 1300" },
  ];

  const features = [
    "Umrah visa assistance",
    "6 days in Makkah",
    "Madinah hotel stay",
    "Bus transport",
    "Ziyarah arrangements",
    "Border support",
  ];

  return (
    <section id="umrah" className="relative overflow-hidden bg-[#030712] px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[url('/images/umrah-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Umrah Packages
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Complete Umrah Packages from UAE
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Trusted Umrah arrangements including visa, hotels, bus transport, ziyarah and group support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-8 text-center shadow-2xl backdrop-blur-xl transition hover:-translate-y-3 hover:border-cyan-400/40"
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                {pkg.name}
              </p>

              <h3 className="mt-5 text-4xl font-black">{pkg.price}</h3>

              <p className="mt-3 text-gray-400">Per person package option</p>

              <a
                href={`https://wa.me/971508094913?text=Hello%20Bakhtar%20Travel,%20I%20want%20Umrah%20${pkg.name}%20package.`}
                target="_blank"
                className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-4 font-black text-black hover:bg-cyan-300"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
              <CheckCircle2 className="text-cyan-300" size={22} />
              <span className="text-gray-200">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            { icon: Stamp, title: "Visa" },
            { icon: Hotel, title: "Hotels" },
            { icon: Bus, title: "Transport" },
            { icon: MapPin, title: "Ziyarah" },
          ].map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-xl">
                <Icon className="mx-auto mb-4 text-cyan-300" size={34} />
                <h3 className="text-xl font-black">{card.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}