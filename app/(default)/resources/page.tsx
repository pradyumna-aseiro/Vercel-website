"use client";

import { resources } from "@/data/resources";
import PageTransition from "@/components/page-transition";
import ResourceCard from "@/components/resource-card";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  return (
    <PageTransition>
      <main className="pt-32 pb-20 px-4 bg-slate-50 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Case Studies & Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our real-world projects and machine vision automation success stories.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ResourceCard
                slug={resource.slug}
                title={resource.title}
                shortDescription={resource.shortDescription}
                thumbnail={resource.thumbnail}
                tags={resource.tags}
              />
            </motion.div>
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
