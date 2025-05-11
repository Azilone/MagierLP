"use client";


import { motion } from "framer-motion";
import { PortfolioMarquee } from "./testimonials-marquee"; 
import { AuroraText } from "@/components/magicui/aurora-text";
import CTAButton from "./ui/CTAButton";
import { Spotlight } from "./ui/spotlight";
import HeroStatsBar from "./hero-stats-bar";

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
      <div className="relative px-4 pt-8 pb-12 min-h-[70vh] flex items-center sm:px-6 md:pt-20 md:pb-16 lg:px-10 lg:pt-24 lg:pb-24 xl:pt-28 xl:pb-28">
        <div className="relative mx-auto max-w-7xl w-full">

          <HeroStatsBar />

    

          {/* Main Content */}
          <div className="text-center">
             {/* Responsive Headline: Adjust size, leading, tracking */}
            <h1 className="text-[2.8vh] font-bold tracking-tight text-[#140F23] leading-tight
                           sm:text-[3.2vh] sm:leading-tight
                           md:text-[3.5vh] md:leading-none md:tracking-[-0.5px]
                           lg:text-[5vh] lg:leading-[1.1] lg:tracking-[-0.75px]
                           xl:text-[5.5vh] xl:leading-[1.1] xl:tracking-[-1px]
                           max-w-[80vw] mx-auto"
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
                <AuroraText colors={["#FFCFF5", "#5F1CFC" ]} className="text-[2.8vh] sm:text-[3.2vh] md:text-[3.5vh] lg:text-[5vh] xl:text-[5.5vh]">
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
            </h1>

             {/* Responsive Paragraph: Adjust size, leading, margin */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-[1.5vh] text-[1.4vh] leading-relaxed text-[#828088] max-w-sm mx-auto
                         md:mt-[1.8vh] md:text-[1.5vh] md:leading-7 md:max-w-md
                         lg:mt-[2vh] lg:text-[1.6vh] lg:leading-8 lg:max-w-lg
                         xl:text-[1.7vh] xl:leading-8 xl:max-w-xl"
            >
              The best gift they've ever received
              <br />
              Without spending hours shopping or worrying how it'll turn out.
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