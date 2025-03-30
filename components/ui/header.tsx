"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      {/* Top Bar with Socials, Slogan, Contact */}
      <div className="bg-slate-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-xs text-blue-300 font-medium tracking-wide">#SeeMoreDoMore</span>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/company/aseiro-industries/" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-current hover:text-blue-500" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.05 8.99h4.87V24H.05zM7.59 8.99H12v2.12h.07c.62-1.17 2.14-2.4 4.41-2.4 4.72 0 5.59 3.1 5.59 7.12V24h-4.88v-7.63c0-1.82-.03-4.15-2.52-4.15-2.52 0-2.91 1.97-2.91 4.01V24H7.59z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="https://www.youtube.com/channel/UCTxt1TjsvgBPJuySTuLM5ng" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 fill-current hover:text-red-500" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M549.7 124.1c-6.3-23.8-24.9-42.5-48.6-48.8C456.5 64 288 64 288 64s-168.5 0-213.1 11.3c-23.7 6.3-42.3 25-48.6 48.8C16 168.7 16 256 16 256s0 87.3 10.3 131.9c6.3 23.8 24.9 42.5 48.6 48.8C119.5 448 288 448 288 448s168.5 0 213.1-11.3c23.7-6.3 42.3-25 48.6-48.8C560 343.3 560 256 560 256s0-87.3-10.3-131.9zM232 334V178l142 78-142 78z"/>
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Contact Email */}
          <a href="mailto:subbarao@aseiro.in" className="hover:underline text-gray-300">
            subbarao@aseiro.in
          </a>

          {/* Product Catalogue Button */}
          <a
            href="/files/Aseiro_Product_Catalogue.pdf"
            className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-50"
          >
            Product Catalogue
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition duration-300 ease-in-out ${!top ? "bg-white shadow-lg backdrop-blur-sm" : ""}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0 mr-4">
              <Logo />
            </div>

            <nav className="hidden md:flex md:grow">
              <ul className="flex grow flex-wrap items-center justify-end gap-4">
                <li>
                  <Link className="font-medium text-gray-600 hover:text-gray-900" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-600 hover:text-gray-900" href="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-600 hover:text-gray-900" href="/industries">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-600 hover:text-gray-900" href="/solutions">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-600 hover:text-gray-900" href="/resources">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-600 hover:text-gray-900" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-600 hover:text-gray-900" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
