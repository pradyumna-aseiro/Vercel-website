// app/products/machine-vision/vision-box/page.tsx
"use client";

import { visionBoxVariants } from "@/data/vision-box";
import Image from "next/image";
import PageTransition from "@/components/page-transition";

export default function VisionBoxPage() {
  return (
    <PageTransition>
      <main className="pt-36 pb-20 px-4 bg-white text-left">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Vision Box Variants</h1>
          <p className="text-gray-700 text-lg mb-10 text-center max-w-3xl mx-auto">
            Our Vision Box series is a powerful set of industrial controllers tailored for machine vision. Each variant supports unique use-cases from basic inspection to AI-driven visual systems.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse bg-white shadow-md rounded-xl overflow-hidden">
              <thead className="bg-blue-600 text-white text-sm text-left">
                <tr>
                  <th className="py-3 px-4">Model</th>
                  <th className="py-3 px-4">Processor & Performance</th>
                  <th className="py-3 px-4">Interfaces & Connectivity</th>
                  <th className="py-3 px-4">Key Features</th>
                  <th className="py-3 px-4">Typical Applications</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {visionBoxVariants.map((variant, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-4 px-4">
                      <div className="flex flex-col items-center">
                        <div className="relative w-[100px] h-[85px] mb-2">
                          <Image
                            src={variant.image}
                            alt={variant.model}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                        <span className="font-semibold text-center">{variant.model}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">{variant.processor}</td>
                    <td className="py-4 px-4">{variant.interfaces}</td>
                    <td className="py-4 px-4">{variant.features}</td>
                    <td className="py-4 px-4">{variant.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
