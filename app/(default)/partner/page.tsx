"use client";

import { motion } from "framer-motion";
import { FaUserCog, FaCogs, FaBuilding, FaRobot } from "react-icons/fa";
import PageTransition from "@/components/page-transition";
import FadeInOnScroll from "@/components/fade-in-on-scroll";

export default function PartnerPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Partner With Aseiro</h1>
          <p className="text-gray-600 text-lg">
            Join our network of automation leaders, system integrators, and resellers
            to bring machine vision and robotics to every factory floor.
          </p>
        </div>

        {/* Who Can Apply */}
        <FadeInOnScroll>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Who Can Apply?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: <FaUserCog size={36} />, title: "System Integrators" },
                { icon: <FaCogs size={36} />, title: "Machine Builders" },
                { icon: <FaBuilding size={36} />, title: "OEMs & Automation Consultants" },
                { icon: <FaRobot size={36} />, title: "Robotics Distributors" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-blue-600 mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* How to Get Started */}
        <FadeInOnScroll>
          <div>
            <h2 className="text-3xl font-bold mb-12">How to Get Started</h2>
            <div className="flex flex-col items-center max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-10 sm:gap-6">
                {[
                  "Fill our partner application form",
                  "We evaluate the fit and synergy",
                  "Sign our onboarding agreement",
                  "Attend onboarding & training",
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold mb-3 shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-sm w-40">{step}</p>
                  </motion.div>
                ))}
              </div>
              {/* Horizontal line with curve */}
              <div className="w-full h-10 mt-4 border-t border-dashed border-blue-300 relative hidden sm:block">
                <div className="absolute left-0 top-0 w-full h-full flex justify-between items-center px-[10%]">
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </section>
    </PageTransition>
  );
}
