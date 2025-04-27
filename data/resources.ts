// data/resources.ts

export const resources = [
    {
      slug: "printing-inspection-rejection",
      title: "Printing, Inspection & Rejection",
      shortDescription: "Real-time print inspection and automatic rejection of defective bottles using machine vision.",
      thumbnail: "/resources/thumbnails/printing-inspection-rejection-thumbnail.png", // your thumbnail image
      banner: "/resources/banners/printing-inspection-rejection-banner.png",          // your big top banner image
      description: `
  Our Printing, Inspection & Rejection solution uses a combination of online data entry, industrial inkjet printing, high-speed vision inspection, and pneumatic rejection.
  
  Operators input the batch number, expiry date, and product code into our online system. This data is sent simultaneously to the industrial printer and our machine vision software.
  
  As the bottles move on the conveyor:
  - Printing is performed on the fly.
  - The camera captures images of each bottle.
  - The software verifies the printed data against the master data.
  - Incorrectly printed bottles are automatically rejected using a pneumatic guided cylinder.
  
  This ensures only accurate, high-quality products reach the market.
      `,
      features: [
        "Online data entry and master data synchronization",
        "High-speed Hikrobot camera inspection",
        "Industrial Renu PLC and guided cylinder rejection mechanism",
        "Automated good/reject decision-making",
        "Error-proof manufacturing for labeling and coding"
      ],
      results: [
        "99.8% detection accuracy achieved",
        "Reduced manual checking by 95%",
        "Improved product traceability",
        "Faster sorting and inspection speeds",
        "Enhanced overall production efficiency"
      ],
      flowchart: "/resources/flowcharts/printing-inspection-rejection-flowchart.png", // flowchart image
      video: "/resources/videos/printing-inspection-rejection-video.mp4",          // case study video
    },
    
    // ➔ Add more case studies like this structure below as you build them
    // {
    //   slug: "dimensional-measurement",
    //   title: "Dimensional Measurement System",
    //   shortDescription: "Real-time high-speed dimension checking with machine vision.",
    //   thumbnail: "/resources/thumbnails/dimensional-measurement-thumbnail.png",
    //   ...
    // },
  ];
  