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
  "What does 'unlimited design tasks' mean?":
    "Unlimited design tasks mean you can submit as many design requests as you need, and we'll work on them sequentially, one task at a time.",
  "Do you offer one-time projects, or only subscriptions?":
    "We primarily focus on subscription plans to provide ongoing design support, but we do consider one-time projects on a case-by-case basis. Please contact us to discuss your project.",
  "What about large projects or a relaunch?":
    "For large projects or relaunches that require more intensive work or multiple designers simultaneously, we recommend discussing a custom plan with us to ensure we meet your timeline and scope.",
  "What types of clients and industries do you work with?":
    "We work with a diverse range of clients across various industries, including tech startups, SaaS companies, marketing agencies, e-commerce businesses, and more. Our focus is on delivering high-quality digital design.",
  "Can I cancel my subscription monthly?":
    "Yes, our subscription plans are typically billed monthly or quarterly, and you can cancel your subscription at the end of your current billing cycle.",
  "I am not satisfied with the design. How many revisions can I request?":
    "We offer unlimited revisions. We'll continue refining the design based on your feedback until you are completely satisfied.",
  "When do I get my results?":
    "The turnaround time for design tasks typically ranges from 24 to 72 hours, depending on the complexity of the request. We prioritize clear communication about timelines.",
  "What kind of services do you provide?":
    "We offer a wide range of design services, including UI/UX design, branding, graphic design for marketing materials, social media graphics, presentation design, and more. Check our services page for a detailed list.",
  "How quickly can we get started?":
    "You can get started almost immediately after signing up for a subscription plan. Once subscribed, you can begin submitting your design requests right away.",
  "Why should I choose magier over a freelancer or design agency?":
    "Magier offers a flexible subscription model with predictable costs, access to a dedicated design team, faster turnaround times compared to many agencies, and unlimited requests/revisions, providing a scalable and efficient design solution.",
};


export function FAQSection() {
  const faqItems = [
    "What does 'unlimited design tasks' mean?",
    "Do you offer one-time projects, or only subscriptions?",
    "What about large projects or a relaunch?",
    "What types of clients and industries do you work with?",
    "Can I cancel my subscription monthly?",
    "I am not satisfied with the design. How many revisions can I request?",
    "When do I get my results?",
    "What kind of services do you provide?",
    "How quickly can we get started?",
    "Why should I choose magier over a freelancer or design agency?",
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
                <div className="inline-block rounded-full border border-[#E5E5EA] px-3 py-1.5 sm:px-4 sm:py-2 mb-4">
                  <span className="font-sans text-sm sm:text-[16px] text-[#5f1cfc] font-medium tracking-[-0.32px] leading-none">
                    FAQ
                  </span>
                </div>
                 {/* Heading: Responsive Font Size & Tracking */}
                <h2 className="text-[#140f23] font-sans text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight sm:tracking-[-2px] lg:tracking-[-2.64px]">
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
                    className="rounded-xl sm:rounded-[24px] border border-[#EBEBEE] bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] data-[state=open]:shadow-[0px_4px_10px_rgba(16,24,40,0.08)] transition-shadow duration-200"
                  >
                    <AccordionTrigger
                       // Responsive padding, font size, leading, tracking
                       className="group text-left hover:no-underline px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 text-[#140f23] font-medium text-base sm:text-lg lg:text-[20px] leading-snug tracking-tight sm:tracking-[-0.4px] lg:tracking-[-0.8px]"
                    >
                       {/* Question Text */}
                      <span className="flex-1 pr-3 sm:pr-4">{question}</span>
                      {/* Custom Plus/Minus Icon - Responsive Size */}
                      <div className="relative w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 flex-shrink-0 flex items-center justify-center">
                          {/* Adjusted size slightly for responsiveness */}
                          <div className="absolute w-3.5 h-[2px] sm:w-4 sm:h-0.5 lg:w-5 lg:h-[2.5px] bg-[#140F23] rounded-full transition-transform duration-300 group-data-[state=open]:rotate-90"></div>
                          <div className="absolute w-[2px] h-3.5 sm:w-0.5 sm:h-4 lg:w-[2.5px] lg:h-5 bg-[#140F23] rounded-full transition-opacity duration-300 group-data-[state=open]:opacity-0"></div>
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