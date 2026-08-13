import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOStructuredData from "@/components/SEOStructuredData";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barakobrews.vercel.app"),
  title: {
    default: "BarakoBrews | Mobile Coffee Catering",
    template: "%s | BarakoBrews",
  },
  description:
    "BarakoBrews brings freshly crafted specialty coffee, professional baristas, and a memorable café experience straight to your wedding, corporate event, or private celebration.",
  keywords: [
    "BarakoBrews",
    "Mobile Coffee Catering",
    "Coffee Cart Catering",
    "Wedding Coffee Bar",
    "Corporate Coffee Service",
    "Specialty Espresso Cart",
    "Kapeng Barako Catering",
    "Manila Coffee Catering",
    "Event Barista Hire",
  ],
  authors: [{ name: "BarakoBrews", url: "https://barakobrews.vercel.app" }],
  creator: "BarakoBrews",
  publisher: "BarakoBrews",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "BarakoBrews | Mobile Coffee Catering",
    description:
      "Coffee Worth Gathering For. Professional mobile coffee bar catering for weddings, corporate events, and private celebrations.",
    url: "https://barakobrews.vercel.app",
    siteName: "BarakoBrews",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/services/wedding_catering_real.jpg",
        width: 1200,
        height: 900,
        alt: "BarakoBrews Mobile Coffee Cart Setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BarakoBrews | Mobile Coffee Catering",
    description:
      "Freshly crafted coffee, professional baristas, and a memorable café experience straight to your event.",
    images: ["/images/services/wedding_catering_real.jpg"],
    creator: "@barakobrews",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/images/logo/logo_icon_dark_circle.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} scroll-smooth`}
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
