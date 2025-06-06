"use client";

import Link from "next/link";
import Image from "next/image"; // Import next/image
import { assets } from "@/lib/assets";

export function CTASection() {
  return (
    // Main container: Using Magier's style - large padding, specific bg, rounded
    <div className="relative mx-auto my-8 w-full rounded-[32px] bg-[#5F1CFC] px-5 py-12 sm:p-12 md:p-16 flex flex-col items-center overflow-hidden">
      {/* Decorative SVG - Top Right */}
      <Image
        src={assets.svg.cta1}
        alt=""
        width={150}
        height={150}
        className="absolute rotate-180 top-0 right-0 -mt-3 -mr-3 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] pointer-events-none opacity-80"
        aria-hidden="true"
        priority
      />
      {/* Decorative SVG - Bottom Left */}
      <Image
        src={assets.svg.cta2}
        alt=""
        width={150}
        height={150}
        className="absolute rotate-180 bottom-0 left-0 -mb-3 -ml-3 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] pointer-events-none opacity-80"
        aria-hidden="true"
        priority
      />

      {/* Content Wrapper */}
      <div className="flex flex-col items-center text-center gap-6 z-10 w-full">
        {/* Heading */}
        <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-4xl">
          This is⚡️where FastFrame comes in
          <span className="block text-xl sm:text-2xl lg:text-3xl mt-3 font-medium leading-snug tracking-tight">
            <br />We are your remote design team 🚀<br />
            plugged straight into your product workflow
          </span>
          <span className="block text-xl sm:text-2xl lg:text-3xl mt-3 font-medium leading-snug tracking-tight">
            <br />We handle all your mobile UI/UX tasks<br />
            → So you can focus on building. Not briefing, waiting, or chasing.
          </span>
          <span className="block text-xl sm:text-2xl lg:text-3xl mt-3 font-medium leading-snug tracking-tight">
            <br />All done in days. Not weeks.
          </span>
        </h2>

        {/* Button */}
        <div className="mt-6">
          <Link
            href="/demo"
            className="inline-block rounded-full bg-white px-6 py-3 text-base font-bold text-[#5F1CFC] tracking-tight transition-transform duration-200 hover:scale-105 sm:px-8 sm:py-4"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </div>
  );
}