"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee"
import Image from "next/image";
import { assets } from "@/lib/assets";
import Link from "next/link";
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from "@/components/ui/image-comparison";

const portfolioItems = [
  {
    title: "PHOTO > CADEAU",
    beforeImage: assets.images.rabbits.before,
    afterImage: assets.images.rabbits.after,
    href: "",
  },
  {
    title: "PHOTO > CADEAU",
    beforeImage: assets.images.rabbits.before,
    afterImage: assets.images.rabbits.after,
    href: "",
  },
  {
    title: "PHOTO > CADEAU",
    beforeImage: assets.images.rabbits.before,
    afterImage: assets.images.rabbits.after,
    href: "",
  },
  {
    title: "PHOTO > CADEAU",
    beforeImage: assets.images.rabbits.before,
    afterImage: assets.images.rabbits.after,
    href: "",
  },
];

const PortfolioCard = ({
  title,
  beforeImage,
  afterImage,
  href,
}: {
  title: string;
  beforeImage: string;
  afterImage: string;
  href: string;
}) => {
  return (
    <div className="hover:scale-[1.02] transition-transform duration-300 mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-4 border-1 rounded-2xl sm:rounded-3xl p-1 sm:p-1.5 md:p-2 lg:p-2">
      {/* Outer white border container with very subtle shadow */}
      <div className="bg-white rounded-[14px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px] xl:rounded-[28px] p-[1px]">
        {/* Main container */}
        <div className="relative w-[150px] h-[112px] 
                      sm:w-[180px] sm:h-[135px] 
                      md:w-[220px] md:h-[165px] 
                      lg:w-[260px] lg:h-[195px]
                      xl:w-[300px] xl:h-[225px]
                      2xl:w-[320px] 2xl:h-[240px]
                      rounded-xl sm:rounded-2xl md:rounded-2xl bg-[#D0E6DD] overflow-hidden">
          {/* Content container */}
          <ImageComparison 
            className="w-full h-full" 
            enableHover
            springOptions={{
              bounce: 0.3,
              duration: 0.5,
              stiffness: 100,
              damping: 15
            }}
          >
            <ImageComparisonImage
              src={beforeImage}
              alt={`${title} Before`}
              position="left"
            />
            <ImageComparisonImage
              src={afterImage}
              alt={`${title} After`}
              position="right"
            />
            <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-sm">
              <div className="absolute left-1/2 top-1/2 h-8 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white/50" />
            </ImageComparisonSlider>
          </ImageComparison>
        </div>
      </div>
      {/* Title with more spacing and lighter weight */}
      <div className="mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3 text-center">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-900 font-medium">{title}</h3>
      </div>
    </div>
  );
};

export function PortfolioMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="group">
        <Marquee 
          className="[--duration:35s]"
          pauseOnHover
          reverse={false}
          repeat={4}
        >
          {portfolioItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className="hover:pause-marquee">
              <PortfolioCard {...item} />
            </div>
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
}