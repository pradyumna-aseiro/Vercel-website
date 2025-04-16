"use client";

import CTAButton from "@/components/CTA-button";
import PageTransition from "@/components/page-transition";
import FadeInOnScroll from "@/components/fade-in-on-scroll";

export default function PartnerPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-20 px-4 bg-white text-center">
        <FadeInOnScroll>
          <h1 className="text-4xl font-bold mb-6">Partner With Aseiro Industries</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Collaborate with us to accelerate digital transformation in Indian manufacturing.
            We enable you with our innovative machine vision and automation systems to deliver
            exceptional solutions to your clients.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <h2 className="text-3xl font-semibold mb-8">Why Partner With Us?</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto text-left">
            {[
              {
                title: "Collaborative Marketing",
                desc: "Engage in co-branded campaigns, webinars, and exhibitions to grow your audience.",
              },
              {
                title: "Lead Sharing & Referrals",
                desc: "We route relevant client enquiries to our partners and integrators.",
              },
              {
                title: "Exclusive Training",
                desc: "Get certified training in machine vision, PLCs, industrial robotics, and more.",
              },
              {
                title: "Preferential Pricing",
                desc: "Enjoy partner-only discounts on our entire product and solution portfolio.",
              },
              {
                title: "Dedicated Technical Support",
                desc: "Get priority access to support, integration help, and product documentation.",
              },
              {
                title: "Ready-to-use Resources",
                desc: "Use our presentation decks, brochures, project templates, and case studies.",
              },
            ].map((item, index) => (
              <FadeInOnScroll key={index} delay={index * 0.1}>
                <div className="bg-slate-50 p-6 rounded-xl shadow-md hover:shadow-lg transition h-full">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <div className="mt-20">
            <h2 className="text-3xl font-semibold mb-6">Who Can Apply?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm max-w-4xl mx-auto">
              {[
                "System Integrators",
                "OEMs & Machine Builders",
                "Automation Consultants",
                "Distributors",
              ].map((label, i) => (
                <div key={i} className="bg-white border rounded-lg py-4 px-3 shadow hover:shadow-lg transition">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.3}>
          <div className="mt-20 max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-semibold text-center mb-6">How to Get Started</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-left">
              <li>Fill out our partner application form</li>
              <li>We evaluate the fit and synergy</li>
              <li>Sign our partner onboarding agreement</li>
              <li>Attend onboarding and training</li>
              <li>Start growing together 🚀</li>
            </ol>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.4}>
          <div className="mt-16 text-center">
            <CTAButton
              href="mailto:partnerships@aseiro.in"
              text="Become a Partner →"
              variant="primary"
              isExternal
            />
          </div>
        </FadeInOnScroll>
      </section>
    </PageTransition>
  );
}
