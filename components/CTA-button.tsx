"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ href, children, className = "" }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={href}>
        <a
          className={`inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300 ${className}`}
        >
          {children}
        </a>
      </Link>
    </motion.div>
  );
}
