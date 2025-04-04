import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaPuzzlePiece, FaRobot, FaTools, FaCheckCircle } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { GiAutoRepair, GiChemicalDrop } from "react-icons/gi";
import { PiWarehouseLight } from "react-icons/pi";
import { BiChip, BiSolidFoodMenu } from "react-icons/bi";

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

        {/* What Sets Us Apart */}
        <div>
          <h2 className="text-3xl font-bold mb-10">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <FaPuzzlePiece className="text-blue-600 text-3xl mb-3" />
              <h3 className="text-xl font-semibold mb-2">Custom-Tailored Systems</h3>
              <p className="text-gray-600">We create modular solutions that fit perfectly into your factory setup—whether it's a small upgrade or a full transformation.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <FaTools className="text-blue-600 text-3xl mb-3" />
              <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
              <p className="text-gray-600">From planning and integration to training and maintenance—we stay with you every step of the way.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <FaRobot className="text-blue-600 text-3xl mb-3" />
              <h3 className="text-xl font-semibold mb-2">Innovative Integration</h3>
              <p className="text-gray-600">We blend machine vision, robotics, and real-time controls for faster inspection and lower costs—up to 70% inspection time reduction.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-md transition">
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
            <div className="bg-white shadow rounded-lg p-4">
              <MdFactory className="text-blue-600 text-4xl mb-2 mx-auto" />
              <p>Automotive</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <GiChemicalDrop className="text-blue-600 text-4xl mb-2 mx-auto" />
              <p>Pharma & Healthcare</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <BiChip className="text-blue-600 text-4xl mb-2 mx-auto" />
              <p>Electronics</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <PiWarehouseLight className="text-blue-600 text-4xl mb-2 mx-auto" />
              <p>Packaging & Logistics</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <BiSolidFoodMenu className="text-blue-600 text-4xl mb-2 mx-auto" />
              <p>FMCG</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <GiAutoRepair className="text-blue-600 text-4xl mb-2 mx-auto" />
              <p>Food & Beverage</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <MdFactory className="text-blue-600 text-4xl mb-2 mx-auto" />
              <p>Textiles</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <FaTools className="text-blue-600 text-4xl mb-2 mx-auto" />
              <p>R&D Labs</p>
            </div>
          </div>
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
                made him a trusted name in the industry. He has helped hundreds of clients adopt reliable automation solutions, 
                from PLCs and HMIs to sensors and motion control. At Aseiro, he brings this powerful network and on-ground 
                experience to deliver practical, modern automation and machine vision systems.
              </p>
              <div className="flex gap-4 text-blue-600 text-xl">
                <a href="mailto:info@aseiro.in" aria-label="Email">
                  <FaEnvelope className="hover:text-blue-800 transition" />
                </a>
                <a href="https://www.linkedin.com/in/abhijeet-madnurkar-27a15142/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
                With a Master’s in Robotics from the University of Sheffield and hands-on experience 
                at Rivelin Robotics, Pradyumna has contributed to building microfactories, custom 
                end-of-arm tooling, and PLC-integrated robotic systems. His work spans global 
                automation deployments in aerospace and defense sectors. Backed by a UK Global Talent 
                Visa, his vision is to scale Aseiro into a global provider of machine vision and 
                automation solutions. At Aseiro, he leads the development of intelligent robotic and 
                vision systems tailored to the evolving needs of modern manufacturing.
              </p>
              <div className="flex gap-4 text-blue-600 text-xl">
                <a href="mailto:pradyumna@aseiro.in" aria-label="Email">
                  <FaEnvelope className="hover:text-blue-800 transition" />
                </a>
                <a href="https://www.linkedin.com/in/pradyumnam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
                With 16+ years of leadership roles at Piramal, TATA, and Mojay Group Companies, Subbarao 
                brings deep experience in product and systems design, embedded systems, SPM, plant automation, 
                machine vision, and robotics. He has led multi-disciplinary teams across global offshore 
                development centres in both IT and manufacturing industries. At Aseiro, he leads the Business 
                Development function, actively driving new enquiries and orders. He holds a degree in Mechanical 
                Engineering from Pune University and a Master’s in Operations Management from BITS Pilani.
              </p>
              <div className="flex gap-4 text-blue-600 text-xl">
                <a href="mailto:subbarao@aseiro.in" aria-label="Email">
                  <FaEnvelope className="hover:text-blue-800 transition" />
                </a>
                <a href="https://www.linkedin.com/in/subbarao-business-development-171119301/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
