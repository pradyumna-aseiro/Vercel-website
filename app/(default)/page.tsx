import Hero from "@/components/hero-home";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Products Overview */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <p className="text-gray-600 mb-8">Explore cutting-edge automation and vision systems built for your factory floor.</p>
        {/* TODO: Add products grid here */}
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
        <p className="text-gray-600 mb-8">From food & beverage to pharma, Aseiro powers quality control across sectors.</p>
        {/* TODO: Add industries cards or icons here */}
      </section>

      {/* Consulting Services */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Consulting & Implementation</h2>
        <p className="text-gray-600 mb-8">We help factories identify bottlenecks and implement scalable automation solutions.</p>
        {/* TODO: Add CTA or consulting process here */}
      </section>

      {/* Industry Partners Slider */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
        {/* TODO: Slider with partner logos */}
      </section>

      {/* Blog / News */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
        <p className="text-gray-600 mb-8">News, tutorials, and thought leadership from the world of automation and vision.</p>
        {/* TODO: Blog card components */}
      </section>
    </>
  );
}
