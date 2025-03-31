"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <div className="w-full bg-[#5F1CFC] px-[200px] py-[19.32px] rounded-[42px] flex flex-col items-center lg:px-[100px] sm:px-[20px]">
      <div className="flex flex-col items-center max-w-[1200px] w-full gap-16 py-28 lg:py-20 sm:py-10">
        <div className="flex flex-col items-center text-center gap-[120px] lg:gap-20 sm:gap-10">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-white font-bold text-[66px] leading-[72.6px] tracking-[-2.64px] lg:text-[50px] lg:leading-[55px] sm:text-[36px] sm:leading-[40px]">
                This is
              </div>
              <div>
                <svg
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[56px] h-[56px] lg:w-[42px] lg:h-[42px] sm:w-[32px] sm:h-[32px]"
                >
                  <g clipPath="url(#clip0_1_16501)">
                    <mask
                      id="mask0_1_16501"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="57"
                      height="57"
                    >
                      <path
                        d="M56.4902 0.22998H0.490234V56.23H56.4902V0.22998Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_1_16501)">
                      <path
                        d="M8.28017 47.7845C10.6198 50.1241 11.721 52.816 10.7399 53.7971L54.0579 10.4791C55.039 9.49798 53.9378 6.80605 51.5982 4.46649C49.2586 2.12693 46.5667 1.02569 45.5856 2.00679L2.26758 45.3248C3.24869 44.3437 5.94062 45.445 8.28017 47.7845Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.7342 53.7991C11.7153 52.818 10.6141 50.126 8.27458 47.7865C5.97844 45.4903 3.34289 44.387 2.31836 45.2743L12.3768 35.2158C13.3579 34.2347 16.0499 35.3359 18.3894 37.6755C20.6856 39.9716 21.7889 42.6072 20.9016 43.6317L10.7342 53.7991Z"
                        fill="#5F1CFC"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M43.9452 20.592C44.9263 19.6109 43.825 16.919 41.4855 14.5794C39.1893 12.2833 36.5538 11.1799 35.5293 12.0673L45.5878 2.00874C46.5689 1.02764 49.2608 2.12888 51.6004 4.46844C53.8965 6.76458 54.9999 9.40014 54.1125 10.4247L43.9452 20.592Z"
                        fill="#5F1CFC"
                      ></path>
                      <path
                        d="M2.6184 45.6768C2.49545 45.7997 2.40481 46.0062 2.40627 46.3454C2.40773 46.6873 2.50459 47.1232 2.71222 47.6308C3.12661 48.6437 3.94358 49.8477 5.0781 50.9823C6.21261 52.1168 7.41661 52.9337 8.42958 53.3481C8.93711 53.5558 9.37305 53.6526 9.71491 53.6541C10.0542 53.6555 10.2606 53.5649 10.3836 53.442C10.5065 53.319 10.5971 53.1125 10.5957 52.7733C10.5942 52.4314 10.4973 51.9955 10.2898 51.488C9.87537 50.475 9.0584 49.271 7.92389 48.1365C6.78937 47.002 5.58537 46.185 4.57241 45.7706C4.06487 45.563 3.62893 45.4661 3.28707 45.4646C2.94782 45.4632 2.74134 45.5538 2.6184 45.6768Z"
                        fill="white"
                        stroke="white"
                      ></path>
                      <path
                        d="M2.62133 45.6784C2.49839 45.8013 2.40775 46.0078 2.4092 46.3471C2.41067 46.6889 2.50752 47.1249 2.71515 47.6324C3.12955 48.6454 3.94651 49.8494 5.08103 50.9839C6.21555 52.1184 7.41955 52.9354 8.43252 53.3497C8.94004 53.5574 9.37599 53.6542 9.71784 53.6557C10.0571 53.6572 10.2636 53.5665 10.3865 53.4436L53.7045 10.1255C53.8275 10.0026 53.9181 9.79611 53.9167 9.45686C53.9152 9.115 53.8184 8.67906 53.6107 8.17153C53.1963 7.15856 52.3794 5.95456 51.2448 4.82004C50.1103 3.68553 48.9063 2.86856 47.8934 2.45417C47.3858 2.24654 46.9499 2.14968 46.608 2.14821C46.2688 2.14676 46.0623 2.2374 45.9394 2.36035L2.62133 45.6784Z"
                        stroke="white"
                      ></path>
                      <path
                        d="M6.89129 13.9093C6.86876 12.8489 8.15363 12.3086 8.89569 13.0663L12.1356 16.3838C12.361 16.6141 12.6726 16.7439 12.998 16.7356L17.6339 16.6308C18.6943 16.6082 19.2346 17.8931 18.4769 18.6352L15.1594 21.8751C14.9291 22.1005 14.7993 22.4121 14.8076 22.7375L14.9125 27.3734C14.935 28.4337 13.6501 28.9741 12.908 28.2163L9.66812 24.8989C9.44273 24.6686 9.13109 24.5388 8.8057 24.5471L4.16979 24.6519C3.10945 24.6744 2.5691 23.3896 3.32685 22.6475L6.64432 19.4076C6.87464 19.1822 7.00442 18.8706 6.99611 18.5452L6.89129 13.9093Z"
                        fill="white"
                      ></path>
                      <path
                        d="M24.4146 3.62154C24.6212 3.09946 25.3592 3.09946 25.5658 3.62154L26.4661 5.90544C26.5288 6.0641 26.6542 6.19139 26.8147 6.25412L29.0986 7.15439C29.6207 7.36101 29.6207 8.09895 29.0986 8.30557L26.8147 9.20584C26.6561 9.26857 26.5288 9.39402 26.4661 9.55452L25.5658 11.8384C25.3592 12.3605 24.6212 12.3605 24.4146 11.8384L23.5143 9.55452C23.4516 9.39586 23.3262 9.26857 23.1657 9.20584L20.8818 8.30557C20.3597 8.09895 20.3597 7.36101 20.8818 7.15439L23.1657 6.25412C23.3243 6.19139 23.4516 6.06594 23.5143 5.90544L24.4146 3.62154Z"
                        fill="white"
                      ></path>
                      <path
                        d="M48.7231 35.5079C49.7831 35.049 50.8565 36.1224 50.3976 37.1824L48.385 41.814C48.2455 42.136 48.2428 42.5036 48.385 42.8283L50.3976 47.4599C50.8565 48.5199 49.7831 49.5932 48.7231 49.1344L44.0915 47.1218C43.7695 46.9823 43.4019 46.9796 43.0772 47.1218L38.4456 49.1344C37.3856 49.5932 36.3122 48.5199 36.7711 47.4599L38.7837 42.8283C38.9232 42.5063 38.9259 42.1387 38.7837 41.814L36.7711 37.1824C36.3122 36.1224 37.3856 35.049 38.4456 35.5079L43.0772 37.5205C43.3992 37.66 43.7668 37.6627 44.0915 37.5205L48.7231 35.5079Z"
                        fill="white"
                      ></path>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_16501">
                      <rect
                        width="56"
                        height="56"
                        fill="white"
                        transform="translate(0.490234 0.22998)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-white font-bold text-[66px] leading-[72.6px] tracking-[-2.64px] lg:text-[50px] lg:leading-[55px] sm:text-[36px] sm:leading-[40px]">
                where magier comes in
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center flex-wrap justify-center gap-3">
                <div className="text-white font-bold text-[66px] leading-[72.6px] tracking-[-2.64px] lg:text-[50px] lg:leading-[55px] sm:text-[36px] sm:leading-[40px]">
                  We are your team
                </div>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-[40px] h-[40px] rounded-full border-[2px] border-[#FFF] bg-[#777777]"></div>
                    <div className="w-[40px] h-[40px] rounded-full border-[2px] border-[#FFF] bg-[#888888]"></div>
                    <div className="w-[40px] h-[40px] rounded-full border-[2px] border-[#FFF] bg-[#999999]"></div>
                  </div>
                </div>
                <div className="text-white font-bold text-[66px] leading-[72.6px] tracking-[-2.64px] lg:text-[50px] lg:leading-[55px] sm:text-[36px] sm:leading-[40px]">
                  of experts
                </div>
              </div>
              <div className="text-white font-bold text-[66px] leading-[72.6px] tracking-[-2.64px] text-center lg:text-[50px] lg:leading-[55px] sm:text-[36px] sm:leading-[40px]">
                that takes care of all of your
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="text-white font-bold text-[64px] leading-[72.6px] tracking-[-2.64px] lg:text-[48px] lg:leading-[55px] sm:text-[34px] sm:leading-[40px]">
                    design
                  </div>
                  <div>
                    <svg
                      width="138"
                      height="62"
                      viewBox="0 0 138 62"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[137px] h-[60.671px] lg:w-[103px] lg:h-[45px] sm:w-[82px] sm:h-[36px]"
                    >
                      <g clipPath="url(#clip0_1_16524)">
                        <path
                          d="M107.005 0.684326H30.6765C13.9226 0.684326 0.34082 14.2661 0.34082 31.02C0.34082 47.774 13.9226 61.3558 30.6765 61.3558H107.005C123.759 61.3558 137.341 47.774 137.341 31.02C137.341 14.2661 123.759 0.684326 107.005 0.684326Z"
                          fill="#5F1CFC"
                        ></path>
                        <path
                          d="M134.405 31.0201C134.405 15.8875 122.138 3.62012 107.005 3.62012C91.8729 3.62012 79.6055 15.8875 79.6055 31.0201C79.6055 46.1527 91.8729 58.4201 107.005 58.4201C122.138 58.4201 134.405 46.1527 134.405 31.0201Z"
                          fill="white"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M120.671 23.4819L112.304 39.7056H104.446L107.948 32.9818H107.791C104.902 36.7014 100.593 39.1499 94.4521 39.7056V33.0749C94.4521 33.0749 98.3802 32.8447 100.69 30.4362H94.4521V23.482H101.463V29.2018L101.62 29.2011L104.485 23.482H109.786V29.1655L109.944 29.1653L112.916 23.4819H120.671Z"
                          fill="#146EF5"
                        ></path>
                        <path
                          d="M58.0764 31.0201C58.0764 15.8875 45.809 3.62012 30.6764 3.62012C15.5438 3.62012 3.27637 15.8875 3.27637 31.0201C3.27637 46.1527 15.5438 58.4201 30.6764 58.4201C45.809 58.4201 58.0764 46.1527 58.0764 31.0201Z"
                          fill="white"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.6768 31.0246C30.6768 28.2501 32.9259 26.001 35.7004 26.001C38.4749 26.001 40.724 28.2501 40.724 31.0246C40.724 33.7991 38.4749 36.0483 35.7004 36.0483C32.9259 36.0483 30.6768 33.7991 30.6768 31.0246Z"
                          fill="#1ABCFE"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.6309 41.0666C20.6309 38.2921 22.88 36.043 25.6545 36.043H30.678V41.0666C30.678 43.8411 28.4289 46.0903 25.6545 46.0903C22.88 46.0903 20.6309 43.8411 20.6309 41.0666Z"
                          fill="#0ACF83"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.6768 15.9517V25.9988H35.7004C38.4749 25.9988 40.724 23.7497 40.724 20.9753C40.724 18.2008 38.4749 15.9517 35.7004 15.9517H30.6768Z"
                          fill="#FF7262"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.6309 20.9753C20.6309 23.7497 22.88 25.9988 25.6545 25.9988H30.678V15.9517H25.6545C22.88 15.9517 20.6309 18.2008 20.6309 20.9753Z"
                          fill="#F24E1E"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.6309 31.0246C20.6309 33.7991 22.88 36.0483 25.6545 36.0483H30.678V26.001H25.6545C22.88 26.001 20.6309 28.2501 20.6309 31.0246Z"
                          fill="#A259FF"
                        ></path>
                        <path
                          d="M73.734 31.02H63.9482"
                          stroke="white"
                          strokeWidth="0.978571"
                          strokeLinecap="round"
                        ></path>
                        <path
                          d="M68.8408 35.9127V26.127"
                          stroke="white"
                          strokeWidth="0.978571"
                          strokeLinecap="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_16524">
                          <rect
                            width="137"
                            height="60.6714"
                            fill="white"
                            transform="translate(0.34082 0.684326)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="text-white font-bold text-[66px] leading-[72.6px] tracking-[-2.64px] lg:text-[50px] lg:leading-[55px] sm:text-[36px] sm:leading-[40px]">
                  webflow tasks
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Link
            href="/demo"
            className="text-[#140F23] text-base font-medium leading-[25px] tracking-[-0.32px] min-w-[161px] px-[33px] py-[21px] rounded-[100px] bg-white border border-white cursor-pointer transition-all duration-200 hover:bg-gray-100"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </div>
  );
}
