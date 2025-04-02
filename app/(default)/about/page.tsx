// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto pt-32">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">About Aseiro Industries</h1>
  
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <strong>Aseiro Industries Pvt Ltd</strong> was founded in 2024 to help manufacturers adopt Industry 4.0 standards by integrating robotics, machine vision, and advanced automation into production lines. Our mission is to eliminate human error, boost productivity, and deliver consistent quality across industrial processes.
          </p>
  
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We bring together the technical innovation of a modern startup and the trusted legacy of <strong>Vinayak Automation Products</strong> — a respected name in industrial automation and instrumentation since 2007. With over 17 years of experience and 10,000 clients, Vinayak Automation has sold various products including sensors, drives, encoders, PLCs, HMIs, and VFDs to clients across sectors.
          </p>
  
          <p className="text-gray-700 text-lg leading-relaxed">
            Aseiro was launched to cater to custom requirements in quality inspection, industrial robotics, and smart automation — seamlessly blending new-generation vision systems with time-tested control architectures. We believe in transforming conventional manufacturing into intelligent, self-optimizing factories.
          </p>
        </div>

        {/* Meet the Team */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/team-abhijeet.png" // Ensure this image is available in your public/images directory
            alt="Abhijeet Madnurkar"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">Abhijeet Madnurkar</p>
            <p className="text-gray-600 text-sm">Co-Founder & Managing Director</p>
            <p className="text-gray-500 text-sm">
            With over 17 years of experience, Abhijeet has built strong partnerships distributing PLCs, HMIs, sensors, SCADA, robotics, and machine vision systems across South India. Through Vinayak Automation Products, he has supported thousands of factories in adopting industrial automation technology. At Aseiro, he drives customer success by bridging field expertise with modern automation needs.
            </p>
          </div>
        </div>


        {/* Mission & Vision */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="text-gray-700 text-lg mb-4">
            Our mission is to empower Indian manufacturing with advanced automation technologies that meet global standards.
          </p>
          <p className="text-gray-700 text-lg">
            We envision a future where every production line is intelligent, efficient, and free from manual errors.
          </p>
        </div>

        {/* Our Journey */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>2007:</strong> Vinayak Automation Products founded in Hyderabad.</li>
            <li><strong>2015:</strong> Expanded distribution of PLCs, sensors, and encoders across India.</li>
            <li><strong>2024:</strong> Aseiro Industries Pvt Ltd launched to specialize in machine vision & robotics.</li>
          </ul>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-700">
            <div>
              <h4 className="font-semibold text-blue-600">Innovation</h4>
              <p>We constantly evolve our solutions to stay ahead of the curve.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">Customer-Centric</h4>
              <p>Your factory’s success drives everything we do.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">Integrity</h4>
              <p>We deliver what we promise — on time, every time.</p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">Excellence</h4>
              <p>We strive for industrial-grade precision and performance.</p>
            </div>
          </div>
        </div>

        {/* Careers or Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Interested in working with us or partnering on a project?</p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
  );
}
  