// app/solutions/page.tsx

import ProductCard from "@/components/product-card";
import { solutions } from "@/data/solutions";

export default function SolutionsPage() {
  return (
    <main className="pt-36 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">Our Solutions</h1>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 text-left">
        {solutions.map((solution, index) => (
          <ProductCard
            key={index}
            name={solution.name}
            description={solution.description}
            image={solution.image}
            features={solution.features}
            applications={solution.applications}
          />
        ))}
      </div>
    </main>
  );
}
