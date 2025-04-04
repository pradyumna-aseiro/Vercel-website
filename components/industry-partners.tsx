"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  // Add more partners if needed
];

export default function IndustryPartners() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4,
      spacing: 12, // was 30
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2.5, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1.5, spacing: 6 },
      },
    },
  });  

  return (
    <div ref={sliderRef} className="keen-slider">
      {partners.map((partner, index) => (
        <a
          key={index}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="keen-slider__slide flex justify-center items-center"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={60}
            className="object-contain hover:opacity-80 transition"
          />
        </a>
      ))}
    </div>
  );
}
