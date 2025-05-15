import React from "react";

export default function AwardBanner() {
  return (
    <div className="w-full flex flex-col items-center gap-1 py-2 select-none mb-0 mt-10">
      <div className="flex items-center gap-1 sm:gap-2  w-full justify-center">
        {/* Laurel left */}
        <img
          src="/svg/laurier-gauche.svg"
          alt="Laurel Left"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gray-400 relative top-[2px] sm:top-[4px]"
          aria-hidden="true"
        />
        <div className="text-center px-1">
          <div className="font-extrabold text-gray-600 text-sm sm:text-base md:text-lg leading-tight">
            The World's Largest Library of Pet Art Styles
          </div>
          <div className="text-gray-500 text-xs sm:text-sm md:text-base mt-0.5 font-medium leading-tight">
            + More personalized products than anyone else
          </div>
        </div>
        {/* Laurel right */}
        <img
          src="/svg/laurier-droit.svg"
          alt="Laurel Right"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gray-400 relative top-[2px] sm:top-[4px]"
          aria-hidden="true"
        />
      </div>
      <div className="flex items-center gap-1 mt-2 text-gray-400 text-xs sm:text-sm justify-center">
        <span className="text-gray-400">Seen on</span>
        {/* TikTok logo */}
        <img
          src="/svg/TikTok.svg"
          alt="TikTok Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 relative top-[2px]"
          aria-hidden="true"
        />
        <span className="text-gray-400">&amp;</span>
        {/* Instagram logo */}
        <img
          src="/svg/instagram.svg"
          alt="Instagram Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 relative top-[2px]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
