"use client";

import React, { useState } from 'react'; // Assurez-vous que React et useState sont importés
import Image from "next/image";

// --- Données (inchangées par rapport à la version précédente) ---
const serviceNames = [
  'Ad Creatives', 'Brand Design', 'Motion Design',
  'Webflow Development', 'Blog Images', 'Illustrations',
  'Social Media Content',
  // ... (ajoutez tous vos services)
];

const showcaseDetailsData = [
   {
    serviceName: 'Ad Creatives',
    imageSrc: "/images/showcase-ad-creatives.webp", // Changez pour le chemin réel
    imageAlt: "Ad Creatives showcase",
    clientName: "Marketing Pro",
    detailsTags: [ { text: "Germany", icon: "/icons/location.svg" }, { text: "4 days", icon: "/icons/calendar.svg" }, { text: "100 Ads per month" }, { text: "SaaS", isHighlight: true }]
  },
  {
    serviceName: 'Brand Design',
    imageSrc: "/images/showcase-brand-design.webp",
    imageAlt: "Brand Design showcase",
    clientName: "Creative Solutions",
    detailsTags: [ { text: "USA", icon: "/icons/location.svg" }, { text: "2 weeks", icon: "/icons/calendar.svg" }, { text: "Full Branding Suite" }, { text: "Agency", isHighlight: true }]
  },
   {
    serviceName: 'Motion Design',
    imageSrc: "/images/showcase-motion-design.webp",
    imageAlt: "Motion Design showcase",
    clientName: "Animotion Studios",
    detailsTags: [ { text: "Canada", icon: "/icons/location.svg" }, { text: "1 month", icon: "/icons/calendar.svg" }, { text: "Explainer Video" }, { text: "Entertainment", isHighlight: true }]
  },
   {
    serviceName: 'Webflow Development',
    imageSrc: "/images/showcase-webflow.webp",
    imageAlt: "Webflow Development showcase",
    clientName: "Digital Flow",
    detailsTags: [ { text: "UK", icon: "/icons/location.svg" }, { text: "3 weeks", icon: "/icons/calendar.svg" }, { text: "Marketing Website" }, { text: "Web Agency", isHighlight: true }]
  },
  {
    serviceName: 'Blog Images',
    imageSrc: "/images/showcase-blog-images.webp",
    imageAlt: "Blog Images showcase",
    clientName: "Content Hub",
    detailsTags: [{ text: "Remote" }, { text: "Ongoing" }, { text: "Graphics" }]
  },
  {
    serviceName: 'Illustrations',
    imageSrc: "/images/showcase-illustrations.webp",
    imageAlt: "Illustrations showcase",
    clientName: "Artistic Inc.",
    detailsTags: [{ text: "France" }, { text: "Varies" }, { text: "Custom Art" }]
  },
  {
    serviceName: 'Social Media Content',
    imageSrc: "/images/showcase-social-media.webp",
    imageAlt: "Social Media Content showcase",
    clientName: "Viral Reach",
    detailsTags: [{ text: "Global" }, { text: "Monthly" }, { text: "Engagement Pack" }]
  },
  // --- Assurez-vous d'avoir un objet ici pour chaque serviceName ---
];
// -------------------------------------------

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(serviceNames[0]);
  const currentShowcase = showcaseDetailsData.find(item => item.serviceName === selectedService);

  return (
    <section className="flex w-full flex-col items-center bg-white px-4 py-0 sm:px-6 md:px-8 lg:px-12 xl:px-16 rounded-[32px] ring-1 ring-gray-200"> {/* Adjusted padding slightly */}
      {/* Inner container - Adjusted responsive gap */}
      <div className="flex w-full max-w-[1200px] flex-col gap-12 py-20 sm:py-24 md:py-28 lg:gap-16 xl:gap-20"> {/* Adjusted gaps and padding */}

        {/* Section Header */}
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6"> {/* Responsive gap */}
          <div className="flex">
            <span className="w-fit rounded-[42px] border border-[#E5E5EA] px-4 py-1.5 text-sm font-medium text-[#5F1CFC] md:px-[17px] md:py-[7.5px] md:text-base md:leading-4 tracking-[-0.32px]"> {/* Adjusted padding/text for smaller screens */}
              Our services
            </span>
          </div>
          {/* Title and Description Row */}
          <div className="flex flex-col items-start justify-between gap-4 md:gap-6 lg:flex-row lg:items-start lg:gap-8"> {/* Changed to flex-col first, then lg:flex-row */}

            {/* Title Block */}
            {/* Adjusted line-height for responsiveness */}
            <h2 className="text-3xl font-bold leading-snug tracking-tighter text-[#140F23] sm:text-4xl sm:leading-snug md:text-[45px] md:leading-tight lg:text-[55px] lg:leading-tight">
              We cover all your design needs
            </h2>

            {/* Description Text - Max width applied only on large screens */}
            <p className="w-full text-base leading-relaxed tracking-[-0.36px] text-[#828088] sm:text-md lg:max-w-[387px] lg:flex-shrink-0 lg:mt-1"> {/* Applied max-w only on lg+, adjusted text size/leading */}
              With hands-on expertise and experience working with 100+ clients,
              we make solving your design challenges quicker, simpler, and
              stress-free.
            </p>

          </div>
        </div>

        {/* Service Details (Tags + Showcase) */}
        <div className="flex flex-col">
          {/* Service Tags */}
          <div className="pb-6 md:pb-8"> {/* Adjusted padding bottom */}
            {/* Added text-sm md:text-base for smaller tags on mobile */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {serviceNames.map((serviceName) => {
                const isSelected = selectedService === serviceName;
                return (
                  <div
                    key={serviceName}
                    onClick={() => setSelectedService(serviceName)}
                    className={`cursor-pointer rounded-[42px] px-3 py-2 text-sm font-medium leading-4 tracking-[-0.36px] transition-colors duration-200 md:px-[17px] md:py-[11px] md:text-base ${ // Adjusted padding/text size
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
                {/* Using aspect-ratio is generally preferred if possible! */}
                <div className="relative w-full overflow-hidden rounded-[24px] bg-gray-200 sm:rounded-[32px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[616.94px]"> {/* Responsive height */}
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
                <div className="flex flex-col items-start justify-between gap-4 px-3 pt-4 pb-3 sm:px-5 lg:flex-row lg:items-center lg:px-7 lg:pt-[26px] lg:pb-5">
                  {/* Left side - Adjusted text size */}
                  <div className="flex items-center">
                     <span className="text-base font-semibold text-[#140F23] md:text-lg">
                       {currentShowcase.clientName}
                     </span>
                  </div>
                  {/* Right side - Tags - Adjusted gap and text size */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                     {currentShowcase.detailsTags.map((tag, index) => (
                       <div
                         key={index}
                         // Adjusted padding, text size for smaller screens
                         className={`flex items-center gap-1 rounded-[42px] border px-3 py-1.5 text-xs font-medium leading-4 tracking-[-0.32px] sm:px-[17px] sm:py-[7.5px] sm:text-sm md:text-base ${
                           tag.isHighlight
                           ? 'border-[#5F1CFC] text-[#5F1CFC]'
                           : 'border-[#E5E5EA] bg-white text-[#140F23]'
                         }`}
                       >
                         {tag.icon && (
                            <Image src={tag.icon} alt="" width={14} height={14} className="opacity-70 sm:w-4 sm:h-4"/> // Responsive icon size
                         )}
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
        <div className="flex w-full justify-center pt-12 md:pt-16">
          {/* Adjusted padding, text size for smaller screens */}
          <button className="w-auto cursor-pointer whitespace-nowrap rounded-[100px] border border-[#140F23] bg-[#140F23] px-8 py-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#140F23] sm:px-10 sm:py-4 sm:text-base md:w-[200px] md:py-[21px] md:px-[52px] md:leading-[25px]"> {/* Removed fixed width on smallest, adjusted padding/text */}
            Book a demo
          </button>
        </div>

      </div>
    </section>
  );
}