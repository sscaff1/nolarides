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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
