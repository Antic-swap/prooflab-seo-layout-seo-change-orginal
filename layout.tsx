import "@/app/globals.css";
import { ThemeClient } from "@/components/theme-client";
import { ProvidersAndInitialization } from "@/features/app/providers-and-initialization";
import { Caveat, Geist, Geist_Mono, Inter, Patrick_Hand } from "next/font/google";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ProofLab",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
});

// Inter — global body + display font
const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${patrickHand.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-display), sans-serif" }}
      >
        <ThemeClient />
        <ProvidersAndInitialization>{children}</ProvidersAndInitialization>
      </body>
    </html>
  );
}
