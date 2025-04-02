{/* Products Overview */}
<section className="py-20 px-4 bg-white text-center">
  <h2 className="text-3xl font-bold mb-4">Our Products</h2>
  <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
    Explore advanced automation and vision systems built for your industrial needs.
  </p>

  <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 text-left">
    {/* Machine Vision */}
    <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="w-full relative aspect-[4/3] bg-white">
        <Image
          src="/images/aseiro-camera-product.png"
          alt="Machine Vision Products"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-2">
          Machine Vision Products
        </h3>
        <p className="text-gray-700 text-sm mb-3">
          Precision imaging hardware and smart systems tailored for
          manufacturing, packaging, and inspection.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Area Scan, Line Scan, and Infrared Cameras</li>
          <li>Smart Cameras with onboard processing</li>
          <li>3D Vision Systems (Line Laser, RGB-D)</li>
          <li>Vision Controllers and Box PCs</li>
          <li>High-speed Smart Code Readers</li>
          <li>FA & M12 Lenses, Filters, and Light Sources</li>
        </ul>
      </div>
    </div>

    {/* AMRs */}
    <div className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="w-full relative aspect-[4/3] bg-white">
        <Image
          src="/images/aseiro-amr-product.png"
          alt="Autonomous Mobile Robots"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-600 mb-2">
          Autonomous Mobile Robots (AMRs)
        </h3>
        <p className="text-gray-700 text-sm mb-3">
          Flexible robotic platforms for intralogistics, with navigation and task automation.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Latent Mobile Robots (LMRs) – Under-load movement</li>
          <li>Forklift AMRs (FMRs) – Palletized transport</li>
          <li>Collaborative Mobile Robots (CMRs)</li>
          <li>Vision-based navigation, SLAM, and auto-charging</li>
          <li>Fleet scheduling, WMS/ERP integration</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="mt-10">
    <Link href="/products">
      <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
        View All Products
      </a>
    </Link>
  </div>
</section>
