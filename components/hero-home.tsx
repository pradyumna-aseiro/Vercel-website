import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import CTAButton from "@/components/CTAButton";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Section */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40 text-left">
          <h1 className="mb-6 text-5xl font-extrabold leading-tighter tracking-tighter md:text-6xl">
            See More with Vision <br className="hidden md:inline" />
            Do More with Automation
          </h1>
          <p className="max-w-3xl text-xl text-slate-500 mb-8 text-left">
            Aseiro Industries delivers custom robotics and machine vision solutions for fast-paced factories, eliminating human error and ensuring consistent product quality through smart automation.
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <CTAButton href="mailto:subbarao@aseiro.in">
              Contact Us →
            </CTAButton>
            <CTAButton
              href="#solutions"
              className="bg-white text-gray-800 hover:bg-gray-100"
            >
              Learn More
            </CTAButton>
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
        </div>
      </div>
    </section>
  );
}
