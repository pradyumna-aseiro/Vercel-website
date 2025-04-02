// app/about/page.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-20 px-4 bg-white text-left">
      <div className="max-w-6xl mx-auto pt-32">
        {/* Intro Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">About Aseiro Industries</h1>
          <p className="text-gray-700 text-lg mb-4">
            <strong>Aseiro Industries Pvt Ltd</strong> was founded in 2024 to help manufacturers adopt Industry 4.0 standards by integrating robotics, machine vision, and advanced automation into production lines. Our mission is to eliminate human error, boost productivity, and deliver consistent quality across industrial processes.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            We bring together the technical innovation of a modern startup and the trusted legacy of <strong>Vinayak Automation Products</strong> — a respected name in industrial automation and instrumentation since 2007. With over 17 years of experience and 10,000 clients, Vinayak Automation has sold various products including sensors, drives, encoders, PLCs, HMIs, and VFDs to clients across sectors.
          </p>
          <p className="text-gray-700 text-lg">
            Aseiro was launched to cater to custom requirements in quality inspection, industrial robotics, and smart automation — seamlessly blending new-generation vision systems with time-tested control architectures. We believe in transforming conventional manufacturing into intelligent, self-optimizing factories.
          </p>
        </div>

        {/* Meet the Team */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
          <div className="flex items-center gap-6">
            <Image
              src="/images/team-abhijeet.png"
              alt="Abhijeet Madnurkar"
              width={96}
              height={96}
              className="rounded-full border shadow"
            />
            <div>
              <p className="text-lg font-semibold">Abhijeet Madnurkar</p>
              <p className="text-sm text-gray-600">Co-Founder & Managing Director</p>
              <p className="text-sm text-gray-500 mt-1 max-w-2xl">
                With over 17 years of experience, Abhijeet has built strong partnerships distributing PLCs, HMIs, sensors, SCADA, robotics, and machine vision systems across South India. Through Vinayak Automation Products, he has supported thousands of factories in adopting industrial automation technology. At Aseiro, he drives customer success by bridging field expertise with modern automation needs.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-gray-700 text-lg mb-4">
            Our mission is to empower Indian manufacturing with advanced automation technologies that meet global standards.
          </p>
          <p className="text-gray-700 text-lg">
            We envision a future where every production line is intelligent, efficient, and free from manual errors.
          </p>
        </div>

        {/* Our Journey (optional expansion section) */}
        {/* <div>
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-700 text-lg">
            You can add a visual timeline or major milestones here if you'd like!
          </p>
        </div> */}
      </div>
    </section>
  );
}
