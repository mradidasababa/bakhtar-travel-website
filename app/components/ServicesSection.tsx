"use client";

import { useRef } from "react";
import {
  Building2,
  Car,
  Globe2,
  Hotel,
  Landmark,
  Plane,
  TicketCheck,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    number: "01",
    title: "Flight Tickets",
    description:
      "Worldwide flight reservations with trusted airlines, flexible routes and professional support.",
    icon: Plane,
    accent: "Flights",
  },
  {
    number: "02",
    title: "UAE Visas",
    description:
      "Tourist and visit visa assistance for travellers planning their journey to the United Arab Emirates.",
    icon: Landmark,
    accent: "UAE",
  },
  {
    number: "03",
    title: "Worldwide Visas",
    description:
      "Visa consultation and application support for selected destinations around the world.",
    icon: Globe2,
    accent: "Visas",
  },
  {
    number: "04",
    title: "Umrah Packages",
    description:
      "Carefully arranged Umrah journeys including flights, hotels, transport and travel assistance.",
    icon: TicketCheck,
    accent: "Umrah",
  },
  {
    number: "05",
    title: "Hotel Bookings",
    description:
      "Hotel reservations for business trips, family holidays and memorable international escapes.",
    icon: Hotel,
    accent: "Hotels",
  },
  {
    number: "06",
    title: "Airport Transfers",
    description:
      "Reliable airport pickup and drop-off services designed around your arrival and departure schedule.",
    icon: Car,
    accent: "Transfer",
  },
  {
    number: "07",
    title: "Holiday Packages",
    description:
      "Custom holiday experiences combining destinations, hotels, flights and activities.",
    icon: Building2,
    accent: "Holiday",
  },
  {
    number: "08",
    title: "Corporate Travel",
    description:
      "Professional travel management solutions for businesses, teams and frequent travellers.",
    icon: Users,
    accent: "Corporate",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-panel");

      cards.forEach((card) => {
        const content = card.querySelector(".service-panel-content");
        const backgroundWord = card.querySelector(".service-background-word");
        const visual = card.querySelector(".service-visual");

        gsap.fromTo(
          content,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 72%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          backgroundWord,
          {
            xPercent: 15,
          },
          {
            xPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );

        gsap.fromTo(
          visual,
          {
            rotate: -12,
            scale: 0.75,
          },
          {
            rotate: 8,
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.3,
            },
          },
        );
      });

      gsap.from(".services-heading-line span", {
        yPercent: 120,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-introduction",
          start: "top 72%",
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="services-section">
      <div className="services-introduction">
        <div className="services-introduction-top">
          <span>Bakhtar services</span>
          <span>Dubai to the world</span>
        </div>

        <h2 className="services-heading">
          <span className="services-heading-line">
            <span>EVERY DETAIL.</span>
          </span>

          <span className="services-heading-line services-heading-outline">
            <span>ONE JOURNEY.</span>
          </span>
        </h2>

        <p>
          From your first enquiry to your final arrival, our team helps connect
          every important part of your travel experience.
        </p>
      </div>

      <div className="services-panels">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className={`service-panel service-panel-${(index % 4) + 1}`}
            >
              <div className="service-background-word">
                {service.accent}
              </div>

              <div className="service-panel-content">
                <div className="service-panel-number">{service.number}</div>

                <div className="service-panel-copy">
                  <span className="service-small-title">Our expertise</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a
                    href="https://wa.me/971502493630"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire on WhatsApp
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className="service-visual" aria-hidden="true">
                <div className="service-visual-ring" />
                <div className="service-visual-ring service-visual-ring-small" />

                <Icon size={120} strokeWidth={1} />
              </div>

              <div className="service-panel-footer">
                <span>Bakhtar Travel &amp; Tourism</span>
                <span>{service.number} / 08</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}