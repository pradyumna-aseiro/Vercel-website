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
          "An area scan camera captures a full 2D image in a single exposure using a grid of pixel sensors. This allows it to acquire detailed snapshots of still or slow-moving subjects without requiring complex motion control. By reading the entire imaging area at once, area scan cameras are easy to integrate and excel in general machine vision, measurement, or inspection tasks.",
      },
      {
        name: "Line Scan Cameras",
        slug: "line-scan-cameras",
        description:
          "A line scan camera captures images one row of pixels at a time, creating a continuous, high-resolution image as the subject or material moves past. This design is ideal for inspecting fast-moving objects or wide, continuous materials (like webs or fabrics) and ensures precise, detailed imaging in industrial applications.",
      },
      {
        name: "Smart Cameras",
        slug: "smart-cameras",
        description:
          "A smart camera combines an imaging sensor and a built-in processor to capture, process, and analyze images in real-time without external computing. This compact design simplifies machine vision tasks, making it easier to deploy for automated inspection, quality control, and other industrial applications.",
      },
      {
        name: "3D Cameras",
        slug: "three-d-cameras",
        description:
          "A 3D camera captures both color and depth information to create detailed three-dimensional images. This advanced technology enables precise measurements and real-time analysis, making it ideal for robotics, quality control, and 3D mapping applications.",
      },
      {
        name: "Smart Code Readers",
        slug: "smart-code-readers",
        description:
          "A Smart Code Reader combines a high-resolution imaging sensor with built-in decoding algorithms to rapidly and accurately read barcodes and 2D codes. Its compact, all-in-one design simplifies integration, making it ideal for traceability, logistics, and automated data collection across diverse industrial environments.",
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
          "Our Vision Box is a powerful controller solution designed for machine vision applications. It processes images, handles data, and manages connected devices to support a wide range of visual inspection tasks.",
      },
    ],
  },
  {
    title: "Autonomous Mobile Robots (AMRs)",
    description:
      "Flexible robots for intelligent intralogistics with navigation, docking, and fleet management.",
    linkPrefix: "/products/amr",
    subcategories: [
      {
        name: "Latent Mobile Robots",
        slug: "lmr",
        description:
          "Designed for discreet and efficient payload transport within factories, warehouses, or distribution centers. They are capable of maneuvering in tight spaces, optimizing workflows by reducing manual labor, and increasing productivity in environments requiring flexibility and agility.",
      },
      {
        name: "Forklift Mobile Robots",
        slug: "fmr",
        description:
          "Fully autonomous, self-driving forklifts designed to enhance material handling tasks. These robots are capable of lifting, stacking, and transferring pallets, providing a robust solution for high-density storage systems. ",
      },
      {
        name: "Conveyor Mobile Robots",
        slug: "cmr",
        description:
          "Designed to safely work alongside human operators in shared workspaces. They automate the material flow by carrying goods along predetermined paths, using advanced vision and navigation systems.",
      },
      {
        name: "Conveyor Towing Unit",
        slug: "ctu",
        description:
          "Flexible material handling solution designed to transport goods at various heights. It integrates seamlessly with existing conveyor systems, enhancing the workflow of automated warehouses, assembly lines, and distribution centers. ",
      },
    ],
  },
];
