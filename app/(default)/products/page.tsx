// app/products/page.tsx
import { productSections } from "@/data/products";
import ProductSection from "@/components/product-section";

export default function ProductsPage() {
  return (
    <main className="pt-36 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">Explore Our Products</h1>

      {/* Main Product Categories */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {productSections.map((section, index) => (
          <ProductSection key={index} title={section.title} items={section.items} />
        ))}
      </div>
    </main>
  );
}
