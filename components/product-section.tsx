import ProductCard from "@/components/product-card";

const ProductSection = ({ title, items }: { title: string; items: any[] }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <ProductCard 
            key={index} 
            name={item.name} 
            description={item.description} 
            image={item.image} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
