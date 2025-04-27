// app/resources/page.tsx
"use client";

import { resources } from "@/data/resources";
import PageTransition from "@/components/page-transition";
import ResourceCard from "@/components/resource-card";

export default function ResourcesPage() {
  return (
    <PageTransition>
      <main className="pt-32 pb-20 px-4 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Case Studies & Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our real-world projects and machine vision automation success stories.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.slug}
              slug={resource.slug}
              title={resource.title}
              shortDescription={resource.shortDescription}
              thumbnail={resource.thumbnail}
            />
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
