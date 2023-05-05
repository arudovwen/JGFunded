import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function Benefits() {
  const content = [
    "Mentorship support",
    "You would be funded",
    "Investment Report Every Month",
    "Investment Report Every Month",
    "Mergers & Acquisition",
  ];
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-[52px] mb-20 lg:mb-[140px] px-6 xl:px-0">
      <div className="text-left">
        <ScrollAnimation animateOnce animateIn="text-focus-in">
          <h2 className="text-[#1D1D35] dark:text-white/90 text-2xl lg:text-[32px] mb-8 font-bold">
            What benefit will you get
          </h2>
          <ul>
            {content.map((item, index) => (
              <li
                key={`${index}item`}
                className="text-[#828282] dark:text-white/80 font-normal  flex items-center gap-x-4 mb-2 lg:mb-7 text-base  lg:text-xl"
              >
                <CheckCircleIcon
                  className="text-primary w-6 h-6 lg:w-8 lg:h-8"
                  width={32}
                  height={32}
                />{" "}
                {item}
              </li>
            ))}
          </ul>
        </ScrollAnimation>
      </div>
      <div className="relative">
        <ScrollAnimation animateOnce animateIn="fade-in">
          <Image
            src="/images/benefit.png"
            width={636}
            height={428}
            alt="dealflow"
            className=" h-auto w-full max-w-[636px] mx-auto"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Benefits;
