"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee"
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Brand Design",
    image: "/work/presentation.jpg",
    href: "/work/brand-design",
  },
  {
    title: "Webdesign",
    image: "/work/presentation.jpg",
    href: "/work/webdesign",
  },
  {
    title: "Illustrations",
    image: "/work/presentation.jpg",
    href: "/work/illustrations",
  },
  {
    title: "Presentations",
    image: "/work/presentation.jpg",
    href: "/work/presentations",
  },
];

const PortfolioCard = ({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
  href: string;
}) => {
  return (
    <div className="mx-2 sm:mx-2.5 md:mx-3 border-1 rounded-2xl sm:rounded-3xl p-1.5 sm:p-2">
      {/* Outer white border container with very subtle shadow */}
      <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[24px] p-[1px]">
        {/* Main container */}
        <div className="relative w-[220px] h-[160px] sm:w-[280px] sm:h-[180px] md:w-[320px] md:h-[220px] 
                      rounded-2xl sm:rounded-2xl md:rounded-3xl bg-[#D0E6DD] overflow-hidden">
          {/* Content container */}
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* Title with more spacing and lighter weight */}
      <div className="mt-2 sm:mt-3 md:mt-4 text-center">
        <h3 className="text-base sm:text-lg md:text-xl text-gray-900 font-medium my-2 sm:my-2.5 md:my-3">{title}</h3>
      </div>
    </div>
  );
};

export function PortfolioMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee 
        className="[--duration:20s] py-2 sm:py-2.5 md:py-3"
        pauseOnHover={false}
        reverse={false}
        repeat={6}
      >
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={`${item.title}-${index}`} {...item} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 sm:w-1/6 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 sm:w-1/6 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
}