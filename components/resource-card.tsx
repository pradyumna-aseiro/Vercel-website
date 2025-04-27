// components/resource-card.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import FadeInOnScroll from "@/components/fade-in-on-scroll";

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
    <FadeInOnScroll>
      <Link href={`/resources/${slug}`} className="block group">
        <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
          <div className="relative w-full h-56">
            <Image
              src={thumbnail}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">{title}</h3>
            <p className="text-gray-600 text-sm">{shortDescription}</p>
          </div>
        </div>
      </Link>
    </FadeInOnScroll>
  );
}
