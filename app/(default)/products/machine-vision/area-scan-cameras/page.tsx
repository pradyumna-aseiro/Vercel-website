import { areaScanCameras } from "@/data/area-scan-cameras";
import ProductCard from "@/components/product-card";

export default function AreaScanCamerasPage() {
  return (
    <main className="pt-32 pb-20 px-4 bg-white text-center">
      <h1 className="text-3xl font-bold mb-8">Area Scan Cameras</h1>
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {areaScanCameras.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </main>
  );
}
