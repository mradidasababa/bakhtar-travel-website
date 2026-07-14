import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bakhtar Travel & Tourism | Dubai",
    template: "%s | Bakhtar Travel",
  },
  description:
    "Book worldwide flights, UAE visas, worldwide visas, Umrah packages, hotels, airport transfers, holidays and corporate travel services in Dubai.",
  keywords: [
    "Bakhtar Travel",
    "Dubai travel agency",
    "flight tickets Dubai",
    "UAE visa services",
    "Umrah packages Dubai",
    "hotel bookings Dubai",
  ],
  metadataBase: new URL("https://www.bakhtartravels.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bakhtar Travel & Tourism",
    description:
      "Flights, visas, Umrah, hotels, transfers and worldwide holidays from Dubai.",
    url: "https://www.bakhtartravels.com",
    siteName: "Bakhtar Travel & Tourism",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}