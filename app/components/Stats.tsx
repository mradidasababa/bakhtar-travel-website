export default function Stats() {
  const stats = [
    ["10+", "Years Experience"],
    ["50+", "Destinations"],
    ["24/7", "Customer Support"],
    ["1000+", "Happy Clients"],
  ];

  return (
    <section className="bg-[#030712] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
        {stats.map(([number, label]) => (
          <div
            key={label}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl"
          >
            <h3 className="text-5xl font-black text-cyan-300">{number}</h3>
            <p className="mt-3 text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}