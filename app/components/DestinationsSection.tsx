"use client";

import { useRef } from "react";
import { ArrowUpRight, MapPin, Plane } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const destinations = [
  {
    number: "01",
    city: "Dubai",
    country: "United Arab Emirates",
    code: "DXB",
    phrase: "Where the world meets.",
    className: "destination-dubai",
  },
  {
    number: "02",
    city: "Istanbul",
    country: "Türkiye",
    code: "IST",
    phrase: "Two continents. One unforgettable city.",
    className: "destination-istanbul",
  },
  {
    number: "03",
    city: "Kabul",
    country: "Afghanistan",
    code: "KBL",
    phrase: "Journeys that reconnect families.",
    className: "destination-kabul",
  },
  {
    number: "04",
    city: "Makkah",
    country: "Saudi Arabia",
    code: "JED",
    phrase: "A journey of faith and purpose.",
    className: "destination-makkah",
  },
  {
    number: "05",
    city: "Paris",
    country: "France",
    code: "CDG",
    phrase: "Classic beauty, endlessly rediscovered.",
    className: "destination-paris",
  },
  {
    number: "06",
    city: "Maldives",
    country: "Indian Ocean",
    code: "MLE",
    phrase: "Escape into a quieter world.",
    className: "destination-maldives",
  },
];

export default function DestinationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".destination-panel");

      panels.forEach((panel) => {
        const title = panel.querySelector(".destination-city");
        const code = panel.querySelector(".destination-code");
        const route = panel.querySelector(".destination-route-line");
        const plane = panel.querySelector(".destination-plane");
        const copy = panel.querySelector(".destination-copy");

        gsap.fromTo(
          title,
          {
            yPercent: 110,
            rotate: 3,
          },
          {
            yPercent: 0,
            rotate: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 68%",
              end: "top 28%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          code,
          {
            xPercent: 30,
            opacity: 0,
          },
          {
            xPercent: -15,
            opacity: 0.14,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.3,
            },
          },
        );

        gsap.fromTo(
          route,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 75%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          plane,
          {
            xPercent: -220,
            yPercent: 80,
            rotate: -12,
          },
          {
            xPercent: 180,
            yPercent: -40,
            rotate: 12,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          },
        );

        gsap.fromTo(
          copy,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 70%",
              end: "top 38%",
              scrub: 1,
            },
          },
        );
      });

      gsap.from(".destinations-title-line span", {
        yPercent: 120,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".destinations-header",
          start: "top 70%",
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="destinations-section"
    >
      <div className="destinations-header">
        <div className="destinations-header-top">
          <span>Selected journeys</span>
          <span>From Dubai to everywhere</span>
        </div>

        <h2>
          <span className="destinations-title-line">
            <span>PLACES THAT</span>
          </span>

          <span className="destinations-title-line destinations-title-outline">
            <span>MOVE YOU.</span>
          </span>
        </h2>

        <div className="destinations-header-bottom">
          <p>
            Discover destinations for family visits, holidays, business,
            pilgrimage and unforgettable escapes.
          </p>

          <span>06 destinations / worldwide possibilities</span>
        </div>
      </div>

      <div className="destination-panels">
        {destinations.map((destination) => (
          <article
            key={destination.city}
            className={`destination-panel ${destination.className}`}
          >
            <div className="destination-texture" />
            <div className="destination-glow" />

            <div className="destination-top">
              <span>{destination.number} / 06</span>

              <span className="destination-location">
                <MapPin size={14} />
                {destination.country}
              </span>
            </div>

            <div className="destination-code">{destination.code}</div>

            <div className="destination-main">
              <div className="destination-title-mask">
                <h3 className="destination-city">{destination.city}</h3>
              </div>

              <div className="destination-copy">
                <p>{destination.phrase}</p>

                <a
                  href={`https://wa.me/971502493630?text=${encodeURIComponent(
                    `Hello Bakhtar Travel, I want information about a trip to ${destination.city}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore this journey
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </div>

            <div className="destination-route">
              <span className="route-origin">DXB</span>

              <div className="destination-route-track">
                <div className="destination-route-line" />

                <Plane
                  className="destination-plane"
                  size={31}
                  strokeWidth={1.25}
                />
              </div>

              <span className="route-arrival">{destination.code}</span>
            </div>

            <div className="destination-footer">
              <span>Flights</span>
              <span>Hotels</span>
              <span>Visas</span>
              <span>Transfers</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}