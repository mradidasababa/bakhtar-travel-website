export default function BookingSection() {
  return (
    <section className="bg-[#020617] py-24 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="rounded-[35px] border border-cyan-400/20 bg-white/5 p-10 backdrop-blur-2xl">

          <h2 className="text-4xl font-black text-center">
            Start Your Journey
          </h2>

          <p className="mt-4 text-center text-gray-400">
            Search flights, hotels, visas and Umrah packages.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            <input
              placeholder="From"
              className="rounded-2xl bg-black/40 p-4 outline-none border border-white/10"
            />

            <input
              placeholder="To"
              className="rounded-2xl bg-black/40 p-4 outline-none border border-white/10"
            />

            <input
              type="date"
              className="rounded-2xl bg-black/40 p-4 outline-none border border-white/10"
            />

            <button className="rounded-2xl bg-cyan-400 font-bold text-black hover:bg-cyan-300 transition">
              Search Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}