// app/partner/page.tsx
"use client";

import { FaTools, FaIndustry, FaRobot } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import PageTransition from "@/components/page-transition";
import FadeInOnScroll from "@/components/fade-in-on-scroll";

export default function PartnerPage() {
  return (
    <PageTransition>
      <section className="bg-white py-20 px-6 text-left">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* Hero */}
          <FadeInOnScroll>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Partner With Aseiro</h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Join our network of automation leaders, system integrators, and resellers
                to bring machine vision and robotics to every factory floor.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Who Can Apply */}
          <FadeInOnScroll>
            <div>
              <h2 className="text-3xl font-semibold mb-8">Who Can Apply?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: <FaTools size={40} />, label: "System Integrators" },
                  { icon: <FaIndustry size={40} />, label: "Machine Builders" },
                  { icon: <GiFactory size={40} />, label: "OEMs & Automation Consultants" },
                  { icon: <FaRobot size={40} />, label: "Robotics Distributors" },
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
                    <div className="text-blue-600 mb-3">{item.icon}</div>
                    <p className="text-sm font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          {/* How to Get Started */}
          <FadeInOnScroll>
            <div>
              <h2 className="text-3xl font-semibold mb-8">How to Get Started</h2>
              <div className="relative flex justify-between items-start border-l-4 border-blue-600 pl-8 max-w-4xl mx-auto">
                {[
                  "Fill our partner application form",
                  "We evaluate the fit and synergy",
                  "Sign our onboarding agreement",
                  "Attend onboarding & training",
                ].map((step, i) => (
                  <div key={i} className="relative mb-10 w-1/4 text-center px-2">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center font-semibold">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-700">{step}</p>
                    {i !== 3 && (
                      <div className="absolute top-[16px] right-[-5px] w-full h-0.5 bg-blue-300 z-[-1]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>

          {/* Why Partner With Us */}
          <FadeInOnScroll>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Why Partner With Aseiro?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  "Access cutting-edge machine vision systems and robotics.",
                  "Earn attractive margins and priority support.",
                  "Be a part of large-scale automation deployments.",
                  "Collaborate on custom solutions and PoCs.",
                ].map((point, i) => (
                  <div
                    key={i}
                    className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <p className="text-gray-800 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </PageTransition>
  );
}
