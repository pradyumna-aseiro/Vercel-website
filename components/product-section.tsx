import React from "react";
import Collapsible from "react-collapsible";

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
              
              {/* Collapsible Section for details */}
              <Collapsible trigger="View Details" transitionTime={200}>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">Key Features:</h3>
                  <ul className="list-disc pl-6">
                    {item.details.features.map((feature: string, idx: number) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-semibold mt-4">Applications:</h3>
                  <ul className="list-disc pl-6">
                    {item.details.applications.map((application: string, idx: number) => (
                      <li key={idx}>{application}</li>
                    ))}
                  </ul>
                </div>
              </Collapsible>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
