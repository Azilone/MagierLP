 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PortfolioMarquee } from "./testimonials-marquee";

export function HeroWithAnimations() {
  return (
    <div className="relative px-8 pt-32 pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Trustpilot Rating */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center space-x-2 bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-lg">
            <div className="flex">
            <svg
                width="82"
                height="16"
                viewBox="0 0 82 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.017 0H35.4561C34.3516 0 33.4561 0.895431 33.4561 2V14C33.4561 15.1046 34.3516 16 35.4561 16H46.017C47.1215 16 48.017 15.1046 48.017 14V2C48.017 0.895431 47.1215 0 46.017 0Z"
                  fill="#00B67A"
                ></path>
                <path
                  d="M40.2576 3.62153C40.3988 3.1439 41.0753 3.1439 41.2165 3.62153L41.857 5.78768C41.9199 6.00012 42.115 6.1459 42.3365 6.1459H44.5024C44.9753 6.1459 45.184 6.74161 44.8144 7.03665L42.9836 8.4983C42.8246 8.62521 42.7584 8.83577 42.816 9.03083L43.4959 11.3299C43.6346 11.799 43.0867 12.1676 42.7044 11.8625L41.049 10.5408C40.8665 10.3952 40.6076 10.3952 40.4251 10.5408L38.7697 11.8625C38.3874 12.1676 37.8395 11.799 37.9783 11.3299L38.6581 9.03083C38.7158 8.83577 38.6495 8.62521 38.4906 8.4983L36.6597 7.03665C36.2902 6.7416 36.4988 6.1459 36.9717 6.1459H39.1376C39.3591 6.1459 39.5542 6.00012 39.6171 5.78768L40.2576 3.62153Z"
                  fill="white"
                ></path>
                <path
                  d="M29.6341 0H19.0732C17.9686 0 17.0732 0.895431 17.0732 2V14C17.0732 15.1046 17.9686 16 19.0732 16H29.6341C30.7386 16 31.6341 15.1046 31.6341 14V2C31.6341 0.895431 30.7386 0 29.6341 0Z"
                  fill="#00B67A"
                ></path>
                <path
                  d="M23.8748 3.62153C24.016 3.1439 24.6925 3.1439 24.8337 3.62153L25.4742 5.78768C25.5371 6.00012 25.7322 6.1459 25.9537 6.1459H28.1196C28.5925 6.1459 28.8011 6.74161 28.4316 7.03665L26.6007 8.4983C26.4418 8.62521 26.3755 8.83577 26.4332 9.03083L27.113 11.3299C27.2517 11.799 26.7039 12.1676 26.3216 11.8625L24.6662 10.5408C24.4837 10.3952 24.2247 10.3952 24.0423 10.5408L22.3869 11.8625C22.0046 12.1676 21.4567 11.799 21.5954 11.3299L22.2753 9.03083C22.3329 8.83577 22.2667 8.62521 22.1077 8.4983L20.2769 7.03665C19.9073 6.7416 20.116 6.1459 20.5889 6.1459H22.7548C22.9763 6.1459 23.1714 6.00012 23.2342 5.78768L23.8748 3.62153Z"
                  fill="white"
                ></path>
                <path
                  d="M13.2512 0H2.69043C1.58586 0 0.69043 0.895431 0.69043 2V14C0.69043 15.1046 1.58586 16 2.69043 16H13.2512C14.3558 16 15.2512 15.1046 15.2512 14V2C15.2512 0.895431 14.3558 0 13.2512 0Z"
                  fill="#00B67A"
                ></path>
                <path
                  d="M7.49197 3.62153C7.6332 3.1439 8.3097 3.1439 8.45093 3.62153L9.09144 5.78768C9.15426 6.00012 9.34939 6.1459 9.57092 6.1459H11.7368C12.2097 6.1459 12.4183 6.74161 12.0488 7.03665L10.2179 8.4983C10.059 8.62521 9.99275 8.83577 10.0504 9.03083L10.7302 11.3299C10.8689 11.799 10.3211 12.1676 9.93882 11.8625L8.2834 10.5408C8.10094 10.3952 7.84196 10.3952 7.6595 10.5408L6.00408 11.8625C5.62181 12.1676 5.07394 11.799 5.21265 11.3299L5.89248 9.03083C5.95015 8.83577 5.88392 8.62521 5.72495 8.4983L3.89411 7.03665C3.52455 6.7416 3.73318 6.1459 4.20607 6.1459H6.37198C6.59351 6.1459 6.78864 6.00012 6.85146 5.78768L7.49197 3.62153Z"
                  fill="white"
                ></path>
                <path
                  d="M62.392 0H51.8311C50.7266 0 49.8311 0.895431 49.8311 2V14C49.8311 15.1046 50.7266 16 51.8311 16H62.392C63.4965 16 64.392 15.1046 64.392 14V2C64.392 0.895431 63.4965 0 62.392 0Z"
                  fill="#00B67A"
                ></path>
                <path
                  d="M56.6326 3.62153C56.7738 3.1439 57.4503 3.1439 57.5915 3.62153L58.232 5.78768C58.2949 6.00012 58.49 6.1459 58.7115 6.1459H60.8774C61.3503 6.1459 61.559 6.74161 61.1894 7.03665L59.3586 8.4983C59.1996 8.62521 59.1334 8.83577 59.191 9.03083L59.8709 11.3299C60.0096 11.799 59.4617 12.1676 59.0794 11.8625L57.424 10.5408C57.2415 10.3952 56.9826 10.3952 56.8001 10.5408L55.1447 11.8625C54.7624 12.1676 54.2145 11.799 54.3533 11.3299L55.0331 9.03083C55.0908 8.83577 55.0245 8.62521 54.8656 8.4983L53.0347 7.03665C52.6652 6.7416 52.8738 6.1459 53.3467 6.1459H55.5126C55.7341 6.1459 55.9292 6.00012 55.9921 5.78768L56.6326 3.62153Z"
                  fill="white"
                ></path>
                <path
                  d="M78.7748 0H68.2139C67.1094 0 66.2139 0.895431 66.2139 2V14C66.2139 15.1046 67.1094 16 68.2139 16H78.7748C79.8794 16 80.7748 15.1046 80.7748 14V2C80.7748 0.895431 79.8794 0 78.7748 0Z"
                  fill="#00B67A"
                ></path>
                <path
                  d="M78.7755 0H73.4951V16H78.7755C79.8801 16 80.7755 15.1046 80.7755 14V2C80.7755 0.895431 79.8801 0 78.7755 0Z"
                  fill="#F0F0F1"
                ></path>
                <path
                  d="M73.0154 3.62153C73.1566 3.1439 73.8331 3.1439 73.9743 3.62153L74.6149 5.78768C74.6777 6.00012 74.8728 6.1459 75.0943 6.1459H77.2603C77.7331 6.1459 77.9418 6.74161 77.5722 7.03665L75.7414 8.4983C75.5824 8.62521 75.5162 8.83577 75.5738 9.03083L76.2537 11.3299C76.3924 11.799 75.8445 12.1676 75.4622 11.8625L73.8068 10.5408C73.6244 10.3952 73.3654 10.3952 73.1829 10.5408L71.5275 11.8625C71.1452 12.1676 70.5974 11.799 70.7361 11.3299L71.4159 9.03083C71.4736 8.83577 71.4073 8.62521 71.2484 8.4983L69.4175 7.03665C69.048 6.7416 69.2566 6.1459 69.7295 6.1459H71.8954C72.1169 6.1459 72.3121 6.00012 72.3749 5.78768L73.0154 3.62153Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <span className="text-base font-medium text-gray-700">
              4.8 stars 50+ Reviews
            </span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
          <h1 className="text-[82px] font-bold tracking-tight text-[#140F23] leading-[1.1] md:text-[96px] md:leading-[1.1] md:tracking-[-3.8px] lg:max-w-6xl lg:mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get {" "}
            </motion.span>
            <span className="relative inline-flex items-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Mobile App Design
              </motion.span>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                className="inline-block ml-3"
              >
                     <svg
                  width="201"
                  height="101"
                  viewBox="0 0 162 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_16123)">
                    <path
                      d="M156.75 5.5H6.75V75.5H156.75V5.5Z"
                      stroke="#181824"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M8.09914 1.5H3.75C2.64543 1.5 1.75 2.39543 1.75 3.5V7.84914C1.75 8.95371 2.64543 9.84914 3.75 9.84914H8.09914C9.20371 9.84914 10.0991 8.95371 10.0991 7.84914V3.5C10.0991 2.39543 9.20371 1.5 8.09914 1.5Z"
                      fill="white"
                      stroke="#181824"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M158.599 1.5H154.25C153.145 1.5 152.25 2.39543 152.25 3.5V7.84914C152.25 8.95371 153.145 9.84914 154.25 9.84914H158.599C159.704 9.84914 160.599 8.95371 160.599 7.84914V3.5C160.599 2.39543 159.704 1.5 158.599 1.5Z"
                      fill="white"
                      stroke="#181824"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M8.09914 71.5H3.75C2.64543 71.5 1.75 72.3954 1.75 73.5V77.8491C1.75 78.9537 2.64543 79.8491 3.75 79.8491H8.09914C9.20371 79.8491 10.0991 78.9537 10.0991 77.8491V73.5C10.0991 72.3954 9.20371 71.5 8.09914 71.5Z"
                      fill="white"
                      stroke="#181824"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M158.599 71.5H154.25C153.145 71.5 152.25 72.3954 152.25 73.5V77.8491C152.25 78.9537 153.145 79.8491 154.25 79.8491H158.599C159.704 79.8491 160.599 78.9537 160.599 77.8491V73.5C160.599 72.3954 159.704 71.5 158.599 71.5Z"
                      fill="white"
                      stroke="#181824"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M120.75 9.5H42.75C25.6292 9.5 11.75 23.3792 11.75 40.5C11.75 57.6208 25.6292 71.5 42.75 71.5H120.75C137.871 71.5 151.75 57.6208 151.75 40.5C151.75 23.3792 137.871 9.5 120.75 9.5Z"
                      fill="#5F1CFC"
                    ></path>
                    <path
                      d="M70.75 40.5C70.75 25.036 58.214 12.5 42.75 12.5C27.286 12.5 14.75 25.036 14.75 40.5C14.75 55.964 27.286 68.5 42.75 68.5C58.214 68.5 70.75 55.964 70.75 40.5Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M42.75 40.5047C42.75 37.6695 45.0484 35.3711 47.8836 35.3711C50.7189 35.3711 53.0173 37.6695 53.0173 40.5047C53.0173 43.34 50.7189 45.6384 47.8836 45.6384C45.0484 45.6384 42.75 43.34 42.75 40.5047Z"
                      fill="#1ABCFE"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.4805 50.7664C32.4805 47.9312 34.7789 45.6328 37.6141 45.6328H42.7477V50.7664C42.7477 53.6017 40.4493 55.9001 37.6141 55.9001C34.7789 55.9001 32.4805 53.6017 32.4805 50.7664Z"
                      fill="#0ACF83"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M42.75 25.1016V35.3688H47.8836C50.7189 35.3688 53.0173 33.0704 53.0173 30.2352C53.0173 27.4 50.7189 25.1016 47.8836 25.1016H42.75Z"
                      fill="#FF7262"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.4805 30.2352C32.4805 33.0704 34.7789 35.3688 37.6141 35.3688H42.7477V25.1016H37.6141C34.7789 25.1016 32.4805 27.4 32.4805 30.2352Z"
                      fill="#F24E1E"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.4805 40.5047C32.4805 43.34 34.7789 45.6384 37.6141 45.6384H42.7477V35.3711H37.6141C34.7789 35.3711 32.4805 37.6695 32.4805 40.5047Z"
                      fill="#A259FF"
                    ></path>
                    <path
                      d="M148.75 40.5C148.75 25.036 136.214 12.5 120.75 12.5C105.286 12.5 92.75 25.036 92.75 40.5C92.75 55.964 105.286 68.5 120.75 68.5C136.214 68.5 148.75 55.964 148.75 40.5Z"
                      fill="white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M134.711 32.7969L126.161 49.3758H118.131L121.709 42.5048H121.549C118.597 46.3058 114.193 48.808 107.918 49.3758V42.5999C107.918 42.5999 111.932 42.3647 114.292 39.9035H107.918V32.797H115.082V38.642L115.243 38.6413L118.17 32.797H123.588V38.6049L123.749 38.6047L126.786 32.7969H134.711Z"
                      fill="#146EF5"
                    ></path>
                    <path
                      d="M86.75 40.5H76.75"
                      stroke="white"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M81.75 45.5V35.5"
                      stroke="white"
                      strokeLinecap="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_16123">
                      <rect
                        width="161"
                        height="81"
                        fill="white"
                        transform="translate(0.75 0.5)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>
  
            </span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <br /> That Earn You More <br /> Than They Cost
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 text-2xl leading-9 text-[#828088] max-w-3xl mx-auto"
          >
            No calls. No waiting. No freelancers.
            <br />
            Just Business-driven design UI in Figma, ready to dev — starting at €490.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-14 flex items-center justify-center gap-x-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/demo"
                className="bg-[#140F23] text-white hover:bg-gray-800 px-10 py-6 text-lg font-medium rounded-full transition-colors"
              >
                Book a demo
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/work"
                className="text-lg font-medium leading-6 text-[#140F23] hover:text-gray-600 py-6 px-10 rounded-full border border-[#E5E5EA] transition-colors"
              >
                Our work
              </Link>
            </motion.div>
          </motion.div>

    {/* Testimonials Marquee */}
    <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-16 w-full overflow-hidden"
          >
            <PortfolioMarquee />
          </motion.div>

  
        </div>
      </div>
    </div>
  );
}