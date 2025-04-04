import ProductCard from "./product-card";

interface Product {
  title: string;
  description: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
