import { Award, Globe2, MapPin, ShieldCheck } from "lucide-react";

export default function About() {
  const points = [
    { icon: ShieldCheck, title: "UAE Licensed Agency" },
    { icon: Globe2, title: "Worldwide Travel Support" },
    { icon: Award, title: "Trusted Travel Experts" },
    { icon: MapPin, title: "Based in Deira, Dubai" },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#030712] px-6 py-28 text-white">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            About Bakhtar Travel
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Premium Travel Services From Dubai
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Bakhtar Travel & Tourism L.L.C provides reliable travel solutions
            including air tickets, UAE visas, worldwide hotel bookings, Umrah
            packages, and complete travel assistance for individuals, families,
            and corporate clients.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-black">
                    <Icon size={22} />
                  </div>
                  <span className="font-semibold">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-cyan-400/20 to-blue-600/20 p-8">
              <h3 className="text-3xl font-black">Why clients choose us</h3>
              <p className="mt-4 leading-7 text-gray-300">
                We focus on professional service, fast response, transparent
                pricing, and trusted support for every journey.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-black/30 p-5">
                  ✈️ Daily flight ticketing support
                </div>
                <div className="rounded-2xl bg-black/30 p-5">
                  🛂 Tourist visa assistance
                </div>
                <div className="rounded-2xl bg-black/30 p-5">
                  🕋 Umrah package arrangements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}