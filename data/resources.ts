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
        "Our system captures printed data, compares it with master data entered via a web portal, and rejects faulty prints in real-time using pneumatic cylinders controlled by PLC.",
      problem:
        "Manual inspection led to human errors, slow production, and undetected misprints. The customer needed a fast, reliable, and error-free system for printing validation.",
      solutionArchitecture: [
        "Web portal for operator entry (Batch No, MFG Date, Expiry Date)",
        "Simultaneous data transfer to printer and vision system",
        "Hikrobot camera captures printed text on bottles",
        "Vision Master compares captured data with master database",
        "PLC triggers pneumatic rejection for incorrect prints",
      ],
      keyFeatures: [
        "Online data entry and master data synchronization",
        "Industrial Renu PLC and guided cylinder rejection mechanism",
        "Error-proof manufacturing for labeling and coding",
        "High-speed Hikrobot camera inspection",
        "Automated good/reject decision-making",
      ],
      results: [
        "99.8% detection accuracy achieved",
        "Improved product traceability",
        "Enhanced overall production efficiency",
        "Reduced manual checking by 95%",
        "Faster sorting and inspection speeds",
      ],
      flowchart: "/resources/flowcharts/printing-inspection-rejection-flowchart.png",
      video: "/resources/videos/printing-inspection-rejection-video.mp4",
    },
  ];
  