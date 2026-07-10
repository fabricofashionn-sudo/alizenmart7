import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fabricofashion.com"),
  title: {
    default: "Fabrico Fashion - Best Premium Fashion & Lifestyle in Bangladesh",
    template: "%s | Fabrico Fashion",
  },
  description: "Explore Fabrico Fashion for premium clothing, high-quality panjabi, embroidery designs, gadgets, smart electronics, home & lifestyle products in Bangladesh.",
  keywords: ["e-commerce", "online shopping", "Bangladesh", "fashion", "lifestyle", "panjabi", "premium clothing", "Fabrico Fashion"],
  authors: [{ name: "Fabrico Fashion Team" }],
  creator: "Fabrico Fashion",
  publisher: "Fabrico Fashion",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fabricofashion.com",
    siteName: "Fabrico Fashion",
    title: "Fabrico Fashion - Best Premium Fashion & Lifestyle in Bangladesh",
    description: "Explore Fabrico Fashion for premium clothing, high-quality panjabi, embroidery designs, gadgets, and lifestyle items in Bangladesh.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fabrico Fashion - Premium Shopping Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabrico Fashion - Best Premium Fashion & Lifestyle in Bangladesh",
    description: "Explore Fabrico Fashion for premium clothing, high-quality panjabi, embroidery designs, gadgets, and lifestyle items.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

import { CartProvider } from "@/context/CartContext";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMNG4WRN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <CartProvider>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </CartProvider>
      </body>
    </html>
  );
}
