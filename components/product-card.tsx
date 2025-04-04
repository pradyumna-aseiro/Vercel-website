import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProductCard({ title, description, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4">
      <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-lg font-bold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}
