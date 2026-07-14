"use client";
import BookingContactSection from "./BookingContactSection";
import DestinationsSection from "./DestinationsSection";
import ServicesSection from "./ServicesSection";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Menu, Plane, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(useGSAP);

export default function HomeExperience() {
  const pageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    let frame = 0;

    const animate = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      if (!cursorRef.current || !cursorDotRef.current) return;

      gsap.to(cursorRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.55,
        ease: "power3.out",
      });

      gsap.to(cursorDotRef.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useGSAP(
    () => {
      if (loading) return;

      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".site-header", {
          y: -70,
          opacity: 0,
          duration: 1,
        })
        .from(
          ".hero-line span",
          {
            yPercent: 120,
            rotate: 4,
            duration: 1.35,
            stagger: 0.12,
          },
          "-=0.65",
        )
        .from(
          ".hero-description",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          ".hero-actions",
          {
            y: 35,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.75",
        )
        .from(
          ".floating-orbit",
          {
            scale: 0,
            rotate: -100,
            opacity: 0,
            duration: 1.4,
          },
          "-=1.1",
        );

      gsap.to(".plane-object", {
        y: -22,
        rotate: 7,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".floating-orbit", {
        rotate: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".ambient-one", {
        x: 70,
        y: -50,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".ambient-two", {
        x: -70,
        y: 45,
        scale: 0.9,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    {
      scope: pageRef,
      dependencies: [loading],
      revertOnUpdate: true,
    },
  );

  return (
    <div ref={pageRef} className="site-shell">
      {loading && (
        <div className="loader">
          <div className="loader-top">
            <span>Bakhtar Travel</span>
            <span>Dubai, UAE</span>
          </div>

          <div className="loader-center">
            <div className="loader-mark">
              <Plane size={34} strokeWidth={1.4} />
            </div>

            <div className="loader-title">
              <span>YOUR WORLD</span>
              <span>STARTS HERE</span>
            </div>
          </div>

          <div className="loader-progress">
            <div className="loader-progress-bar" />
          </div>
        </div>
      )}

      <div ref={cursorRef} className="cursor-ring" />
      <div ref={cursorDotRef} className="cursor-dot" />

      <header className="site-header">
        <a href="#" className="brand">
          <span className="brand-icon">
            <Plane size={18} />
          </span>

          <span>
            <strong>BAKHTAR</strong>
            <small>TRAVEL &amp; TOURISM</small>
          </span>
        </a>

        <div className="header-center">
          <span>Deira, Dubai</span>
          <span className="availability-dot" />
          <span>Now booking worldwide</span>
        </div>

        <button
          className="menu-button magnetic"
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span>Menu</span>
          <Menu size={19} />
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="ambient ambient-one" />
          <div className="ambient ambient-two" />
          <div className="hero-grid" />

          <div className="hero-kicker">
            <span>Est. Dubai</span>
            <span>Worldwide journeys</span>
          </div>

          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="hero-line">
                <span>TRAVEL</span>
              </span>

              <span className="hero-line hero-line-indent">
                <span>BEYOND</span>
              </span>

              <span className="hero-line">
                <span>ORDINARY.</span>
              </span>
            </h1>

            <div className="hero-bottom">
              <p className="hero-description">
                Flights, visas, Umrah, hotels and exceptional travel
                experiences—planned with confidence from Dubai to the world.
              </p>

              <div className="hero-actions">
                <a
                  className="primary-action magnetic"
                  href="https://wa.me/971502493630"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Plan your journey</span>
                  <ArrowDownRight size={22} />
                </a>

                <a className="text-action" href="#services">
                  Explore services
                </a>
              </div>
            </div>
          </div>

          <div className="visual-stage" aria-hidden="true">
            <div className="floating-orbit">
              <span className="orbit-label orbit-label-one">DXB</span>
              <span className="orbit-label orbit-label-two">WORLD</span>
              <span className="orbit-label orbit-label-three">24/7</span>
            </div>

            <div className="globe-core">
              <div className="globe-line globe-line-one" />
              <div className="globe-line globe-line-two" />
              <div className="globe-line globe-line-three" />

              <Plane className="plane-object" size={82} strokeWidth={1.15} />
            </div>
          </div>

          <div className="scroll-caption">
            <span>Scroll to discover</span>
            <ArrowDownRight size={17} />
          </div>

          <div className="hero-index">01 / 06</div>
        </section>

        <section id="services" className="intro-section">
          <p className="section-label">What we believe</p>

          <h2>
            Travel should feel
            <span> effortless, personal</span>
            and unforgettable.
          </h2>

          <p className="intro-note">
            Bakhtar Travel &amp; Tourism connects every part of your journey
            through trusted service, experienced support and worldwide reach.
          </p>
        </section>
        <ServicesSection />
<DestinationsSection />
<BookingContactSection />
      </main>

      <div className={`menu-overlay ${menuOpen ? "menu-overlay-open" : ""}`}>
        <div className="menu-overlay-top">
          <span>Navigate Bakhtar</span>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="overlay-navigation">
          <a href="#" onClick={() => setMenuOpen(false)}>
            <span>01</span>
            <strong>Home</strong>
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            <span>02</span>
            <strong>Services</strong>
          </a>

          <a href="#destinations" onClick={() => setMenuOpen(false)}>
            <span>03</span>
            <strong>Destinations</strong>
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <span>04</span>
            <strong>Contact</strong>
          </a>
        </nav>

        <div className="menu-contact">
          <a href="tel:+97142628268">+971 4 262 8268</a>
          <a href="mailto:info@bakhtartravels.com">
            info@bakhtartravels.com
          </a>
        </div>
      </div>
    </div>
  );
}