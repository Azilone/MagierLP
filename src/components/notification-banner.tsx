"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent py-[15px] w-full">
      <div className="max-w-[1200px] mx-auto flex justify-center items-center text-white font-sans text-base gap-2 px-4">
        <span>🪄 MagicDesign is now magier →</span>
        <a href="#" className="font-bold underline">
          Read our announcement
        </a>
        <button
          className="bg-transparent border-none text-white cursor-pointer p-1"
          onClick={() => setIsVisible(false)}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
