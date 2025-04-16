// app/about/page.tsx
"use client";

import Image from "next/image";
import PageTransition from "@/components/page-transition";
import { FaLinkedin, FaEnvelope, FaPuzzlePiece, FaRobot, FaTools, FaCheckCircle } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { GiAutoRepair, GiChemicalDrop } from "react-icons/gi";
import { PiWarehouseLight } from "react-icons/pi";
import { BiChip, BiSolidFoodMenu } from "react-icons/bi";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="py-20 px-4 bg-white text-left">
        <div className="max-w-6xl mx-auto space-y-25">

          {/* About Aseiro */}
          <div className="pt-16">
            <h1 className="text-4xl font-bold mb-6">About Aseiro Industries</h1>
            <p className="text-gray-700 text-lg mb-4">
              <strong>Aseiro Industries Pvt Ltd</strong> was founded to help 
              manufacturers adopt Industry 4.0 standards by integrating robotics, 
              machine vision, and advanced automation into production lines. Our 
              mission is to eliminate human error, boost productivity, and deliver 
              consistent quality across industrial processes.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              We bring together the technical innovation of a modern startup and 
              the trusted legacy of <strong>Vinayak Automation Products</strong> — 
              a respected name in industrial automation and instrumentation since 
              2007. With over 17 years of experience and 10,000 clients, Vinayak 
              Automation has sold various products including sensors, drives, encoders, 
              PLCs, HMIs, and VFDs to clients across sectors.
            </p>
            <p className="text-gray-700 text-lg">
              Aseiro was launched to cater to custom requirements in quality 
              inspection, industrial robotics, and smart automation, blending 
              new-generation vision systems with time-tested control architectures. 
              We believe in transforming conventional manufacturing into intelligent, 
              self-optimizing factories.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div>
            <h2 className="text-3xl font-bold mb-10">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <FaPuzzlePiece className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-xl font-semibold mb-2">Custom-Tailored Systems</h3>
                <p className="text-gray-600">We create modular solutions that fit perfectly into your factory setup—whether it's a small upgrade or a full transformation.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <FaTools className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                <p className="text-gray-600">From planning and integration to training and maintenance—we stay with you every step of the way.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <FaRobot className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-xl font-semibold mb-2">Innovative Integration</h3>
                <p className="text-gray-600">We blend machine vision, robotics, and real-time controls for faster inspection and lower costs—up to 70% inspection time reduction.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <FaCheckCircle className="text-blue-600 text-3xl mb-3" />
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">Over 10,000 clients trust our systems to deliver reliable performance across industries.</p>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div>
            <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: MdFactory, label: "Automotive" },
                { icon: GiChemicalDrop, label: "Pharma & Healthcare" },
                { icon: BiChip, label: "Electronics" },
                { icon: PiWarehouseLight, label: "Packaging & Logistics" },
                { icon: BiSolidFoodMenu, label: "FMCG" },
                { icon: GiAutoRepair, label: "Food & Beverage" },
                { icon: MdFactory, label: "Textiles" },
                { icon: FaTools, label: "R&D Labs" },
              ].map((item, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4 shadow-md hover:shadow-lg transition">
                  <item.icon className="text-blue-600 text-4xl mb-2 mx-auto" />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Meet the Team */}
          {/* (Leave this section as-is, you've already formatted it very well) */}

          {/* Mission & Vision */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-700 text-lg mb-4">
              Our mission is to empower Indian manufacturing with advanced automation technologies 
              that meet global standards.
            </p>
            <p className="text-gray-700 text-lg">
              We envision a future where every production line is intelligent, efficient, and free 
              from manual errors.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
