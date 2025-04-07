// app/products/amr/page.tsx
import ProductCard from "@/components/product-card";
import { cmr } from "@/data/cmr";

export default function cmrPage() {
  return (
    <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">Conveyor Mobile Robots (CMR)</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {cmr.map((product, index) => (
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