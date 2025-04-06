// app/products/machine-vision/threed-cameras/page.tsx
import CameraCard from "@/components/camera-card";
import { threedCameras } from "@/data/threed-cameras";

export default function threedCamerasPage() {
  return (
    <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">3D Cameras</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {threedCameras.map((camera, index) => (
          <CameraCard
            key={index}
            name={camera.name}
            description={camera.description}
            image={camera.image}
            features={camera.features}
            applications={camera.applications}
          />
        ))}
      </div>
    </main>
  );
}