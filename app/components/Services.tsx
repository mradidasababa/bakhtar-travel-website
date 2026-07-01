import {
  Building2,
  Car,
  Hotel,
  Plane,
  ShieldCheck,
  Stamp,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Plane,
      title: "Air Tickets",
      desc: "Worldwide flight ticketing with reliable support and competitive fares.",
    },
    {
      icon: Stamp,
      title: "Visa Services",
      desc: "UAE tourist visas, visit visas, and worldwide visa assistance.",
    },
    {
      icon: Hotel,
      title: "Hotels",
      desc: "Premium hotel booking support for families, groups, and business travelers.",
    },
    {
      icon: Building2,
      title: "Umrah Packages",
      desc: "Complete Umrah arrangements including visa, transport, hotels, and guidance.",
    },
    {
      icon: Car,
      title: "Airport Transfers",
      desc: "Comfortable pickup and drop-off services for smooth travel experiences.",
    },
    {
      icon: ShieldCheck,
      title: "Travel Insurance",
      desc: "Insurance assistance for safer and worry-free international journeys.",
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[#030712] px-6 py-28 text-white">
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Our Services
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Travel Services Designed for Every Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            From air tickets and visas to Umrah packages and hotel bookings,
            Bakhtar Travel provides complete travel solutions from Dubai.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-cyan-400/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400 text-black shadow-lg shadow-cyan-400/20 transition group-hover:scale-110">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-black">{item.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">{item.desc}</p>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <p className="mt-5 text-sm font-bold text-cyan-300">
                    Learn More →
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}