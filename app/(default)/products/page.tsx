import ProductSection from "@/components/product-section";
import { productSections } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="pt-36 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">Explore Our Products</h1>
      {productSections.map((section, index) => (
        <ProductSection key={index} title={section.title} items={section.items} />
      ))}
    </main>
  );
}
