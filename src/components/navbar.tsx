"use client";

import Link from "next/link";
import Image from "next/image";
import assets from "@/data/assets.json";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ShimmerButton } from "./magicui/shimmer-button";

const navigation = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Services", href: "#services" },
  { name: "Benefits", href: "#benefits" },
  { name: "FAQ", href: "#faq" },
  { name: "Results", href: "#results" },
  { name: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState({});

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileSubmenu = (itemName: any) => {
    setMobileMenuOpen((prev: Record<string, boolean>) => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <nav className="bg-white rounded-[32px] w-full p-4">
      <div className="mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex  items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={assets.images.logo}
                alt="GetPawtrait"
                width={128}
                height={128}
                className="w-14 h-14 rounded-lg"
              />
              <span className="ml-2 text-sm sm:text-base font-black">GetPawtrait</span>
            </Link>
          </div>

          {/* Desktop Navigation - change from md: to lg: to display at larger screens */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 px-2">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1 xl:space-x-4">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      href={item.href}
                      className="text-xs xl:text-sm text-gray-600 hover:text-gray-900 font-medium px-1.5 py-1"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6">
            <div className="flex items-center">
              <button className="inline-flex items-center text-xs xl:text-sm font-medium text-gray-700 hover:text-gray-900">
                <svg
                  className="h-3.5 w-3.5 mr-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 3C14.0503 5.16316 15.2727 8.49327 15.2727 12C15.2727 15.5067 14.0503 18.8368 12 21C9.94975 18.8368 8.72727 15.5067 8.72727 12C8.72727 8.49327 9.94975 5.16316 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>EN</span>
                <svg
                  className="h-3 w-3 ml-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <Link
              href="/sign-in"
              className="text-gray-700 hover:text-gray-900 text-xs xl:text-sm font-medium"
            >
              Sign in
            </Link>
            <ShimmerButton>Upload Your Photo</ShimmerButton>
          </div>

          {/* Mobile menu button - changed from md: to lg: */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
              <svg
                className={cn("h-5 w-5", isOpen ? "hidden" : "block")}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={cn("h-5 w-5", isOpen ? "block" : "hidden")}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - changed from md: to lg: */}
      <div
        className={cn(
          "lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6 bg-white rounded-b-[32px] shadow-lg">
          {navigation.map((item) => (
            <div key={item.name} className="py-2">
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-3 py-2">
              <button className="inline-flex items-center text-base font-medium text-gray-700 hover:text-gray-900">
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 3C14.0503 5.16316 15.2727 8.49327 15.2727 12C15.2727 15.5067 14.0503 18.8368 12 21C9.94975 18.8368 8.72727 15.5067 8.72727 12C8.72727 8.49327 9.94975 5.16316 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>EN</span>
                <svg
                  className="h-5 w-5 ml-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-3 space-y-3 px-2">
              <Link
                href="/sign-in"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Sign in
              </Link>
              <Link
                href="/demo"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-[#1C1B1F] hover:bg-gray-800 rounded-full"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}