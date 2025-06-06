"use client";

import React, { useState } from "react";
import clsx from 'clsx';
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from '@/components/ui/image-comparison';
import { assets } from "@/lib/assets";


interface ImageComparisonData {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  features: string[];
}

const comparisonData: Record<'memorable' | 'others', ImageComparisonData> = {
  memorable: {
    title: "GetPawtrait.com",
    description: "Why GetPawtrait stands out for pet portraits",
    beforeImage: assets.images.placeholders.img1,
    afterImage: assets.images.placeholders.img2,
    features: [
      "Proprietary Pawtraits model V2 + optional designer retouching: sharp details, true-to-life colors",
      "Instant HD preview before payment",
      "150+ exclusive pet styles",
      "100% pets: dogs, cats, rabbits, horses, birds…",
      "Posters, mugs, phone cases, hoodies… 30+ formats",
      "Mobile-first, Apple Pay/Google Pay, optional account (60 sec checkout)",
      "Local printing, 3–5 days, tracked shipping"
    ]
  },
  others: {
    title: "Other Pet Portrait Services",
    description: "How typical services compare",
    beforeImage: assets.images.placeholders.img1,
    afterImage: assets.images.placeholders.img2,
    features: [
      "Low-res or no preview, pay before you see",
      "Fewer than 10 styles, often reused elsewhere",
      "Generalist (\"human portrait\" models adapted for pets)",
      "1–3 formats (usually just posters)",
      "Long checkout, mandatory signup, back-and-forth with outsourced designers",
      "No clear policy",
      "Variable times, limited tracking"
    ]
  }
};

function SuccessIcon({ className }: { className?: string }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      className={clsx("sm:w-6 sm:h-6", className)} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
        fill="#ECFDF3"
      />
      <path 
        d="M8 12L11 15L16 9" 
        stroke="#039855" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ErrorIcon({ className }: { className?: string }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      className={clsx("sm:w-6 sm:h-6", className)} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
        fill="#FEF3F2"
      />
      <path 
        d="M15 9L9 15M9 9L15 15" 
        stroke="#D92D20" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ComparisonCard({
  data,
  isHighlighted = false
}: {
  data: ImageComparisonData;
  isHighlighted?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl sm:rounded-[32px] overflow-hidden w-full",
        isHighlighted
          ? "bg-[#777CFD] p-2 sm:p-[10px]"
          : "bg-white border border-[#E5E5EA]"
      )}
    >
      <div
        className={clsx(
          "flex flex-col h-full rounded-xl sm:rounded-[32px] overflow-hidden",
          isHighlighted ? "bg-[#5F1CFC]" : ""
        )}
      >
        {/* Header */}
        <div
          className={clsx(
            "px-4 sm:px-6 py-4 sm:py-8 text-center",
            isHighlighted ? "text-white" : "text-[#140F23]"
          )}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">{data.title}</h3>
          <p className={clsx(
            "text-sm sm:text-base",
            isHighlighted ? "text-white/90" : "text-[#828088]"
          )}>
            {data.description}
          </p>
        </div>

        {/* Image Comparison */}
        <div className="px-4 sm:px-6">
          <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
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
                src={data.beforeImage}
                alt={`${data.title} Before`}
                position="left"
              />
              <ImageComparisonImage
                src={data.afterImage}
                alt={`${data.title} After`}
                position="right"
              />
              <ImageComparisonSlider className="w-0.5 bg-white/30 backdrop-blur-sm">
                <div className="absolute left-1/2 top-1/2 h-6 sm:h-8 w-4 sm:w-6 -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-white/50" />
              </ImageComparisonSlider>
            </ImageComparison>
          </div>
        </div>

        {/* Features List */}
        <div className="px-4 sm:px-6 py-6 sm:py-8">
          <ul className="space-y-3 sm:space-y-4">
            {data.features.map((feature, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-center gap-2 sm:gap-3",
                  isHighlighted ? "text-white" : "text-[#140F23]"
                )}
              >
                {isHighlighted ? (
                  <SuccessIcon className={isHighlighted ? "text-white" : ""} />
                ) : (
                  <ErrorIcon />
                )}
                <span className="text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AIImageComparison() {
  return (
    <div className="flex flex-col items-center w-full py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden px-4 sm:px-6">
      <div className="flex flex-col items-center w-full max-w-[1200px] z-10">
        {/* Header */}
        <div className="flex flex-col items-center max-w-[650px] text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col items-center mb-4">
            <div className="text-[#5F1CFC] font-sans text-xs sm:text-sm md:text-base leading-4 tracking-[-0.32px] py-[7.5px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
              Quality Comparison
            </div>
          </div>
          <h2 className="text-[#140F23] font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[66px] font-semibold leading-tight sm:leading-tight lg:leading-[72.6px] tracking-tight lg:tracking-[-2.64px]">
            See the difference in quality
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
          <ComparisonCard data={comparisonData.memorable} isHighlighted />
          <ComparisonCard data={comparisonData.others} />
        </div>
      </div>
    </div>
  );
} 