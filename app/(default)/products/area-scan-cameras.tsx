// app/products/area-scan-cameras.tsx
import { areaScanCameras } from "@/data/area-scan-cameras";
import ProductCard from "@/components/product-card";

export default function AreaScanCamerasPage() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Area Scan Cameras</h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore our range of high-resolution area scan cameras designed for industrial inspection.
      </p>

      {/* Render the Product Cards dynamically */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {areaScanCameras.map((camera, index) => (
          <div key={index} className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <img
              src={camera.image}
              alt={camera.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{camera.name}</h3>
              <p className="text-gray-700 text-sm mb-3">{camera.description}</p>

              {/* Features List */}
              <div>
                <h4 className="font-semibold text-gray-700">Key Features:</h4>
                <ul className="list-disc ml-5 text-sm text-gray-600">
                  {camera.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Applications List */}
              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">Applications:</h4>
                <ul className="list-disc ml-5 text-sm text-gray-600">
                  {camera.application.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <a
                  href={`/products/${camera.name.replace(/ /g, "-").toLowerCase()}`}
                  className="text-blue-600 hover:underline"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
