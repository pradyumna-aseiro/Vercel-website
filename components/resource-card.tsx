"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ResourceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  tags?: string[];
}

export default function ResourceCard({
  slug,
  title,
  shortDescription,
  thumbnail,
  tags = [],
}: ResourceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <Link href={`/resources/${slug}`}>
        <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
