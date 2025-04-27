// components/resource-card.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ResourceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
}

export default function ResourceCard({
  slug,
  title,
  shortDescription,
  thumbnail,
}: ResourceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
    >
      <Link href={`/resources/${slug}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-6 text-left">
          <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{shortDescription}</p>
        </div>
      </Link>
    </motion.div>
  );
}
