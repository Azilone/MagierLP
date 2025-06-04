import React from "react";
import { motion } from "framer-motion";

const HeroStatsBar = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="flex justify-center mb-8"
  >
    <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-4 gap-y-1 bg-white/10 backdrop-blur-md shadow border border-gray-100 px-2 sm:px-3 md:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-size-10 sm:text-xs font-medium text-gray-800">
      <span className="flex items-center gap-1 sm:gap-1.5">
        <span className="text-size-10 sm:text-xs" role="img" aria-label="heart">❤️</span>
        <span className="font-bold text-text-primary text-size-10 sm:text-xs">+ de 2700</span>
        <span className="text-size-9 sm:text-size-10 text-gray-700">Pawtraits created</span>
      </span>
      <span className="hidden sm:inline text-gray-300">|</span>
      <span className="flex items-center gap-1 sm:gap-1.5">
        <span className="text-size-10 sm:text-xs">🇫🇷</span>
        <span className="text-size-9 sm:text-size-10 text-gray-700">Founded in France</span>
      </span>
      <span className="hidden sm:inline text-gray-300">|</span>
      <span className="flex items-center gap-1 sm:gap-1.5">
        <span className="text-size-10 sm:text-xs">🌍</span>
        <span className="text-size-9 sm:text-size-10">Worldwide delivery</span>
      </span>
    </div>
  </motion.div>
);

export default HeroStatsBar;