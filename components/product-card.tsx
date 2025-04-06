import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <div className="bg-slate-100 p-4 rounded-xl shadow hover:shadow-md transition">
      <div className="relative h-40 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded"
        />
      </div>
      <h3 className="text-lg font-bold text-blue-700 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
