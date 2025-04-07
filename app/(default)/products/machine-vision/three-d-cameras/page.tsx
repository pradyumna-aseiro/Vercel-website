// app/products/machine-vision/threed-products/page.tsx
import ProductCard from "@/components/product-card";
import { threeDCameras } from "@/data/three-d-cameras";

export default function threeDCamerasPage() {
  return (
    <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">3D Cameras</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {threeDCameras.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            image={product.image}
            features={product.features}
            applications={product.applications}
          />
        ))}
      </div>
    </main>
  );
}