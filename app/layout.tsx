import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aseiro Industries – Machine Vision & Automation",
  description:
    "Tailored machine vision and robotics solutions for industrial quality control.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aseiro Industries – Machine Vision & Automation",
    description:
      "Zero-defect, high-efficiency manufacturing through robotics, machine vision, and industrial automation.",
    url: "https://www.aseiro.in",
    siteName: "Aseiro Industries",
    images: [
      {
        url: "/images/og_image.png", 
        width: 1200,
        height: 630,
        alt: "Aseiro Open Graph Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  );
}
