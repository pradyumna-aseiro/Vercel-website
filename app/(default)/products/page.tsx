// app/products/page.tsx
import Link from "next/link";
import { productCategories } from "@/data/products";

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
                  <div className="text-sm font-semibold">{sub.name}</div>
                  <div className="text-xs text-gray-500">{sub.description}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
