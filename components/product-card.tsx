// components/product-card.tsx
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  description: string;
  link: string;
  image: string;
};

export default function ProductCard({ name, description, link, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{name}</h3>
        <p className="text-gray-700 text-sm mb-3">{description}</p>
        <Link href={link}>
          <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
            Explore
          </a>
        </Link>
      </div>
    </div>
  );
}
