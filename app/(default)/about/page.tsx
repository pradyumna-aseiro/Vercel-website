// app/about/page.tsx
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="py-20 px-4 bg-white text-left">
      <div className="max-w-6xl mx-auto space-y-20">

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

        {/* Why ASEIRO & Our Approach */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Why ASEIRO & Our Approach</h2>
          <p className="text-gray-700 text-lg mb-4">
            After 17 years in the market, we noticed that many solutions lacked customization, scalability, or affordability. 
            ASEIRO was created to fix these problems with modular, advanced systems that not only cut costs but also boost 
            productivity. For example, our solutions can reduce inspection time by 70% and cut labor costs by 40%. We serve 
            industries like pharma, FMCG, automotive, electronics, and more, building on VAP’s trusted reputation.
          </p>
        </div>

        {/* What Sets Us Apart */}
        <div>
          <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
          <ul className="text-gray-700 text-lg list-disc list-inside space-y-2">
            <li><strong>Custom-Tailored Systems:</strong> Our solutions fit perfectly into your factory, whether you need a full system or a small upgrade.</li>
            <li><strong>End-to-End Service:</strong> We support you from the very first plan through installation, training, and ongoing help.</li>
            <li><strong>Innovative Integration:</strong> We bring together smart machine vision, robotics, and real-time controls to get the best results.</li>
            <li><strong>Proven Track Record:</strong> Over 10,000 clients trust us to deliver reliable automation across many industries.</li>
          </ul>
        </div>

        {/* Industries We Serve */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <ul className="text-gray-700 text-lg list-disc list-inside grid md:grid-cols-2 gap-x-10 gap-y-2">
            <li>Automotive</li>
            <li>Healthcare and Pharmaceutical</li>
            <li>Electronics Manufacturing</li>
            <li>Packaging and Logistics</li>
            <li>FMCG</li>
            <li>Food & Beverage</li>
            <li>Textile</li>
            <li>Research and Development</li>
          </ul>
        </div>

      </div>
    </section>
  );
}