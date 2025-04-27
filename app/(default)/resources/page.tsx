// app/resources/page.tsx

"use client";

import { resources } from "@/data/resources";
import ResourceCard from "@/components/resource-card";
import PageTransition from "@/components/page-transition";

export default function ResourcesPage() {
  return (
    <PageTransition>
      <section className="pt-36 pb-20 px-4 bg-slate-50 text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Our Case Studies & Projects</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore real-world implementations of our automation and machine vision solutions.
        </p>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              slug={resource.slug}
              title={resource.title}
              shortDescription={resource.shortDescription}
              thumbnail={resource.thumbnail}
            />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
