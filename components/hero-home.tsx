import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero Banner */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="flex justify-center">
            <Image
              src="/images/aseiro_banner.svg" // Change to .svg if needed
              alt="Aseiro Automation Banner"
              width={1200}
              height={400}
              className="rounded-lg shadow-lg w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
