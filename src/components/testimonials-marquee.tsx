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
    <div className="mx-4 border-1 rounded-4xl p-3">
      {/* Outer white border container with very subtle shadow */}
      <div className="bg-white rounded-[32px] p-[1px]">
        {/* Main container */}
        <div className="relative w-[420px] h-[280px] rounded-4xl bg-[#D0E6DD] overflow-hidden">
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
      <div className="mt-5 text-center">
        <h3 className="text-2xl text-gray-900 font-medium my-4">{title}</h3>
      </div>
    </div>
  );
};

export function PortfolioMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <Marquee 
        className="[--duration:25s] py-4"  // Faster animation and added padding
        pauseOnHover={false}
        reverse={false}
        repeat={6}  // Increased repeat for smoother infinite scroll
      >
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={`${item.title}-${index}`} {...item} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
}