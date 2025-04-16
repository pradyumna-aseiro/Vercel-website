"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaHandshake, FaChalkboardTeacher, FaTags, FaTools, FaClipboardList } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { BsDiagram3 } from "react-icons/bs";
import { PiRobotLight } from "react-icons/pi";
import FadeInOnScroll from "@/components/fade-in-on-scroll";
import PageTransition from "@/components/page-transition";

const benefits = [
  {
    icon: <FaUsers className="text-3xl text-blue-600 mb-3" />,
    title: "Collaborative Marketing",
    description: "Engage in co-branded campaigns, webinars, and exhibitions to grow your audience.",
  },
  {
    icon: <FaHandshake className="text-3xl text-blue-600 mb-3" />,
    title: "Lead Sharing & Referrals",
    description: "We route relevant client enquiries to our partners and integrators.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-blue-600 mb-3" />,
    title: "Exclusive Training",
    description: "Get certified training in machine vision, PLCs, industrial robotics, and more.",
  },
  {
    icon: <FaTags className="text-3xl text-blue-600 mb-3" />,
    title: "Preferential Pricing",
    description: "Enjoy partner-only discounts on our entire product and solution portfolio.",
  },
  {
    icon: <FaTools className="text-3xl text-blue-600 mb-3" />,
    title: "Dedicated Technical Support",
    description: "Get priority access to support, integration help, and product documentation.",
  },
  {
    icon: <FaClipboardList className="text-3xl text-blue-600 mb-3" />,
    title: "Ready-to-use Resources",
    description: "Use our presentation decks, brochures, project templates, and case studies.",
  },
];

const partnerTypes = [
  { label: "System Integrators", icon: <BsDiagram3 size={32} className="text-blue-600" /> },
  { label: "Machine Builders", icon: <MdFactory size={32} className="text-blue-600" /> },
  { label: "OEMs & Automation Consultants", icon: <FaTools size={32} className="text-blue-600" /> },
  { label: "Robotics Distributors", icon: <PiRobotLight size={32} className="text-blue-600" /> },
];

const steps = [
  "Fill out our partner application",
  "We'll schedule a discovery call",
  "Sign onboarding agreement",
  "Attend training & start building",
];

export default function PartnerPage() {
  return (
    <PageTransition>
      <section className="px-4 py-20 bg-white text-center text-gray-800">
        <div className="max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h1 className="text-4xl font-bold mb-4">Partner With Aseiro Industries</h1>
            <p className="text-lg text-gray-600">
              Collaborate with us to accelerate digital transformation in manufacturing worldwide. We enable you with our
              innovative machine vision and automation systems to deliver exceptional solutions to your clients.
            </p>
          </FadeInOnScroll>
        </div>

        <div className="mt-24">
          <FadeInOnScroll>
            <h2 className="text-3xl font-semibold mb-10">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto text-left">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-blue-700">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>

        <div className="mt-24">
          <FadeInOnScroll>
            <h2 className="text-3xl font-semibold mb-10">Who Can Apply?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {partnerTypes.map((type, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-100 p-6 rounded-lg flex flex-col items-center text-center shadow hover:shadow-md transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {type.icon}
                  <p className="mt-2 text-sm font-medium text-gray-800">{type.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeInOnScroll>
        </div>

        <div className="mt-24">
          <FadeInOnScroll>
            <h2 className="text-3xl font-semibold mb-10">How to Get Started</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-100 z-0"></div>
              <div className="relative z-10 flex flex-col gap-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-6"
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-semibold">
                      {i + 1}
                    </div>
                    <p className="text-left text-gray-700 text-sm sm:text-base">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="mt-10">
              <Link href="/contact">
                <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105 shadow hover:shadow-lg">
                  Become a Partner →
                </a>
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </PageTransition>
  );
}
