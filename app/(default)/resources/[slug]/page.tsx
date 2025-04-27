// app/resources/[slug]/page.tsx
"use client";

import { resources } from "@/data/resources";
import { notFound } from "next/navigation";
import Image from "next/image";
import PageTransition from "@/components/page-transition";
import FadeInOnScroll from "@/components/fade-in-on-scroll";

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
      <main className="pt-32 pb-20 px-4 bg-slate-50">
        {/* Banner */}
        {resource.banner && (
          <div className="w-full max-w-7xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={resource.banner}
              alt={resource.title}
              width={1600}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Title */}
        <FadeInOnScroll>
          <h1 className="text-4xl font-bold text-center mb-6">{resource.title}</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">{resource.shortDescription}</p>
        </FadeInOnScroll>

        {/* Description */}
        <FadeInOnScroll>
          <div className="max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6 mb-16">
            {resource.description.split("\n").map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>
        </FadeInOnScroll>

        {/* Flowchart */}
        {resource.flowchart && (
          <FadeInOnScroll>
            <div className="max-w-5xl mx-auto mb-16">
              <Image
                src={resource.flowchart}
                alt={`${resource.title} - Flowchart`}
                width={1200}
                height={800}
                className="rounded-xl shadow"
              />
            </div>
          </FadeInOnScroll>
        )}

        {/* Features */}
        <FadeInOnScroll>
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-base list-disc list-inside">
              {resource.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>

        {/* Results */}
        <FadeInOnScroll>
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Results Achieved</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-base list-disc list-inside">
              {resource.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </FadeInOnScroll>

        {/* Video */}
        {resource.video && (
          <FadeInOnScroll>
            <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <video
                src={resource.video}
                controls
                className="w-full h-auto"
              ></video>
            </div>
          </FadeInOnScroll>
        )}
      </main>
    </PageTransition>
  );
}
