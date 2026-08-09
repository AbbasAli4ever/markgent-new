import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import SmoothAnchors from "@/components/sections/SmoothAnchors";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const TITLE = "The Markgent LLC — Helping E-commerce Brands Grow Smarter";
const DESCRIPTION =
  "Branding, marketing, content creation, and customer support solutions that help businesses grow across Amazon, Etsy, Walmart, Shopify, and other e-commerce platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: { url: "/fav.png", type: "image/png" },
    apple: { url: "/fav.png", type: "image/png" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "The Markgent LLC",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <SmoothAnchors />
        <WhatsAppButton />
      </body>
    </html>
  );
}
