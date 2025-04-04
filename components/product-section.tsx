import ProductCard from "./product-card";

interface ProductSectionProps {
  title: string;
  items: {
    name: string;
    description: string;
    image: string;
  }[];
}

export default function ProductSection({ title, items }: ProductSectionProps) {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-semibold mb-8">{title}</h2>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, idx) => (
          <ProductCard key={idx} name={item.name} description={item.description} image={item.image} />
        ))}
      </div>
    </section>
  );
}
