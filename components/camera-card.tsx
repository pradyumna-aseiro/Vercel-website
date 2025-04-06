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
    <div className="w-[475px] rounded-xl shadow bg-white overflow-hidden">
      {/* image section */}
      <div className="w-[475px] h-[400px] relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      {/* content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-700 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <h4 className="font-semibold mb-1">Key Features:</h4>
        <ul className="list-disc pl-5 text-sm mb-2">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <h4 className="font-semibold mb-1">Applications:</h4>
        <ul className="list-disc pl-5 text-sm">
          {applications.map((app, idx) => (
            <li key={idx}>{app}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
