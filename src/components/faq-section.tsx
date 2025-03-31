"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQItemProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="rounded-[24px] border border-[#EBEBEE] shadow-[0px_0px_0px_2px_#E5E5EA_inset] bg-white p-[1px] flex flex-col overflow-hidden justify-center w-full mt-4 first:mt-0">
      <div className="flex w-full px-8 py-6 items-center justify-between flex-wrap gap-[40px_100px] md:px-5">
        <div className="min-w-[240px] self-stretch my-auto font-medium text-[20px] text-[#140f23] tracking-[-0.8px] leading-[30px]">
          {question}
        </div>
        <button
          onClick={onClick}
          className="self-stretch relative flex my-auto min-h-[32px] px-[15px] py-[6px] items-start justify-center w-[32px]"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          <div className="rounded-[8px] bg-[#140F23] z-0 flex my-auto flex-shrink-0 h-[20px] w-[2px]"></div>
          <div className="rounded-[8px] bg-[#140F23] absolute z-0 flex w-[20px] flex-shrink-0 h-[2px] right-[6px] bottom-[15px]"></div>
        </button>
      </div>
    </div>
  );
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <div className="relative">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/a2554c5ef4f54a52ab257ee45c2198b3/93fd195353c54fdaef304a2698186fc837aa3424?placeholderIfAbsent=true"
        alt="Background pattern"
        className="absolute z-0 left-0 right-0 top-[144px] h-[831px] w-full object-contain object-center md:max-w-full"
      />
      <div className="z-0 flex w-full px-[360px] flex-col items-center justify-start md:max-w-full md:px-5">
        <div className="flex w-full max-w-[1200px] py-28 flex-col items-stretch justify-center md:max-w-full md:py-[100px]">
          <div className="flex w-full items-start gap-[40px_58px] justify-center flex-wrap md:max-w-full">
            <div className="min-w-[240px] flex-grow flex-shrink w-[359px] md:max-w-full">
              <div className="flex w-full flex-col items-start font-sans text-[16px] text-[#5f1cfc] font-medium whitespace-nowrap tracking-[-0.32px] leading-[1] justify-start md:max-w-full md:whitespace-normal">
                <div className="self-stretch rounded-[42px] border border-[#E5E5EA] px-[17px] py-[8px] md:whitespace-normal">
                  FAQ
                </div>
              </div>
              <div className="mt-4 w-full md:max-w-full">
                <div className="text-[#140f23] font-sans text-[66px] font-semibold leading-[1.1] tracking-[-2.64px] md:text-[40px]">
                  Frequently
                </div>
                <div className="flex w-[247px] max-w-full pb-[15px] flex-col items-stretch">
                  <div className="flex min-h-[80px] pl-[191px] py-3 flex-col overflow-hidden items-end justify-center md:pl-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/a2554c5ef4f54a52ab257ee45c2198b3/ccdd07cc39fdfa43f9afc0e75111128fc8e6bfed?placeholderIfAbsent=true"
                      alt="Icon"
                      className="aspect-square object-contain object-center w-[56px]"
                    />
                  </div>
                  <div className="text-[#140f23] font-sans text-[66px] font-semibold leading-[1.1] tracking-[-2.64px] self-start z-10 -mt-16 md:text-[40px]">
                    asked
                  </div>
                </div>
                <div className="text-[#140f23] font-sans text-[66px] font-semibold leading-[1.1] tracking-[-2.64px] md:text-[40px]">
                  questions
                </div>
              </div>
            </div>
            <div className="min-w-[240px] flex-grow flex-shrink w-[603px] md:max-w-full">
              {faqItems.map((question, index) => (
                <FAQItem
                  key={index}
                  question={question}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
