"use client";

import { resources } from "@/data/resources";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import PageTransition from "@/components/page-transition";

export default function ResourceDetailPage() {
  const { slug } = useParams();
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="pt-32 pb-20 px-4 bg-slate-50">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto text-left"
        >
          {/* Title and Description */}
          <h1 className="text-4xl font-bold text-blue-600 mb-4">{resource.title}</h1>
          <p className="text-gray-700 text-lg mb-10">{resource.description}</p>

          {/* Banner */}
          <div className="relative w-full aspect-[3/1] mb-12 rounded-xl overflow-hidden shadow-md">
            <Image
              src={resource.banner}
              alt={resource.title}
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Sections */}
          <div className="space-y-16">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Project Overview</h2>
              <p className="text-gray-700">{resource.overview}</p>
            </motion.section>

            {/* Problem Statement */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Problem Statement</h2>
              <p className="text-gray-700">{resource.problem}</p>
            </motion.section>

            {/* Solution Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Solution Architecture</h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {resource.solutionArchitecture.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resource.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow hover:shadow-lg p-6 transition"
                  >
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Results Achieved */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-6">Results Achieved</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resource.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow hover:shadow-lg p-6 transition"
                  >
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Flowchart */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Solution Flowchart</h2>
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={resource.flowchart}
                  alt={`${resource.title} Flowchart`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </motion.section>

            {/* Demo Video */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Demo Video</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
                <video controls className="w-full h-full object-cover">
                  <source src={resource.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.section>
          </div>
        </motion.section>
      </main>
    </PageTransition>
  );
}
