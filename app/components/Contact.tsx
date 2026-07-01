import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#030712] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
            Contact Us
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Let&apos;s Plan Your Journey
          </h2>

          <div className="mt-8 space-y-5 text-gray-300">
            <p className="flex gap-3">
              <MapPin className="text-cyan-300" />
              Office 504, 5th Floor, Sheikha Maryam Building, Al Maktoum Road,
              Baniyas, Deira, Dubai
            </p>

            <p className="flex gap-3">
              <Phone className="text-cyan-300" />
              +971 50 809 4913
            </p>

            <p className="flex gap-3">
              <Mail className="text-cyan-300" />
              info@bakhtartravel.ae
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/971508094913"
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-black text-black hover:bg-cyan-300"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

            <a
              href="tel:+971508094913"
              className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-black text-white hover:bg-white/10"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}