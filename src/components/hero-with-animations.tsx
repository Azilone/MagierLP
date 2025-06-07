"use client";


import { motion } from "framer-motion";
import { PortfolioMarquee } from "./testimonials-marquee"; 
import { AuroraText } from "@/components/magicui/aurora-text";
import CTAButton from "./ui/CTAButton";
import { Spotlight } from "./ui/spotlight";
import HeroStatsBar from "./hero-stats-bar";
import { styles, color } from "@/styles";
import { cn } from "@/lib/utils";

export function HeroWithAnimations() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[32px] overflow-hidden">
        <div className="absolute bg-white" />
        <div className="opacity-[0.15] sm:opacity-25 md:opacity-50 lg:opacity-100">
          <Spotlight
            gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(288, 100%, 90%, 0.08) 0, hsla(267, 89%, 55%, 0.05) 50%, hsla(267, 89%, 55%, 0) 80%)"
            gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(288, 100%, 90%, 0.06) 0, hsla(267, 89%, 55%, 0.03) 80%, transparent 100%)"
            gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(288, 100%, 90%, 0.04) 0, hsla(267, 89%, 55%, 0.02) 80%, transparent 100%)"
            translateY={-300}
            width={860}
            height={1280}
            smallWidth={200}
          />
        </div>
      </div>
      <div className="relative px-4  pb-12 min-h-[70vh] flex items-center sm:px-6  md:pb-16 lg:px-10  lg:pb-24  xl:pb-28 sm:pt-7 lg:pt-12">
        <div className="relative mx-auto max-w-7xl w-full">

          <HeroStatsBar />

    

          {/* Main Content */}
          <div className="text-center">

            <h1 className={cn(styles.h1, "max-w-[80vw] mx-auto")}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                We turn
              </motion.div>{" "}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-block"
              >
                <AuroraText colors={["#FFCFF5", "#5F1CFC" ]} className="text-[3vh] sm:text-[3.2vh] md:text-[3.5vh] lg:text-[5vh] xl:text-[5.5vh]">
                any pet
                </AuroraText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="block"
              >
                into works of art <span className=""><br/></span> 
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className={cn("block text-[1.7vh] font-medium mt-1", color.primary)}
              >
                in under 3 minutes.
              </motion.div>
            </h1>

             {/* Responsive Paragraph: Adjust size, leading, margin */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className={cn(
                styles.subtitle,
                "mt-[1.2vh] max-w-sm mx-auto md:mt-[1.5vh] md:max-w-md lg:mt-[1.8vh] lg:max-w-lg xl:max-w-xl"
              )}
            >
              Upload a photo, pick from the largest library of pet-only styles, and see an instant HD preview on posters, mugs, phone cases and more.


              <br />
              Premium printing. Worldwide delivery.
            </motion.p>

            {/* Add Pulsating Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-[3vh] flex justify-center"
            >
              <CTAButton />
            </motion.div>

             {/* Testimonials Marquee - Adjust margin */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-[4vh] w-full overflow-hidden"
            >
              <PortfolioMarquee />
            </motion.div>


          </div>
        </div>
      </div>
    </div>
  );
}