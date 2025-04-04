import React from "react";

const ProductSection = ({ title, items }: { title: string; items: any[] }) => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="grid gap-8 md:grid-cols-2 text-left">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.name}</h3>
              <p className="text-gray-700 text-sm mb-3">{item.description}</p>
              <div>{item.details}</div> {/* Render the JSX from details */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
