"use client";

import React from "react";
import Image from "next/image"; // Import next/image
import { assets } from "@/lib/assets";

export function HowItWorksSection() {
  return (
    // Section container with consistent vertical padding
    <section className="w-full py-20 md:py-28 ">
      {/* Max width container with responsive padding */}
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-16 px-4 sm:px-6 lg:px-8 xl:max-w-7xl">

        {/* Top Section: Heading + Paragraph */}
        <div className="flex w-full flex-col items-start gap-8 lg:gap-12">
          {/* Badge */}
          <div className="flex flex-col items-start">
            {/* Corrected border class */}
            <span className="rounded-[42px] border-2 border-[#E5E5EA] py-[7.5px] px-[17px] text-base font-medium leading-4 tracking-[-0.32px] text-[#5F1CFC]">
              How it works
            </span>
          </div>

          {/* Heading Text + Description Paragraph */}
          <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Heading container */}
            <div className="w-full lg:w-auto">
              {/* Responsive heading */}
              <h2 className="text-4xl font-bold leading-tight tracking-tighter text-[#140F23] sm:text-3xl lg:text-[50px] xl:text-[56px]">
              How to get your custom pet portrait{' '}
                {/* Inline container for "magic" + icon */}
                <span className="inline-flex items-center gap-2 align-bottom">
                  {/* Pet Paw SVG from public/svg/petpaw.svg */}
                  <svg
                    width="68"
                    height="68"
                    viewBox="0 0 64 64"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 text-[#5F1CFC] rotate-[-12deg]"
                  >
                    <path d="M18.137 21.824c-5.645 1.549-9.088 7.132-8.092 10.944c.998 3.813 4.766-.53 10.411-2.08c5.643-1.551 11.024.281 10.028-3.532c-.997-3.813-6.702-6.883-12.347-5.332" />f
                    <path d="M13.768 20.047c1.701-.632 1.918-4.417 1.012-6.969c-.906-2.55-3.02-4.103-4.721-3.469c-1.7.635-2.344 3.217-1.438 5.767c.906 2.551 3.445 5.306 5.147 4.671" />
                    <path d="M20.708 18.078c1.803-.162 2.967-3.759 2.736-6.465c-.23-2.704-1.879-4.763-3.682-4.604c-1.803.163-3.079 2.486-2.848 5.19c.232 2.704 1.989 6.041 3.794 5.879" />
                    <path d="M28.678 10.164c-1.809 0-3.275 2.2-3.275 4.914c0 2.716 1.467 6.195 3.275 6.195c1.81 0 3.276-3.479 3.276-6.195c.001-2.715-1.466-4.914-3.276-4.914" />
                    <path d="M3.318 17.127c-1.568.926-1.766 3.584-.439 5.936c1.324 2.35 4.293 4.612 5.86 3.685c1.568-.927 1.141-4.693-.184-7.043c-1.325-2.352-3.671-3.505-5.237-2.578" />
                    <path d="M45.865 44.529c-5.645-1.551-11.352 1.52-12.348 5.332c-.998 3.813 4.385 1.981 10.029 3.532c5.645 1.55 9.412 5.893 10.408 2.08c.998-3.812-2.446-9.394-8.089-10.944" />
                    <path d="M50.234 42.755c1.699.632 4.24-2.123 5.146-4.674c.906-2.551.262-5.133-1.438-5.767c-1.701-.635-3.813.919-4.719 3.47s-.69 6.336 1.011 6.971" />
                    <path d="M43.295 40.782c1.803.162 3.561-3.174 3.791-5.878s-1.043-5.028-2.846-5.19c-1.803-.16-3.451 1.9-3.684 4.605c-.23 2.705.936 6.301 2.739 6.463" />
                    <path d="M35.322 43.978c1.811 0 3.277-3.479 3.277-6.195c0-2.714-1.467-4.914-3.277-4.914s-3.277 2.2-3.277 4.916c0 2.714 1.469 6.193 3.277 6.193" />
                    <path d="M60.683 39.832c-1.568-.927-3.912.226-5.236 2.577c-1.323 2.351-1.751 6.117-.186 7.044c1.568.927 4.537-1.335 5.861-3.685c1.324-2.351 1.127-5.009-.439-5.936" />
                  </svg>
                </span>{' '}
            
              </h2>
            </div>

            {/* Paragraph with responsive max-width */}
            <p className="w-full max-w-md text-md leading-relaxed tracking-[-0.36px] text-[#828088] lg:pt-2">
              
            </p>
          </div>
        </div>

        {/* Cards Section - Responsive Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Card 1 */}
          {/* Corrected border class */}
          <div className="relative flex flex-col items-start rounded-[42px] border-2 border-gray-200] bg-white p-3 ">
            {/* Number Chip */}
            <div className="absolute -top-4 -left-4 flex items-center justify-center w-9 h-9 rounded-full bg-[#5F1CFC] text-white font-bold text-lg shadow-md border-4 border-white">1</div>
            {/* Placeholder Image Area */}
            <div className="flex h-[300px] w-full items-center justify-center rounded-[32px] bg-[#F7E6D4] bg-[radial-gradient(circle,_#ede9fe_1px,_transparent_1px)] [background-size:20px_20px]">
              {/* Replace with <Image /> component */}
                <Image
                  src={assets.images.hiw["1"]}
                  alt="Upload your pet photo"
                  className="object-contain w-full h-full rounded-[32px]"
                  width={400}
                  height={305}
                />
            </div>
            {/* Card Content */}
            <div className="flex w-full flex-col items-center justify-center gap-3 p-6 pt-5 text-center">
              <h3 className="text-xl font-medium leading-tight tracking-tight text-[#140F23] md:text-2xl">
                Upload a photo of your pet
              </h3>
              <p className="text-base leading-relaxed text-[#828088] sm:text-lg">
                Pick a photo you like—any clear picture works. Just upload it to get started.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          {/* Corrected border class */}
          <div className="relative flex flex-col items-start rounded-[42px] border-2 border-gray-200 bg-white p-3 ">
            {/* Number Chip */}
            <div className="absolute -top-4 -left-4 flex items-center justify-center w-9 h-9 rounded-full bg-[#5F1CFC] text-white font-bold text-lg shadow-md border-4 border-white">2</div>
            <div className="flex h-[300px] w-full items-center justify-center rounded-[32px] bg-[#F7E6D4] bg-[radial-gradient(circle,_#ede9fe_1px,_transparent_1px)] [background-size:20px_20px]">
         
              <Image
                src={assets.images.hiw["2"]}
                alt="Choose your favorite style"
                className="object-contain w-full h-full rounded-[32px] opacity-90"
                width={400}
                height={305}
              />
            </div>
             {/* Card Content */}
            <div className="flex w-full flex-col items-center justify-center gap-3 p-6 pt-5 text-center">
              <h3 className="text-xl font-medium leading-tight tracking-tight text-[#140F23] md:text-2xl">
                Choose your favorite style
              </h3>
              <p className="text-base leading-relaxed text-[#828088] sm:text-lg">
                Pick between a handcrafted design or get an instant, high-quality AI illustration. See previews on different products before you decide.
              </p>
            </div>
          </div>

          {/* Card 3 (Rotated) */}
          {/* Corrected border class. Added transform-gpu for performance. */}
          <div className="relative flex transform-gpu flex-col items-start rounded-[42px] border-2 border-gray-200 bg-white p-3 transition-transform duration-300 md:rotate-[4deg] md:hover:rotate-[2deg]">
            {/* Number Chip */}
            <div className="absolute -top-4 -left-4 flex items-center justify-center w-9 h-9 rounded-full bg-[#5F1CFC] text-white font-bold text-lg shadow-md border-4 border-white">3</div>
            {/* Placeholder Image Area */}
            <div className="flex h-[300px] w-full items-center justify-center rounded-[32px] bg-[#E9C69E]">
              {/* Replace with <Image /> component */}
              <Image
                src={assets.images.hiw["3"]}
                alt="Get your artwork"
                className="object-contain w-full h-full rounded-[32px] opacity-90"
                width={400}
                height={305}
              />
            </div>
             {/* Card Content */}
            <div className="flex w-full flex-col items-center justify-center gap-3 p-6 pt-5 text-center">
              <h3 className="text-xl font-medium leading-tight tracking-tight text-[#140F23] md:text-2xl">
                Get your artwork
              </h3>
              <p className="text-base leading-relaxed text-[#828088] sm:text-lg">
                Place your order and receive your pet's portrait as a digital file or printed product. It's that simple.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights - Wrapping Flex container */}
        <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8 lg:gap-x-10">
          {/* Feature 1 */}
          <div className="flex items-center gap-2">
            {/* Lightning bolt icon chip */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5F1CFC] text-white">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M11 2L4 11h5l-1 7 7-9h-5l1-7z" fill="white"/>
              </svg>
            </span>
            <span className="text-base font-medium text-[#5F1CFC]">
              Instant result preview
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-2">
            {/* Diamond icon chip (SVG from public/svg/Icône SVG Diamant.svg) */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5F1CFC] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-4 h-4">
                <path fill="#fff" d="M32.711 64 64 30H44.71L32.711 64zM64 28l-8.762-11.969L46.031 28H64zM53.508 15H32.437l11.494 12.45L53.508 15zM32 30H21.41L32 59.99 42.59 30H32zM0 30l31.289 34L19.29 30H0zM32 28h9.72L32 17.47 22.28 28H32zM8.762 16.031 0 28h17.969L8.762 16.031zM31.563 15H10.492l9.577 12.45L31.563 15zM32 13a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v11a1 1 0 0 1-1 1zM40 13a1 1 0 0 1-.759-1.65l6-7a1 1 0 0 1 1.518 1.3l-6 7A.993.993 0 0 1 40 13zM24 13a.993.993 0 0 1-.759-.35l-6-7a1 1 0 0 1 1.518-1.3l6 7A1 1 0 0 1 24 13z"/>
              </svg>
            </span>
            <span className="text-base font-medium text-[#5F1CFC]">
              High quality materials
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-2">
            {/* Globe icon chip */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5F1CFC] text-white">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2" fill="none"/>
                <ellipse cx="10" cy="10" rx="7" ry="3" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M10 3v14" stroke="white" strokeWidth="2"/>
              </svg>
            </span>
            <span className="text-base font-medium text-[#5F1CFC]">
              Worldwide delivery
            </span>
          </div>
          


        </div>

      </div>
    </section>
  );
}