import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero-home";
import IndustryPartners from "@/components/industry-partners";
import ContactForm from "@/components/contact-form";

const products = [
  {
    name: "Machine Vision Products",
    description: `High-performance area scan, line scan, and infrared cameras, smart code readers, 3D vision systems, FA lenses, and lighting — designed for accurate industrial inspection and automation.`,
    image: "/images/aseiro-camera-product.png",
  },
  {
    name: "Autonomous Mobile Robots (AMRs)",
    description: `Flexible robots for intelligent intralogistics. Options include Latent Mobile Robots (LMRs), Forklift-style (FMRs), and Collaborative (CMRs), with navigation, docking, and fleet scheduling.`,
    image: "/images/aseiro-amr-product.png",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore advanced automation and vision systems built for your industrial needs.
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

      {/* Solutions Section */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Solutions</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          We provide tailored industrial automation and machine vision solutions to solve real factory challenges across diverse industries.
        </p>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-left text-gray-700">
          {/* 1. Printing Inspection */}
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
                Tailored solutions for printing inspection, sorting, and rejection using high-speed cameras, sensors, and pneumatics.
              </p>
            </div>
          </div>

          {/* 2. Dimensional Measurement */}
          <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/images/dimensional-measurement.png"
              alt="Dimensional Measurement Systems"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Dimensional Measurement Systems
              </h3>
              <p>
                Real-time measurement of product tolerances on manufacturing lines using cameras and laser technology.
              </p>
            </div>
          </div>

          {/* 3. Industrial Automation */}
          <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/images/plc-hmi-automation.png"
              alt="Industrial Automation & Instrumentation"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Industrial Automation & Instrumentation
              </h3>
              <p>
                Complete automation solutions using PLCs, HMIs, SCADA, and sensors for process control, monitoring, and data-driven decisions.
              </p>
            </div>
          </div>
        
          {/* 4. Industrial Robots for Shopfloor */}
          <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/images/industrial-robots.png"
              alt="Industrial Robots for Shopfloor"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Industrial Robots for Shopfloor
              </h3>
              <p>
                Custom robotic systems that streamline repetitive tasks such as pick & place, assembly, and material handling—enhancing accuracy and safety.
              </p>
            </div>
          </div>

          {/* 5. Warehouse Automation */}
          <div className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <Image
              src="/images/warehouse-automation.png"
              alt="Warehouse Automation"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Warehouse Automation
              </h3>
              <p>
                Mobile robots and smart inventory systems for faster order fulfillment, logistics automation, and reduced manual effort.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/solutions">
            <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
              Read more
            </a>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We help factories identify bottlenecks and implement scalable automation and vision solutions tailored to production goals. Describe your requirement and schedule a call with our expert.
        </p>
        <ContactForm />
      </section>

      {/* Consulting Section */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Consulting & Implementation</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          We help factories identify bottlenecks and implement scalable automation and vision solutions tailored to production goals.
        </p>
      </section>

      {/* Industry Partners */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
        <IndustryPartners />
      </section>

      {/* Blog */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          News, tutorials, and thought leadership from the world of automation and vision.
        </p>
      </section>
    </>
  );
}