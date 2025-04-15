"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface CTAButtonProps {
  text: string;
  href?: string;
  isExternal?: boolean;
  variant?: "primary" | "secondary";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: () => void;
}

export default function CTAButton({
  text,
  href,
  isExternal = false,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
}: CTAButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded-md text-base font-medium transition-all duration-300 hover:scale-105";

  const primary = "bg-blue-600 text-white shadow hover:bg-blue-700";
  const secondary = "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50";

  const classes = `${baseStyles} ${variant === "primary" ? primary : secondary}`;

  // External link
  if (href && isExternal) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileTap={{ scale: 0.98 }}
      >
        {text}
      </motion.a>
    );
  }

  // Internal link
  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {text}
        </Link>
      </motion.div>
    );
  }

  // Button (form usage)
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.98 }}
    >
      {text}
    </motion.button>
  );
}
