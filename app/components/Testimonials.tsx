import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ahmad Khan",
      text: "Bakhtar Travel helped us with tickets and UAE visa very smoothly. Fast response and professional service.",
    },
    {
      name: "Farid Ahmad",
      text: "Excellent Umrah package support from Dubai. Hotel, transport and guidance were well arranged.",
    },
    {
      name: "Sara Ali",
      text: "Very trusted travel agency in Dubai. They arranged our family holiday with good price and support.",
    },
  ];

  return (
    <section className="relative bg-[#030712] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Testimonials
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Trusted by Our Clients
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Real travel support for families, groups and business travelers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl transition hover:-translate-y-3 hover:border-cyan-400/40"
            >
              <div className="mb-5 flex gap-1 text-cyan-300">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="leading-8 text-gray-300">“{review.text}”</p>

              <h3 className="mt-6 text-xl font-black">{review.name}</h3>
              <p className="text-sm text-cyan-300">Verified Client</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}