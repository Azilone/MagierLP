"use client";

import Image from "next/image";

export function HowItWorksSection() {
  return (
    <section className="flex w-full max-w-[1200px] py-28 flex-col items-start mx-auto">
      <div className="flex flex-col items-start gap-[60px] w-full px-0 md:px-0 sm:px-4">
        <div className="flex flex-col items-start gap-20 w-full">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex flex-col items-start w-full">
              <span className="text-[#5F1CFC] font-medium text-base leading-4 tracking-[-0.32px] py-[7.5px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                How it works
              </span>
            </div>
            <div className="flex items-start gap-[370px] w-full md:flex-row sm:flex-col sm:gap-8">
              <div className="relative w-[440px] h-[145px] md:w-[440px] md:h-[145px] sm:w-full sm:h-auto">
                <h2 className="w-[328px] h-[73px] text-[#140F23] text-[66px] font-bold leading-[72.6px] tracking-[-2.64px] absolute left-0 top-0 sm:relative sm:w-full">
                  We make it
                </h2>
                <div className="absolute left-0 top-[69px] w-[245px] h-20 sm:relative sm:top-0">
                  <span className="absolute left-0 top-1 w-[174px] text-[#140F23] text-[66px] font-bold leading-[72.6px] tracking-[-2.64px]">
                    super
                  </span>
                  <div className="absolute right-0 top-0 w-[56px] h-[56px]">
                    <svg
                      width="57"
                      height="57"
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
                      <mask
                        id="mask0_1_16557"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="2"
                        width="53"
                        height="53"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16.3106 3.11349C17.2814 2.1427 18.9192 2.41626 19.5218 3.64982L22.1149 8.95799C22.4898 9.72539 22.336 10.6462 21.7321 11.2501L11.3272 21.655C10.7233 22.2589 9.80254 22.4127 9.03515 22.0378L3.72698 19.4447C2.49341 18.8421 2.21985 17.2042 3.19063 16.2334L16.3106 3.11349ZM54.4834 50.3045C54.8243 51.3067 53.5781 52.0822 52.8296 51.3337L40.0708 38.575C39.7289 38.233 39.6901 37.6988 39.903 37.2646C40.9252 35.1794 40.5694 32.5894 38.8356 30.8555C36.6541 28.674 33.1172 28.674 30.9357 30.8555C28.7543 33.037 28.7543 36.5739 30.9357 38.7554C32.67 40.4897 35.2609 40.8452 37.3464 39.822C37.7807 39.6089 38.3151 39.6476 38.6571 39.9897L51.4362 52.7688C52.1847 53.5173 51.4092 54.7635 50.407 54.4226L9.75766 40.5934C9.19639 40.4025 8.92464 39.7663 9.16859 39.226C12.3816 32.1091 14.0901 26.9048 14.1366 22.3854C14.1394 22.1157 14.2436 21.8562 14.4343 21.6656L21.7376 14.3622C21.9283 14.1715 22.1878 14.0673 22.4575 14.0645C26.9767 14.0182 32.1808 12.3099 39.2977 9.0969C39.838 8.85296 40.4742 9.12471 40.6651 9.68598L54.4834 50.3045Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1_16557)">
                        <path
                          d="M18.1744 4.30801C18.0237 3.99962 17.6142 3.93123 17.3716 4.17392L15.2502 2.05261C16.9491 0.353734 19.8153 0.83245 20.8699 2.9912L18.1744 4.30801ZM20.7675 9.61618L18.1744 4.30801L20.8699 2.9912L23.463 8.29937L20.7675 9.61618ZM20.6718 10.1892C20.8227 10.0382 20.8612 9.80803 20.7675 9.61618L23.463 8.29937C24.1191 9.64231 23.8499 11.2537 22.7931 12.3105L20.6718 10.1892ZM10.2668 20.5941L20.6718 10.1892L22.7931 12.3105L12.3882 22.7154L10.2668 20.5941ZM9.69381 20.6898C9.88566 20.7835 10.1159 20.7451 10.2668 20.5941L12.3882 22.7154C11.3313 23.7723 9.71995 24.0414 8.377 23.3854L9.69381 20.6898ZM4.38564 18.0967L9.69381 20.6898L8.377 23.3854L3.06883 20.7923L4.38564 18.0967ZM4.25155 17.2939C4.00886 17.5366 4.07725 17.9461 4.38564 18.0967L3.06883 20.7923C0.910098 19.7377 0.431368 16.8715 2.13023 15.1726L4.25155 17.2939ZM17.3716 4.17392L4.25155 17.2939L2.13023 15.1726L15.2502 2.05261L17.3716 4.17392ZM53.8905 50.2729C53.826 50.2083 53.7098 50.145 53.5686 50.134C53.4435 50.1242 53.343 50.1582 53.2728 50.2019C53.2027 50.2456 53.1277 50.3207 53.0812 50.4372C53.0287 50.5688 53.0342 50.701 53.0636 50.7874L55.9038 49.8212C56.7561 52.3266 53.6406 54.2655 51.7692 52.3942L53.8905 50.2729ZM41.1318 37.5141L53.8905 50.2729L51.7692 52.3942L39.0105 39.6354L41.1318 37.5141ZM41.2502 37.9247C41.264 37.8965 41.2772 37.8526 41.2698 37.7872C41.2618 37.7151 41.2253 37.6077 41.1318 37.5141L39.0105 39.6354C38.126 38.7509 38.121 37.4923 38.5564 36.6041L41.2502 37.9247ZM39.8966 29.7947C42.0976 31.9957 42.546 35.2813 41.2502 37.9247L38.5564 36.6041C39.305 35.0771 39.0419 33.1826 37.7753 31.916L39.8966 29.7947ZM29.8754 29.7947C32.6427 27.0274 37.1293 27.0274 39.8966 29.7947L37.7753 31.916C36.1796 30.3203 33.5924 30.3203 31.9967 31.916L29.8754 29.7947ZM29.8754 39.8159C27.1081 37.0486 27.1081 32.5619 29.8754 29.7947L31.9967 31.916C30.401 33.5117 30.401 36.0988 31.9967 37.6945L29.8754 39.8159ZM38.0074 41.1685C35.3636 42.4656 32.077 42.0175 29.8754 39.8159L31.9967 37.6945C33.2636 38.9615 35.1588 39.2244 36.686 38.4752L38.0074 41.1685ZM37.5968 41.0501C37.6903 41.1437 37.7978 41.1801 37.8699 41.1882C37.9353 41.1955 37.9792 41.1823 38.0074 41.1685L36.686 38.4752C37.5743 38.0394 38.8333 38.044 39.7181 38.9288L37.5968 41.0501ZM50.3758 53.8292L37.5968 41.0501L39.7181 38.9288L52.4972 51.7079L50.3758 53.8292ZM50.8904 53.0023C50.804 52.9729 50.6718 52.9674 50.5402 53.0199C50.4237 53.0664 50.3485 53.1413 50.3049 53.2115C50.2612 53.2817 50.2272 53.3822 50.2369 53.5073C50.248 53.6485 50.3113 53.7646 50.3758 53.8292L52.4972 51.7079C54.3685 53.5792 52.4296 56.6948 49.9242 55.8425L50.8904 53.0023ZM10.241 39.1732L50.8904 53.0023L49.9242 55.8425L9.2748 42.0133L10.241 39.1732ZM10.536 39.843C10.6519 39.5862 10.5281 39.2708 10.241 39.1732L9.2748 42.0133C7.86523 41.5338 7.1979 39.946 7.80172 38.6086L10.536 39.843ZM15.6368 22.4006C15.5869 27.2559 13.758 32.7062 10.536 39.843L7.80172 38.6086C11.0058 31.5116 12.5939 26.5533 12.637 22.3698L15.6368 22.4006ZM15.4953 22.726C15.5947 22.6265 15.6357 22.5052 15.6368 22.4006L12.637 22.3698C12.6436 21.7259 12.8931 21.0855 13.3739 20.6047L15.4953 22.726ZM22.7986 15.4227L15.4953 22.726L13.3739 20.6047L20.6773 13.3014L22.7986 15.4227ZM22.4732 15.5642C22.5778 15.5632 22.6991 15.5222 22.7986 15.4227L20.6773 13.3014C21.1581 12.8205 21.7985 12.571 22.4424 12.5644L22.4732 15.5642ZM39.9152 10.4638C32.7784 13.6858 27.3283 15.5145 22.4732 15.5642L22.4424 12.5644C26.6258 12.5215 31.5838 10.9336 38.6808 7.72955L39.9152 10.4638ZM39.2453 10.1689C39.343 10.4559 39.6584 10.5798 39.9152 10.4638L38.6808 7.72955C40.0182 7.12574 41.606 7.79308 42.0855 9.20266L39.2453 10.1689ZM53.0636 50.7874L39.2453 10.1689L42.0855 9.20266L55.9038 49.8212L53.0636 50.7874Z"
                          fill="#181824"
                          fillOpacity="0.06"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <span className="absolute left-[252px] top-[73px] text-[#140F23] text-[66px] font-bold leading-[72.6px] tracking-[-2.64px] sm:relative sm:left-0 sm:top-0">
                  easy
                </span>
              </div>
              <p className="text-[#828088] text-lg leading-[27px] tracking-[-0.36px] w-[390px] max-w-[390px] pt-2 md:w-[390px] md:max-w-[390px] sm:w-full sm:max-w-full">
                Working with us is like having a full team of top designers,
                developers and art directors in-house. Always ready to go.
              </p>
            </div>
          </div>

          <div className="flex w-full justify-center items-center gap-4 md:flex-row sm:flex-col">
            <div className="flex-none w-[389px] p-[13px] flex flex-col items-start gap-[0.01px] rounded-[42px] border border-[#EBEBEE] bg-white shadow-[0px_0px_0px_2px_#E5E5EA_inset] md:w-[389px] sm:w-full">
              <div className="h-[304px] w-full rounded-[32px] overflow-hidden relative bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium">
                  Subscribe Team Image
                </span>
              </div>
              <div className="flex p-[24px_28px_28px] flex-col justify-center items-center gap-5 w-full">
                <h3 className="text-[#140F23] text-center text-2xl font-medium leading-[30px] tracking-[-0.96px]">
                  Subscribe to your team
                </h3>
                <p className="text-[#828088] text-center text-lg leading-[27px] tracking-[-0.32px] px-[27px]">
                  Meet your handpicked team of experts led by your dedicated
                  Project Manager.
                </p>
              </div>
            </div>

            <div className="flex-none w-[389px] p-[13px] flex flex-col items-start gap-[0.01px] rounded-[42px] border border-[#EBEBEE] bg-white shadow-[0px_0px_0px_2px_#E5E5EA_inset] md:w-[389px] sm:w-full">
              <div className="h-[304px] w-full rounded-[32px] overflow-hidden relative bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium">
                  Create Requests Image
                </span>
              </div>
              <div className="flex p-[24px_49.5px_28px] flex-col justify-center items-center gap-5 w-full">
                <h3 className="text-[#140F23] text-center text-2xl font-medium leading-[30px] tracking-[-0.96px]">
                  Create requests
                </h3>
                <p className="text-[#828088] text-center text-lg leading-[27px] tracking-[-0.32px]">
                  Simply submit your design &amp; webflow request we will
                  straight jump to work.
                </p>
              </div>
            </div>

            <div className="flex-none w-[397px] p-[13px_13px_13px_21px] flex flex-col items-start rounded-[42px] border border-[#EBEBEE] bg-white shadow-[0px_0px_0px_2px_#E5E5EA_inset,0px_50px_50px_0px_rgba(20,15,35,0.08)] rotate-[4deg] md:w-[397px] sm:w-full">
              <div className="h-[304px] w-full rounded-[32px] overflow-hidden relative bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-medium">
                  Review Complete Image
                </span>
              </div>
              <div className="flex p-[24px_28px_28px] flex-col justify-center items-center gap-5 w-full">
                <h3 className="text-[#140F23] text-center text-2xl font-medium leading-[30px] tracking-[-0.96px]">
                  Review &amp; Complete
                </h3>
                <p className="text-[#828088] text-center text-lg leading-[27px] tracking-[-0.32px] px-[10px]">
                  Check the work we have done for you and give us your feedback.
                  We revise until you are happy.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-[30px] w-full md:flex-row md:gap-[30px] sm:flex-col sm:gap-4 xs:gap-3">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7625 16.4178C10.4871 17.1139 9.50316 17.1139 9.22767 16.4178L8.0273 13.3726C7.94367 13.1611 7.7764 12.9913 7.5624 12.9077L4.51721 11.7073C3.82109 11.4319 3.82109 10.4479 4.51721 10.1725L7.5624 8.97212C7.77394 8.88849 7.94367 8.72122 8.0273 8.50722L9.22767 5.46203C9.50316 4.76591 10.4871 4.76591 10.7625 5.46203L11.9629 8.50722C12.0465 8.71876 12.2138 8.88849 12.4278 8.97212L15.473 10.1725C16.1691 10.4479 16.1691 11.4319 15.473 11.7073L12.4278 12.9077C12.2163 12.9913 12.0465 13.1586 11.9629 13.3726L10.7625 16.4178Z"
                fill="#5F1CFC"
              />
            </svg>
            <span className="text-[#140F23] font-medium text-lg leading-[27px] tracking-[-0.36px]">
              Unlimited tasks
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7625 16.4178C10.4871 17.1139 9.50316 17.1139 9.22767 16.4178L8.0273 13.3726C7.94367 13.1611 7.7764 12.9913 7.5624 12.9077L4.51721 11.7073C3.82109 11.4319 3.82109 10.4479 4.51721 10.1725L7.5624 8.97212C7.77394 8.88849 7.94367 8.72122 8.0273 8.50722L9.22767 5.46203C9.50316 4.76591 10.4871 4.76591 10.7625 5.46203L11.9629 8.50722C12.0465 8.71876 12.2138 8.88849 12.4278 8.97212L15.473 10.1725C16.1691 10.4479 16.1691 11.4319 15.473 11.7073L12.4278 12.9077C12.2163 12.9913 12.0465 13.1586 11.9629 13.3726L10.7625 16.4178Z"
                fill="#5F1CFC"
              />
            </svg>
            <span className="text-[#140F23] font-medium text-lg leading-[27px] tracking-[-0.36px]">
              Results in less than 48h
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7625 16.4178C10.4871 17.1139 9.50316 17.1139 9.22767 16.4178L8.0273 13.3726C7.94367 13.1611 7.7764 12.9913 7.5624 12.9077L4.51721 11.7073C3.82109 11.4319 3.82109 10.4479 4.51721 10.1725L7.5624 8.97212C7.77394 8.88849 7.94367 8.72122 8.0273 8.50722L9.22767 5.46203C9.50316 4.76591 10.4871 4.76591 10.7625 5.46203L11.9629 8.50722C12.0465 8.71876 12.2138 8.88849 12.4278 8.97212L15.473 10.1725C16.1691 10.4479 16.1691 11.4319 15.473 11.7073L12.4278 12.9077C12.2163 12.9913 12.0465 13.1586 11.9629 13.3726L10.7625 16.4178Z"
                fill="#5F1CFC"
              />
            </svg>
            <span className="text-[#140F23] font-medium text-lg leading-[27px] tracking-[-0.36px]">
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
