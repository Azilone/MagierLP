"use client";

import React from "react";
import Image from "next/image";

export function SuccessStoriesSection() {
  return (
    <div className="w-full rounded-[42px] border border-border-primary bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-28 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-accent text-base font-medium tracking-[-0.32px] py-2 px-[17px] rounded-[42px] border border-border-primary">
              Testimonials
            </span>
          </div>

          <div className="flex items-center justify-center">
            <h2 className="text-text-primary text-size-66 font-semibold leading-[1.1] tracking-[-2.64px] md:text-size-40">
              Success
            </h2>
            <div className="mx-2">
              <svg
                width="56"
                height="56"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.3106 3.11349C17.2814 2.1427 18.9192 2.41626 19.5218 3.64982L22.1149 8.95799C22.4898 9.72539 22.336 10.6462 21.7321 11.2501L11.3272 21.655C10.7233 22.2589 9.80254 22.4127 9.03515 22.0378L3.72698 19.4447C2.49341 18.8421 2.21985 17.2042 3.19063 16.2334L16.3106 3.11349ZM54.4834 50.3045C54.8243 51.3067 53.5781 52.0822 52.8296 51.3337L40.0708 38.575C39.7289 38.233 39.6901 37.6988 39.903 37.2646C40.9252 35.1794 40.5694 32.5894 38.8356 30.8555C36.6541 28.674 33.1172 28.674 30.9357 30.8555C28.7543 33.037 28.7543 36.5739 30.9357 38.7554C32.67 40.4897 35.2609 40.8452 37.3464 39.822C37.7807 39.6089 38.3151 39.6476 38.6571 39.9897L51.4362 52.7688C52.1847 53.5173 51.4092 54.7635 50.407 54.4226L9.75766 40.5934C9.19639 40.4025 8.92464 39.7663 9.16859 39.226C12.3816 32.1091 14.0901 26.9048 14.1366 22.3854C14.1394 22.1157 14.2436 21.8562 14.4343 21.6656L21.7376 14.3622C21.9283 14.1715 22.1878 14.0673 22.4575 14.0645C26.9767 14.0182 32.1808 12.3099 39.2977 9.0969C39.838 8.85296 40.4742 9.12471 40.6651 9.68598L54.4834 50.3045Z"
                  fill="#5F1CFC"
                />
              </svg>
            </div>
            <h2 className="text-text-primary text-size-66 font-semibold leading-[1.1] tracking-[-2.64px] md:text-size-40">
              stories
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Purple Stats Card */}
            <div className="bg-accent rounded-[32px] p-10 text-white relative">
              <div className="mb-12 relative">
                <div className="w-[159px] h-[102px] bg-white/10 rounded-full border border-white/20"></div>
                <span className="absolute right-5 bottom-4 text-size-61 font-semibold leading-none tracking-[-2.6px] md:text-size-40">
                  80+
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-medium tracking-[-0.96px] leading-[30px] mb-6">
                  Ad creatives
                  <br />
                  per month
                </h3>
                <p className="text-lg font-normal tracking-[-0.36px] leading-[27px]">
                  For SaaS company
                  <br />
                  Valuecase we have built
                  <br />a creative engine that
                  <br />
                  let&apos;s us ideate and create
                  <br />
                  over hundred ad
                  <br />
                  creatives per month.
                </p>
              </div>
            </div>

            {/* Image Card */}
            <div className="rounded-[32px] overflow-hidden h-[478px] bg-gray-200">
              <div className="w-full h-full relative">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    Success Story Image
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="flex justify-center mt-16 mb-8">
              <div className="w-[252px] h-[252px] relative">
                <div className="w-full h-full rounded-full border-2 border-border-primary flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border-2 border-border-primary flex items-center justify-center">
                    <div className="w-2/3 h-2/3 rounded-full border-2 border-border-primary flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full border-2 border-border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Testimonial Card */}
            <div className="rounded-[32px] border border-border-light bg-white p-10">
              <div className="mb-6">
                <div className="bg-text-primary text-white px-4 py-2 rounded-full inline-flex">
                  MAGIER DIGITAL
                </div>
              </div>

              <div className="text-text-muted text-base tracking-[-0.32px] leading-5 space-y-5">
                <p>
                  &quot;At Softwaregini we have been very satisfied with the
                  work by the
                  <br />
                  magier team.
                </p>
                <p>
                  As a fast-paced tech startup It was extremely helpful for us
                  to not
                  <br />
                  have to think about managing a team of designers to get work
                  done
                  <br />
                  fast.
                </p>
                <p>
                  The quality of the design work was very high. We worked with
                  them
                  <br />
                  to create roughly 25+ web illustrations for our new website
                  over a<br />
                  period of 3 months. Most of these illustrations included
                  interactive
                  <br />
                  and complex lottie animations. Thus, recommend.&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-border-primary">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden"></div>
                <div>
                  <div className="text-text-primary text-base">Johannes Bock</div>
                  <div className="text-text-muted text-base mt-2">
                    Founder @ Softwaregini
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Purple Stats Card */}
              <div className="bg-accent rounded-[32px] p-10 text-white">
                <div className="mb-12 relative">
                  <div className="w-[159px] h-[102px] bg-white/10 rounded-full border border-white/20"></div>
                  <span className="absolute right-5 bottom-4 text-size-64 font-semibold leading-none tracking-[-2.6px] md:text-size-40">
                    20%
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.96px] leading-[30px] mb-6">
                    Conversion
                    <br />
                    increase
                  </h3>
                  <p className="text-lg font-normal tracking-[-0.36px] leading-[27px]">
                    Our recent web redesign
                    <br />
                    for plancraft led to a<br />
                    significant increase in
                    <br />
                    conversions, thanks to a<br />
                    strategic blend of user-
                    <br />
                    centric design and
                    <br />
                    optimized functionality.
                  </p>
                </div>
              </div>

              {/* Image Card */}
              <div className="rounded-[32px] overflow-hidden aspect-[0.767] relative bg-gray-200">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    Success Story Image
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="min-w-[200px] rounded-[100px] border border-text-primary bg-text-primary text-white py-[21px] px-[65px] text-base font-medium tracking-[-0.32px] hover:bg-[#2a2541] transition-colors">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}
