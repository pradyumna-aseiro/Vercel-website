// app/products/lmr/page.tsx
import CameraCard from "@/components/camera-card";
import { lmr } from "@/data/lmr";

export default function lmrPage() {
  return (
    <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">Latent Mobile Robots (LMR)</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {lmr.map((camera, index) => (
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