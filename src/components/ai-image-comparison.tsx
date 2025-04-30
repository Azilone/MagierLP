"use client";

import React, { useState } from "react";
import clsx from 'clsx';

interface ImageComparisonData {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

const comparisonData: Record<'memorable' | 'others', ImageComparisonData> = {
  memorable: {
    title: "Memorable.ai",
    description: "Professional-grade AI enhancement with emotional depth",
    imageUrl: "/images/memorable-ai-example.jpg", // You'll need to add these images
    features: [
      "Enhanced emotional expression",
      "Natural skin tones",
      "Preserved authentic details",
      "Professional lighting adjustment",
      "Consistent quality across all photos"
    ]
  },
  others: {
    title: "Other AI Services",
    description: "Basic AI filters with inconsistent results",
    imageUrl: "/images/other-ai-example.jpg", // You'll need to add these images
    features: [
      "Artificial-looking effects",
      "Inconsistent skin tones",
      "Loss of important details",
      "Harsh or unnatural lighting",
      "Varying quality between photos"
    ]
  }
};

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
        "flex flex-col rounded-[32px] overflow-hidden",
        isHighlighted
          ? "bg-[#777CFD] p-[10px]"
          : "bg-white border border-[#E5E5EA]"
      )}
    >
      <div
        className={clsx(
          "flex flex-col h-full rounded-[32px] overflow-hidden",
          isHighlighted ? "bg-[#5F1CFC]" : ""
        )}
      >
        {/* Header */}
        <div
          className={clsx(
            "px-6 py-8 text-center",
            isHighlighted ? "text-white" : "text-[#140F23]"
          )}
        >
          <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
          <p className={clsx(
            "text-base",
            isHighlighted ? "text-white/90" : "text-[#828088]"
          )}>
            {data.description}
          </p>
        </div>

        {/* Image */}
        <div className="px-6">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
            {/* Replace with actual image */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Image Placeholder</span>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="px-6 py-8">
          <ul className="space-y-4">
            {data.features.map((feature, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-center gap-3",
                  isHighlighted ? "text-white" : "text-[#140F23]"
                )}
              >
                {isHighlighted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" fillOpacity="0.1"/>
                    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#F7F7F8"/>
                    <path d="M8 12L11 15L16 9" stroke="#5F1CFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <span className="text-base">{feature}</span>
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
    <div className="flex flex-col items-center w-full py-20 md:py-28 relative overflow-hidden px-4 sm:px-6">
      <div className="flex flex-col items-center w-full max-w-[1200px] z-10">
        {/* Header */}
        <div className="flex flex-col items-center max-w-[650px] text-center mb-12 md:mb-16">
          <div className="flex flex-col items-center mb-4">
            <div className="text-[#5F1CFC] font-sans text-sm md:text-base leading-4 tracking-[-0.32px] py-[7.5px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
              AI Quality Comparison
            </div>
          </div>
          <h2 className="text-[#140F23] font-sans text-[40px] leading-[44px] sm:text-[50px] sm:leading-[55px] lg:text-[66px] font-semibold lg:leading-[72.6px] tracking-tight lg:tracking-[-2.64px]">
            See the difference in quality
          </h2>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <ComparisonCard data={comparisonData.memorable} isHighlighted />
          <ComparisonCard data={comparisonData.others} />
        </div>
      </div>
    </div>
  );
} 