"use client";

import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="flex flex-col items-center w-full bg-white px-[200px] py-[1px] rounded-[42px] border border-[#EBEBEE] shadow-[0px_0px_0px_2px_#E5E5EA_inset] md:px-[100px] sm:px-5">
      <div className="flex flex-col w-full max-w-[1200px] py-28 gap-20 md:py-20 sm:py-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-[#5F1CFC] font-medium text-base leading-4 tracking-[-0.32px] py-[7.5px] px-[17px] rounded-[42px] border border-[#E5E5EA] w-fit">
              Our services
            </span>
          </div>
          <div className="flex justify-between items-end md:flex-col md:gap-[30px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-[10px]">
                <span className="text-[#140F23] text-[66px] font-bold leading-[72.6px] tracking-[-2.64px] md:text-[50px] sm:text-[40px]">
                  We
                </span>
                <div className="w-[56px] h-[56px]">
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_16648)">
                      <mask
                        id="mask0_1_16648"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="57"
                        height="57"
                      >
                        <path
                          d="M56.9199 0.450195H0.919922V56.4502H56.9199V0.450195Z"
                          fill="white"
                        ></path>
                      </mask>
                      <g mask="url(#mask0_1_16648)">
                        <path
                          d="M8.70986 48.0049C11.0495 50.3445 12.1507 53.0364 11.1696 54.0175L54.4876 10.6995C55.4687 9.71844 54.3675 7.02651 52.0279 4.68695C49.6883 2.34739 46.9964 1.24615 46.0153 2.22725L2.69727 45.5452C3.67838 44.5641 6.37031 45.6654 8.70986 48.0049Z"
                          fill="#5F1CFC"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1639 54.0195C12.145 53.0384 11.0438 50.3464 8.70427 48.0069C6.40813 45.7107 3.77258 44.6074 2.74805 45.4947L12.8065 35.4362C13.7876 34.4551 16.4796 35.5563 18.8191 37.8959C21.1153 40.192 22.2186 42.8276 21.3313 43.8521L11.1639 54.0195Z"
                          fill="#CBD2F3"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M44.3749 20.8124C45.356 19.8313 44.2547 17.1394 41.9152 14.7998C39.619 12.5037 36.9835 11.4003 35.959 12.2877L46.0175 2.2292C46.9986 1.2481 49.6905 2.34934 52.0301 4.6889C54.3262 6.98504 55.4296 9.6206 54.5422 10.6451L44.3749 20.8124Z"
                          fill="#CBD2F3"
                        ></path>
                        <path
                          d="M3.04808 45.8973C2.92513 46.0202 2.83449 46.2267 2.83595 46.5659C2.83741 46.9078 2.93427 47.3437 3.1419 47.8513C3.55629 48.8642 4.37327 50.0682 5.50779 51.2028C6.6423 52.3373 7.84629 53.1542 8.85926 53.5686C9.36679 53.7763 9.80273 53.8731 10.1446 53.8746C10.4838 53.876 10.6903 53.7854 10.8133 53.6625C10.9362 53.5395 11.0268 53.333 11.0254 52.9938C11.0239 52.6519 10.927 52.216 10.7195 51.7085C10.3051 50.6955 9.48808 49.4915 8.35357 48.357C7.21905 47.2225 6.01505 46.4055 5.00209 45.9911C4.49455 45.7835 4.05861 45.6866 3.71675 45.6851C3.3775 45.6837 3.17102 45.7743 3.04808 45.8973Z"
                          fill="#5F1CFC"
                          stroke="#5F1CFC"
                        ></path>
                        <path
                          d="M3.05101 45.8988C2.92807 46.0217 2.83743 46.2282 2.83888 46.5675C2.84035 46.9093 2.9372 47.3453 3.14483 47.8528C3.55923 48.8658 4.37619 50.0698 5.51071 51.2043C6.64523 52.3388 7.84923 53.1558 8.8622 53.5701C9.36972 53.7778 9.80567 53.8746 10.1475 53.8761C10.4868 53.8776 10.6933 53.7869 10.8162 53.664L54.1342 10.346C54.2572 10.223 54.3478 10.0166 54.3464 9.67732C54.3449 9.33546 54.2481 8.89952 54.0404 8.39199C53.626 7.37902 52.8091 6.17502 51.6745 5.0405C50.54 3.90599 49.336 3.08902 48.3231 2.67463C47.8155 2.467 47.3796 2.37014 47.0377 2.36867C46.6985 2.36722 46.492 2.45786 46.3691 2.58081L3.05101 45.8988Z"
                          stroke="#5F1CFC"
                        ></path>
                        <path
                          d="M7.32098 14.1298C7.29845 13.0694 8.58332 12.5291 9.32538 13.2868L12.5653 16.6043C12.7907 16.8346 13.1023 16.9644 13.4277 16.9561L18.0636 16.8513C19.124 16.8287 19.6643 18.1136 18.9066 18.8557L15.5891 22.0956C15.3588 22.321 15.229 22.6326 15.2373 22.958L15.3422 27.5939C15.3647 28.6542 14.0798 29.1946 13.3377 28.4368L10.0978 25.1194C9.87242 24.8891 9.56078 24.7593 9.23539 24.7676L4.59948 24.8724C3.53914 24.8949 2.99879 23.6101 3.75654 22.868L7.07401 19.6281C7.30433 19.4027 7.43411 19.0911 7.4258 18.7657L7.32098 14.1298Z"
                          fill="#5F1CFC"
                        ></path>
                        <path
                          d="M24.8443 3.84176C25.0509 3.31968 25.7889 3.31968 25.9955 3.84176L26.8958 6.12566C26.9585 6.28432 27.0839 6.41161 27.2444 6.47434L29.5283 7.37461C30.0504 7.58123 30.0504 8.31917 29.5283 8.52579L27.2444 9.42605C27.0858 9.48878 26.9585 9.61424 26.8958 9.77474L25.9955 12.0586C25.7889 12.5807 25.0509 12.5807 24.8443 12.0586L23.944 9.77474C23.8813 9.61608 23.7559 9.48878 23.5954 9.42605L21.3115 8.52579C20.7894 8.31917 20.7894 7.58123 21.3115 7.37461L23.5954 6.47434C23.754 6.41161 23.8813 6.28616 23.944 6.12566L24.8443 3.84176Z"
                          fill="#5F1CFC"
                        ></path>
                        <path
                          d="M49.1528 35.7281C50.2128 35.2692 51.2862 36.3426 50.8273 37.4026L48.8147 42.0342C48.6752 42.3562 48.6725 42.7238 48.8147 43.0485L50.8273 47.6801C51.2862 48.7401 50.2128 49.8134 49.1528 49.3546L44.5212 47.342C44.1992 47.2025 43.8316 47.1998 43.5069 47.342L38.8753 49.3546C37.8153 49.8134 36.7419 48.7401 37.2008 47.6801L39.2134 43.0485C39.3529 42.7265 39.3556 42.3589 39.2134 42.0342L37.2008 37.4026C36.7419 36.3426 37.8153 35.2692 38.8753 35.7281L43.5069 37.7407C43.8289 37.8802 44.1965 37.8829 44.5212 37.7407L49.1528 35.7281Z"
                          fill="#5F1CFC"
                        ></path>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_16648">
                        <rect
                          width="56"
                          height="56"
                          fill="white"
                          transform="translate(0.919922 0.450195)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-[#140F23] text-[66px] font-bold leading-[72.6px] tracking-[-2.64px] md:text-[50px] sm:text-[40px]">
                  cover
                </span>
              </div>
              <div className="text-[#140F23] text-[66px] font-bold leading-[72.6px] tracking-[-2.64px] md:text-[50px] sm:text-[40px]">
                all your
              </div>
              <div className="text-[#140F23] text-[65px] font-bold leading-[72.6px] tracking-[-2.64px] md:text-[50px] sm:text-[40px]">
                design needs
              </div>
            </div>
            <div className="text-[#828088] text-lg leading-[27px] tracking-[-0.36px] max-w-[387px]">
              With hands-on expertise and experience working with 100+ clients,
              we make solving your design challenges quicker, simpler, and
              stress-free.
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="pb-6">
            <div className="flex flex-wrap gap-2 md:gap-3">
              <div className="text-white bg-[#5F1CFC] font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px]">
                Ad Creatives
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Brand Design
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Motion Design
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Webflow Development
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Blog Images
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Illustrations
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Icons
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Packaging Design
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Infographics
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Presentations
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                UI / UX Design
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Webdesign
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Landingpages
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Print
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                App Design
              </div>
              <div className="text-[#828088] bg-white font-medium text-base leading-4 tracking-[-0.36px] py-[11px] px-[17px] rounded-[42px] border border-[#E5E5EA]">
                Social Media Content
              </div>
            </div>
          </div>
          <div className="flex justify-center items-start w-full">
            <div className="flex flex-col p-[13px] border border-[#E5E5EA] rounded-[42px] bg-white w-full">
              <div className="w-full h-[616.94px] rounded-[32px] overflow-hidden relative bg-gray-200">
                <Image
                  src="/images/ad-creatives-showcase.jpg"
                  alt="Ad Creatives showcase"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between items-center p-[26px_28px_20px_28px] md:flex-col md:gap-5">
                <div className="flex items-center">
                  <svg
                    width="97"
                    height="18"
                    viewBox="0 0 97 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_16790)">
                      <path
                        d="M9.13002 12.5285H7.79657C6.00616 12.4868 4.5801 11.0419 4.56505 9.27645V0.985439C4.56505 0.485271 4.15648 0.0800781 3.65206 0.0800781H0.912993C0.408568 0.0800781 0 0.485186 0 0.985439V10.4915C0 10.9917 0.408568 11.3968 0.912993 11.3968H2.24644C4.03685 11.4384 5.46248 12.8834 5.47805 14.6487V16.1498C5.47805 16.65 5.88661 17.0552 6.39104 17.0552H9.13002C9.63444 17.0552 10.043 16.65 10.043 16.1498V13.4338C10.043 12.9336 9.63444 12.5285 9.13002 12.5285Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M13.6959 0.0800781H10.9569C10.4524 0.0800781 10.0439 0.485186 10.0439 0.985439V10.4915C10.0439 10.9917 10.4525 11.3968 10.9569 11.3968H13.6959C14.2002 11.3968 14.6089 10.9917 14.6089 10.4915V0.985439C14.6089 0.485271 14.2002 0.0800781 13.6959 0.0800781Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M24.0944 10.4217L23.6535 12.0672L23.2301 10.4217L21.2902 5.1875H19.1738L22.56 13.6602H24.7469L28.1507 5.1875H26.0168L24.0944 10.4217Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M32.6616 5.01278C29.8397 5.01278 28.6581 6.37825 28.6581 8.09374L30.4041 8.46134C30.4041 7.11344 31.0742 6.58823 32.6086 6.58823C34.0019 6.58823 34.6721 7.11344 34.6721 8.2163V8.89894H32.8731C29.8396 8.89894 28.4463 9.80924 28.4463 11.5599C28.4463 12.9428 29.5575 13.8356 31.3563 13.8356C32.8906 13.8356 34.1606 13.1529 34.672 11.6298V13.6605H36.5591V8.16368C36.5591 6.13305 35.1307 5.01278 32.6616 5.01278ZM31.9737 12.4177C30.9685 12.4177 30.3512 11.9976 30.3512 11.3149C30.3512 10.422 31.1625 10.1945 32.9967 10.1945H34.6546C34.5312 11.7525 33.3142 12.4177 31.9737 12.4177Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M40.2553 1.40625H38.333V13.6601H40.2553V1.40625Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M48.3204 9.14378C48.3204 11.2269 47.4562 12.1022 46.01 12.1022C44.7401 12.1022 44.0347 11.437 44.0347 9.91402V5.1875H42.1123V10.2466C42.1123 12.6449 43.1353 13.8353 45.1987 13.8353C46.7684 13.8353 47.8265 13.0825 48.3204 11.5946V13.6602H50.2428V5.1875H48.3204V9.14378Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M55.7865 5.0127C53.194 5.0127 51.5361 6.74576 51.5361 9.49409C51.5361 12.1375 53.194 13.818 55.8747 13.818C57.9382 13.818 59.1905 13.0127 59.7195 11.3848L58.0793 10.8246C57.709 11.8574 57.1799 12.2251 55.9277 12.2251C54.3403 12.2251 53.6349 11.6123 53.4938 10.0718H59.8606C59.9488 7.00836 58.6613 5.0127 55.7865 5.0127ZM53.4938 8.75899C53.6172 7.23591 54.3227 6.57075 55.857 6.57075C57.2856 6.57075 57.9381 7.16589 57.9734 8.75899H53.4938Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M65.4094 12.1201C63.5399 12.1201 62.7992 11.3148 62.7992 9.42416C62.7992 7.53357 63.5399 6.72827 65.4094 6.72827C67.0143 6.72827 67.6492 7.34099 67.8256 8.72394L69.6951 8.30381C69.2189 6.06311 67.7022 5.0127 65.4094 5.0127C62.57 5.0127 60.8945 6.72827 60.8945 9.42416C60.8945 12.1025 62.57 13.8356 65.4094 13.8356C67.6317 13.8356 69.2013 12.8552 69.7128 10.4745L67.8609 10.0543C67.6492 11.4899 67.0143 12.1201 65.4094 12.1201Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M74.8841 5.01278C72.0623 5.01278 70.8806 6.37825 70.8806 8.09374L72.6267 8.46134C72.6267 7.11344 73.2968 6.58823 74.8312 6.58823C76.2245 6.58823 76.8946 7.11344 76.8946 8.2163V8.89894H75.0957C72.0622 8.89894 70.6689 9.80924 70.6689 11.5599C70.6689 12.9428 71.78 13.8356 73.5789 13.8356C75.1132 13.8356 76.3831 13.1529 76.8946 11.6298V13.6605H78.7817V8.16368C78.7817 6.13305 77.3533 5.01278 74.8841 5.01278ZM74.1963 12.4177C73.191 12.4177 72.5737 11.9976 72.5737 11.3149C72.5737 10.422 73.385 10.1945 75.2192 10.1945H76.8771C76.7537 11.7525 75.5367 12.4177 74.1963 12.4177Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M85.1734 8.68889L83.4627 8.47873C82.4574 8.33877 82.1752 8.11123 82.1752 7.46355C82.1752 6.74576 82.7572 6.4307 83.8507 6.4307C85.0146 6.4307 85.579 6.81587 85.7025 7.93613L87.5543 7.6035C87.4485 5.87053 86.0728 5.0127 83.8683 5.0127C81.6813 5.0127 80.3233 5.92298 80.3233 7.6035C80.3233 8.96897 81.0464 9.75669 82.7043 10.0018L84.3621 10.2119C85.4908 10.3694 85.8082 10.6145 85.8082 11.2973C85.8082 12.05 85.191 12.3826 84.0623 12.3826C82.7219 12.3826 81.9812 11.8924 81.8577 10.6846L80.0059 10.9997C80.1293 12.8028 81.646 13.8356 84.027 13.8356C86.3021 13.8356 87.6954 12.8203 87.6954 11.0522C87.6954 9.68668 86.9018 8.93384 85.1734 8.68889Z"
                        fill="#070707"
                      ></path>
                      <path
                        d="M92.9223 5.0127C90.3298 5.0127 88.6719 6.74576 88.6719 9.49409C88.6719 12.1375 90.3298 13.818 93.0106 13.818C95.074 13.818 96.3263 13.0127 96.8554 11.3848L95.2152 10.8246C94.8447 11.8574 94.3157 12.2251 93.0635 12.2251C91.4762 12.2251 90.7707 11.6123 90.6296 10.0718H96.9964C97.0846 7.00836 95.7972 5.0127 92.9223 5.0127ZM90.6296 8.75899C90.753 7.23591 91.4585 6.57075 92.9929 6.57075C94.4214 6.57075 95.0739 7.16589 95.1093 8.75899H90.6296Z"
                        fill="#070707"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_16790">
                        <rect
                          width="97"
                          height="17"
                          fill="white"
                          transform="translate(0 0.0800781)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-2 px-[17px] py-[11px] rounded-[42px] border border-[#E5E5EA] bg-white">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00187 9.53305C9.15063 9.53305 10.0819 8.6018 10.0819 7.45305C10.0819 6.3043 9.15063 5.37305 8.00187 5.37305C6.85312 5.37305 5.92188 6.3043 5.92188 7.45305C5.92188 8.6018 6.85312 9.53305 8.00187 9.53305Z"
                        stroke="#140F23"
                        strokeWidth="1.5"
                      ></path>
                      <path
                        d="M2.41184 6.23878C3.72517 0.465444 12.2785 0.472111 13.5852 6.24545C14.3518 9.63211 12.2452 12.4988 10.3985 14.2721C9.0585 15.5655 6.9385 15.5655 5.59184 14.2721C3.75184 12.4988 1.64517 9.62545 2.41184 6.23878Z"
                        stroke="#140F23"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <span className="text-[#140F23] font-medium text-base leading-4 tracking-[-0.32px]">
                      Germany
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-[17px] py-[11px] rounded-[42px] border border-[#E5E5EA] bg-white">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6693 8.57878C14.6693 12.2588 11.6826 15.2455 8.0026 15.2455C4.3226 15.2455 1.33594 12.2588 1.33594 8.57878C1.33594 4.89878 4.3226 1.91211 8.0026 1.91211C11.6826 1.91211 14.6693 4.89878 14.6693 8.57878Z"
                        stroke="#140F23"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M10.47 10.7012L8.40333 9.46789C8.04333 9.25456 7.75 8.74123 7.75 8.32123V5.58789"
                        stroke="#140F23"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="text-[#140F23] font-medium text-base leading-4 tracking-[-0.32px]">
                      4 days
                    </span>
                  </div>
                  <div className="text-[#140F23] font-medium text-base leading-4 tracking-[-0.32px] px-[17px] py-[11px] rounded-[42px] border border-[#E5E5EA] bg-white">
                    100 Ads per month
                  </div>
                  <div className="text-[#5F1CFC] font-medium text-base leading-4 tracking-[-0.32px] px-[17px] py-[7.5px] rounded-[42px] border border-[#5F1CFC]">
                    SaaS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16 flex justify-center w-full md:pt-10">
          <button className="text-white bg-[#140F23] font-medium text-base leading-[25px] tracking-[-0.32px] text-center py-[21px] px-[52px] min-w-[200px] max-w-[200px] rounded-[100px] border border-[#140F23] cursor-pointer">
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
}
