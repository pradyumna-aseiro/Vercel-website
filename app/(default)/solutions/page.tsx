// app/solutions/page.tsx

"use client";

import { solutions } from "@/data/solutions";
import PageTransition from "@/components/page-transition";
import SolutionCard from "@/components/solution-card";

export default function SolutionsPage() {
  return (
    <PageTransition>
      <main className="pt-36 pb-20 px-4 bg-slate-50 text-center">
        <h1 className="text-4xl font-bold mb-12">Our Solutions</h1>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 text-left">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              name={solution.name}
              slug={solution.slug}
              shortDescription={solution.shortDescription}
              image={solution.image}
            />
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
