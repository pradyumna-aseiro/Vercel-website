// app/products/amr/lmr/page.tsx
"use client";

import ProductCard from "@/components/product-card";
import { lmr } from "@/data/lmr";
import PageTransition from "@/components/page-transition";

export default function LMRPage() {
  return (
    <PageTransition>
      <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
        <h1 className="text-4xl font-bold mb-12">Latent Mobile Robots (LMR)</h1>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {lmr.map((product, index) => (
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
