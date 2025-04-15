"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
  isExternal?: boolean;
}

export default function CTAButton({
  href,
  text,
  variant = "primary",
  isExternal = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded-md text-base font-medium transition-all duration-300 hover:scale-105";

  const primary =
    "bg-blue-600 text-white shadow hover:bg-blue-700";
  const secondary =
    "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50";

  const classes = `${baseStyles} ${variant === "primary" ? primary : secondary}`;

  return isExternal ? (
    <motion.a
      href={href}
      className={classes}
      whileTap={{ scale: 0.98 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </motion.a>
  ) : (
    <motion.div whileTap={{ scale: 0.98 }}>
      <Link href={href} className={classes}>
        {text}
      </Link>
    </motion.div>
  );
}
