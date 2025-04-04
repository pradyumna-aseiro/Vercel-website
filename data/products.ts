export const productSections = [
  {
    title: "Area Scan Cameras",
    items: [
      {
        name: "Area Scan Camera",
        description: "An area scan camera captures a full 2D image in a single exposure.",
        image: "/products/area-scan-camera.png",
        details: (
          <>
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-6">
              <li>Captures full 2D images in a single exposure</li>
              <li>Ideal for general machine vision and inspection tasks</li>
              <li>Easy integration with vision systems</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Applications:</h3>
            <ul className="list-disc pl-6">
              <li>General industrial vision applications</li>
              <li>Measurement systems and inspection lines</li>
            </ul>
          </>
        ),
      },
      {
        name: "CS Area Scan Camera",
        description: "The CS Series offers major improvements in design, R&D, and production processes.",
        image: "/products/cs-camera.png",
        details: (
          <>
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-6">
              <li>Improved design, research, and production processes</li>
              <li>Enhanced user experience and reliability</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Applications:</h3>
            <ul className="list-disc pl-6">
              <li>General vision applications with improved performance</li>
            </ul>
          </>
        ),
      },
      // Add more products as needed
    ],
  },
  // Add other product sections here
];
