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
    tags: ["Printing", "Inspection", "Automation"],
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
    slug: "presence-absence-of-tablets-inspection",
    title: "Tablet Presence/Absence Inspection System",
    shortDescription: "Ensuring accurate packaging with real-time tablet presence inspection.",
    description:
      "A machine vision solution designed to identify missing tablets in sealed packaging compartments during high-speed pharmaceutical production. The system leverages precision imaging and automated logic to flag and reject faulty packs.",
    thumbnail: "/resources/thumbnails/presence-absence-of-tablets-thumbnail.png",
    banner: "/resources/banners/presence-absence-of-tablets-banner.png",
    tags: ["Pharma", "Quality Control", "Vision System"],
    overview:
      "This system verifies the presence of tablets inside pre-formed plastic packaging that contains multiple individual pockets. A high-resolution camera with a backlight captures each pack as it moves down the production line. Custom vision software scans for any empty tablet compartments and triggers a pneumatic rejection if a discrepancy is found. Multiple layout templates can be used to adapt to different packaging formats.",
    problem:
      "Human inspection of tablet packs often failed to catch missing units, especially on fast-moving lines. Errors led to customer complaints and non-compliance with regulatory standards. With different packaging formats in rotation, manual verification introduced inconsistency and slowdowns.",
    solutionArchitecture: [
      "Conveyor transports sealed packs under inspection camera",
      "Backlight and industrial camera capture a clear image of the tablet compartments",
      "Vision software checks each slot to confirm presence of a tablet",
      "Different templates support various compartment layouts (e.g. 2x5, 3x4, etc.)",
      "A PLC evaluates the software output and controls the pneumatic rejection system",
      "Rejected packs are removed from the line into a separate collection bin",
      "Touchscreen HMI enables configuration and monitoring by the operator",
    ],
    keyFeatures: [
      "Reliable detection of missing tablets at line speeds up to 60 packs/sec",
      "High contrast imaging with LED backlight ensures consistent results",
      "Multi-format support with easy template switching",
      "Real-time analysis and rejection of defective packs",
      "Operator-friendly interface for adjustments and statistics",
      "Fail-safe mechanisms for camera or lighting issues",
      "Detailed rejection logs and performance metrics",
    ],
    results: [
      "100% detection accuracy in controlled testing",
      "95% reduction in labor-intensive quality control",
      "Minimized downstream quality risks and non-compliance issues",
      "Streamlined inspection for multiple packaging configurations",
      "Significantly improved throughput and consistency",
    ],
    flowchart: "/resources/flowcharts/presence-absence-of-tablets-flowchart.png",
    video: "/resources/videos/presence-absence-of-tablets-video.mp4",
  },
  {
    slug: "bottle-level-inspection",
    title: "Bottle Level Inspection System",
    shortDescription: "Real-time bottle fill level inspection with automatic rejection.",
    description:
      "An industrial vision-based system that detects underfilled or overfilled bottles on a high-speed production line. The solution captures real-time images, evaluates liquid level based on predefined thresholds, and rejects non-compliant units using a pneumatic diverter.",
    thumbnail: "/resources/thumbnails/bottle-level-inspection-thumbnail.png",
    banner: "/resources/banners/bottle-level-inspection-banner.png",
    tags: ["Bottling", "Inspection", "Automation"],
    overview:
      "The system monitors transparent bottles as they move along the conveyor. A high-speed camera positioned above or beside the line captures the liquid level inside each bottle. Custom software analyzes each frame and determines whether the fill level is within acceptable bounds. If the level is too low or too high, the bottle is flagged for rejection and a pneumatic actuator diverts it from the main line. The system supports dynamic threshold adjustment and visual feedback through a touchscreen interface.",
    problem:
      "Manual monitoring of liquid levels was inaccurate and labor-intensive. Small variations in fill level often went undetected, leading to customer complaints, product recalls, and regulatory compliance issues. High-speed lines made manual intervention impractical.",
    solutionArchitecture: [
      "Transparent PET/HDPE bottles conveyed under inspection station",
      "Side-mounted high-speed camera captures images at 60 FPS",
      "Image processing detects liquid boundary and compares to acceptable fill height",
      "Threshold logic determines whether bottle is accepted or rejected",
      "Rejection signal sent to PLC which actuates a pneumatic diverter",
      "Touchscreen HMI allows adjustment of fill-level thresholds and review of past rejections",
      "Optional integration with SCADA system for central monitoring",
    ],
    keyFeatures: [
      "High-speed real-time detection for continuous bottling lines",
      "Accurate fill-level recognition using calibrated visual markers",
      "Pneumatic ejection for non-conforming bottles",
      "Adaptive thresholding to accommodate bottle variation",
      "Touchscreen interface for operator controls and system feedback",
      "Modular setup adaptable to various bottle shapes and sizes",
      "Data logging of rejections and batch performance",
    ],
    results: [
      "100% detection accuracy for underfilled bottles",
      "Eliminated manual inspection entirely",
      "Improved consistency of product quality",
      "Reduced risk of customer complaints and returns",
      "Faster and cleaner line operation with no bottlenecks from re-inspection",
    ],
    flowchart: "/resources/flowcharts/bottle-level-inspection-flowchart.png",
    video: "/resources/videos/Bottle-level-inspection-video.mp4",
  },
];
