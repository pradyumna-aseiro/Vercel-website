// app/products/amr/ctu/page.tsx
"use client";

import ProductCard from "@/components/product-card";
import { ctu } from "@/data/ctu";
import PageTransition from "@/components/page-transition";

export default function CTUPage() {
  return (
    <PageTransition>
      <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
        <h1 className="text-4xl font-bold mb-12">Conveyor Towing Unit (CTU)</h1>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {ctu.map((product, index) => (
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
    </PageTransition>
  );
}
