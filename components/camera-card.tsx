// components/camera-card.tsx

import Image from "next/image";

interface CameraCardProps {
  name: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
}

export default function CameraCard({
  name,
  description,
  image,
  features,
  applications,
}: CameraCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{name}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>

        <h4 className="font-semibold text-gray-800 mb-1">Key Features:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600 mb-3">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h4 className="font-semibold text-gray-800 mb-1">Applications:</h4>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {applications.map((app, index) => (
            <li key={index}>{app}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
