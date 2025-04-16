// app/products/amr/fmr/page.tsx
"use client";

import ProductCard from "@/components/product-card";
import { fmr } from "@/data/fmr";
import PageTransition from "@/components/page-transition";

export default function FMRPage() {
  return (
    <PageTransition>
      <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
        <h1 className="text-4xl font-bold mb-12">Forklift Mobile Robots (FMR)</h1>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {fmr.map((product, index) => (
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
