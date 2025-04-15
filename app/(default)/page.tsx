// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero-home";
import IndustryPartners from "@/components/industry-partners";
import ContactForm from "@/components/contact-form";
import FadeInOnScroll from "@/components/fade-in-on-scroll";

const products = [
  {
    name: "Machine Vision Products",
    description: `High-performance area scan, line scan, and infrared cameras, smart code readers, 3D vision systems, FA lenses, and lighting — designed for accurate industrial inspection and automation.`,
    image: "/products/aseiro-camera-product.png",
  },
  {
    name: "Autonomous Mobile Robots (AMRs)",
    description: `Flexible robots for intelligent intralogistics. Options include Latent Mobile Robots (LMRs), Forklift-style (FMRs), and Collaborative (CMRs), with navigation, docking, and fleet scheduling.`,
    image: "/products/aseiro-amr-product.png",
  },
];

const solutions = [
  {
    title: "Printing, Inspection and Rejection using Machine vision System",
    image: "/solutions/printing-inspection-rejection.png",
    desc: "Tailored solutions for printing inspection, sorting, and rejection of products on a conveyor in a production line using high-speed cameras, sensors, and pneumatics.",
  },
  {
    title: "Dimensional Measurement Systems",
    image: "/solutions/dimensional-measurement.png",
    desc: "Real-time measurement of product tolerances on manufacturing lines using cameras and optimum lighting.",
  },
  {
    title: "Defect Detection using Machine Vision",
    image: "/solutions/defect-detection.png",
    desc: "Identify surface defects, cracks, scratches, rust, holes, and misalignments in real time. Ideal for bearings, metal surfaces, castings, and packaging lines.",
  },
  {
    title: "Industrial Automation & Instrumentation",
    image: "/solutions/plc-hmi-automation.png",
    desc: "Complete automation solutions using PLCs, HMIs, SCADA, and sensors for process control, monitoring, and data-driven decisions.",
  },
  {
    title: "Industrial Robots for Shopfloor",
    image: "/solutions/industrial-robots.png",
    desc: "Custom robotic systems that streamline tasks such as pick & place, assembly, and material handling—enhancing accuracy and safety.",
  },
  {
    title: "Warehouse Automation",
    image: "/solutions/warehouse-automation.png",
    desc: "Mobile robots and smart inventory systems for faster order fulfillment, logistics automation, and reduced manual effort.",
  },
];

const whyAseiro = [
  {
    icon: "/icons/experience.png",
    title: "Industry Expertise",
    desc: "Backed by years of experience in manufacturing, packaging, and process industries.",
  },
  {
    icon: "/icons/customization.png",
    title: "Custom Solutions",
    desc: "Tailored automation systems designed specifically for your factory's needs.",
  },
  {
    icon: "/icons/integration.png",
    title: "Seamless Integration",
    desc: "We ensure our systems talk to your PLCs, SCADA, and factory network with ease.",
  },
  {
    icon: "/icons/support.png",
    title: "On-Site Support",
    desc: "We provide commissioning, training, and lifetime support post deployment.",
  },
  {
    icon: "/icons/innovation.png",
    title: "Technology Driven",
    desc: "We integrate AI, machine vision, robotics, and IoT for future-ready automation.",
  },
  {
    icon: "/icons/speed.png",
    title: "Quick Deployment",
    desc: "Modular plug-and-play solutions that reduce setup time and increase ROI.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <FadeInOnScroll>
        <section className="py-20 px-6 bg-white text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Our Products</h2>
          <p className="text-gray-600 leading-relaxed tracking-wide mb-12 max-w-2xl mx-auto">
            Explore high-performance automation and vision systems built to boost your efficiency and accuracy across industries.
          </p>

          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 text-left">
            {products.map((product, index) => (
              <FadeInOnScroll key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{product.name}</h3>
                    <p className="text-gray-700 text-sm mb-3">{product.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/products">
              <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105 shadow hover:shadow-lg">
                Explore Products
              </a>
            </Link>
          </div>
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section className="py-20 px-4 bg-slate-50 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Solutions</h2>
          <p className="text-gray-600 leading-relaxed tracking-wide mb-12 max-w-3xl mx-auto">
            We provide tailored industrial automation and machine vision solutions to solve real factory challenges across diverse industries.
          </p>

          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 text-left text-gray-700">
            {solutions.map((solution, i) => (
              <FadeInOnScroll key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{solution.title}</h3>
                    <p>{solution.desc}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/solutions">
              <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-transform transform hover:scale-105 shadow hover:shadow-lg">
                Read more
              </a>
            </Link>
          </div>
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section className="py-20 px-4 bg-slate-100 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Why Choose Aseiro?</h2>
          <p className="text-gray-600 leading-relaxed tracking-wide mb-12 max-w-3xl mx-auto">
            Aseiro Industries brings together the latest technology and deep domain knowledge to deliver end-to-end automation and vision solutions that work.
          </p>

          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
            {whyAseiro.map((item, index) => (
              <FadeInOnScroll key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
                  <div className="flex justify-center mb-4">
                    <Image src={item.icon} alt={item.title} width={48} height={48} />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section className="py-20 px-4 bg-slate-100 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Schedule a Demo</h2>
          <p className="text-gray-600 leading-relaxed tracking-wide mb-8 max-w-2xl mx-auto">
            We help factories identify bottlenecks and implement scalable automation and vision solutions tailored to production goals. 
            Describe your requirement and schedule a call with our expert.
          </p>
          <ContactForm />
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section className="py-20 px-4 bg-slate-50 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Our Partners</h2>
          <IndustryPartners />
        </section>
      </FadeInOnScroll>

      <FadeInOnScroll>
        <section className="py-20 px-4 bg-white text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Latest Insights</h2>
          <p className="text-gray-600 leading-relaxed tracking-wide mb-8 max-w-3xl mx-auto">
            News, tutorials, and thought leadership from the world of automation and vision.
          </p>
        </section>
      </FadeInOnScroll>
    </>
  );
}
