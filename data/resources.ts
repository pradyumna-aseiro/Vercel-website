// data/resources.ts

export const resources = [
    {
      slug: "printing-inspection-rejection",
      title: "Printing, Inspection & Rejection - Machine Vision System",
      shortDescription: "How Aseiro Industries built a real-time printing inspection and rejection system for bottles.",
      description: `
        Aseiro Industries designed a smart printing inspection and rejection system to ensure every bottle printed on the production line matched the expected text and quality. 
        An online master data entry system forwards printing information simultaneously to the printer and our machine vision system. 
        After printing, high-speed Hikrobot cameras capture the printed information in real-time. Our software compares it against the expected data. 
        If a mismatch is detected, a signal is sent to a Renu PLC controlling a solenoid valve attached to a guided cylinder, which precisely rejects the defective bottle.
        
        This solution integrates Renu PLCs, Rectangular Bar Lights, Hikrobot Vision Cameras and Lenses, and pneumatic rejection systems to create a seamless quality assurance loop.
      `,
      features: [
        "Master data portal forwarding info to printer and camera",
        "Hikrobot area scan camera for high-speed inspection",
        "VisionMaster software for real-time verification",
        "PLC logic for controlling rejection mechanisms",
        "Guided air cylinder for accurate bottle rejection",
        "Seamless integration with existing conveyor lines",
      ],
      results: [
        "Achieved 99.5% accuracy in print inspection",
        "Reduced manual sorting effort by 90%",
        "Real-time error detection minimized rework costs",
        "Increased line efficiency with automated rejection",
      ],
      thumbnail: "/resources/thumbnails/printing-inspection-thumbnail.png",
      banner: "/resources/banners/printing-inspection-banner.png",
      flowchart: "/resources/flowcharts/printing-inspection-flowchart.png",
      video: "/resources/videos/printing-inspection-demo.mp4",
    },
  ];
  