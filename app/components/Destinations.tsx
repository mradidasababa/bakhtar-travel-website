import Image from "next/image";

const destinations = [
  { title: "Dubai", image: "/images/dubai.jpg", desc: "Luxury shopping, iconic skyscrapers and unforgettable experiences.", badge: "Popular" },
  { title: "Turkey", image: "/images/turkey.jpg", desc: "History, culture and breathtaking landscapes.", badge: "Trending" },
  { title: "Saudi Arabia", image: "/images/saudi.jpg", desc: "Umrah and spiritual journeys with premium support.", badge: "Umrah" },
  { title: "Thailand", image: "/images/thailand.jpg", desc: "Beautiful beaches and unforgettable holidays.", badge: "Holiday" },
  { title: "Maldives", image: "/images/maldives.jpg", desc: "Luxury island escapes and crystal-clear waters.", badge: "Luxury" },
  { title: "Europe", image: "/images/europe.jpg", desc: "Multi-country tours and memorable adventures.", badge: "New" },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-[#030712] px-6 py-28 text-white">
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Top Destinations
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Explore Beautiful Places
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Discover premium holiday destinations with flights, hotels, visas and complete travel support from Dubai.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-[430px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:bg-cyan-400/10 group-hover:opacity-100" />

                <span className="absolute right-5 top-5 rounded-full bg-cyan-400 px-4 py-2 text-xs font-black text-black shadow-lg shadow-cyan-400/30">
                  {item.badge}
                </span>

                <div className="absolute bottom-0 p-8">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Destination
                  </p>

                  <h3 className="text-4xl font-black">{item.title}</h3>

                  <p className="mt-4 max-w-xl leading-7 text-gray-300">
                    {item.desc}
                  </p>

                  <a
                    href="https://wa.me/971508094913"
                    target="_blank"
                    className="mt-6 inline-flex rounded-full border border-cyan-400 px-6 py-3 font-bold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
                  >
                    Ask Package →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}