import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
          <p className="text-cyan-300">About Us</p>
          <h1 className="mt-4 text-5xl font-bold">
            Bakhtar Travel & Tourism L.L.C
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Bakhtar Travel & Tourism L.L.C is a trusted Dubai-based travel agency
            providing flight tickets, hotel bookings, UAE visa services, Umrah
            packages and worldwide holiday solutions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-black/30 p-6">✅ Dubai based company</div>
            <div className="rounded-2xl bg-black/30 p-6">✅ Fast WhatsApp support</div>
            <div className="rounded-2xl bg-black/30 p-6">✅ Worldwide ticketing</div>
            <div className="rounded-2xl bg-black/30 p-6">✅ Umrah and visa services</div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}