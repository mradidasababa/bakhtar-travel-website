import { BadgeCheck, Globe2, Headphones, Plane, ShieldCheck, Star } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    { title: "Dubai Licensed Agency", icon: BadgeCheck },
    { title: "Worldwide Flights", icon: Plane },
    { title: "UAE Visa Experts", icon: ShieldCheck },
    { title: "Umrah Specialists", icon: Star },
    { title: "Global Destinations", icon: Globe2 },
    { title: "Fast WhatsApp Support", icon: Headphones },
  ];

  return (
    <section className="relative z-10 -mt-10 px-6">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-cyan-400/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:grid-cols-3 lg:grid-cols-6">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="rounded-2xl bg-black/30 p-5 text-center transition hover:-translate-y-1 hover:bg-cyan-400/10"
          >
            <badge.icon className="mx-auto mb-3 text-cyan-300" size={30} />
            <p className="text-sm font-semibold text-gray-200">{badge.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}