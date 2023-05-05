import Image from "next/image";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import ScrollAnimation from "react-animate-on-scroll";

function Fifth() {
  const keys = [
    "Market sizing",
    "Geographical benchmarking",
    "Deal  Size analysis",
    "Industry benchmarking",
  ];
  return (
    <section className="bg-[#1D1D35] dark:bg-[#161629] py-20 px-6">
      <div className="container">
        <ScrollAnimation animateOnce animateIn="text-focus-in">
          <h2 className="text-white text-2xl lg:text-[32px] mb-4 font-bold">
            Advanced Analytics
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[52px]">
          <div className="">
            <ScrollAnimation animateOnce animateIn="text-focus-in">
              <p className="text-white/80 font-normal text-base lg:text-xl lg:leading-[32px] mb-8">
                Our Advanced Analytics tool provides you with real-time charts
                on funding, deal and exits evolution where you can analyze
                information by industry, geography, funding stage and round
                brackets. Understand percentage shares, mean and medians, and
                ranking by industry, geography, funding stage and round
                brackets. This tool provides side by side trend comparisons on
                geographies, industries and investors.
              </p>
              <p className="text-white/80  font-normal text-base lg:text-xl lg:leading-[32px] mb-8">
                Fill out the form to reach out to our team and become adept at
                VC data on the Emerging Venture Markets (Middle East, Africa),
                tracking the current trends and making your own predictions!
              </p>
              <p className="text-white text-lg lg:text-[24px] leading-8 mb-4 font-bold">
                Key Components
              </p>
              <ul className="grid grid-cols-2 gap-x-1 gap-y-2">
                {keys.map((item) => (
                  <li
                    key={item}
                    className="text-white/80 flex items-center gap-x-2 text-xs  sm:text-base"
                  >
                    <CheckCircleIcon
                      className="text-primary"
                      width={16}
                      height={16}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
          <div className="relative">
            <ScrollAnimation animateOnce animateIn="fade-in-bottom">
              <Image
                src="/images/analytics.webp"
                width={528}
                height={428}
                alt="dealflow"
                className="h-auto w-full max-w-[528px] ml-auto"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fifth;
