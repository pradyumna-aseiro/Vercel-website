import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero-home";
import IndustryPartners from "@/components/industry-partners";

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
                Tailored solutions for printing inspection, sorting, and rejection using
                high-speed cameras, sensors, and pneumatics.
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
                Real-time measurement of product tolerances on manufacturing lines using
                cameras and laser technology.
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
                Complete automation solutions using PLCs, HMIs, SCADA, and sensors for process
                control, monitoring, and data-driven decisions.
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

        <form
          className="max-w-2xl mx-auto text-left space-y-6 bg-white p-8 rounded-xl shadow"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;

            const data = {
              name: (form.elements.namedItem("name") as HTMLInputElement).value,
              email: (form.elements.namedItem("email") as HTMLInputElement).value,
              phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
              company: (form.elements.namedItem("company") as HTMLInputElement).value,
              requirement: (form.elements.namedItem("requirement") as HTMLTextAreaElement).value,
              call_time: (form.elements.namedItem("call_time") as HTMLInputElement).value,
            };

            try {
              const response = await fetch("https://script.google.com/macros/s/AKfycbz8-S3po1m2kWM1pQn6ZI6XmewyQVRCy-TFlYFmPgkhb_ZdPyS19EwoehEO5t-wxg3_/exec", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              const result = await response.json();
              if (result.result === "success") {
                alert("Thank you! Your message has been submitted.");
                form.reset();
              } else {
                alert("Something went wrong. Please try again.");
              }
            } catch (error) {
              alert("Error submitting form. Please try again.");
              console.error("Form submission error:", error);
            }
          }}
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input type="text" name="name" required className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" name="email" required className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone</label>
            <input type="tel" name="phone" required className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Company Name</label>
            <input type="text" name="company" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Your Requirement</label>
            <textarea name="requirement" rows={4} required className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
          </div>
          <div>
            <label className="block font-medium mb-1">Preferred Call Time</label>
            <input type="text" name="call_time" className="w-full border border-gray-300 rounded px-4 py-2" />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Consulting Section */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Consulting & Implementation</h2>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
          We help factories identify bottlenecks and implement scalable
          automation and vision solutions tailored to production goals.
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
          News, tutorials, and thought leadership from the world of automation
          and vision.
        </p>
      </section>
    </>
  );
}