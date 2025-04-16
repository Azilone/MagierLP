"use client";

import Link from "next/link";
import Image from "next/image";
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

const navigation = [
  { 
    name: "Services", 
    href: "#services",
    items: [
      {
        title: "Web Development",
        href: "#web-development",
        description: "Custom web development solutions for your business"
      },
      {
        title: "Mobile Apps",
        href: "#mobile-apps",
        description: "Native and cross-platform mobile applications"
      }
    ]
  },
  { name: "Customers", href: "#customers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Company", href: "#company" },
  { 
    name: "Resources",
    items: [
      {
        title: "How it works",
        href: "#how-it-works",
        description: "Learn about our process and methodology"
      },
      {
        title: "Blog",
        href: "/blog",
        description: "Read our latest articles and updates"
      },
      {
        title: "Newsletter",
        href: "/newsletter",
        description: "Subscribe to our newsletter"
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Frequently asked questions"
      },
      {
        title: "Freebies",
        href: "/freebies",
        description: "Free resources and templates"
      }
    ]
  },
  { name: "Our Work", href: "#work" },
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
    setMobileMenuOpen(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    // REMOVE sticky top-0 z-50 from this line:
    <nav className="bg-white rounded-[32px] w-full">
      <div className="mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-14 w-14 bg-[#1C1B1F] rounded-xl flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Magier"
                  width={24}
                  height={24}
                  className="w-3.5 h-3.5"
                />
              </div>
              <span className="ml-2 text-sm sm:text-base font-black">FastFrame</span>
            </Link>
          </div>

          {/* Desktop Navigation - change from md: to lg: to display at larger screens */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 px-2">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1 xl:space-x-4">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="text-xs xl:text-sm text-gray-600 hover:text-gray-900 font-medium py-1 px-1.5">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[260px] gap-2 p-3 md:w-[350px] lg:w-[450px] md:grid-cols-2">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-xs font-medium leading-none">{subItem.title}</div>
                                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-xs xl:text-sm text-gray-600 hover:text-gray-900 font-medium px-1.5 py-1"
                      >
                        {item.name}
                      </Link>
                    )}
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
            <Link
              href="/demo"
              className="bg-[#1C1B1F] text-white hover:bg-gray-800  px-3.5 py-3.5 xl:px-5 xl:py-5 text-xs xl:text-sm font-medium rounded-full"
            >
              Book a demo
            </Link>
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
              {item.items ? (
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu(item.name)}
                    className="flex justify-between items-center w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {item.name}
                    <svg
                      className={cn("w-5 h-5 transform transition-transform", 
                        mobileMenuOpen[item.name] ? "rotate-180" : "")}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileMenuOpen[item.name] && (
                    <div className="pl-4 pr-2 py-2 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                        >
                          <div className="font-medium">{subItem.title}</div>
                          <div className="text-sm text-gray-500">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                </Link>
              )}
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