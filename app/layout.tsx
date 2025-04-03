import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aseiro Industries – Machine Vision & Automation",
  description:
    "Tailored robotics, machine vision, and automation solutions for factory productivity and quality control.",
  keywords: [
    "Aseiro Industries",
    "machine vision",
    "industrial automation",
    "robotics India",
    "factory quality inspection",
    "AMRs",
  ],
  authors: [{ name: "Aseiro Industries", url: "https://aseiro.in" }],
  creator: "Aseiro Industries",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aseiro Industries – Automation Meets Intelligence",
    description:
      "Explore cutting-edge industrial automation and machine vision solutions for your production line.",
    url: "https://aseiro.in",
    siteName: "Aseiro Industries",
    images: [
      {
        url: "/images/og-aseiro-image.png", // Ensure this image is in your public/images folder
        width: 1200,
        height: 630,
        alt: "Aseiro Open Graph Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aseiro Industries – Machine Vision & Automation",
    description:
      "Industrial automation meets intelligence. Custom robotics & vision systems for quality assurance.",
    images: ["/images/og-image-aseiro.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
