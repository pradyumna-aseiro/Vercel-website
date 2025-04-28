// data/resources.ts

export const resources = [
  {
    slug: "printing-inspection-rejection",
    title: "Printing, Inspection & Rejection System",
    shortDescription: "Real-time print inspection and rejection using Hikrobot vision.",
    description:
      "A fully automated solution for real-time inspection of printed bottles and intelligent rejection of defective items, using Hikrobot cameras, Vision Master software, and Renu PLC control.",
    thumbnail: "/resources/thumbnails/printing-inspection-rejection-thumbnail.png",
    banner: "/resources/banners/printing-inspection-rejection-banner.png",
    overview:
      "Our system captures printed data, compares it with master data entered via a web portal, and rejects faulty prints in real-time using pneumatic cylinders controlled by PLC. The entire setup is modular, allowing easy repositioning to inspect different types of bottles on a single production line.",
    problem:
      "Manual inspection led to human errors, slow production, and undetected misprints. Additionally, with 16 different types of bottles on a single line, manual configuration between bottle types was cumbersome and inconsistent.",
    solutionArchitecture: [
      "Web portal for operator entry (Batch No, MFG Date, Expiry Date, MRP, etc.)",
      "Simultaneous data transfer to printer and vision system",
      "Hikrobot camera captures printed text on moving bottles",
      "Vision Master software compares captured data with master database",
      "Modular vision setup for easy camera and cylinder adjustment based on bottle type",
      "Multiple inspection programs for different bottle types, switchable via a user-friendly screen interface",
      "PLC triggers pneumatic rejection for incorrect prints",
    ],
    keyFeatures: [
      "Online data entry and master data synchronization",
      "Industrial Renu PLC and guided cylinder rejection mechanism",
      "Error-proof manufacturing for labeling and coding",
      "High-speed Hikrobot camera inspection",
      "Modular hardware design for easy bottle type switching",
      "Multiple programs selectable via touchscreen interface",
      "Automated good/reject decision-making in real time",
    ],
    results: [
      "99.8% detection accuracy achieved across all bottle types",
      "Enhanced flexibility to inspect 16 different bottles on a single line",
      "Reduced manual checking effort by 100%",
      "Faster changeover between bottle types",
      "Improved production efficiency and traceability",
    ],
    flowchart: "/resources/flowcharts/printing-inspection-rejection-flowchart.png",
    video: "/resources/videos/printing-inspection-rejection-video.mp4",
  },
];
