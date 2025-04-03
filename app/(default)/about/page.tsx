// app/about/page.tsx
import Image from "next/image";

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

        {/* Meet the Team */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Meet the Team</h2>

          {/* Abhijeet */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
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
              <p className="text-gray-500 text-sm">
                With 17+ years in industrial automation, Abhijeet built Vinayak Automation Products (VAP) into a well-known 
                brand across Hyderabad and South India. His strong relationships with OEMs, integrators, and factories have 
                made him a trusted name in the industry. He has helped hundreds of clients adopt reliable automation solutions, 
                from PLCs and HMIs to sensors and motion control. At Aseiro, he brings this powerful network and on-ground 
                experience to deliver practical, modern automation and machine vision systems.
              </p>
            </div>
          </div>

          {/* Pradyumna */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
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
              <p className="text-gray-500 text-sm">
              With a Master’s in Robotics from the University of Sheffield and hands-on experience 
              at Rivelin Robotics, Pradyumna has contributed to building microfactories, custom 
              end-of-arm tooling, and PLC-integrated robotic systems. His work spans global 
              automation deployments in aerospace and defense sectors. Backed by a UK Global Talent 
              Visa, his vision is to scale Aseiro into a global provider of machine vision and 
              automation solutions. At Aseiro, he leads the development of intelligent robotic and 
              vision systems tailored to the evolving needs of modern manufacturing.
              </p>
            </div>
          </div>

          {/* Subbarao */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <Image
              src="/team/team-subbarao.png"
              alt="Subbarao"
              width={120}
              height={120}
              className="rounded-full object-cover w-[120px] h-[120px] shrink-0"
            />
            <div>
              <h3 className="text-xl font-semibold">Subbarao</h3>
              <p className="text-gray-600 text-sm mb-2">Business Development</p>
              <p className="text-gray-500 text-sm">
              With 16+ years of leadership roles at Piramal, TATA, and Mojay Group Companies, Subbarao 
              brings deep experience in product and systems design, embedded systems, SPM, plant automation, 
              machine vision, and robotics. He has led multi-disciplinary teams across global offshore 
              development centres in both IT and manufacturing industries. At Aseiro, he leads the Business 
              Development function, actively driving new enquiries and orders. He holds a degree in Mechanical 
              Engineering from Pune University and a Master’s in Operations Management from BITS Pilani.
              </p>
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
