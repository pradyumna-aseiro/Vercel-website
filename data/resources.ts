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
  {
    slug: "presence-absence-of-tablets",
    title: "Tablet Presence/Absence Inspection System",
    shortDescription: "Ensuring accurate blister packing with real-time tablet presence detection.",
    description:
      "An industrial vision solution designed to detect missing tablets in blister packs on high-speed pharmaceutical production lines. The system uses advanced camera setups and image processing to identify presence or absence anomalies and trigger rejection mechanisms.",
    thumbnail: "/resources/thumbnails/presence-absence-of-tablets-thumbnail.png",
    banner: "/resources/banners/presence-absence-of-tablets-banner.png",
    overview:
      "This automated inspection system uses a high-resolution industrial camera and backlighting to clearly visualize tablets in blister packs. Each frame is processed in real-time to confirm full tablet presence. Any packs with missing tablets are flagged and ejected from the line using a pneumatic system. The vision software offers configurable templates to match various blister layouts and tablet shapes.",
    problem:
      "Manual inspection of blister packs was slow and prone to human error, often allowing defective packs to reach packaging or shipment stages. High-speed lines made consistent manual inspection infeasible, risking regulatory non-compliance and customer dissatisfaction.",
    solutionArchitecture: [
      "High-speed conveyor carrying blister packs under inspection station",
      "Industrial camera with uniform backlight captures top-down view of each pack",
      "Vision software checks for presence/absence by comparing intensity profiles at each cavity location",
      "Custom templates for different blister configurations (2x5, 3x4, etc.)",
      "PLC communicates with vision system and actuates rejection mechanism",
      "Rejected packs are removed by pneumatic diverter into a separate bin",
      "User-friendly touchscreen for adjusting camera focus and inspection parameters",
    ],
    keyFeatures: [
      "Real-time detection of missing tablets at up to 60 packs per second",
      "Consistent image clarity via controlled lighting setup",
      "Automatic rejection with pneumatic actuator for any defective pack",
      "Support for multiple blister formats with quick program switching",
      "Statistical logging of rejection rates and inspection metrics",
      "Integration-ready with SCADA/MES systems",
      "Fail-safe alarm for camera disconnect or light failure",
    ],
    results: [
      "Achieved 100% detection rate for tablet absence under test conditions",
      "Reduced post-packing inspection effort by 95%",
      "Improved compliance with pharmaceutical quality standards",
      "Minimal false positives with intelligent intensity threshold tuning",
      "Boosted operator confidence and line throughput",
    ],
    flowchart: "/resources/flowcharts/presence-absence-of-tablets-flowchart.png",
    video: "/resources/videos/presence-absence-of-tablets.mp4",
  }  
];
