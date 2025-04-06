// app/products/area-scan-cameras.tsx
import { areaScanCameras } from "@/data/area-scan-cameras"; // Importing the data

export default function AreaScanCamerasPage() {
  return (
    <section className="py-20 px-4 bg-white">
      <h1 className="text-3xl font-bold mb-6">Area Scan Cameras</h1>
      <p className="text-gray-700 text-lg mb-12">
        Explore our range of Area Scan Cameras designed for precise inspection and measurement.
      </p>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 text-left">
        {areaScanCameras.map((camera, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{camera.name}</h3>
              <p className="text-gray-700 text-sm mb-3">{camera.description}</p>

              <h4 className="text-lg font-semibold mt-4">Features:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {camera.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold mt-4">Applications:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {camera.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
