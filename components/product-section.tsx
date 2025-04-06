// components/product-section.tsx
import ProductCard from "./product-card";
import { productSections } from "@/data/products";

type ProductSectionProps = {
  title: string;
  items: {
    name: string;
    description: string;
    link: string;
    image: string;
  }[];
};

export default function ProductSection({ title, items }: ProductSectionProps) {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            link={product.link}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
