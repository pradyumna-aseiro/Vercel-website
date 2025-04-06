// app/products/machine-vision/area-scan-cameras/page.tsx
import CameraCard from "@/components/camera-card";
import { areaScanCameras } from "@/data/area-scan-cameras";

export default function AreaScanCamerasPage() {
  return (
    <main className="pt-36 pb-20 px-4 bg-white text-center">
      <h1 className="text-4xl font-bold mb-10">Area Scan Cameras</h1>
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
        {areaScanCameras.map((camera, index) => (
          <CameraCard
            key={index}
            name={camera.name}
            description={camera.description}
            keyFeatures={camera.keyFeatures}
            applications={camera.applications}
          />
        ))}
      </div>
    </main>
  );
}
