"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ResultsSection() {
  return (
    <div className="w-full bg-white rounded-[42px] border border-gray-200/50 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-[1200px] px-6 py-10 mx-auto lg:px-5 sm:px-4">
        <div className="flex flex-col items-center w-full gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[66px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#140F23] lg:text-[48px] sm:text-[36px]">
              <span>We deliver what counts</span>
              <div className="inline-flex items-center">
                <span>-</span>
                <div className="flex items-center">
                  <span className="text-[66px] font-semibold text-[#140F23] lg:text-[48px] sm:text-[36px]">
                    top
                  </span>
                  <Image
                    src="/images/premium-partner-badge.svg"
                    alt="Premium Partner Badge"
                    width={56}
                    height={56}
                    className="w-[56px] h-[56px] lg:w-[48px] lg:h-[48px] sm:w-[40px] sm:h-[40px]"
                  />
                </div>
                <span>class results</span>
              </div>
            </h2>
            <p className="text-lg text-[#828088] leading-[1.5] max-w-[625px] lg:text-base sm:text-sm">
              Whether you're a startup founder or a marketing lead, we've seen
              your design challenges – and we're here to help you solve them.
            </p>
          </div>
          <div className="flex justify-center gap-4 sm:flex-col sm:w-full">
            <Link
              href="#"
              className="px-[33px] py-[21px] bg-[#140F23] text-white rounded-[100px] text-base font-medium tracking-[-0.02em] transition-colors duration-150 sm:w-full"
            >
              Book a demo
            </Link>
            <Link
              href="#"
              className="px-[46px] py-[21px] border border-[#E5E5EA] rounded-[100px] text-base font-medium tracking-[-0.02em] text-[#140F23] transition-colors duration-150 sm:w-full"
            >
              Our work
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-[1200px] mt-10 lg:gap-6 sm:gap-4">
            {serviceCards.map((card, index) => (
              <ServiceCard
                key={card.title}
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                rotation={card.rotation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  rotation?: string;
}

function ServiceCard({
  title,
  description,
  imageSrc,
  rotation = "rotate-0",
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col w-[343px] bg-white border border-[#EBEBEE] rounded-[42px] p-[9px] transition-shadow duration-150",
        rotation,
      )}
    >
      <div className="relative w-full h-[226px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="rounded-[32px] object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-medium text-[#140F23] mb-3">{title}</h3>
        <p className="text-xs text-[#828088] leading-[1.5]">{description}</p>
      </div>
    </div>
  );
}

const serviceCards = [
  {
    title: "Illustrations",
    description:
      "Custom hand crafted illustrations to captivate your audience and bring your brand to life.",
    imageSrc: "/images/illustrations.jpg",
    rotation: "-rotate-[18deg]",
  },
  {
    title: "Presentations",
    description:
      "Stunning slides tailored to effectively communicate your ideas.",
    imageSrc: "/images/presentations.jpg",
    rotation: "rotate-[18deg]",
  },
  {
    title: "Brand & Logo Design",
    description:
      "We create impactful, scalable brand identities that make your business unforgettable.",
    imageSrc: "/images/brand-design.jpg",
    rotation: "-rotate-[9deg]",
  },
  {
    title: "Landing Pages",
    description:
      "Professionally designed pages optimized for conversions and seamless user experiences.",
    imageSrc: "/images/webdesign.jpg",
    rotation: "rotate-[9deg]",
  },
  {
    title: "Social Media Ads",
    description:
      "Attention-grabbing ads that elevate your campaigns and drive ROI.",
    imageSrc: "/images/social-media-ads.jpg",
    rotation: "rotate-0",
  },
];
