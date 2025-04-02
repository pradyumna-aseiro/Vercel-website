import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero-home";
import IndustryPartners from "@/components/industry-partners";

// Product listing data
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
          Explore cutting-edge automation and vision systems built for your need
        </p>

        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
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

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-gray-600 mb-8">
          From food & beverage to pharma, Aseiro powers quality control across
          sectors.
        </p>
        {/* TODO: Add industries cards or icons here */}
      </section>

      {/* Consulting Services */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Consulting & Implementation</h2>
        <p className="text-gray-600 mb-8">
          We help factories identify bottlenecks and implement scalable
          automation solutions.
        </p>
        {/* TODO: Add CTA or consulting process here */}
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
        {/* TODO: Blog card components */}
      </section>
    </>
  );
}
