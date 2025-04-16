"use client";

import Image from "next/image";
import PageTransition from "@/components/page-transition";
import FadeInOnScroll from "@/components/fade-in-on-scroll";
import { FaLinkedin, FaEnvelope, FaPuzzlePiece, FaRobot, FaTools, FaCheckCircle } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { GiAutoRepair, GiChemicalDrop } from "react-icons/gi";
import { PiWarehouseLight } from "react-icons/pi";
import { BiChip, BiSolidFoodMenu } from "react-icons/bi";

export default function AboutPage() {
  const team = [
    {
      name: "Abhijeet Madnurkar",
      title: "Co-Founder & Managing Director",
      image: "/team/team-abhijeet.png",
      email: "info@aseiro.in",
      linkedin: "https://www.linkedin.com/in/abhijeet-madnurkar-27a15142/",
      desc: `With 17+ years in industrial automation, Abhijeet built Vinayak Automation Products (VAP) into a well-known brand across Hyderabad and South India...`,
      reverse: false,
    },
    {
      name: "Pradyumna Madnurkar",
      title: "Co-Founder & Robotics Engineer",
      image: "/team/team-pradyumna.png",
      email: "pradyumna@aseiro.in",
      linkedin: "https://www.linkedin.com/in/pradyumnam/",
      desc: `With a Master’s in Robotics from the University of Sheffield and hands-on experience at Rivelin Robotics...`,
      reverse: true,
    },
    {
      name: "Subbarao Tadikonda",
      title: "Business Development",
      image: "/team/team-subbarao.png",
      email: "subbarao@aseiro.in",
      linkedin: "https://www.linkedin.com/in/subbarao-business-development-171119301/",
      desc: `With 16+ years of leadership roles at Piramal, TATA, and Mojay Group Companies...`,
      reverse: false,
    },
    {
      name: "Sriranga Puppala",
      title: "Automation Engineer",
      image: "/team/team-sriranga.png",
      email: "design.sriranga@aseiro.in",
      linkedin: "https://www.linkedin.com/in/sriranga-puppala-656428200",
      desc: `Sriranga is an Automation Engineer with a Bachelor's in Electrical and Electronics Engineering and experience in the Semiconductor Industry...`,
      reverse: true,
    },
    {
      name: "Parth Madnurkar",
      title: "Automation Engineer",
      image: "/team/team-parth.png",
      email: "design.parth@aseiro.in",
      linkedin: "https://www.linkedin.com/in/parth-madnurkar-3b1123279/",
      desc: `With a strong foundation in Instrumentation and Control Engineering and experience at Vinayak Automation Products...`,
      reverse: false,
    },
  ];

  return (
    <PageTransition>
      <section className="py-20 px-4 bg-white text-left">
        <div className="max-w-6xl mx-auto space-y-25">

          <FadeInOnScroll>
            <div className="pt-16">
              <h1 className="text-4xl font-bold mb-6">About Aseiro Industries</h1>
              <p className="text-gray-700 text-lg mb-4">
                <strong>Aseiro Industries Pvt Ltd</strong> was founded to help manufacturers adopt Industry 4.0 standards by integrating robotics, machine vision, and advanced automation into production lines...
              </p>
              <p className="text-gray-700 text-lg mb-4">
                We bring together the technical innovation of a modern startup and the trusted legacy of <strong>Vinayak Automation Products</strong>...
              </p>
              <p className="text-gray-700 text-lg">
                Aseiro was launched to cater to custom requirements in quality inspection, industrial robotics, and smart automation...
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div>
              <h2 className="text-3xl font-bold mb-10">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: FaPuzzlePiece, title: "Custom-Tailored Systems", desc: "We create modular solutions that fit perfectly into your factory setup..." },
                  { icon: FaTools, title: "End-to-End Support", desc: "From planning and integration to training and maintenance..." },
                  { icon: FaRobot, title: "Innovative Integration", desc: "We blend machine vision, robotics, and real-time controls..." },
                  { icon: FaCheckCircle, title: "Proven Track Record", desc: "Over 10,000 clients trust our systems..." },
                ].map((item, i) => (
                  <FadeInOnScroll key={i} delay={i * 0.1}>
                    <div className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                      <item.icon className="text-blue-600 text-3xl mb-3" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
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
                ].map((item, i) => (
                  <FadeInOnScroll key={i} delay={i * 0.05}>
                    <div className="bg-white shadow rounded-lg p-4 shadow-md hover:shadow-lg transition">
                      <item.icon className="text-blue-600 text-4xl mb-2 mx-auto" />
                      <p>{item.label}</p>
                    </div>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div>
              <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
              {team.map((member, i) => (
                <FadeInOnScroll key={i} delay={i * 0.1}>
                  <div className={`bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6 mb-12 flex flex-col ${member.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover w-[120px] h-[120px] shrink-0"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{member.title}</p>
                      <p className="text-gray-500 text-sm mb-3">{member.desc}</p>
                      <div className="flex gap-4 text-blue-600 text-xl">
                        <a href={`mailto:${member.email}`} aria-label="Email">
                          <FaEnvelope className="hover:text-blue-800 transition" />
                        </a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <FaLinkedin className="hover:text-blue-800 transition" />
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-gray-700 text-lg mb-4">
                Our mission is to empower Indian manufacturing with advanced automation technologies that meet global standards.
              </p>
              <p className="text-gray-700 text-lg">
                We envision a future where every production line is intelligent, efficient, and free from manual errors.
              </p>
            </div>
          </FadeInOnScroll>

        </div>
      </section>
    </PageTransition>
  );
}
