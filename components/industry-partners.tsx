"use client";

import Image from "next/image";

const partners = [
  {
    name: "Hikrobot",
    logo: "/logos/hikrobot_logo.png",
    url: "https://www.hikrobotics.com/en/",
  },
  {
    name: "Renu Electronics",
    logo: "/logos/renu_logo.png",
    url: "https://www.renuelectronics.com/",
  },
  {
    name: "Jayashree",
    logo: "/logos/jayashree_encoders_logo.png",
    url: "https://www.jayashree-electrodevices.com/",
  },
  {
    name: "Vinayak Automation Products",
    logo: "/logos/vap_logo.png",
    url: "https://www.vinayakautomation.com/",
  },
  {
    name: "Prama Hikvision",
    logo: "/logos/hikvision_logo.png",
    url: "https://www.hikvisionindia.com/",
  },
  // Add more partners here
];

export default function IndustryPartners() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {partners.map((partner, index) => (
        <a
          key={index}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80 transition"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={60}
            className="object-contain"
          />
        </a>
      ))}
    </div>
  );
}

