import {
  ArrowUp,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
} from "lucide-react";

export default function Footer() {
  const quickLinks = ["Home", "About", "Services", "Destinations", "Umrah", "Visa", "Contact"];

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/20 bg-black px-6 py-16 text-white">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-black">
              <Plane size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-black">Bakhtar Travel</h2>
              <p className="text-cyan-300">Travel & Tourism L.L.C</p>
            </div>
          </a>

          <p className="mt-6 max-w-xl leading-8 text-gray-400">
            Your trusted travel partner in Dubai for worldwide air tickets,
            hotel reservations, UAE visas, Umrah packages, holiday tours and
            complete travel solutions.
          </p>

          <div className="mt-8 flex gap-3">
            <a href="https://wa.me/971508094913" target="_blank" className="rounded-full bg-white/10 p-3 hover:bg-cyan-400 hover:text-black">
              <MessageCircle size={18} />
            </a>

            <a href="https://bakhtartravel.ae" target="_blank" className="rounded-full bg-white/10 p-3 hover:bg-cyan-400 hover:text-black">
              <Globe size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-black text-cyan-300">Quick Links</h3>
          <div className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-cyan-300">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-black text-cyan-300">Contact</h3>

          <div className="space-y-5 text-gray-400">
            <div className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-cyan-300" size={20} />
              <span>
                Office 504, 5th Floor
                <br />
                Sheikha Maryam Building
                <br />
                Al Maktoum Road
                <br />
                Baniyas, Deira, Dubai
              </span>
            </div>

            <div className="flex gap-3">
              <Phone className="text-cyan-300" size={20} />
              <a href="tel:+971508094913" className="hover:text-cyan-300">
                +971 50 809 4913
              </a>
            </div>

            <div className="flex gap-3">
              <Mail className="text-cyan-300" size={20} />
              <a href="mailto:info@bakhtartravel.ae" className="hover:text-cyan-300">
                info@bakhtartravel.ae
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
        <p>
          © 2026 <span className="text-cyan-300">Bakhtar Travel & Tourism L.L.C.</span> All Rights Reserved.
        </p>

        <a href="#home" className="flex items-center gap-2 rounded-full border border-cyan-400/30 px-5 py-3 hover:bg-cyan-400 hover:text-black">
          Back to Top
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}