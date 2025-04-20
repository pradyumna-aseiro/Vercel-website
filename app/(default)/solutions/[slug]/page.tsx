// app/solutions/[slug]/page.tsx

import { solutions } from "@/data/solutions";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function SolutionDetail({ params }: Props) {
  const solution = solutions.find((s) => s.slug === params.slug);

  if (!solution) return notFound();

  return (
    <section className="pt-32 pb-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{solution.name}</h1>
        <p className="text-gray-700 text-lg mb-10">{solution.description}</p>

        {/* Stylized Visual */}
        {solution.visual && (
          <div className="mb-12 w-full max-w-4xl mx-auto">
            <Image
              src={solution.visual}
              alt={`${solution.name} Flowchart`}
              width={1200}
              height={600}
              className="rounded-xl shadow-xl w-full object-contain"
            />
          </div>
        )}

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            {solution.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Applications</h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            {solution.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
