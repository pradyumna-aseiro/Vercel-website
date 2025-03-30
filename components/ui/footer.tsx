import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="py-8 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-600">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aseiro Industries Pvt Ltd. All rights reserved.
            <div className="mt-2 text-gray-500">
              Email: <a href="mailto:contact@aseiro.in" className="underline">contact@aseiro.in</a><br />
              Phone: <a href="tel:+919000000000" className="underline">+91 90000 00000</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="hover:underline">Products</Link>
            <Link href="/industries" className="hover:underline">Industries</Link>
            <Link href="/solutions" className="hover:underline">Solutions</Link>
            <Link href="/resources" className="hover:underline">Resources</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
