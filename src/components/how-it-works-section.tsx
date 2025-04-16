"use client";

import React from "react";
import Image from "next/image"; // Import next/image

export function HowItWorksSection() {
  return (
    // Section container with consistent vertical padding
    <section className="w-full py-20 md:py-28 ">
      {/* Max width container with responsive padding */}
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-16 px-4 sm:px-6 lg:px-8 xl:max-w-7xl">

        {/* Top Section: Heading + Paragraph */}
        <div className="flex w-full flex-col items-start gap-8 lg:gap-12">
          {/* Badge */}
          <div className="flex flex-col items-start">
            {/* Corrected border class */}
            <span className="rounded-[42px] border-2 border-[#E5E5EA] py-[7.5px] px-[17px] text-base font-medium leading-4 tracking-[-0.32px] text-[#5F1CFC]">
              How it works
            </span>
          </div>

          {/* Heading Text + Description Paragraph */}
          <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            {/* Heading container */}
            <div className="w-full lg:w-auto">
              {/* Responsive heading */}
              <h2 className="text-4xl font-bold leading-tight tracking-tighter text-[#140F23] sm:text-3xl lg:text-[50px] xl:text-[56px]">
                We make it{' '}
                {/* Inline container for "super" + icon */}
                <span className="inline-flex items-center gap-2 align-bottom">
                  super
                  {/* Responsive SVG */}
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                  >
                    {/* Ensure fill="currentColor" is used if you want the parent's text color to apply */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.3106 3.11349C17.2814 2.1427 18.9192 2.41626 19.5218 3.64982L22.1149 8.95799C22.4898 9.72539 22.336 10.6462 21.7321 11.2501L11.3272 21.655C10.7233 22.2589 9.80254 22.4127 9.03515 22.0378L3.72698 19.4447C2.49341 18.8421 2.21985 17.2042 3.19063 16.2334L16.3106 3.11349ZM54.4834 50.3045C54.8243 51.3067 53.5781 52.0822 52.8296 51.3337L40.0708 38.575C39.7289 38.233 39.6901 37.6988 39.903 37.2646C40.9252 35.1794 40.5694 32.5894 38.8356 30.8555C36.6541 28.674 33.1172 28.674 30.9357 30.8555C28.7543 33.037 28.7543 36.5739 30.9357 38.7554C32.67 40.4897 35.2609 40.8452 37.3464 39.822C37.7807 39.6089 38.3151 39.6476 38.6571 39.9897L51.4362 52.7688C52.1847 53.5173 51.4092 54.7635 50.407 54.4226L9.75766 40.5934C9.19639 40.4025 8.92464 39.7663 9.16859 39.226C12.3816 32.1091 14.0901 26.9048 14.1366 22.3854C14.1394 22.1157 14.2436 21.8562 14.4343 21.6656L21.7376 14.3622C21.9283 14.1715 22.1878 14.0673 22.4575 14.0645C26.9767 14.0182 32.1808 12.3099 39.2977 9.0969C39.838 8.85296 40.4742 9.12471 40.6651 9.68598L54.4834 50.3045Z"
                      fill="#5F1CFC" // Or use fill="currentColor" if inheriting color
                    />
                  </svg>
                </span>{' '}
                easy
              </h2>
            </div>

            {/* Paragraph with responsive max-width */}
            <p className="w-full max-w-md text-md leading-relaxed tracking-[-0.36px] text-[#828088] lg:pt-2">
              Working with us is like having a full team of top designers,
              developers and art directors in-house. Always ready to go.
            </p>
          </div>
        </div>

        {/* Cards Section - Responsive Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Card 1 */}
          {/* Corrected border class */}
          <div className="flex flex-col items-start rounded-[42px] border-2 border-gray-200] bg-white p-3 ">
            {/* Placeholder Image Area */}
            <div className="flex h-[300px] w-full items-center justify-center rounded-[32px] bg-gray-100">
              {/* Replace with <Image /> component */}
              <Image
                  src="/images/Équipe d'experts dédiée.webp"
                  alt="Design Subscription"
                  className="object-contain w-full h-full rounded-[32px]"
                  width={400}
                  height={305}
                />
            </div>
            {/* Card Content */}
            <div className="flex w-full flex-col items-center justify-center gap-3 p-6 pt-5 text-center">
              <h3 className="text-xl font-medium leading-tight tracking-tight text-[#140F23] md:text-2xl">
                Subscribe to your team
              </h3>
              <p className="text-base leading-relaxed text-[#828088] sm:text-lg">
                Meet your handpicked team of experts led by your dedicated
                Project Manager.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          {/* Corrected border class */}
          <div className="flex flex-col items-start rounded-[42px] border-2 border-gray-200 bg-white p-3 ">
            {/* Placeholder Image Area */}
            <div className="flex h-[300px] w-full items-center justify-center rounded-[32px] bg-gray-100">
               {/* Replace with <Image /> component */}
              <span className="font-medium text-gray-500">
                [Create Requests Image Here]
              </span>
            </div>
             {/* Card Content */}
            <div className="flex w-full flex-col items-center justify-center gap-3 p-6 pt-5 text-center">
              <h3 className="text-xl font-medium leading-tight tracking-tight text-[#140F23] md:text-2xl">
                Create requests
              </h3>
              <p className="text-base leading-relaxed text-[#828088] sm:text-lg">
                Simply submit your design & webflow request we will straight
                jump to work.
              </p>
            </div>
          </div>

          {/* Card 3 (Rotated) */}
          {/* Corrected border class. Added transform-gpu for performance. */}
          <div className="flex transform-gpu flex-col items-start rounded-[42px] border-2 border-gray-200 bg-white p-3 transition-transform duration-300 md:rotate-[4deg] md:hover:rotate-[2deg]">
            {/* Placeholder Image Area */}
            <div className="flex h-[300px] w-full items-center justify-center rounded-[32px] bg-gray-100">
              {/* Replace with <Image /> component */}
              <span className="font-medium text-gray-500">
                [Review Complete Image Here]
              </span>
            </div>
             {/* Card Content */}
            <div className="flex w-full flex-col items-center justify-center gap-3 p-6 pt-5 text-center">
              <h3 className="text-xl font-medium leading-tight tracking-tight text-[#140F23] md:text-2xl">
                Review & Complete
              </h3>
              <p className="text-base leading-relaxed text-[#828088] sm:text-lg">
                Check the work we have done for you and give us your feedback.
                We revise until you are happy.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights - Wrapping Flex container */}
        <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-8 lg:gap-x-10">
          {/* Feature 1 */}
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#5F1CFC]" // SVG inherits this text color
            >
              {/* Added fill="currentColor" to the path */}
              <path d="M10.7625 16.4178C10.4871 17.1139 9.50316 17.1139 9.22767 16.4178L8.0273 13.3726C7.94367 13.1611 7.7764 12.9913 7.5624 12.9077L4.51721 11.7073C3.82109 11.4319 3.82109 10.4479 4.51721 10.1725L7.5624 8.97212C7.77394 8.88849 7.94367 8.72122 8.0273 8.50722L9.22767 5.46203C9.50316 4.76591 10.4871 4.76591 10.7625 5.46203L11.9629 8.50722C12.0465 8.71876 12.2138 8.88849 12.4278 8.97212L15.473 10.1725C16.1691 10.4479 16.1691 11.4319 15.473 11.7073L12.4278 12.90"
                fill="currentColor" // Make the path inherit color from parent SVG element
              />
               {/* The path data seems incomplete in your original snippet, ensure it's complete */}
            </svg>
            <span className="text-base font-medium text-[#5F1CFC]"> {/* Consistent text style */}
               {/* Feature text would go here */}
               Feature 1 Text
            </span>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#5F1CFC]"
            >
              <path d="M10.7625 16.4178C10.4871 17.1139 9.50316 17.1139 9.22767 16.4178L8.0273 13.3726C7.94367 13.1611 7.7764 12.9913 7.5624 12.9077L4.51721 11.7073C3.82109 11.4319 3.82109 10.4479 4.51721 10.1725L7.5624 8.97212C7.77394 8.88849 7.94367 8.72122 8.0273 8.50722L9.22767 5.46203C9.50316 4.76591 10.4871 4.76591 10.7625 5.46203L11.9629 8.50722C12.0465 8.71876 12.2138 8.88849 12.4278 8.97212L15.473 10.1725C16.1691 10.4479 16.1691 11.4319 15.473 11.7073L12.4278 12.9077C12.2138 12.9913 12.0465 13.1611 11.9629 13.3726L10.7625 16.4178Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-base font-medium text-[#5F1CFC]">
              Feature 2 Text
            </span>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#5F1CFC]"
            >
              <path d="M10.7625 16.4178C10.4871 17.1139 9.50316 17.1139 9.22767 16.4178L8.0273 13.3726C7.94367 13.1611 7.7764 12.9913 7.5624 12.9077L4.51721 11.7073C3.82109 11.4319 3.82109 10.4479 4.51721 10.1725L7.5624 8.97212C7.77394 8.88849 7.94367 8.72122 8.0273 8.50722L9.22767 5.46203C9.50316 4.76591 10.4871 4.76591 10.7625 5.46203L11.9629 8.50722C12.0465 8.71876 12.2138 8.88849 12.4278 8.97212L15.473 10.1725C16.1691 10.4479 16.1691 11.4319 15.473 11.7073L12.4278 12.9077C12.2138 12.9913 12.0465 13.1611 11.9629 13.3726L10.7625 16.4178Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-base font-medium text-[#5F1CFC]">
              Feature 3 Text
            </span>
          </div>


        </div>

      </div>
    </section>
  );
}