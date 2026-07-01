import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Destinations from "./components/Destinations";
import WorldMap from "./components/WorldMap";
import Umrah from "./components/Umrah";
import Visa from "./components/Visa";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChoose />
      <Destinations />
      <WorldMap />
      <Umrah />
      <Visa />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}