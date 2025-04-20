// components/solution-card.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface SolutionCardProps {
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
}

export default function SolutionCard({
  name,
  slug,
  shortDescription,
  image,
}: SolutionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all"
    >
      <Link href={`/solutions/${slug}`} className="block group">
        <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold text-blue-600 mb-1">{name}</h3>
        <p className="text-gray-700 text-sm">{shortDescription}</p>
      </Link>
    </motion.div>
  );
}
