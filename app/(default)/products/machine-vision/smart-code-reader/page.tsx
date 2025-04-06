// app/products/machine-vision/smart-code-readers/page.tsx
import CameraCard from "@/components/camera-card";
import { smartCodeReader } from "@/data/smart-code-readers";

export default function SmartCodeReaderPage() {
  return (
    <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">Smart Code Reader</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {smartCodeReader.map((camera, index) => (
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