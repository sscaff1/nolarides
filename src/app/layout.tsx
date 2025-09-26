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
  title: "NOLA Rides - New Orleans Cycling Group Rides",
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
  openGraph: {
    title: "NOLA Rides - New Orleans Cycling Group Rides",
    description:
      "Discover group cycling rides in New Orleans. Find rides by day, speed, and time.",
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
      <body
        className={`${barlowCondensed.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
