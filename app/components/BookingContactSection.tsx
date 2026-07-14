"use client";

import { FormEvent, useRef, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type BookingForm = {
  name: string;
  phone: string;
  service: string;
  destination: string;
  travelDate: string;
  travellers: string;
  message: string;
};

const initialForm: BookingForm = {
  name: "",
  phone: "",
  service: "Flight Tickets",
  destination: "",
  travelDate: "",
  travellers: "1",
  message: "",
};

export default function BookingContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<BookingForm>(initialForm);

  useGSAP(
    () => {
      gsap.from(".booking-heading-line span", {
        yPercent: 120,
        rotate: 3,
        duration: 1.15,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".booking-intro",
          start: "top 70%",
        },
      });

      gsap.from(".booking-form-panel", {
        y: 110,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".booking-form-panel",
          start: "top 82%",
        },
      });

      gsap.from(".contact-information", {
        x: 90,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-information",
          start: "top 82%",
        },
      });

      gsap.to(".booking-orbit", {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".booking-plane", {
        y: -18,
        rotate: 8,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ".final-contact-word",
        {
          xPercent: 18,
        },
        {
          xPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".final-contact",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        },
      );
    },
    {
      scope: sectionRef,
    },
  );

  const updateField = (
    field: keyof BookingForm,
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "Hello Bakhtar Travel & Tourism,",
      "",
      "I would like to make a travel enquiry.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Destination: ${form.destination || "Not specified"}`,
      `Travel date: ${form.travelDate || "Not specified"}`,
      `Travellers: ${form.travellers}`,
      `Additional details: ${form.message || "None"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/971502493630?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="booking-contact-section"
    >
      <div className="booking-intro">
        <div className="booking-intro-top">
          <span>Start your journey</span>
          <span>Dubai · Worldwide</span>
        </div>

        <h2>
          <span className="booking-heading-line">
            <span>LET&apos;S PLAN</span>
          </span>

          <span className="booking-heading-line booking-heading-outline">
            <span>YOUR NEXT TRIP.</span>
          </span>
        </h2>

        <div className="booking-intro-bottom">
          <p>
            Tell us where you want to go. Our travel team will help arrange
            flights, visas, hotels, transfers, holidays and Umrah packages.
          </p>

          <span>Personal assistance from our Dubai office</span>
        </div>
      </div>

      <div className="booking-content">
        <div className="booking-visual" aria-hidden="true">
          <div className="booking-orbit">
            <span className="booking-orbit-label label-one">DXB</span>
            <span className="booking-orbit-label label-two">BOOK</span>
            <span className="booking-orbit-label label-three">GO</span>
          </div>

          <div className="booking-visual-core">
            <Plane
              className="booking-plane"
              size={95}
              strokeWidth={1}
            />
          </div>
        </div>

        <form
          className="booking-form-panel"
          onSubmit={submitBooking}
        >
          <div className="booking-form-header">
            <div>
              <span>Travel enquiry</span>
              <h3>Where would you like to go?</h3>
            </div>

            <MessageCircle size={30} strokeWidth={1.2} />
          </div>

          <div className="booking-form-grid">
            <label className="form-field">
              <span>Full name</span>

              <input
                type="text"
                value={form.name}
                onChange={(event) =>
                  updateField("name", event.target.value)
                }
                placeholder="Your full name"
                required
              />
            </label>

            <label className="form-field">
              <span>Phone number</span>

              <input
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  updateField("phone", event.target.value)
                }
                placeholder="+971"
                required
              />
            </label>

            <label className="form-field">
              <span>Service</span>

              <select
                value={form.service}
                onChange={(event) =>
                  updateField("service", event.target.value)
                }
              >
                <option>Flight Tickets</option>
                <option>UAE Visas</option>
                <option>Worldwide Visas</option>
                <option>Umrah Packages</option>
                <option>Hotel Bookings</option>
                <option>Airport Transfers</option>
                <option>Holiday Packages</option>
                <option>Corporate Travel</option>
              </select>
            </label>

            <label className="form-field">
              <span>Destination</span>

              <input
                type="text"
                value={form.destination}
                onChange={(event) =>
                  updateField("destination", event.target.value)
                }
                placeholder="City or country"
              />
            </label>

            <label className="form-field">
              <span>Travel date</span>

              <div className="field-with-icon">
                <CalendarDays size={17} />

                <input
                  type="date"
                  value={form.travelDate}
                  onChange={(event) =>
                    updateField("travelDate", event.target.value)
                  }
                />
              </div>
            </label>

            <label className="form-field">
              <span>Travellers</span>

              <div className="field-with-icon">
                <Users size={17} />

                <select
                  value={form.travellers}
                  onChange={(event) =>
                    updateField("travellers", event.target.value)
                  }
                >
                  <option value="1">1 traveller</option>
                  <option value="2">2 travellers</option>
                  <option value="3">3 travellers</option>
                  <option value="4">4 travellers</option>
                  <option value="5">5 travellers</option>
                  <option value="6+">6 or more</option>
                </select>
              </div>
            </label>

            <label className="form-field form-field-full">
              <span>Additional details</span>

              <textarea
                value={form.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                placeholder="Tell us about your preferred airline, baggage, hotel or any special request."
                rows={5}
              />
            </label>
          </div>

          <button className="booking-submit magnetic" type="submit">
            <span>Send enquiry on WhatsApp</span>
            <ArrowUpRight size={22} />
          </button>

          <p className="booking-form-note">
            Your enquiry opens directly in WhatsApp. No payment is collected
            through this form.
          </p>
        </form>

        <aside className="contact-information">
          <div className="contact-information-header">
            <span>Contact our team</span>
            <h3>Speak with a travel expert.</h3>
          </div>

          <div className="contact-links">
            <a href="tel:+971502493630">
              <span className="contact-icon">
                <Phone size={19} />
              </span>

              <span className="contact-link-copy">
                <small>WhatsApp and mobile</small>
                <strong>+971 50 249 3630</strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            <a href="tel:+97142628268">
              <span className="contact-icon">
                <Phone size={19} />
              </span>

              <span className="contact-link-copy">
                <small>Office telephone</small>
                <strong>+971 4 262 8268</strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            <a href="mailto:info@bakhtartravels.com">
              <span className="contact-icon">
                <Mail size={19} />
              </span>

              <span className="contact-link-copy">
                <small>Email address</small>
                <strong>info@bakhtartravels.com</strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://maps.google.com/?q=Office+504+Shaikha+Maryam+Building+Al+Maktoum+Road+Deira+Dubai"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <MapPin size={19} />
              </span>

              <span className="contact-link-copy">
                <small>Visit our office</small>
                <strong>
                  Office 504, Shaikha Maryam Building, Al Maktoum Road,
                  Deira, Dubai, UAE
                </strong>
              </span>

              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-hours">
            <span>Office support</span>
            <strong>Available daily for travel enquiries</strong>
          </div>
        </aside>
      </div>

      <div className="travel-marquee" aria-hidden="true">
        <div className="travel-marquee-track">
          <span>FLIGHTS</span>
          <Plane size={38} strokeWidth={1} />
          <span>VISAS</span>
          <Plane size={38} strokeWidth={1} />
          <span>UMRAH</span>
          <Plane size={38} strokeWidth={1} />
          <span>HOTELS</span>
          <Plane size={38} strokeWidth={1} />
          <span>HOLIDAYS</span>
          <Plane size={38} strokeWidth={1} />
          <span>FLIGHTS</span>
          <Plane size={38} strokeWidth={1} />
          <span>VISAS</span>
          <Plane size={38} strokeWidth={1} />
          <span>UMRAH</span>
        </div>
      </div>

      <div className="final-contact">
        <div className="final-contact-word">JOURNEY</div>

        <div className="final-contact-top">
          <span>Bakhtar Travel &amp; Tourism L.L.C</span>
          <span>Dubai, United Arab Emirates</span>
        </div>

        <div className="final-contact-center">
          <p>Ready when you are.</p>

          <a
            href="https://wa.me/971502493630"
            target="_blank"
            rel="noreferrer"
          >
            <span>Book your journey</span>
            <ArrowUpRight size={32} />
          </a>
        </div>

        <footer className="site-footer">
          <div className="footer-brand">
            <span className="footer-brand-icon">
              <Plane size={20} />
            </span>

            <div>
              <strong>BAKHTAR</strong>
              <small>TRAVEL &amp; TOURISM L.L.C</small>
            </div>
          </div>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#destinations">Destinations</a>
            <a href="#contact">Contact</a>
            <a
              href="https://wa.me/971502493630"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <div className="footer-details">
            <span>www.bakhtartravels.com</span>
            <span>© {new Date().getFullYear()} Bakhtar Travel</span>
          </div>
        </footer>
      </div>
    </section>
  );
}