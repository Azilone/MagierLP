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

// Add price to each showcase
const showcaseDetailsData = [
  {
    serviceName: 'Custom Pet Portraits',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom Pet Portraits showcase",
    clientName: "Pet Lover #1",
    price: 49.99,
    detailsTags: [ { text: "Best Seller", isHighlight: true }, { text: "Unique Art" }, { text: "Any Pet" } ]
  },
  {
    serviceName: 'Personalized Mugs',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Personalized Mugs showcase",
    clientName: "Coffee Addict",
    price: 19.99,
    detailsTags: [ { text: "Gift Idea", isHighlight: true }, { text: "Dishwasher Safe" }, { text: "Photo or Text" } ]
  },
  {
    serviceName: 'Custom T-Shirts',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom T-Shirts showcase",
    clientName: "Dog Dad",
    price: 29.99,
    detailsTags: [ { text: "Wearable Art", isHighlight: true }, { text: "Unisex" }, { text: "All Sizes" } ]
  },
  {
    serviceName: 'Embroidered or Printed Sweatshirts/Hoodies',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Sweatshirts/Hoodies showcase",
    clientName: "Cat Mom",
    price: 59.99,
    detailsTags: [ { text: "Cozy", isHighlight: true }, { text: "Embroidered or Printed" }, { text: "Customizable" } ]
  },
  {
    serviceName: 'Custom Blankets',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom Blankets showcase",
    clientName: "Gift Giver",
    price: 39.99,
    detailsTags: [ { text: "Super Soft", isHighlight: true }, { text: "Large Size" }, { text: "Photo or Art" } ]
  },
  {
    serviceName: 'Personalized Pillows/Cushions',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Personalized Pillows/Cushions showcase",
    clientName: "Home Decor Fan",
    price: 24.99,
    detailsTags: [ { text: "Decor & Comfort", isHighlight: true }, { text: "Custom Print" }, { text: "Pet Face" } ]
  },
  {
    serviceName: 'Custom Posters',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom Posters showcase",
    clientName: "Art Collector",
    price: 14.99,
    detailsTags: [ { text: "Wall Art", isHighlight: true }, { text: "Multiple Sizes" }, { text: "Glossy/Matte" } ]
  },
  {
    serviceName: 'Pet Bandanas',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Pet Bandanas showcase",
    clientName: "Fashion Pet",
    price: 12.99,
    detailsTags: [ { text: "Trendy", isHighlight: true }, { text: "Adjustable" }, { text: "Custom Text" } ]
  },
  {
    serviceName: 'Custom Phone Cases',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Custom Phone Cases showcase",
    clientName: "Pet Parent On-the-Go",
    price: 21.99,
    detailsTags: [ { text: "Protective", isHighlight: true }, { text: "Fits All Models" }, { text: "Photo Print" } ]
  },
  {
    serviceName: 'Pet Tags or Collars',
    imageSrc: "/images/product_placeholder.webp",
    imageAlt: "Pet Tags or Collars showcase",
    clientName: "Safety First",
    price: 9.99,
    detailsTags: [ { text: "Essential", isHighlight: true }, { text: "Engraved or Printed" }, { text: "Custom Info" } ]
  },
];
// -------------------------------------------

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(serviceNames[0]);
  const currentShowcase = showcaseDetailsData.find(item => item.serviceName === selectedService);

  return (
    <section className="flex w-full flex-col items-center bg-white px-2 py-0 sm:px-4 md:px-6 lg:px-8 xl:px-10 rounded-[24px] ring-1 ring-gray-200"> {/* Reduced padding and border radius */}
      {/* Inner container - Reduced gap */}
      <div className="flex w-full max-w-[1100px] flex-col gap-5 py-8 sm:py-10 md:py-14 lg:gap-8 xl:gap-10"> {/* Smaller gaps and padding */}

        {/* Section Header */}
        <div className="flex flex-col gap-2 md:gap-3 lg:gap-4"> {/* Smaller gap */}
          <div className="flex">
            <span className="w-fit rounded-[32px] border border-border-primary px-3 py-1 text-xs font-medium text-accent md:px-4 md:py-1.5 md:text-sm md:leading-4 tracking-[-0.32px]"> {/* Smaller padding/text */}
              Collections
            </span>
          </div>
          {/* Title and Description Row */}
          <div className="flex flex-col items-start justify-between gap-2 md:gap-3 lg:flex-row lg:items-start lg:gap-4"> {/* Smaller gap */}

            {/* Title Block */}
            <h2 className="text-xl font-bold leading-snug tracking-tighter text-text-primary sm:text-2xl sm:leading-snug md:text-size-26 md:leading-tight lg:text-size-32 lg:leading-tight">
              Explore Our Collections
            </h2>

          </div>
        </div>

        {/* Service Details (Tags + Showcase) */}
        <div className="flex flex-col">
          {/* Service Tags */}
          <div className="pb-2 md:pb-3"> {/* Smaller padding bottom */}
            <div className="flex flex-wrap justify-center gap-1 md:gap-1.5">
              {serviceNames.map((serviceName) => {
                const isSelected = selectedService === serviceName;
                return (
                  <div
                    key={serviceName}
                    onClick={() => setSelectedService(serviceName)}
                    className={`cursor-pointer rounded-[32px] px-2 py-1 text-xs font-medium leading-4 tracking-[-0.36px] transition-colors duration-200 md:px-3 md:py-1.5 md:text-sm ${
                      isSelected
                        ? 'bg-accent text-white'
                        : 'border border-border-primary bg-white text-text-muted hover:border-gray-400 hover:text-gray-900'
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
              <div className="flex w-full flex-col rounded-[20px] border border-border-primary bg-white p-1 sm:rounded-[28px] sm:p-2">
                {/* Image container - RESPONSIVE HEIGHT */}
                <div className="relative w-full overflow-hidden rounded-[16px] bg-gray-200 sm:rounded-[24px] aspect-[16/9]">
                  <Image
                    src={currentShowcase.imageSrc}
                    alt={currentShowcase.imageAlt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, (max-width: 1200px) 50vw, 1150px"
                    className="object-cover transition-opacity duration-500 opacity-100"
                    key={currentShowcase.serviceName}
                  />
                </div>
                {/* Showcase Details - Add price tag */}
                <div className="flex flex-col items-start justify-between gap-2 px-2 pt-2 pb-1 sm:px-3 lg:flex-row lg:items-center lg:px-4 lg:pt-3 lg:pb-2">
                  {/* Left side - Client name and price */}
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-xs font-semibold text-text-primary md:text-sm">
                      {currentShowcase.clientName}
                    </span>
                    {/* Price tag - visually emphasized */}
                    <span className="mt-1 rounded-[16px] bg-[#F7F1FF] px-3 py-1 text-base font-bold text-accent shadow-sm border border-[#E5D6FF] md:text-lg lg:text-xl">
                      {currentShowcase.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </span>
                  </div>
                  {/* Right side - Tags */}
                  <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                    {currentShowcase.detailsTags.map((tag, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-1 rounded-[32px] border px-2 py-1 text-xs font-medium leading-4 tracking-[-0.32px] sm:px-2.5 sm:py-1.5 sm:text-sm md:text-sm ${
                          tag.isHighlight
                          ? 'border-accent text-accent'
                          : 'border-border-primary bg-white text-text-primary'
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
             <div className="text-center text-gray-500 py-6 text-sm">Select a service to see details.</div>
          )}
        </div>

        {/* Call to Action Button */}
        <div className="flex w-full justify-center pt-2">
         <ShimmerButton>Upload Your Photo</ShimmerButton>
        </div>

      </div>
    </section>
  );
}