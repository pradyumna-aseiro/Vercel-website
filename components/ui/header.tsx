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

          {/* WhatsApp */}
          <a
            href="https://wa.me/917013538726"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
            aria-label="WhatsApp"
          >
            <svg
              className="w-5 h-5 fill-current text-white hover:text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339-10.7 211.7-35.6 123.8 41.1 68.5 86.2 42.1 150.6 54.4 212.7c-6.5 31.8-19.6 61.7-38.6 87.3-3.3 4.4-2.4 10.7 1.9 14.1L75.7 351c4.5 3.3 10.9 2.5 14.4-1.7 21.7-26.8 48.9-48.1 79.2-62.6 32.2-15.2 66.9-22.1 101.2-20.2 60.7 3.3 119.1-19.5 155.3-61.9 35.7-41.8 39.6-103.3 8.1-149.6zM222.2 348.8c-18.1 0-35.6-2.7-52.3-8.2-2.8-.9-6-.1-7.7 2.1l-18.4 23.1c-41.2-27.7-74.3-69.6-93-117.2-18.2-46.3-22.5-95.7-12.1-142.8C60.9 74.3 90.2 46.5 125.3 30.5c32.4-14.4 67.7-20 101.6-16.6 32.9 3.2 63.8 14.9 89.9 33.3 30.3 21.3 51.5 52.5 60.6 87.4 9.2 35.5 5.6 73.3-10.1 106.1-24.4 52.1-77.4 87.5-138.7 91.1z" />
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
