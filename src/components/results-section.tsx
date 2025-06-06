"use client";

import React from "react";
import Image from "next/image";
import { assets } from "@/lib/assets";
import { motion } from "framer-motion"; // Import motion

import CTAButton from "./ui/CTAButton";

// Define the correct Diamond Icon component (kept as defined, though not used in Cards)
function DiamondIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
      {...props}
      color="#6A45E3"
    >
      <path d="M32 0 L64 32 L32 64 L0 32 Z M32 12.9 L51.1 32 L32 51.1 L12.9 32 Z"></path>
    </svg>
  );
}

function Cards() {
  // Adjust horizontal spread based on screen size implicitly via card widths
  // Or explicitly define different offsets if needed (more complex)
  // Let's try reducing the base offset slightly first
  const baseHorizontalOffsetMultiplier = 50; // Reduced from 55 for better fit on smaller screens
  const baseVerticalOffsetMultiplier = 12; // Slightly reduced vertical lift
  const baseScaleMultiplier = 0.06; // Slightly reduced scale difference
  const baseOpacityMultiplier = 0; // Slightly increased opacity difference for clarity

  return (
    // Use min-height for better flexibility on different screen sizes
    <div className="w-full min-h-[600px] lg:min-h-[650px] relative py-8 [perspective:1000px]">
      {serviceCards.map((card, index) => {
        const centerOffset = index - 2; // Center card is index 2

        // Use the base multipliers defined above
        const rotation = centerOffset * 12; // Keep rotation the same
        const horizontalOffsetPercent = centerOffset * baseHorizontalOffsetMultiplier;
        const verticalOffsetPercent = Math.abs(centerOffset) * baseVerticalOffsetMultiplier;
        const scale = 1 - Math.abs(centerOffset) * baseScaleMultiplier;
        const finalOpacity = 1 - Math.abs(centerOffset) * baseOpacityMultiplier;
        const zIndex = 5 - Math.abs(centerOffset);

        return (
          <motion.div
            key={card.title}
            className="absolute left-1/2 top-1/2 transform-gpu" // Base positioning, GPU acceleration
            style={{
              zIndex: zIndex,
              // transformOrigin: "center center" // Usually handled automatically
            }}
            initial={{ // Starting state (before animation / view)
              opacity: 0,
              scale: 0.6, // Start slightly larger than before, but still small
              x: "-50%", // Start centered horizontally
              y: "-40%", // Start centered vertically (relative to top-1/2)
              rotate: 0,  // Start unrotated
            }}
            whileInView={{ // Target state (animate TO this when in view)
              opacity: finalOpacity,
              scale: scale,
              x: `calc(-50% + ${horizontalOffsetPercent}%)`,
              y: `calc(-50% + ${verticalOffsetPercent}%)`,
              rotate: rotation,
            }}
            viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% is visible
            transition={{ // Animation timing and easing (applies to whileInView)
              duration: 0.7, // Slightly longer duration
              ease: [0.25, 0.1, 0.25, 1.0], // A common ease-out cubic bezier
              delay: Math.abs(centerOffset) * 0.08, // Stagger animation start slightly more
            }}
          >
            <ServiceCard
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

// --- ResultsSection Component ---
export function ResultsSection() {
  return (
    // Added overflow-hidden to the main container if needed, but clipping should happen within Cards boundary
    <div className="w-full bg-white px-4 py-0 sm:px-6 md:px-8 lg:px-12 xl:px-16 rounded-[32px] ring-1 ring-gray-200 overflow-hidden">
      {/* Section for cards - adjusted padding */}
      <div className="w-full  pb-16 md:pb-24"> {/* Added top padding, adjusted bottom */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"> {/* Consistent padding */}
          {/* Cards container with gradient overlay */}
          <div className="relative">
            {/* Radial gradient overlay centered at bottom */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 h-1/2 w-3/4 z-10" style={{
              background: 'radial-gradient(ellipse at bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0) 70%, transparent)'
            }} />
            {/* Cards - Framer Motion handles animation timing */}
            <div className="relative z-0">
              <Cards />
            </div>
          </div>
        </div>
      </div>

      {/* Content section - adjust top margin */}
      <div className="w-full pb-16 md:pb-24"> {/* Added bottom padding */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8"> {/* Consistent padding */}
          <div className="flex flex-col items-center -mt-12 md:-mt-16"> {/* Slightly adjusted negative margin */}
            {/* Text Content - Responsive text sizes already handled */}
            <div className="flex flex-col items-center gap-6 md:gap-8 text-center w-full">
              <h2 className="text-[40px] font-semibold leading-[1.15] tracking-tight text-[#140F23] sm:text-[48px] md:text-[54px] lg:text-[64px] xl:text-[72px] w-full max-w-[1200px]">
                Turn your pet's photo into custom art
               
              </h2>
              <p className="text-base text-[#828088] leading-relaxed max-w-xl lg:max-w-3xl mx-auto lg:text-lg w-full"> {/* Adjusted max-width slightly */}
              GetPawtrait.com: premium pet portraits, previewed in real time, printed and delivered to your door in days — starting at €19.
              </p>
            </div>

            {/* Buttons - Responsive layout already handled */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto mt-10 md:mt-12">
              <CTAButton />
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}


// --- Service Card Component (Responsive widths already included) ---
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    // Responsive width classes
    <div className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] bg-white border border-[#EBEBEE] rounded-[32px] p-4 shadow-lg">
      {/* Responsive height classes */}
      <div className="relative w-full h-[170px] sm:h-[180px] md:h-[200px] lg:h-[220px] mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          // Updated sizes attribute to match responsive widths/heights
          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, 340px"
          className="rounded-[24px] object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-base md:text-lg font-medium text-[#140F23]">{title}</h3>
        <p className="text-sm text-[#828088] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}


// --- Service Card Data (Remains the same) ---
const serviceCards = [
  {
    title: "Posters & Canvas",
    description:
      "Transform your pet photos into stunning wall art. Premium quality prints delivered to your door in days.",
    imageSrc: assets.images.customer.ac1,
  },
  {
    title: "Mugs & Phone Cases",
    description: 
      "Show off your furry friend everywhere you go. Durable, high-quality prints that last.",
    imageSrc: assets.images.customer.ac2,
  },
  {
    title: "Gift Sets",
    description:
      "Perfect for pet lovers. Mix and match products to create the ultimate personalized gift.",
    imageSrc: assets.images.customer.ac3,
  },
  {
    title: "Custom Styles",
    description:
      "Choose from our exclusive collection of pet-specific art styles. From classic to modern.",
    imageSrc: assets.images.customer.ac4,
  },
  {
    title: "Premium Quality",
    description:
      "Professional printing, worldwide shipping, and gift wrapping available. Satisfaction guaranteed.",
    imageSrc: assets.images.customer.ac5,
  },
];