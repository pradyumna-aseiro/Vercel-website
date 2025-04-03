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

        {/* Meet the Team */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>

          {/* Abhijeet */}
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6 mb-12 flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/team/team-abhijeet.png"
              alt="Abhijeet Madnurkar"
              width={120}
              height={120}
              className="rounded-full object-cover w-[120px] h-[120px] shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold">Abhijeet Madnurkar</h3>
              <p className="text-gray-600 text-sm mb-2">Co-Founder & Managing Director</p>
              <p className="text-gray-500 text-sm mb-3">
                With 17+ years in industrial automation, Abhijeet built Vinayak Automation Products (VAP) into a well-known 
                brand across Hyderabad and South India. His strong relationships with OEMs, integrators, and factories have 
                made him a trusted name in the industry...
              </p>
              <div className="flex gap-4 text-blue-600 text-xl">
                <a href="mailto:abhijeet@aseiro.in" aria-label="Email">
                  <FaEnvelope className="hover:text-blue-800 transition" />
                </a>
                <a href="https://linkedin.com/in/abhijeet-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="hover:text-blue-800 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Pradyumna */}
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6 mb-12 flex flex-col md:flex-row-reverse items-center gap-6">
            <Image
              src="/team/team-pradyumna.png"
              alt="Pradyumna Madnurkar"
              width={120}
              height={120}
              className="rounded-full object-cover w-[120px] h-[120px] shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold">Pradyumna Madnurkar</h3>
              <p className="text-gray-600 text-sm mb-2">Co-Founder & Robotics Engineer</p>
              <p className="text-gray-500 text-sm mb-3">
                With a Master’s in Robotics from the University of Sheffield and hands-on experience at Rivelin Robotics...
              </p>
              <div className="flex gap-4 text-blue-600 text-xl">
                <a href="mailto:pradyumna@aseiro.in" aria-label="Email">
                  <FaEnvelope className="hover:text-blue-800 transition" />
                </a>
                <a href="https://linkedin.com/in/pradyumna-madnurkar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="hover:text-blue-800 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Subbarao */}
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6 mb-12 flex flex-col md:flex-row items-center gap-6">
            <Image
              src="/team/team-subbarao.png"
              alt="Subbarao"
              width={120}
              height={120}
              className="rounded-full object-cover w-[120px] h-[120px] shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold">Subbarao Thallikonda</h3>
              <p className="text-gray-600 text-sm mb-2">Business Development</p>
              <p className="text-gray-500 text-sm mb-3">
                With 16+ years of leadership roles at Piramal, TATA, and Mojay Group Companies, Subbarao brings deep experience...
              </p>
              <div className="flex gap-4 text-blue-600 text-xl">
                <a href="mailto:subbarao@aseiro.in" aria-label="Email">
                  <FaEnvelope className="hover:text-blue-800 transition" />
                </a>
                <a href="https://linkedin.com/in/subbarao-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="hover:text-blue-800 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

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
  );
}
