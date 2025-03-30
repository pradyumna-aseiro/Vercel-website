import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Section */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40 text-center">
          <h1 className="mb-6 text-5xl font-extrabold leading-tighter tracking-tighter md:text-6xl">
            Revolutionizing Quality Control with <br className="hidden md:inline" />
            Smart Vision Systems
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-500 mb-8">
            Aseiro Industries delivers custom robotics and machine vision solutions for fast-paced
            factories, eliminating human error and ensuring consistent product quality through
            smart automation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
              href="mailto:contact@aseiro.in"
            >
              Contact Us →
            </a>
            <a
              className="btn bg-white text-gray-800 hover:bg-gray-100 shadow"
              href="#solutions"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Banner Section */}
        <div className="mb-12 md:mb-20">
          <Image
            src="/images/aseiro_banner.svg"
            alt="Aseiro Vision Banner"
            width={1200}
            height={400}
            className="rounded-xl w-full object-cover shadow-xl"
            priority
          />
          <p className="text-center text-lg mt-4 font-semibold text-gray-700">
            See more. Do more.
          </p>
        </div>
      </div>
    </section>
  );
}
