"use client";

import Image from "next/image"; // Keep if used within PortfolioMarquee or future additions
import Link from "next/link";
import { motion } from "framer-motion";
import { PortfolioMarquee } from "./testimonials-marquee"; // Ensure this component is also responsive if needed

export function HeroWithAnimations() {
  return (
    // Responsive Padding: Start smaller, increase on larger screens
    <div className="relative px-4 pt-16 pb-16 sm:px-6 md:pt-16 md:pb-20 lg:px-12 lg:pt-22 lg:pb-24 "> {/* Added overflow-x-hidden */}
      <div className="mx-auto max-w-7xl">
        {/* Trustpilot Rating - Adjusted margin and text size slightly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 md:mb-12" // Adjusted margin-bottom
        >
          <div className="flex items-center space-x-2 bg-white shadow-sm border border-gray-100 px-3 py-1.5 md:px-4 md:py-2 rounded-lg">
            <div className="flex">
              {/* Trustpilot SVG - consider scaling if needed, but usually fine */}
              <svg /* SVG Content */
                className="h-3 w-auto md:h-4" // Adjusted height slightly
                width="82" // Keep width/height attributes for aspect ratio
                height="16"
                viewBox="0 0 82 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Paths remain the same */}
                <path d="M46.017 0H35.4561C34.3516 0 33.4561 0.895431 33.4561 2V14C33.4561 15.1046 34.3516 16 35.4561 16H46.017C47.1215 16 48.017 15.1046 48.017 14V2C48.017 0.895431 47.1215 0 46.017 0Z" fill="#00B67A"></path>
                <path d="M40.2576 3.62153C40.3988 3.1439 41.0753 3.1439 41.2165 3.62153L41.857 5.78768C41.9199 6.00012 42.115 6.1459 42.3365 6.1459H44.5024C44.9753 6.1459 45.184 6.74161 44.8144 7.03665L42.9836 8.4983C42.8246 8.62521 42.7584 8.83577 42.816 9.03083L43.4959 11.3299C43.6346 11.799 43.0867 12.1676 42.7044 11.8625L41.049 10.5408C40.8665 10.3952 40.6076 10.3952 40.4251 10.5408L38.7697 11.8625C38.3874 12.1676 37.8395 11.799 37.9783 11.3299L38.6581 9.03083C38.7158 8.83577 38.6495 8.62521 38.4906 8.4983L36.6597 7.03665C36.2902 6.7416 36.4988 6.1459 36.9717 6.1459H39.1376C39.3591 6.1459 39.5542 6.00012 39.6171 5.78768L40.2576 3.62153Z" fill="white"></path>
                <path d="M29.6341 0H19.0732C17.9686 0 17.0732 0.895431 17.0732 2V14C17.0732 15.1046 17.9686 16 19.0732 16H29.6341C30.7386 16 31.6341 15.1046 31.6341 14V2C31.6341 0.895431 30.7386 0 29.6341 0Z" fill="#00B67A"></path>
                <path d="M23.8748 3.62153C24.016 3.1439 24.6925 3.1439 24.8337 3.62153L25.4742 5.78768C25.5371 6.00012 25.7322 6.1459 25.9537 6.1459H28.1196C28.5925 6.1459 28.8011 6.74161 28.4316 7.03665L26.6007 8.4983C26.4418 8.62521 26.3755 8.83577 26.4332 9.03083L27.113 11.3299C27.2517 11.799 26.7039 12.1676 26.3216 11.8625L24.6662 10.5408C24.4837 10.3952 24.2247 10.3952 24.0423 10.5408L22.3869 11.8625C22.0046 12.1676 21.4567 11.799 21.5954 11.3299L22.2753 9.03083C22.3329 8.83577 22.2667 8.62521 22.1077 8.4983L20.2769 7.03665C19.9073 6.7416 20.116 6.1459 20.5889 6.1459H22.7548C22.9763 6.1459 23.1714 6.00012 23.2342 5.78768L23.8748 3.62153Z" fill="white"></path>
                <path d="M13.2512 0H2.69043C1.58586 0 0.69043 0.895431 0.69043 2V14C0.69043 15.1046 1.58586 16 2.69043 16H13.2512C14.3558 16 15.2512 15.1046 15.2512 14V2C15.2512 0.895431 14.3558 0 13.2512 0Z" fill="#00B67A"></path>
                <path d="M7.49197 3.62153C7.6332 3.1439 8.3097 3.1439 8.45093 3.62153L9.09144 5.78768C9.15426 6.00012 9.34939 6.1459 9.57092 6.1459H11.7368C12.2097 6.1459 12.4183 6.74161 12.0488 7.03665L10.2179 8.4983C10.059 8.62521 9.99275 8.83577 10.0504 9.03083L10.7302 11.3299C10.8689 11.799 10.3211 12.1676 9.93882 11.8625L8.2834 10.5408C8.10094 10.3952 7.84196 10.3952 7.6595 10.5408L6.00408 11.8625C5.62181 12.1676 5.07394 11.799 5.21265 11.3299L5.89248 9.03083C5.95015 8.83577 5.88392 8.62521 5.72495 8.4983L3.89411 7.03665C3.52455 6.7416 3.73318 6.1459 4.20607 6.1459H6.37198C6.59351 6.1459 6.78864 6.00012 6.85146 5.78768L7.49197 3.62153Z" fill="white"></path>
                <path d="M62.392 0H51.8311C50.7266 0 49.8311 0.895431 49.8311 2V14C49.8311 15.1046 50.7266 16 51.8311 16H62.392C63.4965 16 64.392 15.1046 64.392 14V2C64.392 0.895431 63.4965 0 62.392 0Z" fill="#00B67A"></path>
                <path d="M56.6326 3.62153C56.7738 3.1439 57.4503 3.1439 57.5915 3.62153L58.232 5.78768C58.2949 6.00012 58.49 6.1459 58.7115 6.1459H60.8774C61.3503 6.1459 61.559 6.74161 61.1894 7.03665L59.3586 8.4983C59.1996 8.62521 59.1334 8.83577 59.191 9.03083L59.8709 11.3299C60.0096 11.799 59.4617 12.1676 59.0794 11.8625L57.424 10.5408C57.2415 10.3952 56.9826 10.3952 56.8001 10.5408L55.1447 11.8625C54.7624 12.1676 54.2145 11.799 54.3533 11.3299L55.0331 9.03083C55.0908 8.83577 55.0245 8.62521 54.8656 8.4983L53.0347 7.03665C52.6652 6.7416 52.8738 6.1459 53.3467 6.1459H55.5126C55.7341 6.1459 55.9292 6.00012 55.9921 5.78768L56.6326 3.62153Z" fill="white"></path>
                <path d="M78.7748 0H68.2139C67.1094 0 66.2139 0.895431 66.2139 2V14C66.2139 15.1046 67.1094 16 68.2139 16H78.7748C79.8794 16 80.7748 15.1046 80.7748 14V2C80.7748 0.895431 79.8794 0 78.7748 0Z" fill="#00B67A"></path>
                <path d="M78.7755 0H73.4951V16H78.7755C79.8801 16 80.7755 15.1046 80.7755 14V2C80.7755 0.895431 79.8801 0 78.7755 0Z" fill="#F0F0F1"></path>
                <path d="M73.0154 3.62153C73.1566 3.1439 73.8331 3.1439 73.9743 3.62153L74.6149 5.78768C74.6777 6.00012 74.8728 6.1459 75.0943 6.1459H77.2603C77.7331 6.1459 77.9418 6.74161 77.5722 7.03665L75.7414 8.4983C75.5824 8.62521 75.5162 8.83577 75.5738 9.03083L76.2537 11.3299C76.3924 11.799 75.8445 12.1676 75.4622 11.8625L73.8068 10.5408C73.6244 10.3952 73.3654 10.3952 73.1829 10.5408L71.5275 11.8625C71.1452 12.1676 70.5974 11.799 70.7361 11.3299L71.4159 9.03083C71.4736 8.83577 71.4073 8.62521 71.2484 8.4983L69.4175 7.03665C69.048 6.7416 69.2566 6.1459 69.7295 6.1459H71.8954C72.1169 6.1459 72.3121 6.00012 72.3749 5.78768L73.0154 3.62153Z" fill="white"></path>
              </svg>
            </div>
            {/* Responsive Text Size */}
            <span className="text-sm md:text-base font-medium text-gray-700">
              4.8 stars 50+ Reviews
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
           {/* Responsive Headline: Adjust size, leading, tracking */}
          <h1 className="text-2xl font-bold tracking-tight text-[#140F23] leading-tight
                         sm:text-3xl sm:leading-tight
                         md:text-4xl md:leading-none md:tracking-[-1px]
                         lg:text-5xl lg:leading-[1.1] lg:tracking-[-1.5px]
                         xl:text-[60px] xl:leading-[1.1] xl:tracking-[-2px]
                         2xl:text-[72px] 2xl:leading-[1.1] 2xl:tracking-[-3px]
                         lg:max-w-5xl lg:mx-auto"
          >
            <motion.span /* Animation */
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get{" "}
            </motion.span>
            <span className="relative inline-block"> {/* Use inline-block for better wrapping control */}
              <motion.span /* Animation */
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Mobile App Design
              </motion.span>
              {/* Removed the empty animated div unless it served a specific purpose */}
            </span>
            <motion.span /* Animation */
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block" // Ensure line break works consistently
            >
               That Earn You More <span className=""><br/></span> Than They Cost {/* Optional break for very small */}
            </motion.span>
          </h1>

           {/* Responsive Paragraph: Adjust size, leading, margin */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-3 text-xs leading-relaxed text-[#828088] max-w-xs mx-auto
                       md:mt-5 md:text-sm md:leading-6
                       lg:mt-6 lg:text-base lg:leading-7 lg:max-w-lg
                       xl:text-lg xl:leading-7 xl:max-w-xl"
          >
            No calls. No waiting. No freelancers.
            <br />
            Just Business-driven design UI in Figma, ready to dev — starting at €490.
          </motion.p>

           {/* Responsive Buttons: Adjust size, spacing, layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            // Flex column on smallest, row on larger. Adjust gap and margin.
            className="mt-10 flex flex-col items-center justify-center gap-y-4 gap-x-6
                       sm:flex-row
                       md:mt-12 md:gap-x-8
                       lg:mt-14"
          >
            <motion.div /* Animation */
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Responsive Button */}
              <Link
                href="/demo"
                className="inline-block bg-[#140F23] text-white hover:bg-gray-800 px-4 py-2 text-sm font-medium rounded-full transition-colors
                           md:px-6 md:py-3 md:text-base
                           lg:px-8 lg:py-4
                           "
              >
                Book a demo
              </Link>
            </motion.div>
            <motion.div /* Animation */
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Responsive Button */}
              <Link
                href="/work"
                className="inline-block text-sm font-medium leading-6 text-[#140F23] hover:text-gray-600 px-4 py-2 rounded-full border border-[#E5E5EA] transition-colors
                           md:px-6 md:py-3 md:text-base
                           lg:px-8 lg:py-4"
              >
                Our work
              </Link>
            </motion.div>
          </motion.div>

           {/* Testimonials Marquee - Adjust margin */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }} // Stagger slightly after buttons
            className="mt-12 md:mt-16 lg:mt-20 w-full overflow-hidden" // Responsive margin-top
          >
            <PortfolioMarquee />
          </motion.div>


        </div>
      </div>
    </div>
  );
}