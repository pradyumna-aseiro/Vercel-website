// app/about/page.tsx

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-20 px-4 bg-white text-left">
      <div className="max-w-6xl mx-auto pt-25">
        {/* Intro Section */}
        <div>
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
        <section className="py-20 px-4 bg-white text-left">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Team Member 1 */}
              <div className="bg-gray-50 rounded-xl shadow p-6 flex items-center gap-4">
                <Image
                  src="/images/team-abhijeet.png"
                  alt="Abhijeet Madnurkar"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">Abhijeet Madnurkar</p>
                  <p className="text-gray-600 text-sm">Co-Founder & Managing Director</p>
                  <p className="text-gray-500 text-sm mt-1">
                  With 17+ years in industrial automation, Abhijeet built Vinayak Automation Products (VAP) into a well-known 
                  brand across Hyderabad and South India. His strong relationships with OEMs, integrators, and factories have 
                  made him a trusted name in the industry. He has helped hundreds of clients adopt reliable automation solutions, 
                  from PLCs and HMIs to sensors and motion control. At Aseiro, he brings this powerful network and on-ground 
                  experience to deliver practical, modern automation and machine vision systems.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-50 rounded-xl shadow p-6 flex items-center gap-4">
                <Image
                  src="/images/team-pradyumna.png"
                  alt="Pradyumna Madnurkar"
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">Pradyumna Madnurkar</p>
                  <p className="text-gray-600 text-sm">Co-Founder & Robotics Engineer</p>
                  <p className="text-gray-500 text-sm mt-1">
                  With a Master's in Robotics from the University of Sheffield and industry experience at Rivelin Robotics, 
                  Pradyumna brings hands-on expertise in developing industrial microfactories, end-of-arm tooling, and 
                  PLC-integrated robotic systems. His journey began with building custom robotic arms during the pandemic, 
                  eventually leading to global deployments of automation cells in sectors like aerospace and defense.
                  At Aseiro, he leads the design of robotics and custom automation systems, focusing on improving production 
                  quality and efficiency for Indian and UK manufacturers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


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
