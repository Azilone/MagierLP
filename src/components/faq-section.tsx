"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming shadcn/ui setup

// Placeholder content for FAQ answers
const faqAnswers: { [key: string]: string } = {
  "How much does a Pawtrait cost?":
    "From €19 (mug) to €45 (XL poster). Your first 3 styles are free in medium quality.",
  "Can I add multiple pets to one illustration?":
    "Yes — up to 4 companions per artwork at no extra charge.",
  "Which payments do you accept?":
    "Apple Pay, Google Pay, Visa, Mastercard, PayPal. (We use Stripe)",
  "Production & shipping times?":
    "24–48 h production, 3–5 business-day tracked delivery across USA.",
  "Do you deliver worldwide?":
    "Yes, we deliver everywhere in the world, with no exceptions.",
  "What if my gift arrives damaged?":
    "If your gift arrives damaged, we will refund you or send a replacement, whichever you prefer.",
  "Can I request changes to my design?":
    "Absolutely! All designs created by our artist can be revised as many times as you wish. We keep working until you are completely satisfied.",
};


export function FAQSection() {
  const faqItems = [
    "How much does a Pawtrait cost?",
    "Can I add multiple pets to one illustration?",
    "Which payments do you accept?",
    "Production & shipping times?",
    "Do you deliver worldwide?",
    "What if my gift arrives damaged?",
    "Can I request changes to my design?",
  ];

  return (
    // Use relative positioning for the container
    // Added overflow-hidden to prevent background image bleed if it extends too far
    <div className="relative overflow-hidden">
      {/* Background SVG - Hide on smaller screens (below md) to reduce clutter */}
      {/* Adjusted size and position slightly for better large screen placement */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a2554c5ef4f54a52ab257ee45c2198b3/93fd195353c54fdaef304a2698186fc837aa3424?placeholderIfAbsent=true"
        alt="Background pattern"
        // Hide below medium screens, adjust size and position slightly for larger views
        className="absolute z-0 hidden md:block left-4 lg:left-12 rotate-12 top-[300px] lg:top-[344px] h-3xl w-3xl lg:h-4xl lg:w-4xl object-contain object-center opacity-50 md:opacity-100"
      />

      {/* Content Wrapper with Responsive Padding */}
      {/* Base padding, increases on sm, increases further on lg */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Responsive Vertical Padding */}
        <div className="py-16 sm:py-24 lg:py-28">
          {/* Flex container for Title and Accordion */}
          {/* Responsive Gap: Smaller gap on mobile, larger on lg */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start justify-center">

            {/* Left Side: Title Section */}
            {/* Sticky positioning still only applies on lg+ */}
            <div className="w-full lg:w-2/5 lg:sticky lg:top-28">
              <div className="flex flex-col items-start">
                {/* FAQ Pill Tag - minor adjustments if needed, looks okay */}
                <div className="inline-block rounded-full border border-border-primary px-3 py-1.5 sm:px-4 sm:py-2 mb-4">
                  <span className="font-sans text-sm sm:text-size-16 text-accent font-medium tracking-[-0.32px] leading-none">
                    FAQ
                  </span>
                </div>
                 {/* Heading: Responsive Font Size & Tracking */}
                <h2 className="text-text-primary font-sans text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight sm:tracking-[-2px] lg:tracking-[-2.64px]">
                  Frequently
                  <br />
                  <span className="relative">
                    asked
                  </span>
                  <br />
                  questions
                </h2>
              </div>
            </div>

            {/* Right Side: Accordion Section */}
            <div className="w-full lg:w-3/5">
              {/* Responsive space between accordion items */}
              <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
                {faqItems.map((question, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    // Responsive border radius, consistent border/shadow
                    className="rounded-xl sm:rounded-[24px] border border-border-light bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] data-[state=open]:shadow-[0px_4px_10px_rgba(16,24,40,0.08)] transition-shadow duration-200"
                  >
                    <AccordionTrigger
                       // Responsive padding, font size, leading, tracking
                       className="group text-left hover:no-underline px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 text-text-primary font-medium text-base sm:text-lg lg:text-size-20 leading-snug tracking-tight sm:tracking-[-0.4px] lg:tracking-[-0.8px]"
                    >
                       {/* Question Text */}
                      <span className="flex-1 pr-3 sm:pr-4">{question}</span>
                      {/* Custom Plus/Minus Icon - Responsive Size */}
                      <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex-shrink-0 flex items-center justify-center">
                          {/* Adjusted size slightly for responsiveness */}
                          <div className="absolute w-3.5 h-[2px] sm:w-4 sm:h-0.5 lg:w-5 lg:h-[2.5px] bg-text-primary rounded-full transition-transform duration-300 group-data-[state=open]:rotate-90"></div>
                          <div className="absolute w-[2px] h-3.5 sm:w-0.5 sm:h-4 lg:w-[2.5px] lg:h-5 bg-text-primary rounded-full transition-opacity duration-300 group-data-[state=open]:opacity-0"></div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      // Responsive padding and font size
                      className="px-4 pb-4 sm:px-6 sm:pb-5 lg:px-8 lg:pb-6 pt-0 text-sm sm:text-base text-[#4E4A5B] leading-relaxed"
                    >
                      {faqAnswers[question] ||
                        "Details about this question will be provided here. We are working on updating this section."}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}