"use client";

import React from "react";
import Image from "next/image";

export function BenefitsSection() {
  return (
    <div className="w-full rounded-[42px]  overflow-hidden">
      <div className="flex justify-center px-96 py-28  max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-10">
        <div className="relative w-full max-w-[1200px]">
          <div className="flex flex-col gap-4 mb-20">
            <div className="px-4 pt-2 pb-2 text-base font-medium tracking-tight text-violet-700 border rounded-[42px] w-fit">
              Our benefits
            </div>
            <div className="flex flex-wrap gap-2.5 text-7xl font-semibold tracking-tighter text-gray-900 leading-[72.6px] max-md:text-5xl max-md:leading-[52px] max-sm:text-4xl max-sm:leading-10">
              <div>The</div>
              <div className="flex items-center">
                <div>design</div>
                <div>
                  <svg
                    width="57"
                    height="57"
                    viewBox="0 0 57 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="benefits-icon"
                    style={{ width: "56px", height: "56px", margin: "0 10px" }}
                  >
                    <g clipPath="url(#clip0_1_16843)">
                      <path
                        d="M46.7328 7.89754C46.5631 7.66452 46.3118 7.52979 46.0468 7.52979H37.3259H28.605H19.884H11.1631C10.8981 7.52979 10.6468 7.66452 10.4771 7.89754L2.31245 19.1109C2.16838 19.3087 2.09981 19.5527 2.10583 19.7944C2.11174 20.0312 2.18932 20.2659 2.33771 20.4527L27.2834 51.8581C27.6377 52.3042 28.1213 52.5272 28.605 52.5272C29.0886 52.5272 29.5722 52.3042 29.9265 51.8581L54.8722 20.4527C55.0206 20.2659 55.0981 20.0312 55.104 19.7944C55.1101 19.5527 55.0415 19.3087 54.8974 19.1109L46.7328 7.89754Z"
                        fill="#5F1CFC"
                      ></path>
                      <path
                        d="M28.6073 19.7954H16.1055L27.7001 50.1531C28.0242 51.0017 29.2204 51.0135 29.5613 50.1715L41.3002 21.1706C41.5663 20.5132 41.0825 19.7954 40.3732 19.7954H28.6073Z"
                        fill="#CBD2F3"
                      ></path>
                      <path
                        d="M27.283 51.8592L2.33734 20.4537C2.18895 20.2669 2.11138 20.0323 2.10547 19.7954H16.1028L28.6046 52.5283C28.121 52.5283 27.6374 52.3053 27.283 51.8592Z"
                        fill="#5F1CFC"
                      ></path>
                      <path
                        d="M55.3016 18.8166L54.8974 19.1109M55.3016 18.8166L47.137 7.60323C46.8828 7.25415 46.4873 7.02979 46.0468 7.02979H37.3259H28.605H19.884H11.1631C10.7226 7.02979 10.327 7.25415 10.0729 7.60323L1.90824 18.8166C1.69382 19.1111 1.59747 19.4651 1.60599 19.8068C1.61434 20.1419 1.724 20.4839 1.94619 20.7637L26.8919 52.1691C27.3368 52.7292 27.9621 53.0272 28.605 53.0272C29.2478 53.0272 29.8731 52.7292 30.318 52.1691L55.2637 20.7637C55.4859 20.4839 55.5955 20.1419 55.6039 19.8068C55.6124 19.4651 55.5161 19.1111 55.3016 18.8166Z"
                        stroke="#5F1CFC"
                      ></path>
                      <path
                        d="M28.6073 19.7944H16.1055L19.8864 7.52979H28.6073H37.3282L41.8568 19.7944H28.6073Z"
                        fill="#5F1CFC"
                      ></path>
                      <path
                        d="M54.8727 20.4537L29.927 51.8592C29.5727 52.3053 29.0891 52.5283 28.6055 52.5283L41.855 19.7954H55.1046C55.0987 20.0323 55.0211 20.2669 54.8727 20.4537Z"
                        fill="#5F1CFC"
                      ></path>
                      <path
                        d="M54.8957 19.1109L46.7311 7.89754C46.5614 7.66452 46.3101 7.52979 46.0451 7.52979H37.3242L41.8528 19.7944H55.1023C55.1083 19.5527 55.0398 19.3087 54.8957 19.1109Z"
                        fill="#5F1CFC"
                      ></path>
                      <path
                        d="M10.4771 7.89754L2.31245 19.1109C2.16838 19.3087 2.09981 19.5527 2.10583 19.7944H16.1032L19.884 7.52979H11.1631C10.8981 7.52979 10.6468 7.66452 10.4771 7.89754Z"
                        fill="#CBD2F3"
                      ></path>
                      <path
                        d="M50.7675 39.336C50.7467 38.5877 49.8221 38.2512 49.3251 38.8111L47.1556 41.262C47.0047 41.4321 46.7895 41.5345 46.5598 41.5399L43.2877 41.6264C42.5393 41.6472 42.2028 42.5717 42.7627 43.0687L45.2137 45.2382C45.3839 45.3892 45.4862 45.6044 45.4915 45.8341L45.578 49.1062C45.5988 49.8545 46.5234 50.1911 47.0203 49.6311L49.1898 47.1801C49.3408 47.01 49.556 46.9077 49.7857 46.9023L53.0578 46.8158C53.8062 46.795 54.1427 45.8705 53.5828 45.3735L51.1318 43.204C50.9616 43.0531 50.8593 42.8378 50.8539 42.6081L50.7675 39.336Z"
                        fill="#CBD2F3"
                      ></path>
                      <path
                        d="M11.8935 40.7597C12.454 40.7263 12.7659 41.3951 12.38 41.8031L10.6906 43.5843C10.5733 43.7082 10.511 43.8756 10.5219 44.0475L10.6712 46.498C10.7046 47.0585 10.0358 47.3703 9.62788 46.9845L7.84673 45.2951C7.72283 45.1778 7.55534 45.1154 7.38337 45.1264L4.93298 45.2756C4.37249 45.309 4.06062 44.6402 4.44647 44.2323L6.13591 42.4513C6.2532 42.3274 6.31555 42.1598 6.30456 41.9878L6.15527 39.5375C6.12189 38.977 6.79069 38.6651 7.19859 39.0509L8.97974 40.7405C9.10363 40.8577 9.27113 40.92 9.4431 40.909L11.8935 40.7597Z"
                        fill="#CBD2F3"
                      ></path>
                      <path
                        d="M30.0966 14.1289L31.8974 18.6974L31.8979 18.6987C31.9717 18.8876 32.1224 19.0375 32.313 19.1129C32.3129 19.1128 32.3132 19.113 32.313 19.1129L36.8807 20.9135C38.3462 21.4935 38.3469 23.5659 36.8814 24.1459L32.3129 25.9467L32.3116 25.9472C32.1226 26.0211 31.9726 26.1719 31.8972 26.3627L30.0968 30.93C29.5168 32.3955 27.4444 32.3962 26.8644 30.9307L25.0636 26.3622L25.0631 26.3609C24.9893 26.172 24.8385 26.0221 24.6479 25.9466C24.6478 25.9466 24.648 25.9466 24.6479 25.9466L20.0803 24.1461C18.6148 23.5661 18.6141 21.4937 20.0796 20.9137L24.6481 19.1129L24.6494 19.1124C24.8383 19.0386 24.9882 18.8878 25.0637 18.6972C25.0636 18.6973 25.0637 18.6971 25.0637 18.6972L26.8642 14.1296C27.4442 12.6641 29.5166 12.6634 30.0966 14.1289Z"
                        fill="#5F1CFC"
                      ></path>
                      <path
                        d="M32.313 19.1129C32.1224 19.0375 31.9717 18.8876 31.8979 18.6987L31.8974 18.6974L30.0966 14.1289C29.5166 12.6634 27.4442 12.6641 26.8642 14.1296L25.0637 18.6972M32.313 19.1129C32.3132 19.113 32.3129 19.1128 32.313 19.1129ZM32.313 19.1129L36.8807 20.9135C38.3462 21.4935 38.3469 23.5659 36.8814 24.1459L32.3129 25.9467L32.3116 25.9472C32.1226 26.0211 31.9726 26.1719 31.8972 26.3627L30.0968 30.93C29.5168 32.3955 27.4444 32.3962 26.8644 30.9307L25.0636 26.3622L25.0631 26.3609C24.9893 26.172 24.8385 26.0221 24.6479 25.9466M24.6479 25.9466C24.6478 25.9466 24.648 25.9466 24.6479 25.9466ZM24.6479 25.9466L20.0803 24.1461C18.6148 23.5661 18.6141 21.4937 20.0796 20.9137L24.6481 19.1129L24.6494 19.1124C24.8383 19.0386 24.9882 18.8878 25.0637 18.6972M25.0637 18.6972C25.0637 18.6971 25.0636 18.6973 25.0637 18.6972Z"
                        stroke="#CBD2F3"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_16843">
                        <rect
                          width="56"
                          height="56"
                          fill="white"
                          transform="translate(0.480469 0.529785)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>partner</div>
              <div>you deserve</div>
            </div>
            <div className="text-lg tracking-tight leading-7 max-w-[390px] text-zinc-500">
              In our previous companies we have been in your shoes. And now we
              have built a service we would have loved - fast, efficient,
              reliable.
            </div>
          </div>
          <div className="z-10 grid relative gap-4 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
            <div className="flex flex-col p-3.5 bg-white border border-gray-200 border-solid shadow-sm h-[513px] rounded-[42px]">
              <Image
            src="/images/logo.png"
                alt="Expert Design Team"
                className="object-cover w-full h-[305px] rounded-[32px]"
                width={400}
                height={305}
              />
              <div className="px-7 pt-6 pb-7 text-center">
                <div className="mb-5 text-2xl font-medium tracking-tighter leading-8 text-gray-900">
                  Dedicated expert team
                </div>
                <div className="text-lg tracking-tight leading-7 text-zinc-500">
                  Your dedicated project manager handles all of your requests
                  with our expert designers &amp; developers.
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3.5 bg-white border border-gray-200 border-solid shadow-sm h-[513px] rounded-[42px]">
              <Image
                src="/images/logo.png"
                alt="Fast Design Results"
                className="object-cover w-full h-[305px] rounded-[32px]"
                width={400}
                height={305}
              />
              <div className="px-7 pt-6 pb-7 text-center">
                <div className="mb-5 text-2xl font-medium tracking-tighter leading-8 text-gray-900">
                  Fast results
                </div>
                <div className="text-lg tracking-tight leading-7 text-zinc-500">
                  Receive your first results for your active task within 48
                  hours.
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3.5 bg-white border border-gray-200 border-solid shadow h-[513px] rotate-[4deg] rounded-[42px]">
              <Image
                src="/images/logo.png"
                alt="Design Subscription"
                className="object-cover w-full h-[305px] rounded-[32px]"
                width={400}
                height={305}
              />
              <div className="px-7 pt-6 pb-7 text-center">
                <div className="mb-5 text-2xl font-medium tracking-tighter leading-8 text-gray-900">
                  Flexible &amp; scalable
                </div>
                <div className="text-lg tracking-tight leading-7 text-zinc-500">
                  Cancel or pause your subscription when you need it. And
                  upgrade to multiple pipelines if there is more to do.
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3.5 bg-white border border-gray-200 border-solid shadow h-[513px] rotate-[-4deg] rounded-[42px]">
              <Image
                src="/images/logo.png"
                alt="Premium Designer"
                className="object-cover w-full h-[305px] rounded-[32px]"
                width={400}
                height={305}
              />
              <div className="px-7 pt-6 pb-7 text-center">
                <div className="mb-5 text-2xl font-medium tracking-tighter leading-8 text-gray-900">
                  Top-notch quality
                </div>
                <div className="text-lg tracking-tight leading-7 text-zinc-500">
                  We only hire the best designers and developers to make sure to
                  serve your needs.
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3.5 bg-white border border-gray-200 border-solid shadow-sm h-[513px] rounded-[42px]">
              <Image
                src="/images/logo.png"
                alt="Design as a Service Project Management"
                className="object-cover w-full h-[305px] rounded-[32px]"
                width={400}
                height={305}
              />
              <div className="px-7 pt-6 pb-7 text-center">
                <div className="mb-5 text-2xl font-medium tracking-tighter leading-8 text-gray-900">
                  Easy project management
                </div>
                <div className="text-lg tracking-tight leading-7 text-zinc-500">
                  Submit your tasks in our easy tool and communicate via Slack
                  for urgent questions.
                </div>
              </div>
            </div>
            <div className="flex flex-col p-3.5 bg-white border border-gray-200 border-solid shadow-sm h-[513px] rounded-[42px]">
              <Image
                src="/images/logo.png"
                alt="Figma Design"
                className="object-cover w-full h-[305px] rounded-[32px]"
                width={400}
                height={305}
              />
              <div className="px-7 pt-6 pb-7 text-center">
                <div className="mb-5 text-2xl font-medium tracking-tighter leading-8 text-gray-900">
                  100% made for you
                </div>
                <div className="text-lg tracking-tight leading-7 text-zinc-500">
                  Every design is created individually for you and you will
                  receive all raw data files.
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg
              width="385"
              height="420"
              viewBox="0 0 385 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="decoration-right"
              style={{
                position: "absolute",
                right: "-150px",
                top: "100px",
                width: "307px",
                height: "266px",
                transform: "rotate(-30deg)",
              }}
            >
              <g clipPath="url(#clip0_1_16864)">
                <path
                  d="M115.03 323.002C115.03 323.002 68.4174 127.078 95.7187 164.67C123.02 202.262 151.968 295.636 177.617 277.442C234.768 236.902 135.256 57.8078 181.786 144.416C219.01 213.704 293.845 220.869 324.845 149.369"
                  stroke="#E5E5EA"
                  strokeWidth="15"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M104.671 317.021C104.671 317.021 58.059 121.097 85.3603 158.689C112.662 196.282 141.61 289.655 167.258 271.462C224.41 230.922 124.898 51.8273 171.428 138.436C208.652 207.724 274.353 241.869 319.353 148.369"
                  stroke="#5F1CFC"
                  strokeWidth="15"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M282.199 130.337L320.222 149.16L358.243 167.984"
                  stroke="#CBD2F3"
                  strokeWidth="2.39995"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M357.627 164.196L357.627 164.196C355.643 164.323 354.137 166.034 354.264 168.018C354.391 170.002 356.102 171.508 358.086 171.381L358.087 171.381C360.071 171.254 361.576 169.543 361.449 167.558C361.322 165.574 359.611 164.069 357.627 164.196Z"
                  fill="#F0F0F1"
                  stroke="#CBD2F3"
                  strokeWidth="2.39995"
                ></path>
                <path
                  d="M318.508 145.661L318.508 145.661C316.523 145.788 315.018 147.5 315.145 149.484C315.272 151.468 316.983 152.973 318.967 152.846L318.968 152.846C320.952 152.719 322.457 151.008 322.33 149.024C322.203 147.04 320.492 145.534 318.508 145.661Z"
                  fill="#CBD2F3"
                  stroke="#F0F0F1"
                  strokeWidth="2.39995"
                ></path>
                <path
                  d="M281.58 126.551L281.58 126.551C279.596 126.678 278.09 128.39 278.217 130.374C278.344 132.358 280.056 133.863 282.04 133.736L282.04 133.736C284.024 133.609 285.529 131.898 285.402 129.914C285.275 127.93 283.564 126.424 281.58 126.551Z"
                  fill="#F0F0F1"
                  stroke="#CBD2F3"
                  strokeWidth="2.39995"
                ></path>
                <path
                  d="M258.262 149.686C257.892 148.582 259.062 147.596 260.088 148.148L264.567 150.566C264.878 150.735 265.248 150.769 265.586 150.654L270.41 149.029C271.514 148.66 272.5 149.829 271.948 150.855L269.53 155.334C269.362 155.645 269.327 156.015 269.443 156.353L271.067 161.177C271.437 162.281 270.267 163.267 269.241 162.715L264.763 160.297C264.451 160.129 264.083 160.095 263.744 160.21L258.919 161.834C257.815 162.204 256.829 161.034 257.382 160.009L259.799 155.53C259.968 155.218 260.001 154.85 259.887 154.511L258.262 149.686Z"
                  fill="#CBD2F3"
                ></path>
                <path
                  d="M355.986 117.943C356.765 117.326 357.897 117.98 357.752 118.963L357.111 123.263C357.066 123.562 357.146 123.869 357.336 124.107L360.042 127.51C360.66 128.289 360.007 129.421 359.023 129.276L354.722 128.634C354.423 128.59 354.117 128.67 353.879 128.86L350.475 131.566C349.696 132.184 348.564 131.531 348.71 130.547L349.352 126.246C349.396 125.948 349.315 125.641 349.125 125.402L346.419 121.999C345.802 121.22 346.456 120.088 347.439 120.234L351.739 120.876C352.038 120.92 352.345 120.84 352.583 120.649L355.986 117.943Z"
                  fill="#CBD2F3"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_16864">
                  <rect
                    width="307"
                    height="266"
                    fill="white"
                    transform="translate(0.570312 266.04) rotate(-60)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg
              width="488"
              height="492"
              viewBox="0 0 488 492"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="decoration-bottom"
              style={{
                position: "absolute",
                left: "-157px",
                bottom: "-200px",
                width: "364px",
                height: "373px",
                transform: "rotate(24.82deg)",
              }}
            >
              <g clipPath="url(#clip0_1_16875)">
                <path
                  d="M351.469 148.962C351.469 148.962 363.982 349.965 343.492 308.267C323.003 266.569 310.404 169.627 282.028 183.179C218.8 213.378 286.308 406.821 255.232 313.545C230.37 238.924 164.327 212.462 100.629 258.474"
                  stroke="#E5E5EA"
                  strokeWidth="15"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M360.658 156.62C360.658 156.62 373.172 357.623 352.682 315.925C332.192 274.227 319.594 177.285 291.218 190.837C227.989 221.036 295.498 414.48 264.421 321.203C239.56 246.582 189.265 208.57 102.511 261.551"
                  stroke="#5F1CFC"
                  strokeWidth="15"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M137.524 286.18L103.269 261.147L69.0146 236.115"
                  stroke="#CBD2F3"
                  strokeWidth="2.39995"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M68.9754 239.946L68.9756 239.946C70.9523 240.159 72.7276 238.73 72.9409 236.753C73.1542 234.776 71.7247 233.001 69.748 232.788L69.7478 232.788C67.7711 232.574 65.9958 234.004 65.7825 235.981C65.5692 237.957 66.9987 239.733 68.9754 239.946Z"
                  fill="#F0F0F1"
                  stroke="#CBD2F3"
                  strokeWidth="2.39995"
                ></path>
                <path
                  d="M104.354 264.881L104.354 264.881C106.331 265.095 108.107 263.665 108.32 261.688C108.533 259.712 107.104 257.936 105.127 257.723L105.127 257.723C103.15 257.51 101.375 258.939 101.161 260.916C100.948 262.893 102.378 264.668 104.354 264.881Z"
                  fill="#CBD2F3"
                  stroke="#F0F0F1"
                  strokeWidth="2.39995"
                ></path>
                <path
                  d="M137.483 290.011L137.483 290.011C139.46 290.225 141.235 288.795 141.449 286.818C141.662 284.842 140.232 283.066 138.256 282.853L138.256 282.853C136.279 282.64 134.504 284.069 134.29 286.046C134.077 288.023 135.507 289.798 137.483 290.011Z"
                  fill="#F0F0F1"
                  stroke="#CBD2F3"
                  strokeWidth="2.39995"
                ></path>
                <path
                  d="M102.812 217.836C102.988 218.987 101.667 219.759 100.751 219.04L96.7501 215.893C96.4721 215.675 96.1141 215.578 95.7614 215.633L90.7306 216.412C89.5797 216.588 88.8078 215.267 89.5263 214.351L92.6734 210.349C92.8917 210.071 92.9882 209.713 92.9326 209.361L92.1551 204.329C91.9786 203.179 93.2996 202.407 94.216 203.125L98.2169 206.273C98.4953 206.491 98.8529 206.588 99.206 206.532L104.236 205.754C105.388 205.577 106.16 206.898 105.441 207.815L102.294 211.816C102.076 212.094 101.979 212.452 102.034 212.805L102.812 217.836Z"
                  fill="#CBD2F3"
                ></path>
                <path
                  d="M85.3109 311.986C84.4378 312.462 83.4339 311.625 83.745 310.68L85.1108 306.552C85.2053 306.265 85.179 305.95 85.0318 305.683L82.9461 301.868C82.4703 300.994 83.3075 299.99 84.252 300.301L88.3797 301.667C88.6664 301.762 88.9821 301.735 89.2496 301.588L93.0643 299.503C93.9373 299.027 94.9412 299.864 94.6301 300.809L93.2644 304.937C93.1699 305.223 93.1963 305.539 93.3434 305.806L95.4291 309.621C95.9049 310.494 95.0681 311.498 94.1236 311.187L89.9959 309.821C89.7088 309.727 89.3934 309.753 89.126 309.9L85.3109 311.986Z"
                  fill="#CBD2F3"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1_16875">
                  <rect
                    width="364"
                    height="373"
                    fill="white"
                    transform="translate(157.1 0.359375) rotate(24.82)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
