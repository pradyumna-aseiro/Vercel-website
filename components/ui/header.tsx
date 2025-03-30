import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex grow flex-wrap items-center justify-end gap-4">
            <li><Link className="font-medium text-gray-600 hover:text-gray-900" href="/">Home</Link></li>
            <li><Link className="font-medium text-gray-600 hover:text-gray-900" href="/products">Products</Link></li>
            <li><Link className="font-medium text-gray-600 hover:text-gray-900" href="/industries">Industries</Link></li>
            <li><Link className="font-medium text-gray-600 hover:text-gray-900" href="/solutions">Solutions</Link></li>
            <li><Link className="font-medium text-gray-600 hover:text-gray-900" href="/resources">Resources</Link></li>
            <li><Link className="font-medium text-gray-600 hover:text-gray-900" href="/about">About</Link></li>
            <li><Link className="font-medium text-gray-600 hover:text-gray-900" href="/contact">Contact</Link></li>
          </ul>

        </div>
      </div>
    </header>
  );
}
