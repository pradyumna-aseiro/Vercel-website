// data/products.ts
export const productCategories = [
  {
    title: "Machine Vision Products",
    description:
      "High-performance cameras, code readers, 3D systems, and optics for industrial inspection and automation.",
    linkPrefix: "/products/machine-vision",
    subcategories: [
      {
        name: "Area Scan Cameras",
        slug: "area-scan-cameras",
        description:
          "Captures high-resolution 2D images for general inspection and measurement tasks.",
      },
      {
        name: "Line Scan Cameras",
        slug: "line-scan-cameras",
        description:
          "Captures images one line at a time for fast-moving or continuous materials.",
      },
      {
        name: "Smart Cameras",
        slug: "smart-cameras",
        description:
          "Integrated cameras with built-in processing for compact and efficient vision applications.",
      },
      {
        name: "3D Cameras",
        slug: "three-d-cameras",
        description:
          "Provides depth and spatial information for robotic vision and high-precision inspection.",
      },
      {
        name: "Smart Code Readers",
        slug: "smart-code-readers",
        description:
          "Efficient barcode and QR code reading using intelligent vision technology.",
      },
      {
        name: "Lenses",
        slug: "lens",
        description:
          "High-quality optics designed for industrial cameras to ensure clear and accurate imaging.",
      },
      {
        name: "Light Sources",
        slug: "lights",
        description:
          "Provides optimal illumination for machine vision systems using domes, rings, and panels.",
      },
      {
        name: "Vision Box",
        slug: "vision-box",
        description:
          "Controller boxes with powerful processors and interfaces for vision system deployment.",
      },
    ],
  },
  {
    title: "Autonomous Mobile Robots (AMRs)",
    description:
      "Flexible robots for intelligent intralogistics with navigation, docking, and fleet management.",
    linkPrefix: "/products/amrs",
    subcategories: [
      {
        name: "Latent Mobile Robots",
        slug: "latent-mobile-robots",
        description:
          "Undercarriage AMRs for discreet payload transport in smart factories.",
      },
      {
        name: "Forklift Mobile Robots",
        slug: "forklift-mobile-robots",
        description:
          "Automated forklifts for autonomous pallet lifting, stacking, and transfer.",
      },
      {
        name: "Collaborative Mobile Robots",
        slug: "collaborative-mobile-robots",
        description:
          "Designed to safely work alongside humans in shared workspaces.",
      },
    ],
  },
];
