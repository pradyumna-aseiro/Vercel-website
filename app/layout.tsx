// app/layout.tsx
import "./css/style.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Aseiro Industries – Machine Vision & Automation",
  description: "Tailored machine vision and robotics solutions for industrial quality control.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={Math.random()} // Force animation on route change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
