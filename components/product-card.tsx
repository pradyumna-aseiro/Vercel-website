import Image from "next/image";

const ProductCard = ({ name, description, image }: { name: string; description: string; image: string }) => {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-600">{name}</h3>
        <p className="text-gray-700 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
