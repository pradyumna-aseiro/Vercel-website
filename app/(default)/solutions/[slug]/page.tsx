import { solutions } from "@/data/solutions";
import Image from "next/image";
import PageTransition from "@/components/page-transition";
import FadeInOnScroll from "@/components/fade-in-on-scroll";
import CTAButton from "@/components/CTA-button";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function SolutionPage({ params }: Props) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) return notFound();

  return (
    <PageTransition>
      <main className="pt-36 pb-20 px-4 bg-white text-left">
        <div className="max-w-6xl mx-auto">
          <FadeInOnScroll>
            <h1 className="text-4xl font-bold mb-6">{solution.name}</h1>
            <p className="text-gray-600 text-lg mb-8">{solution.description}</p>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="mb-12">
              <Image
                src={solution.visual}
                alt={`${solution.name} Visual Flow`}
                width={1200}
                height={500}
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Key Features</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {solution.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Applications</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {solution.applications.map((app, index) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div className="text-center">
              <CTAButton href="/contact" text="Schedule a Demo" />
            </div>
          </FadeInOnScroll>
        </div>
      </main>
    </PageTransition>
  );
}
