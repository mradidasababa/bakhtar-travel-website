import { BadgeCheck, Clock, Globe2, Headphones, ShieldCheck, Wallet } from "lucide-react";

export default function WhyChoose() {
  const items = [
    { title: "Licensed UAE Company", icon: BadgeCheck },
    { title: "Fast WhatsApp Support", icon: Headphones },
    { title: "Worldwide Travel Service", icon: Globe2 },
    { title: "Best Market Prices", icon: Wallet },
    { title: "Trusted Visa Support", icon: ShieldCheck },
    { title: "Quick Response", icon: Clock },
  ];

  return (
    <section id="whychoose" className="relative z-10 bg-[#030712] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="text-cyan-300">Why Choose Us</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Book With Confidence
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <item.icon className="mb-5 text-cyan-300" size={40} />
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}