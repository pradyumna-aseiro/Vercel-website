"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { resources } from "@/data/resources";
import PageTransition from "@/components/page-transition";
import { motion } from "framer-motion";

export default function ResourceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    return (
      <PageTransition>
        <main className="pt-36 pb-20 px-4 text-center">
          <h1 className="text-2xl font-bold text-red-600">Resource Not Found</h1>
          <p className="text-gray-600 mt-4">Sorry, the resource you're looking for does not exist.</p>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="pt-36 pb-20 px-4 bg-white text-left">
        <motion.div
          className="max-w-6xl mx-auto space-y-16"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >

          {/* Title and Description */}
          <motion.section
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h1 className="text-4xl font-bold text-blue-700 mb-4">{resource.title}</h1>
            <p className="text-gray-600 text-lg">{resource.description}</p>
          </motion.section>

          {/* Banner */}
          <motion.section
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={resource.banner}
                alt={resource.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.section>

          {/* Problem Statement */}
          <motion.section
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Problem Statement</h2>
            <p className="text-gray-700">{resource.problem}</p>
          </motion.section>

          {/* Solution Overview */}
          <motion.section
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Solution Overview</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              {resource.solutionArchitecture.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.section>

          {/* Flowchart */}
          <motion.section
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Flowchart</h2>
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
              <Image
                src={resource.flowchart}
                alt={`${resource.title} Flowchart`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </motion.section>

          {/* Demo Video */}
          {resource.video && (
            <motion.section
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">Demo Video</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <video controls className="w-full h-full object-cover">
                  <source src={resource.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.section>
          )}

        </motion.div>
      </main>
    </PageTransition>
  );
}
