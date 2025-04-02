import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero-home";
import IndustryPartners from "@/components/industry-partners";

const products = [
  {
    name: "Machine Vision Products",
    description:
      "High-performance cameras, lenses, and vision systems for precise industrial inspection and automation.",
    image: "/images/aseiro-camera-product.png",
  },
  {
    name: "Autonomous Mobile Robots (AMRs)",
    description:
      "Intelligent robots for seamless material movement in warehouses and smart factories.",
    image: "/images/aseiro-amr-product.png",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Products Overview */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <p className="text-gray-600 mb-12">
          Automation and vision systems built for your need
        </p>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-[300px] bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/products">
            <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
              View All Products
            </a>
          </Link>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Solutions</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          We provide tailored industrial automation and machine vision solutions to solve real factory challenges across diverse industries.
        </p>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-left text-gray-700">
          
          {/* Solution 1: Printing Inspection */}
          <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/images/printing-inspection-rejection.png"
              alt="Printing Inspection System"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Custom Machine Vision Solutions
              </h3>
              <p>
                High-speed inspection systems tailored to each production line.
                We develop solutions to automate printing inspection, product sorting, and rejection
                mechanisms using cameras, sensors, and actuators—ensuring accuracy and repeatability.
              </p>
            </div>
          </div>

          {/* Solution 2: Dimensional Measurement */}
          <div className="bg-white rounded-xl shadow hover:shadow-md transition p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Dimensional Measurement Systems
            </h3>
            <p>
              Using cameras and laser-based systems, we help manufacturers
              verify dimensional tolerances of products on production lines in real time.
              Ideal for QA/QC workflows, reducing rejects and maintaining consistency.
            </p>
          </div>

          {/* Solution 3: Industrial Automation */}
          <div className="bg-white rounded-xl shadow hover:shadow-md transition p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Industrial Automation & Instrumentation
            </h3>
            <p>
              We build custom industrial automation solutions using PLCs, HMIs, and sensor networks.
              Solutions include process automation, control system design, SCADA integration,
              real-time monitoring, and data-driven decision making to boost operational efficiency.
            </p>
          </div>
        </div>
      </section>


      {/* Consulting Services */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Consulting & Implementation</h2>
        <p className="text-gray-600 mb-8">
          We help factories identify bottlenecks and implement scalable
          automation solutions.
        </p>
        {/* Optional: CTA or step-wise consulting flow */}
      </section>

      {/* Industry Partners Slider */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
        <IndustryPartners />
      </section>

      {/* Blog / News */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
        <p className="text-gray-600 mb-8">
          News, tutorials, and thought leadership from the world of automation
          and vision.
        </p>
        {/* TODO: Blog cards */}
      </section>
    </>
  );
}
