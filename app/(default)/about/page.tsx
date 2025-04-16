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
      desc: `With 17+ years in industrial automation, Abhijeet built Vinayak Automation Products (VAP) into a well-known brand across Hyderabad and South India. His strong relationships with OEMs, integrators, and factories have made him a trusted name in the industry. He has helped hundreds of clients adopt reliable automation solutions, from PLCs and HMIs to sensors and motion control. At Aseiro, he brings this powerful network and on-ground experience to deliver practical, modern automation and machine vision systems.`,
      reverse: false,
    },
    {
      name: "Pradyumna Madnurkar",
      title: "Co-Founder & Robotics Engineer",
      image: "/team/team-pradyumna.png",
      email: "pradyumna@aseiro.in",
      linkedin: "https://www.linkedin.com/in/pradyumnam/",
      desc: `With a Master’s in Robotics from the University of Sheffield and hands-on experience at Rivelin Robotics, Pradyumna has contributed to building microfactories, custom end-of-arm tooling, and PLC-integrated robotic systems. His work spans global automation deployments in aerospace and defense sectors. Backed by a UK Global Talent Visa, his vision is to scale Aseiro into a global provider of machine vision and automation solutions. At Aseiro, he leads the development of intelligent robotic and vision systems tailored to the evolving needs of modern manufacturing.`,
      reverse: true,
    },
    {
      name: "Subbarao Tadikonda",
      title: "Business Development",
      image: "/team/team-subbarao.png",
      email: "subbarao@aseiro.in",
      linkedin: "https://www.linkedin.com/in/subbarao-business-development-171119301/",
      desc: `With 16+ years of leadership roles at Piramal, TATA, and Mojay Group Companies, Subbarao brings deep experience in product and systems design, embedded systems, SPM, plant automation, machine vision, and robotics. He has led multi-disciplinary teams across global offshore development centres in both IT and manufacturing industries. At Aseiro, he leads the Business Development function, actively driving new enquiries and orders. He holds a degree in Mechanical Engineering from Pune University and a Master’s in Operations Management from BITS Pilani.`,
      reverse: false,
    },
    {
      name: "Sriranga Puppala",
      title: "Automation Engineer",
      image: "/team/team-sriranga.png",
      email: "design.sriranga@aseiro.in",
      linkedin: "https://www.linkedin.com/in/sriranga-puppala-656428200",
      desc: `Sriranga is an Automation Engineer with a Bachelor's in Electrical and Electronics Engineering and experience in the Semiconductor Industry. He specializes in Industrial Automation and Embedded Systems, combining hardware and software to build smart automation solutions. At ASEIRO, he designs and implements custom systems using PLCs (Siemens, ABB, Delta, RENU), HMIs, embedded controllers, and industrial cameras. His work focuses on Vision Robotics for material handling and industrial automation. Driven by innovation, he aims to create efficient and intelligent automation systems.`,
      reverse: true,
    },
    {
      name: "Parth Madnurkar",
      title: "Automation Engineer",
      image: "/team/team-parth.png",
      email: "design.parth@aseiro.in",
      linkedin: "https://www.linkedin.com/in/parth-madnurkar-3b1123279/",
      desc: `With a strong foundation in Instrumentation and Control Engineering from Vishwakarma Institute of Technology and experience at Vinayak Automation Products, Parth has contributed to PLC programming, 3D modeling, machine vision, and advanced robotics. His work spans IoT-based healthcare devices, energy-harvesting solutions, and voice-controlled robotics, reflected in multiple publications and intellectual property filings. Driven by a passion for automation and innovative problem-solving, he aims to scale next-generation technologies across various industries. At Aseiro Industries, Parth leads efforts in machine vision, industrial automation, and robotics, shaping the future of modern manufacturing.`,
      reverse: false,
    },
    {
      name: "Shriya Rai Agarwal",
      title: "Marketing Expert",
      image: "/team/team-shriya.png",
      email: "marketing@aseiro.in",
      linkedin: "https://www.linkedin.com/in/shriyaraiagarwal",
      desc: `Shriya brings over 5 years of experience in marketing, having worked with brands across Europe, the UK, Asia, North America, and the Middle East. She started her journey by running her own agency, working with global clients building strong, creative campaigns. She has also been featured in publications like The Entrepreneurs Ethics and Women in Business Net. She pursued her Master’s in Advertising & Marketing from the University of Leeds. For her, marketing is about the joy of seeing a successful campaign and the learning’s. At Aseiro, Shriya leads our marketing efforts and brand positioning, helping shape how the world sees us. Her goal is to make Aseiro a go-to name in machine vision products and solutions.`,
      reverse: true,
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
                <strong>Aseiro Industries Pvt Ltd</strong> was founded to help manufacturers adopt Industry 4.0 standards by integrating robotics, machine vision, and advanced automation into production lines. Our mission is to eliminate human error, boost productivity, and deliver consistent quality across industrial processes.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                We bring together the technical innovation of a modern startup and the trusted legacy of <strong>Vinayak Automation Products</strong> - a respected name in industrial automation and instrumentation since 2007. With over 17 years of experience and 10,000 clients, Vinayak Automation has sold various products including sensors, drives, encoders, PLCs, HMIs, and VFDs to clients across sectors.
              </p>
              <p className="text-gray-700 text-lg">
              Aseiro was launched to cater to custom requirements in quality inspection, industrial robotics, and smart automation, blending new-generation vision systems with time-tested control architectures. We believe in transforming conventional manufacturing into intelligent, self-optimizing factories.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll>
            <div>
              <h2 className="text-3xl font-bold mb-10">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: FaPuzzlePiece, title: "Custom-Tailored Systems", desc: "We create modular solutions that fit perfectly into your factory setup—whether it's a small upgrade or a full transformation." },
                  { icon: FaTools, title: "End-to-End Support", desc: "From planning and integration to training and maintenance—we stay with you every step of the way." },
                  { icon: FaRobot, title: "Innovative Integration", desc: "We blend machine vision, robotics, and real-time controls for faster inspection and lower costs—up to 70% inspection time reduction." },
                  { icon: FaCheckCircle, title: "Proven Track Record", desc: "Over 10,000 clients trust our systems to deliver reliable performance across industries." },
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
        </div>
      </section>
    </PageTransition>
  );
}
