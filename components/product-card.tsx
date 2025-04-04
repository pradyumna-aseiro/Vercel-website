import Image from "next/image";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden text-left">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} layout="fill" objectFit="contain" className="bg-gray-100" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-600 mb-2">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
