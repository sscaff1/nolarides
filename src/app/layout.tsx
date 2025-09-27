import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOLA Cycling - New Orleans Cycling Group Rides",
  description:
    "Discover group cycling rides in New Orleans. Find rides by day, speed, and time. Connect with the local cycling community.",
  keywords: [
    "cycling",
    "New Orleans",
    "group rides",
    "bike rides",
    "NOLA",
    "cycling community",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    other: [
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "NOLA Cycling - New Orleans Cycling Group Rides",
    description:
      "Discover group cycling rides in New Orleans. Find rides by day, speed, and time.",
    type: "website",
    siteName: "NOLA Cycling",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "NOLACycling Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOLA Cycling - New Orleans Cycling Group Rides",
    description:
      "Discover group cycling rides in New Orleans. Find rides by day, speed, and time.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
