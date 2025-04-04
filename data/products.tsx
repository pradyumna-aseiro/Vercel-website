import { Disclosure } from "@headlessui/react";
import Image from "next/image";

const products = [
  {
    name: "Area Scan Camera",
    description:
      "An area scan camera captures a full 2D image in a single exposure using a grid of pixel sensors. It is ideal for general machine vision, measurement, or inspection tasks.",
    image: "/products/ca-area-scan.png",
    details: (
      <>
        <h3 className="text-xl font-semibold">Key Features:</h3>
        <ul className="list-disc pl-6">
          <li>Captures full 2D images in a single exposure</li>
          <li>Ideal for general machine vision and inspection tasks</li>
          <li>Easy integration with vision systems</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Applications:</h3>
        <ul className="list-disc pl-6">
          <li>General industrial vision applications</li>
          <li>Measurement systems and inspection lines</li>
        </ul>
      </>
    ),
  },
  {
    name: "CS Area Scan Camera",
    description:
      "The CS Series offers major improvements in design, R&D, and production processes for better user experience in vision applications.",
    image: "/products/cs-area-scan.png",
    details: (
      <>
        <h3 className="text-xl font-semibold">Key Features:</h3>
        <ul className="list-disc pl-6">
          <li>Improved design, research, and production processes</li>
          <li>Enhanced user experience and reliability</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Applications:</h3>
        <ul className="list-disc pl-6">
          <li>General vision applications with improved performance</li>
        </ul>
      </>
    ),
  },
  {
    name: "CU Area Scan Camera",
    description:
      "The CU Series is built on a low power consumption platform, offering stable performance and versatility for industrial environments.",
    image: "/products/cu-area-scan.png",
    details: (
      <>
        <h3 className="text-xl font-semibold">Key Features:</h3>
        <ul className="list-disc pl-6">
          <li>Low power consumption</li>
          <li>Versatile for industrial environments</li>
          <li>Stable performance under various conditions</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Applications:</h3>
        <ul className="list-disc pl-6">
          <li>Basic and versatile vision applications in industrial settings</li>
        </ul>
      </>
    ),
  },
  // Add more cameras here...
];

export default function Products() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore our range of high-performance industrial cameras and machine vision solutions.
      </p>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 text-left">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{product.name}</h3>
              <p className="text-gray-700 text-sm mb-3">{product.description}</p>
            </div>

            {/* Collapsible section */}
            <div className="p-6">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full text-left text-blue-600 font-medium">
                      {open ? "Show Less" : "Show More"}
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-600 mt-4">
                      {product.details}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
