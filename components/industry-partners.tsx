"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const partnerLogos = [
  "/images/hikrobot_logo.png",
  "/images/renu_logo.png",
  "/images/jayashree_encoders_logo.png",
  "/images/vap_logo.png",
  "/images/hikvision_logo.png"
];

export default function IndustryPartners() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 4, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 5, spacing: 24 },
      },
    },
    slides: { perView: 2, spacing: 12 },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {partnerLogos.map((src, idx) => (
        <div key={idx} className="keen-slider__slide flex justify-center items-center">
          <Image
            src={src}
            alt={`Partner ${idx + 1}`}
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}
