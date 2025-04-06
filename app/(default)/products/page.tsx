// app/products/page.tsx
import Link from "next/link";

const productCategories = [
  {
    title: "Machine Vision Products",
    description: "High-performance cameras, code readers, 3D systems, and optics for industrial inspection and automation.",
    linkPrefix: "/products/machine-vision",
    subcategories: [
      { name: "Area Scan Cameras", slug: "area-scan-cameras" },
      { name: "Line Scan Cameras", slug: "line-scan-cameras" },
      { name: "Smart Cameras", slug: "smart-cameras" },
      { name: "3D Cameras", slug: "three-d-cameras" },
      { name: "Smart Code Readers", slug: "smart-code-readers" },
      { name: "Lenses", slug: "lens" },
      { name: "Light Sources", slug: "lights" },
      { name: "Vision Box", slug: "vision-box" },
    ],
  },
  {
    title: "Autonomous Mobile Robots (AMRs)",
    description: "Flexible robots for intelligent intralogistics with navigation, docking, and fleet management.",
    linkPrefix: "/products/amrs",
    subcategories: [
      { name: "Latent Mobile Robots", slug: "latent-mobile-robots" },
      { name: "Forklift Mobile Robots", slug: "forklift-mobile-robots" },
      { name: "Collaborative Mobile Robots", slug: "collaborative-mobile-robots" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-20 px-4 bg-slate-50 text-center">
      <h1 className="text-4xl font-bold mb-12">Explore Our Products</h1>
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 text-left">
        {productCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="grid gap-2">
              {category.subcategories.map((sub, i) => (
                <Link
                  key={i}
                  href={`${category.linkPrefix}/${sub.slug}`}
                  className="block px-4 py-2 rounded bg-slate-100 hover:bg-blue-50 text-blue-700 font-medium transition"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
