"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

  return (
    <nav className="relative bg-white rounded-[32px]">
      <div className="mx-auto px-14">
        <div className="flex h-30 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-12 bg-[#1C1B1F] rounded-xl flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Magier"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="ml-4 text-xl font-black">QuickMobile.design</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center flex-1 px-20">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-10">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="text-lg text-gray-600 hover:text-gray-900 font-medium">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
                        className="text-lg text-gray-600 hover:text-gray-900 font-medium"
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
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center">
              <button className="inline-flex items-center text-lg font-medium text-gray-700 hover:text-gray-900">
                <svg
                  className="h-6 w-6 mr-2"
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
            <Link
              href="/sign-in"
              className="text-gray-700 hover:text-gray-900 text-lg font-medium"
            >
              Sign in
            </Link>
            <Link
              href="/demo"
              className="bg-[#1C1B1F] text-white hover:bg-gray-800 px-7 py-3.5 text-lg font-medium rounded-full"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={cn("h-8 w-8", isOpen ? "hidden" : "block")}
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
                className={cn("h-8 w-8", isOpen ? "block" : "hidden")}
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
      </nav>
  );
}