import React from "react";
import { motion } from "framer-motion";

const HeroStatsBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="flex justify-center mb-3 sm:mb-4 md:mb-5"
  >
    <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1.5 bg-white/10 backdrop-blur-md shadow border border-gray-100 px-2.5 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-gray-800">
      <span className="flex items-center gap-1 sm:gap-1.5">
        <span className="font-bold text-[#140F23] text-xs sm:text-sm">+ de 2700</span>
        <span className="text-[10px] sm:text-xs text-gray-700">portraits created</span>
      </span>
      <span className="hidden sm:inline text-gray-300">|</span>
      <span className="flex items-center gap-1 sm:gap-1.5">
        <span className="text-xs sm:text-sm">🇫🇷</span>
        <span className="text-[10px] sm:text-xs text-gray-700">Founded in France</span>
      </span>
      <span className="hidden sm:inline text-gray-300">|</span>
      <span className="flex items-center gap-1 sm:gap-1.5">
        <span className="text-xs sm:text-sm">🌍</span>
        <span className="text-[10px] sm:text-xs">Worldwide delivery</span>
      </span>
    </div>
  </motion.div>
);

export default HeroStatsBar;