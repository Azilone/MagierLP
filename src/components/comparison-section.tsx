"use client";

import React, { useState } from "react";
import clsx from 'clsx';

// --- Icon Components ---

function SparkIcon() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 md:w-[18px] md:h-[18px] flex-shrink-0 text-accent"
    >
      <path
        d="M12.7674 17.6381C12.492 18.3342 11.508 18.3342 11.2325 17.6381L10.0322 14.5929C9.94855 14.3814 9.78128 14.2116 9.56728 14.128L6.52209 12.9276C5.82597 12.6522 5.82597 11.6682 6.52209 11.3928L9.56728 10.1924C9.77882 10.1087 9.94855 9.94144 10.0322 9.72744L11.2325 6.68225C11.508 5.98613 12.492 5.98613 12.7674 6.68225L13.9678 9.72744C14.0514 9.93898 14.2187 10.1087 14.4327 10.1924L17.4779 11.3928C18.174 11.6682 18.174 12.6522 17.4779 12.9276L14.4327 14.128C14.2212 14.2116 14.0514 14.3789 13.9678 14.5929L12.7674 17.6381Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckmarkIcon({
  highlighted = false,
  gray = false,
}: {
  highlighted?: boolean;
  gray?: boolean;
}) {
  const isActuallyHighlighted = highlighted && !gray;

  let circleFill = "none";
  let circleStroke = "#828088";
  let checkStroke = "#828088";

  if (isActuallyHighlighted) {
    circleFill = "white";
    circleStroke = "white";
    checkStroke = "#5F1CFC";
  }

  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0">
      <path
        d="M12.4102 22.1602C17.9102 22.1602 22.4102 17.6602 22.4102 12.1602C22.4102 6.66016 17.9102 2.16016 12.4102 2.16016C6.91016 2.16016 2.41016 6.66016 2.41016 12.1602C2.41016 17.6602 6.91016 22.1602 12.4102 22.1602Z"
        fill={circleFill}
        stroke={circleStroke}
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M8.16016 12.1621L10.9902 14.9921L16.6602 9.33203"
        stroke={checkStroke}
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 flex-shrink-0">
      <path
        d="M12.4102 22.1602C17.9102 22.1602 22.4102 17.6602 22.4102 12.1602C22.4102 6.66016 17.9102 2.16016 12.4102 2.16016C6.91016 2.16016 2.41016 6.66016 2.41016 12.1602C2.41016 17.6602 6.91016 22.1602 12.4102 22.1602Z"
        stroke="#828088"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.41016 12.1602H16.4102"
        stroke="#828088"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// --- Data Definition ---

const categories = [
    "Creation Time",
    "Artistic Quality",
    "Customization",
    "Account Setup",
    "Processing Speed",
    "Emotional Impact",
    "Price",
    "Expertise"
];

const comparisonData = {
    magier: [
        "30 seconds or less",
        "AI-enhanced artistry with professional styles",
        "Real-time preview of all designs",
        "None — just upload, customize, and checkout",
        "Instant transformation",
        '"I cried when I opened it" (actual customer quote)',
        "Premium quality starting at just $19",
        "Developed by award-winning designers and AI specialists"
    ],
    competitor: [
        "Up to 30 minutes of uploading and editing",
        "Basic filters or no enhancements",
        "Limited preview options, if any",
        "Lengthy registration process",
        "Hours of manual design work",
        '"It\'s a nice photo gift"',
        "Similar quality costs $40+ elsewhere",
        "Generic templates designed for mass production"
    ]
};

type ComparisonType = keyof typeof comparisonData;

const comparisonTypesConfig = [
    { id: 'magier', label: 'Memorable.ai' },
    { id: 'competitor', label: 'Traditional Photo Services' }
] as const;


// --- Reusable Components ---

// Consistent Row Item Renderer
function DataRowItem({
    children,
    isHeader = false,
    isHighlighted = false,
    isCategory = false,
}: {
    children: React.ReactNode;
    isHeader?: boolean;
    isHighlighted?: boolean;
    isCategory?: boolean;
}) {
    // Consistent height for alignment
    const height = isHeader ? "min-h-[70px]" : "min-h-[80px]"; // Adjusted slightly if needed
    const padding = `px-5 py-4`; // Consistent padding

    const alignment = isCategory ? "items-center justify-start text-left" : "items-center justify-center text-center";

    const textStyle = clsx(
        "text-lg leading-[27px] tracking-[-0.36px]",
        isHighlighted && !isHeader && "text-white",
        !isHighlighted && !isHeader && !isCategory && "text-text-muted",
        isCategory && !isHeader && "text-text-primary font-medium",
        isHeader && !isHighlighted && "text-text-primary text-xl md:text-2xl font-semibold tracking-[-0.96px]",
        isHeader && isHighlighted && "text-white"
    );

    const content = isCategory && !isHeader ? (
        <div className="flex items-center gap-2">
            <SparkIcon />
            <span>{children}</span>
        </div>
    ) : (
        children
    );

    return (
        <div className={`flex ${alignment} ${padding} ${height} ${textStyle} w-full`}>
            {content}
        </div>
    );
}


// Chip Component (Mobile View) - Unchanged
interface ComparisonChipProps {
    // ... (Props remain the same)
    label: string;
    id: ComparisonType;
    isActive: boolean;
    onClick: (id: ComparisonType) => void;
}
function ComparisonChip({ label, id, isActive, onClick }: ComparisonChipProps) {
    // ... (Chip code remains the same)
    const displayLabel = id === 'magier' ? <span className="font-semibold">{label}</span> : label;
    return (
        <button
            onClick={() => onClick(id)}
            className={clsx(
                "py-3 px-5 md:px-6 rounded-xl text-base md:text-lg font-medium transition-colors duration-200 ease-in-out whitespace-nowrap",
                isActive
                    ? "bg-accent text-white shadow-md"
                    : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 hover:text-accent"
            )}
        >
            {displayLabel}
        </button>
    );
}


// --- Main Comparison Section ---

export function ComparisonSection() {
  const [activeMobileType, setActiveMobileType] = useState<ComparisonType>('magier');
  const currentMobileData = comparisonData[activeMobileType];
  const isMagierActiveMobile = activeMobileType === 'magier';

  // Desktop Column Titles
  const desktopColumnTitles = {
      magier: (
        <svg width="120" height="37" viewBox="0 0 120 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[100px] h-[30px] mx-auto">
           <g clipPath="url(#clip0_1_18202_fix3)"><path d="M24.2756 8.48047C25.4473 8.48047 26.4635 8.69668 27.3243 9.12908C28.1971 9.56148 28.9144 10.1915 29.4764 11.0193C30.0502 11.8347 30.4747 12.8292 30.7497 14.0029C31.0366 15.1765 31.1801 16.5046 31.1801 17.9872V28.2907H25.7282V18.1169C25.7282 17.3262 25.6505 16.6529 25.4951 16.0969C25.3516 15.5286 25.1424 15.0715 24.8674 14.7256C24.5924 14.3673 24.2636 14.1079 23.8811 13.9473C23.5104 13.7867 23.092 13.7064 22.6257 13.7064C22.1475 13.7064 21.6932 13.8299 21.2628 14.077C20.8323 14.3117 20.4498 14.6515 20.115 15.0962C19.7802 15.541 19.5112 16.0722 19.308 16.6899C19.1167 17.3077 19.021 17.9995 19.021 18.7655V28.2907H13.5692V18.1169C13.5692 17.3138 13.4915 16.6344 13.3361 16.0784C13.1926 15.5225 12.9834 15.0715 12.7084 14.7256C12.4334 14.3673 12.1046 14.1079 11.722 13.9473C11.3514 13.7867 10.933 13.7064 10.4666 13.7064C10.0004 13.7064 9.54606 13.8299 9.1037 14.077C8.67329 14.3117 8.2907 14.6515 7.95594 15.0962C7.62118 15.541 7.35218 16.0722 7.14893 16.6899C6.95764 17.3077 6.86199 17.9995 6.86199 18.7655V28.2907H1.41016V9.09201H6.57505L6.64679 11.4085C6.8859 10.9884 7.1848 10.5992 7.54347 10.241C7.9141 9.88269 8.33255 9.57383 8.79882 9.31439C9.2651 9.05495 9.7792 8.8511 10.3411 8.70285C10.903 8.5546 11.4949 8.48047 12.1166 8.48047C13.5871 8.48047 14.8066 8.81404 15.7751 9.48117C16.7554 10.1359 17.5146 11.0873 18.0526 12.335C18.9015 10.9637 19.84 9.98153 20.8682 9.38852C21.9084 8.78315 23.0442 8.48047 24.2756 8.48047Z" fill="#F0F0F1"></path><path d="M41.8932 28.9207C40.6498 28.9207 39.5021 28.6551 38.45 28.1239C37.4098 27.5803 36.5072 26.8452 35.742 25.9186C34.9888 24.9921 34.397 23.9111 33.9666 22.6756C33.5481 21.4278 33.3389 20.0997 33.3389 18.6914C33.3389 17.2953 33.5541 15.9796 33.9845 14.7441C34.4149 13.4964 35.0067 12.4092 35.7599 11.4826C36.5251 10.556 37.4278 9.8271 38.4679 9.29586C39.5081 8.75227 40.6379 8.48047 41.8574 8.48047C43.2323 8.48047 44.4458 8.74609 45.4979 9.27733C46.55 9.80857 47.363 10.5684 47.9369 11.5567V9.09201H53.1735V28.2907H47.9189V25.863C47.3451 26.839 46.5381 27.5926 45.4979 28.1239C44.4577 28.6551 43.2562 28.9207 41.8932 28.9207ZM43.2383 23.6578C43.8719 23.6578 44.4577 23.5343 44.9958 23.2872C45.5457 23.0277 46.018 22.6756 46.4125 22.2309C46.819 21.7861 47.1358 21.2611 47.363 20.6557C47.5902 20.0503 47.7037 19.3955 47.7037 18.6914C47.7037 17.9995 47.5842 17.3509 47.3451 16.7455C47.1179 16.1402 46.8011 15.6151 46.3946 15.1704C46 14.7256 45.5338 14.3735 44.9958 14.1141C44.4577 13.8546 43.8779 13.7249 43.2562 13.7249C42.6465 13.7249 42.0726 13.8423 41.5346 14.077C40.9966 14.2994 40.5243 14.6268 40.1178 15.0592C39.7113 15.4792 39.3885 15.9981 39.1494 16.6158C38.9222 17.2212 38.8086 17.913 38.8086 18.6914C38.8086 19.5067 38.9282 20.2233 39.1673 20.841C39.4064 21.4587 39.7292 21.9776 40.1357 22.3977C40.5422 22.8177 41.0145 23.1327 41.5525 23.3428C42.0905 23.5528 42.6524 23.6578 43.2383 23.6578Z" fill="#F0F0F1"></path><path d="M65.3024 36.6602C63.6884 36.6602 62.3075 36.444 61.1598 36.0116C60.012 35.5916 59.0615 35.0294 58.3083 34.3252C57.5671 33.6334 57.0171 32.8365 56.6584 31.9347C56.3117 31.0452 56.1324 30.1309 56.1204 29.192H61.3032C61.3989 29.6244 61.5364 30.0074 61.7157 30.341C61.907 30.6745 62.1581 30.9587 62.4689 31.1934C62.7798 31.4281 63.1624 31.6011 63.6167 31.7123C64.083 31.8358 64.6449 31.8976 65.3024 31.8976C66.1274 31.8976 66.8328 31.7802 67.4186 31.5455C68.0044 31.3231 68.4827 31.0143 68.8533 30.6189C69.2359 30.2236 69.5109 29.7603 69.6783 29.2291C69.8576 28.6855 69.9473 27.0676 69.9473 26.4375V24.8809C69.6364 25.4121 69.2718 25.8569 68.8533 26.2151C68.4468 26.5734 67.9985 26.8637 67.5083 27.0861C67.0181 27.3085 66.492 27.4691 65.9301 27.5679C65.3802 27.6544 64.8063 27.6977 64.2085 27.6977C62.8814 27.6977 61.6739 27.4506 60.5859 26.9564C59.5099 26.4622 58.5833 25.7889 57.8062 24.9365C57.0291 24.0717 56.4253 23.071 55.9949 21.9344C55.5764 20.7854 55.3672 19.5623 55.3672 18.2651C55.3672 16.9679 55.5764 15.7325 55.9949 14.5588C56.4133 13.3728 56.9992 12.335 57.7524 11.4455C58.5175 10.5436 59.4322 9.8271 60.4962 9.29586C61.5603 8.75227 62.7379 8.48047 64.0292 8.48047C64.8063 8.48047 65.5117 8.57313 66.1453 8.75845C66.779 8.94376 67.3409 9.18467 67.8311 9.48117C68.3332 9.77768 68.7577 10.1112 69.1044 10.4819C69.463 10.8402 69.75 11.1984 69.9652 11.5567V9.09201H75.2018V26.419C75.2018 27.7903 74.9747 30.0692 74.5203 31.1934C74.066 32.33 73.4085 33.2998 72.5476 34.1029C71.6988 34.9182 70.6646 35.5483 69.4451 35.9931C68.2256 36.4378 66.8447 36.6602 65.3024 36.6602ZM65.2666 22.8053C65.9002 22.8053 66.4861 22.688 67.0241 22.4532C67.574 22.2062 68.0463 21.8726 68.4408 21.4525C68.8473 21.0325 69.1642 20.5507 69.3913 20.0071C69.6185 19.4511 69.7321 18.8643 69.7321 18.2466C69.7321 17.6536 69.6185 17.0853 69.3913 16.5417C69.1642 15.9981 68.8533 15.5163 68.4588 15.0962C68.0642 14.6762 67.592 14.3426 67.042 14.0955C66.504 13.8485 65.9182 13.7249 65.2845 13.7249C64.6509 13.7249 64.059 13.8299 63.5091 14.0399C62.9711 14.25 62.5048 14.5526 62.1103 14.948C61.7157 15.331 61.4049 15.8004 61.1777 16.3564C60.9505 16.9123 60.837 17.5424 60.837 18.2466C60.837 18.9261 60.9505 19.55 61.1777 20.1183C61.4049 20.6742 61.7157 21.1499 62.1103 21.5452C62.5048 21.9405 62.9711 22.2494 63.5091 22.4718C64.059 22.6942 64.6449 22.8053 65.2666 22.8053Z" fill="#F0F0F1"></path><path d="M81.2167 6.83115C80.7026 6.83115 80.2423 6.75085 79.8358 6.59024C79.4412 6.42963 79.1005 6.21343 78.8136 5.94164C78.5386 5.65749 78.3294 5.3301 78.1859 4.95947C78.0424 4.57648 77.9707 4.17497 77.9707 3.75492C77.9707 3.33487 78.0424 2.93953 78.1859 2.5689C78.3294 2.18592 78.5386 1.85853 78.8136 1.58673C79.0885 1.30258 79.4293 1.0802 79.8358 0.919597C80.2423 0.746637 80.7086 0.660156 81.2346 0.660156C81.7726 0.660156 82.2449 0.746637 82.6514 0.919597C83.0579 1.0802 83.3986 1.30258 83.6736 1.58673C83.9605 1.85853 84.1757 2.18592 84.3192 2.5689C84.4627 2.93953 84.5344 3.33487 84.5344 3.75492C84.5344 4.18732 84.4627 4.58884 84.3192 4.95947C84.1757 5.3301 83.9605 5.65749 83.6736 5.94164C83.3986 6.21343 83.0519 6.42963 82.6334 6.59024C82.2269 6.75085 81.7547 6.83115 81.2167 6.83115ZM78.4728 9.09199H83.9964V28.2907H78.4728V9.09199Z" fill="#F0F0F1"></path><path d="M105.559 18.5431C105.559 18.852 105.547 19.1176 105.523 19.34C105.511 19.5623 105.487 19.8218 105.451 20.1183H91.7501C91.9773 21.4031 92.4615 22.3729 93.2027 23.0277C93.944 23.6701 94.8526 23.9914 95.9287 23.9914C96.8971 23.9914 97.6383 23.806 98.1524 23.4354C98.6785 23.0524 99.0431 22.583 99.2464 22.027H105.164C104.961 22.8795 104.602 23.7196 104.088 24.5473C103.586 25.3627 102.94 26.0978 102.151 26.7526C101.374 27.395 100.472 27.9139 99.4437 28.3092C98.4155 28.7045 97.2797 28.9022 96.0363 28.9022C94.5896 28.9022 93.2625 28.6366 92.055 28.1054C90.8594 27.5618 89.8252 26.8267 88.9525 25.9001C88.0917 24.9735 87.4221 23.8925 86.9439 22.6571C86.4657 21.4093 86.2266 20.0874 86.2266 18.6914C86.2266 17.2953 86.4657 15.9796 86.9439 14.7441C87.4221 13.4964 88.0917 12.4092 88.9525 11.4826C89.8133 10.556 90.8475 9.8271 92.055 9.29586C93.2625 8.75227 94.5896 8.48047 96.0363 8.48047C97.4949 8.48047 98.81 8.75227 99.9817 9.29586C101.153 9.8271 102.151 10.5498 102.976 11.4641C103.801 12.3783 104.435 13.4469 104.877 14.67C105.332 15.8807 105.559 17.1718 105.559 18.5431ZM99.9099 16.2637C99.8621 15.819 99.7246 15.4113 99.4975 15.0406C99.2823 14.6577 99.0013 14.3303 98.6546 14.0585C98.3079 13.7743 97.9133 13.5581 97.471 13.4099C97.0286 13.2493 96.5563 13.169 96.0542 13.169C95.6238 13.169 95.1994 13.2246 94.7809 13.3357C94.3744 13.4469 93.9859 13.6323 93.6152 13.8917C93.2566 14.1388 92.9337 14.46 92.6468 14.8553C92.3599 15.2383 92.1327 15.7078 91.9653 16.2637H99.9099Z" fill="#F0F0F1"></path><path d="M107.574 9.0918H112.864V11.7974C113.283 10.9944 113.845 10.3458 114.55 9.85159C115.267 9.34507 116.17 9.0918 117.258 9.0918H119.41V13.9471H117.563C116.164 13.9471 115.07 14.4166 114.281 15.3555C113.504 16.2944 113.115 17.6596 113.115 19.4509V28.2905H107.574V9.0918Z" fill="#F0F0F1"></path></g><defs><clipPath id="clip0_1_18202_fix3"><rect width="119" height="36" fill="white" transform="translate(0.910156 0.660156)"></rect></clipPath></defs>
        </svg>
      ),
      competitor: "Traditional Photo Services",
  };

  const columnBaseClass = "flex-1 max-w-[260px] rounded-[32px] flex flex-col overflow-hidden";
  const columnStandardClass = `${columnBaseClass} bg-white border border-border-primary`;

  return (
    <div className="flex flex-col items-center w-full py-20 md:py-28 relative overflow-hidden px-4 sm:px-6 ">
    


      <div className="flex flex-col items-center w-full max-w-[1200px] z-10">
        {/* Header */}
         <div className="flex flex-col items-center max-w-[650px] text-center mb-12 md:mb-16">
              {/* ... (header code remains the same) ... */}
              <div className="flex flex-col items-center mb-4">
                 <div className="text-accent font-sans text-sm md:text-base leading-4 tracking-[-0.32px] py-[7.5px] px-[17px] rounded-[42px] border border-border-primary ">
                     Comparison
                 </div>
             </div>
             <div className="text-text-primary font-sans text-size-40 leading-[44px] sm:text-size-50 sm:leading-[55px] lg:text-size-66 font-semibold lg:leading-[72.6px] tracking-tight lg:tracking-[-2.64px]">
                 <div className="mb-3 md:mb-5">Why choose</div>
                 <div className="flex items-center justify-center gap-2 md:gap-[15px]">
                     <span>Memorable.ai</span>
                     <div>
                         <svg /* Magier Icon */
                            width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="w-[35px] h-[35px] sm:w-[45px] sm:h-[45px] lg:w-[56px] lg:h-[56px]"
                        >
                           <g clipPath="url(#clip0_1_18101_fix4)"> {/* Unique ID */}
                                <mask id="mask0_1_18101_fix4" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="57" height="57"><path d="M56.1504 0.0595703H0.150391V56.0596H56.1504V0.0595703Z" fill="white"></path></mask><g mask="url(#mask0_1_18101_fix4)"><path d="M7.94032 47.6138C10.2799 49.9534 11.3811 52.6453 10.4 53.6264L53.718 10.3084C54.6991 9.32733 53.5979 6.6354 51.2583 4.29584C48.9187 1.95628 46.2268 0.855033 45.2457 1.83614L1.92773 45.1541C2.90884 44.173 5.60077 45.2743 7.94032 47.6138Z" fill="#5F1CFC"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.3944 53.6284C11.3755 52.6473 10.2743 49.9553 7.93474 47.6158C5.6386 45.3196 3.00305 44.2163 1.97852 45.1036L12.037 35.0451C13.0181 34.064 15.7101 35.1652 18.0496 37.5048C20.3458 39.8009 21.4491 42.4365 20.5618 43.461L10.3944 53.6284Z" fill="#CBD2F3"></path><path fillRule="evenodd" clipRule="evenodd" d="M43.6054 20.4213C44.5865 19.4402 43.4852 16.7483 41.1457 14.4087C38.8495 12.1126 36.214 11.0092 35.1895 11.8966L45.248 1.83809C46.2291 0.856987 48.921 1.95823 51.2606 4.29779C53.5567 6.59393 54.6601 9.22949 53.7727 10.254L43.6054 20.4213Z" fill="#CBD2F3"></path><path d="M2.27855 45.5062C2.1556 45.6291 2.06496 45.8356 2.06642 46.1748C2.06788 46.5167 2.16474 46.9526 2.37237 47.4602C2.78676 48.4731 3.60373 49.6771 4.73825 50.8117C5.87276 51.9462 7.07676 52.7631 8.08973 53.1775C8.59726 53.3852 9.0332 53.482 9.37506 53.4835C9.71431 53.4849 9.92079 53.3943 10.0437 53.2714C10.1667 53.1484 10.2573 52.9419 10.2559 52.6027C10.2544 52.2608 10.1575 51.8249 9.94992 51.3174C9.53552 50.3044 8.71855 49.1004 7.58404 47.9659C6.44952 46.8314 5.24552 46.0144 4.23256 45.6C3.72502 45.3924 3.28908 45.2955 2.94722 45.294C2.60797 45.2926 2.40149 45.3832 2.27855 45.5062Z" fill="#5F1CFC" stroke="#5F1CFC"></path><path d="M2.28148 45.5077C2.15854 45.6306 2.0679 45.8371 2.06935 46.1764C2.07082 46.5182 2.16767 46.9542 2.3753 47.4617C2.7897 48.4747 3.60666 49.6787 4.74118 50.8132C5.8757 51.9477 7.0797 52.7647 8.09267 53.179C8.60019 53.3867 9.03614 53.4835 9.37799 53.485C9.71725 53.4865 9.92373 53.3958 10.0467 53.2729L53.3646 9.95488C53.4876 9.83194 53.5782 9.62546 53.5768 9.28621C53.5753 8.94435 53.4785 8.50841 53.2708 8.00088C52.8564 6.98791 52.0395 5.78391 50.9049 4.64939C49.7704 3.51488 48.5664 2.69791 47.5535 2.28352C47.0459 2.07589 46.61 1.97903 46.2681 1.97756C45.9289 1.97611 45.7224 2.06675 45.5995 2.1897L2.28148 45.5077Z" stroke="#5F1CFC"></path><path d="M6.55145 13.7382C6.52891 12.6778 7.81379 12.1375 8.55585 12.8952L11.7957 16.2127C12.0211 16.443 12.3327 16.5728 12.6581 16.5645L17.294 16.4597C18.3544 16.4371 18.8947 17.722 18.137 18.4641L14.8195 21.704C14.5892 21.9294 14.4594 22.241 14.4677 22.5664L14.5726 27.2023C14.5951 28.2626 13.3102 28.803 12.5681 28.0452L9.32827 24.7278C9.10288 24.4975 8.79124 24.3677 8.46585 24.376L3.82994 24.4808C2.7696 24.5033 2.22925 23.2185 2.987 22.4764L6.30447 19.2365C6.53479 19.0111 6.66457 18.6995 6.65626 18.3741L6.55145 13.7382Z" fill="#5F1CFC"></path><path d="M24.0748 3.45113C24.2814 2.92905 25.0194 2.92905 25.226 3.45113L26.1263 5.73503C26.189 5.89369 26.3144 6.02098 26.4749 6.08371L28.7588 6.98398C29.2809 7.1906 29.2809 7.92854 28.7588 8.13516L26.4749 9.03543C26.3163 9.09816 26.189 9.22361 26.1263 9.38411L25.226 11.668C25.0194 12.1901 24.2814 12.1901 24.0748 11.668L23.1745 9.38411C23.1118 9.22545 22.9864 9.09816 22.8259 9.03543L20.542 8.13516C20.0199 7.92854 20.0199 7.1906 20.542 6.98398L22.8259 6.08371C22.9845 6.02098 23.1118 5.89553 23.1745 5.73503L24.0748 3.45113Z" fill="#5F1CFC"></path><path d="M48.3832 35.3375C49.4432 34.8786 50.5166 35.952 50.0577 37.012L48.0451 41.6436C47.9056 41.9656 47.9029 42.3332 48.0451 42.6579L50.0577 47.2895C50.5166 48.3495 49.4432 49.4228 48.3832 48.964L43.7516 46.9514C43.4296 46.8119 43.062 46.8092 42.7373 46.9514L38.1057 48.964C37.0457 49.4228 35.9723 48.3495 36.4312 47.2895L38.4438 42.6579C38.5833 42.3359 38.586 41.9683 38.4438 41.6436L36.4312 37.012C35.9723 35.952 37.0457 34.8786 38.1057 35.3375L42.7373 37.3501C43.0593 37.4896 43.4269 37.4923 43.7516 37.3501L48.3832 35.3375Z" fill="#5F1CFC"></path></g>
                           </g><defs><clipPath id="clip0_1_18101_fix4"><rect width="56" height="56" fill="white" transform="translate(0.150391 0.0595703)"></rect></clipPath></defs>
                         </svg>
                     </div>
                     <span>today</span>
                 </div>
             </div>
         </div>

        {/* --- Desktop View --- */}
        <div className="hidden lg:flex flex-row justify-center gap-4 md:gap-6 w-full items-stretch">
            {/* Desktop: Left Column - Categories */}
            <div className={columnStandardClass}>
                 <div className="min-h-[70px] border-b border-border-primary"></div>
                 <div className="flex flex-col">
                    {categories.map((cat) => (
                        <DataRowItem key={cat} isCategory>
                            {cat}
                        </DataRowItem>
                    ))}
                </div>
            </div>

            {/* Desktop: Memorable.ai Column - Highlighted */}
            <div className={`${columnBaseClass} bg-[#777CFD] p-[10px] rounded-[42px]`}>
                 <div className="bg-accent rounded-[32px] flex flex-col flex-1 overflow-hidden">
                    <DataRowItem isHeader isHighlighted>
                        {desktopColumnTitles.magier}
                    </DataRowItem>
                    <div className="flex flex-col">
                        {comparisonData.magier.map((item, index) => (
                            <DataRowItem key={`magier-desk-${index}`} isHighlighted>
                                {item}
                            </DataRowItem>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Desktop: Competitor Column */}
            <div className={columnStandardClass}>
                <DataRowItem isHeader>
                    {desktopColumnTitles.competitor}
                </DataRowItem>
                <div className="flex flex-col divide-y divide-[#E5E5EA]">
                    {comparisonData.competitor.map((item, index) => (
                        <DataRowItem key={`competitor-desk-${index}`}>
                            {item}
                        </DataRowItem>
                    ))}
                </div>
            </div>
        </div>

        {/* --- Mobile/Tablet View --- */}
        <div className="flex flex-col lg:hidden w-full">
            {/* Mobile: Chips Section */}
            <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4">
                {comparisonTypesConfig.map((type) => (
                    <ComparisonChip
                        key={type.id}
                        id={type.id}
                        label={type.label}
                        isActive={activeMobileType === type.id}
                        onClick={setActiveMobileType}
                    />
                ))}
            </div>

            {/* Mobile: Content Area */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,_280px)_1fr] gap-4 md:gap-6 w-full md:items-start">
                {/* Mobile: Left Column - Categories */}
                 <div className="w-full bg-white rounded-[32px] border border-gray-200 overflow-hidden self-start">
                     <div className="flex flex-col"> {/* No internal dividers */}
                         {categories.map((cat, index) => (
                             <DataRowItem key={`cat-mob-${index}`} isCategory>
                                 {cat}
                             </DataRowItem>
                         ))}
                     </div>
                 </div>

                 {/* Mobile: Right Column - Data Display */}
                 <div className={clsx(
                     "flex-1 flex flex-col rounded-[32px] overflow-hidden w-full self-start",
                      isMagierActiveMobile
                         ? "bg-[#777CFD] p-[8px] rounded-[42px]" // Magier outer style
                         : "bg-white border border-gray-200" // Standard style
                     )}
                 >
                    <div className={clsx(
                        "flex flex-col flex-1",
                        isMagierActiveMobile ? "bg-accent rounded-[32px]" : "" // Magier inner
                    )}>
                         {/* Data Items */}
                         <div className={clsx(
                             "flex flex-col",
                             // Add dividers for non-Magier columns on mobile? Optional, target doesn't show clearly.
                             !isMagierActiveMobile && "divide-y divide-gray-200"
                         )}
                         >
                             {currentMobileData.map((item, index) => (
                                 <DataRowItem key={`${activeMobileType}-mob-${index}`} isHighlighted={isMagierActiveMobile}>
                                     {item}
                                 </DataRowItem>
                             ))}
                         </div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}