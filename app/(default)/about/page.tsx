import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-20 px-4 bg-white text-left">
      <div className="max-w-6xl mx-auto space-y-20">
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
        <div>
          <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>

          {/* Abhijeet Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/team-abhijeet.png"
                alt="Abhijeet Madnurkar"
                width={400}
                height={400}
                className="rounded-xl shadow-md object-cover w-full"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold text-blue-600">Abhijeet Madnurkar</h3>
              <p className="text-gray-600 text-sm font-medium mb-2">Co-Founder & Managing Director</p>
              <p className="text-gray-700 text-sm">
                With 17+ years in industrial automation, Abhijeet built Vinayak Automation Products (VAP)
                into a well-known brand across Hyderabad and South India. His strong relationships with OEMs,
                integrators, and factories have made him a trusted name in the industry. He has helped hundreds
                of clients adopt reliable automation solutions, from PLCs and HMIs to sensors and motion control.
                At Aseiro, he brings this powerful network and on-ground experience to deliver practical, modern
                automation and machine vision systems.
              </p>
            </div>
          </div>

          {/* Pradyumna Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="/images/team-pradyumna.png"
                alt="Pradyumna Madnurkar"
                width={400}
                height={400}
                className="rounded-xl shadow-md object-cover w-full"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold text-blue-600">Pradyumna Madnurkar</h3>
              <p className="text-gray-600 text-sm font-medium mb-2">Co-Founder & Robotics Engineer</p>
              <p className="text-gray-700 text-sm">
                With a Master's in Robotics from the University of Sheffield and industry experience at
                Rivelin Robotics, Pradyumna brings hands-on expertise in industrial microfactories,
                end-of-arm tooling, and PLC-integrated robotics. His journey began by building custom robotic
                arms during the pandemic, eventually contributing to automation solutions across sectors like
                aerospace and defense. At Aseiro, he leads development of robotics and machine vision systems
                that improve factory productivity and product quality.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
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
