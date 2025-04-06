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
    <div className="w-[475px] bg-white rounded-xl shadow overflow-hidden">
      {/* Image */}
      <div className="w-[475px] h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={475}
          height={400}
          className="object-cover w-[475px] h-[400px] rounded-t-xl"
        />
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-700 mb-2">{name}</h3>
        <p className="text-gray-700 text-sm mb-2">{description}</p>

        <h4 className="font-semibold text-sm">Key Features:</h4>
        <ul className="list-disc pl-5 text-sm mb-2">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <h4 className="font-semibold text-sm">Applications:</h4>
        <ul className="list-disc pl-5 text-sm">
          {applications.map((app, idx) => (
            <li key={idx}>{app}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
