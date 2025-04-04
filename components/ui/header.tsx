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
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
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
