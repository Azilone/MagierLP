"use client";

import React, { useState } from 'react'; // Assurez-vous que React et useState sont importés
import Image from "next/image";
import { ShimmerButton } from './magicui/shimmer-button';

// --- Données (inchangées par rapport à la version précédente) ---
const serviceNames = [
  'Custom Pet Portraits',
  'Personalized Mugs',
  'Custom T-Shirts',
  'Embroidered or Printed Sweatshirts/Hoodies',
  'Custom Blankets',
  'Personalized Pillows/Cushions',
  'Custom Posters',
  'Pet Bandanas',
  'Custom Phone Cases',
  'Pet Tags or Collars',
];

const showcaseDetailsData = [
  {
    serviceName: 'Custom Pet Portraits',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom Pet Portraits showcase",
    clientName: "Pet Lover #1",
    detailsTags: [ { text: "Best Seller", isHighlight: true }, { text: "Unique Art" }, { text: "Any Pet" } ]
  },
  {
    serviceName: 'Personalized Mugs',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Personalized Mugs showcase",
    clientName: "Coffee Addict",
    detailsTags: [ { text: "Gift Idea", isHighlight: true }, { text: "Dishwasher Safe" }, { text: "Photo or Text" } ]
  },
  {
    serviceName: 'Custom T-Shirts',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom T-Shirts showcase",
    clientName: "Dog Dad",
    detailsTags: [ { text: "Wearable Art", isHighlight: true }, { text: "Unisex" }, { text: "All Sizes" } ]
  },
  {
    serviceName: 'Embroidered or Printed Sweatshirts/Hoodies',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Sweatshirts/Hoodies showcase",
    clientName: "Cat Mom",
    detailsTags: [ { text: "Cozy", isHighlight: true }, { text: "Embroidered or Printed" }, { text: "Customizable" } ]
  },
  {
    serviceName: 'Custom Blankets',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom Blankets showcase",
    clientName: "Gift Giver",
    detailsTags: [ { text: "Super Soft", isHighlight: true }, { text: "Large Size" }, { text: "Photo or Art" } ]
  },
  {
    serviceName: 'Personalized Pillows/Cushions',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Personalized Pillows/Cushions showcase",
    clientName: "Home Decor Fan",
    detailsTags: [ { text: "Decor & Comfort", isHighlight: true }, { text: "Custom Print" }, { text: "Pet Face" } ]
  },
  {
    serviceName: 'Custom Posters',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom Posters showcase",
    clientName: "Art Collector",
    detailsTags: [ { text: "Wall Art", isHighlight: true }, { text: "Multiple Sizes" }, { text: "Glossy/Matte" } ]
  },
  {
    serviceName: 'Pet Bandanas',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Pet Bandanas showcase",
    clientName: "Fashion Pet",
    detailsTags: [ { text: "Trendy", isHighlight: true }, { text: "Adjustable" }, { text: "Custom Text" } ]
  },
  {
    serviceName: 'Custom Phone Cases',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom Phone Cases showcase",
    clientName: "Pet Parent On-the-Go",
    detailsTags: [ { text: "Protective", isHighlight: true }, { text: "Fits All Models" }, { text: "Photo Print" } ]
  },
  {
    serviceName: 'Pet Tags or Collars',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Pet Tags or Collars showcase",
    clientName: "Safety First",
    detailsTags: [ { text: "Essential", isHighlight: true }, { text: "Engraved or Printed" }, { text: "Custom Info" } ]
  },
];
// -------------------------------------------

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(serviceNames[0]);
  const currentShowcase = showcaseDetailsData.find(item => item.serviceName === selectedService);

  return (
    <section className="flex w-full flex-col items-center bg-white px-4 py-0 sm:px-6 md:px-8 lg:px-12 xl:px-16 rounded-[32px] ring-1 ring-gray-200"> {/* Adjusted padding slightly */}
      {/* Inner container - Adjusted responsive gap */}
      <div className="flex w-full max-w-[1200px] flex-col gap-8 py-12 sm:py-16 md:py-20 lg:gap-12 xl:gap-16"> {/* Réduit gaps et padding */}

        {/* Section Header */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6"> {/* Responsive gap */}
          <div className="flex">
            <span className="w-fit rounded-[42px] border border-[#E5E5EA] px-4 py-1.5 text-sm font-medium text-[#5F1CFC] md:px-[17px] md:py-[7.5px] md:text-base md:leading-4 tracking-[-0.32px]"> {/* Adjusted padding/text for smaller screens */}
              Collections
            </span>
          </div>
          {/* Title and Description Row */}
          <div className="flex flex-col items-start justify-between gap-4 md:gap-6 lg:flex-row lg:items-start lg:gap-8"> {/* Changed to flex-col first, then lg:flex-row */}

            {/* Title Block */}
            <h2 className="text-2xl font-bold leading-snug tracking-tighter text-[#140F23] sm:text-3xl sm:leading-snug md:text-[32px] md:leading-tight lg:text-[40px] lg:leading-tight">
              Explore Our Collections
            </h2>

           

          </div>
        </div>

        {/* Service Details (Tags + Showcase) */}
        <div className="flex flex-col">
          {/* Service Tags */}
          <div className="pb-4 md:pb-6"> {/* Réduit padding bottom */}
            {/* Added text-sm md:text-base for smaller tags on mobile */}
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
              {serviceNames.map((serviceName) => {
                const isSelected = selectedService === serviceName;
                return (
                  <div
                    key={serviceName}
                    onClick={() => setSelectedService(serviceName)}
                    className={`cursor-pointer rounded-[42px] px-2.5 py-1.5 text-xs font-medium leading-4 tracking-[-0.36px] transition-colors duration-200 md:px-4 md:py-2 md:text-sm ${
                      isSelected
                        ? 'bg-[#5F1CFC] text-white'
                        : 'border border-[#E5E5EA] bg-white text-[#828088] hover:border-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {serviceName}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Showcase Area */}
          {currentShowcase ? (
            <div className="flex w-full items-start justify-center">
              {/* Adjusted padding for smaller screens */}
              <div className="flex w-full flex-col rounded-[32px] border border-[#E5E5EA] bg-white p-2 sm:rounded-[42px] sm:p-[13px]">
                {/* Image container - RESPONSIVE HEIGHT */}
                {/* Utilisation d'un aspect-ratio 16:9 pour un format paysage standard */}
                <div className="relative w-full overflow-hidden rounded-[24px] bg-gray-200 sm:rounded-[32px] aspect-[16/9]"> {/* Ratio 16:9, responsive */}
                  <Image
                    src={currentShowcase.imageSrc}
                    alt={currentShowcase.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, (max-width: 1200px) 50vw, 1150px" // Adjusted sizes attribute
                    className="object-cover transition-opacity duration-500 opacity-100"
                    key={currentShowcase.serviceName}
                  />
                </div>
                {/* Showcase Details - Adjusted padding and stacking */}
                {/* Stacks earlier (below lg), adjusts padding */}
                <div className="flex flex-col items-start justify-between gap-3 px-2 pt-3 pb-2 sm:px-4 lg:flex-row lg:items-center lg:px-5 lg:pt-4 lg:pb-3">
                  {/* Left side - Adjusted text size */}
                  <div className="flex items-center">
                     <span className="text-sm font-semibold text-[#140F23] md:text-base">
                       {currentShowcase.clientName}
                     </span>
                  </div>
                  {/* Right side - Tags - Adjusted gap and text size */}
                  <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                     {currentShowcase.detailsTags.map((tag, index) => (
                       <div
                         key={index}
                         className={`flex items-center gap-1 rounded-[42px] border px-2 py-1 text-xs font-medium leading-4 tracking-[-0.32px] sm:px-3 sm:py-1.5 sm:text-sm md:text-sm ${
                           tag.isHighlight
                           ? 'border-[#5F1CFC] text-[#5F1CFC]'
                           : 'border-[#E5E5EA] bg-white text-[#140F23]'
                         }`}
                       >
                         <span>{tag.text}</span>
                       </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
             <div className="text-center text-gray-500 py-10">Select a service to see details.</div>
          )}
        </div>

        {/* Call to Action Button */}
        {/* Adjusted padding top for responsiveness */}
        <div className="flex w-full justify-center">
         <ShimmerButton>Upload Your Photo</ShimmerButton>
        </div>

      </div>
    </section>
  );
}