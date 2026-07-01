import {
  ArrowRight,
  CheckCircle,
  Clock3,
  FileCheck,
  Globe2,
  PlaneTakeoff,
} from "lucide-react";

export default function Visa() {
  const visas = [
    {
      title: "30 Days Tourist Visa",
      time: "2–4 Working Days",
      color: "Popular",
    },
    {
      title: "60 Days Tourist Visa",
      time: "2–4 Working Days",
      color: "Best Seller",
    },
    {
      title: "Multiple Entry Visa",
      time: "Valid for Frequent Travelers",
      color: "Premium",
    },
    {
      title: "Visa Extension",
      time: "Fast Renewal Available",
      color: "Express",
    },
  ];

  return (
    <section
      id="visa"
      className="relative overflow-hidden bg-[#030712] px-6 py-28 text-white"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            UAE Visa Services
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Fast & Trusted UAE Visa Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Tourist visas, multiple-entry visas and visa extensions with
            professional support from our Dubai office.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {visas.map((visa) => (
            <div
              key={visa.title}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <PlaneTakeoff
                  size={42}
                  className="text-cyan-300 transition group-hover:rotate-12"
                />

                <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                  {visa.color}
                </span>
              </div>

              <h3 className="text-2xl font-black">
                {visa.title}
              </h3>

              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3 text-gray-300">
                  <Clock3 size={18} className="text-cyan-300" />
                  {visa.time}
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <FileCheck size={18} className="text-cyan-300" />
                  Professional Documentation
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Globe2 size={18} className="text-cyan-300" />
                  UAE Immigration Support
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-cyan-300" />
                  Secure Processing
                </div>

              </div>

              <a
                href="https://wa.me/971508094913"
                target="_blank"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-black transition hover:bg-cyan-300"
              >
                Apply Now
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}