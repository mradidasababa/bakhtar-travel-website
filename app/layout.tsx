import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    default: "Bakhtar Travel & Tourism L.L.C | Dubai Travel Agency",
    template: "%s | Bakhtar Travel",
  },
  description:
    "Bakhtar Travel & Tourism L.L.C in Dubai offers flight tickets, hotel booking, UAE visas, Umrah packages and worldwide holiday services.",
  keywords: [
    "Bakhtar Travel Dubai",
    "Dubai travel agency",
    "UAE visa service",
    "Dubai tourist visa",
    "Umrah packages Dubai",
    "flight tickets Dubai",
    "hotel booking Dubai",
    "holiday packages Dubai",
  ],
  authors: [{ name: "Bakhtar Travel & Tourism L.L.C" }],
  creator: "Bakhtar Travel & Tourism L.L.C",
  publisher: "Bakhtar Travel & Tourism L.L.C",
  openGraph: {
    title: "Bakhtar Travel & Tourism L.L.C | Dubai Travel Agency",
    description:
      "Flights, hotels, UAE visas, Umrah packages and worldwide holiday services from Dubai.",
    url: "https://bakhtartravel.ae",
    siteName: "Bakhtar Travel",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakhtar Travel & Tourism L.L.C | Dubai Travel Agency",
    description:
      "Flights, hotels, UAE visas, Umrah packages and worldwide holiday services from Dubai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AE">
      <body className={`${jakarta.variable} ${space.variable}`}>
        {children}
      </body>
    </html>
  );
}