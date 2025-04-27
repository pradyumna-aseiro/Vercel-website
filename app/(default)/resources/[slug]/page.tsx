// app/(default)/resources/[slug]/page.tsx

"use client";

import { resources } from "@/data/resources";
import { notFound } from "next/navigation";
import PageTransition from "@/components/page-transition";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  params: {
    slug: string;
  };
}

export default function ResourceDetailPage({ params }: Props) {
  const resource = resources.find((r) => r.slug === params.slug);

  if (!resource) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="pt-32 pb-20 px-6 bg-white">
        <section className="max-w-7xl mx-auto text-left">

          {/* Banner Section */}
          <h1 className="text-4xl font-bold text-blue-800 mb-6">{resource.title}</h1>
          <p className="text-gray-700 text-lg mb-10">{resource.description}</p>

          <div className="relative w-full h-80 mb-12 rounded-xl overflow-hidden">
            <Image
              src={resource.banner}
              alt={resource.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          {/* Overview */}
          <section className="space-y-12">
            <div>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">Project Overview</h2>
              <p className="text-gray-700">{resource.overview}</p>
            </div>

            {/* Problem Statement */}
            <div>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">Problem Statement</h2>
              <p className="text-gray-700">{resource.problem}</p>
            </div>

            {/* Solution Architecture */}
            <div>
              <h2 className="text-3xl font-semibold text-blue-800 mb-4">Solution Architecture</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                {resource.solutionArchitecture.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Flowchart Visual */}
            {resource.flowchart && (
              <div>
                <h2 className="text-3xl font-semibold text-blue-800 mb-4">Flowchart</h2>
                <div className="relative w-full h-96 bg-gray-100 rounded-xl overflow-hidden">
                  <Image
                    src={resource.flowchart}
                    alt={`${resource.title} Flowchart`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            )}

            {/* Key Features */}
            <section className="py-16">
              <h2 className="text-3xl font-bold mb-10 text-center text-blue-800">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {resource.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex items-start gap-4"
                  >
                    <FaCheckCircle className="text-blue-600 text-2xl shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results Achieved */}
            <section className="py-16">
              <h2 className="text-3xl font-bold mb-10 text-center text-blue-800">Results Achieved</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {resource.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex items-start gap-4"
                  >
                    <FaCheckCircle className="text-blue-600 text-2xl shrink-0" />
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Demo Video */}
            {resource.video && (
              <div>
                <h2 className="text-3xl font-semibold text-blue-800 mb-4">Demo Video</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                  <video controls className="w-full h-full object-cover rounded-xl">
                    <source src={resource.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            )}

          </section>

        </section>
      </main>
    </PageTransition>
  );
}
