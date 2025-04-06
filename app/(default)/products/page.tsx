// app/products.tsx or where you list main products
import Link from "next/link";

const products = [
  {
    name: "Machine Vision Products",
    description: "Explore advanced camera systems including area scan, line scan, and 3D cameras.",
    image: "/products/aseiro-camera-product.png",
    link: "/products/area-scan-cameras" // Link to Area Scan Cameras Page
  },
  {
    name: "Autonomous Mobile Robots (AMRs)",
    description: "Explore AMRs designed for intelligent logistics.",
    image: "/products/aseiro-amr-product.png",
    link: "/products/amrs" // Link to AMRs Page (if you have it)
  }
];

export default function ProductsPage() {
  return (
    <section className="py-20 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-12">Our Products</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 text-left">
        {products.map((product, index) => (
          <Link key={index} href={product.link}>
            <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{product.name}</h3>
                <p className="text-gray-700 text-sm mb-3">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
