import Image from "next/image";

const images = [
  { src: "/images/gallery-1.jpg", title: "Dubai Skyline" },
  { src: "/images/gallery-2.jpg", title: "Luxury Hotels" },
  { src: "/images/gallery-3.jpg", title: "Umrah Journey" },
  { src: "/images/gallery-4.jpg", title: "Beach Holidays" },
  { src: "/images/gallery-5.jpg", title: "Family Travel" },
  { src: "/images/gallery-6.jpg", title: "Worldwide Tours" },
];

export default function Gallery() {
  return (
    <section className="bg-[#030712] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Travel Gallery
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Moments Worth Traveling For
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {images.map((item, index) => (
            <div
              key={item.src}
              className={`group relative overflow-hidden rounded-3xl ${
                index === 0 || index === 5 ? "h-[420px] md:row-span-2" : "h-[250px]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-xl font-black">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}