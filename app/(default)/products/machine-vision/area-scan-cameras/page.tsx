// app/products/machine-vision/area-scan-products/page.tsx
import ProductCard from "@/components/product-card";
import { areaScanProducts } from "@/data/area-scan-products";

export default function AreaScanProductsPage() {
  return (
    <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">Area Scan Products</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {areaScanProducts.map((product, index) => (
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
