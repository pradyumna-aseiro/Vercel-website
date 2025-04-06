// components/CameraCard.tsx
import React from "react";

type CameraCardProps = {
  name: string;
  description: string;
  keyFeatures: string[];
  applications: string[];
};

export default function CameraCard({
  name,
  description,
  keyFeatures,
  applications,
}: CameraCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition p-6 text-left">
      <h3 className="text-xl font-bold text-blue-600 mb-2">{name}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <div className="mb-2">
        <p className="font-semibold text-gray-800 mb-1">Key Features:</p>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {keyFeatures.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold text-gray-800 mb-1">Potential Applications:</p>
        <ul className="list-disc list-inside text-sm text-gray-600">
          {applications.map((app, i) => (
            <li key={i}>{app}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
