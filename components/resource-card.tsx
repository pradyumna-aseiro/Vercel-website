"use client";

import Link from "next/link";
import Image from "next/image";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href={`/resources/${slug}`} className="block group">
        <div className="rounded-xl overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition-transform bg-white">
          <div className="relative w-full h-56">
            <Image
              src={thumbnail}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{shortDescription}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
