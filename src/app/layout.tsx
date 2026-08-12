import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOStructuredData from "@/components/SEOStructuredData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BarakoBrews — Mobile Coffee Catering",
  description:
    "BarakoBrews brings freshly crafted coffee, professional baristas, and a memorable café experience straight to your wedding, corporate event, or private party.",
  keywords: [
    "BarakoBrews",
    "Mobile Coffee Catering",
    "Coffee Cart Catering",
    "Wedding Coffee Bar",
    "Corporate Coffee Service",
    "Specialty Espresso Cart",
    "Kapeng Barako Catering",
  ],
  authors: [{ name: "BarakoBrews" }],
  openGraph: {
    title: "BarakoBrews — Mobile Coffee Catering",
    description:
      "Coffee Worth Gathering For. Professional mobile coffee bar catering for weddings, corporate events, and private celebrations.",
    siteName: "BarakoBrews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BarakoBrews — Mobile Coffee Catering",
    description:
      "Freshly crafted coffee, professional baristas, and a memorable café experience straight to your event.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-cream text-text-main font-sans antialiased flex flex-col justify-between selection:bg-caramel selection:text-espresso">
        <SEOStructuredData />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
