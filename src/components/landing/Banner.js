import React from "react";
import Image from "next/image";
import ButtonComponent from "../ButtonComponent";
import {
  TbArrowBigRightLineFilled,
  TbArrowBigDownLineFilled,
} from "react-icons/tb";
import { RiBarChartFill } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <section className="pt-20 pb-10 container grid xl:grid-cols-2 px-6 xl:px-0 gap-20">
      <div className="relative fade-in">
        <h1 className="text-[#08151A] dark:text-white/90 text-5xl lg:text-[64px] font-bold lg:leading-[80px] mb-6 lg:mb-3">
          We match startups with{" "}
          <span className="text-shadow-drop-center text-primary relative img_under after:content-[url('/images/line.svg')] after:w-full after:absolute after:left-[8%] lg:after:left-[22%] after:bottom-[-25%]">
            investors
          </span>
        </h1>
        <h2 className="text-[#333333] dark:text-white/80 text-base lg:text-xl lg:leading-[32px] font-normal mb-7 max-w-[300px] lg:max-w-[400px] xl:max-w-[378px]">
          A marketplace where vetted and verified StartUps and Investors meet,
          and funding is initiated.
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <ButtonComponent className="bg-primary text-white text-sm justify-center lg:text-base px-5 w-full sm:w-auto">
            Join Waitlist
          </ButtonComponent>
          <button className="text-[#686D77] dark:text-white/80 flex items-center gap-x-3 lg:gap-x-5 text-sm lg:text-base">
            {" "}
            <Image
              src="/images/play.svg"
              width={52}
              height={52}
              alt="play icon"
              className="w-[46px] h-[46px] lg:w-auto lg:h-auto"
            />{" "}
            Play Demo
          </button>
        </div>
        <TbArrowBigDownLineFilled className="text-shadow-drop-center w-16 h-16 text-primary absolute top-2 right-0 hidden sm:flex xl:hidden" />
      </div>

      <div className="relative flex items-center gap-x-20">
        <div className="flex-1 hidden sm:flex xl:hidden">
          <TbArrowBigRightLineFilled className="text-shadow-drop-center w-16 h-16 text-primary" />
        </div>
        <div className="fade-in-bottom max-w-[568px] w-full ml-auto h-[300px] lg:h-[500px] rounded-[40px] overflow-hidden bg-no-repeat bg-cover drop-shadow-[(0px_24px_54px_rgba(40,41,61,0.2))] bg-[linear-gradient(189.18deg,#00000040_6.96%,#00000050_99.86%),url('/images/bimg.webp')]">
          <div className="w-full h-full flex flex-col items-start justify-end px-4 sm:px-8 py-8">
            <Carousel
              className="w-full banner__carousel"
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              infiniteLoop={true}
              dynamicHeight={false}
              interval={7000}
              axis="vertical"
              autoPlay
            >
              {Array.from(Array(5)).map((i) => (
                <div key={`${i}text`} className="text-left py-3">
                  <div className="slide__item px-4 py-3 rounded-full bg-white dark:bg-gray-900 flex items-center justify-between gap-x-4">
                    <div className="flex gap-x-2 items-center">
                      <span className="bg-[#F4F7FE] text-[#5285F2] w-9 h-9 sm:w-[56px] sm:h-[56px] flex items-center justify-center rounded-full">
                        <RiBarChartFill className="w-5 h-5" />
                      </span>
                      <div className="flex-1">
                        <p className="text-[11px] sm:text-[13px] font-normal text-[#828282] dark:text-white/70">
                          Funding Received!
                        </p>
                        <p>
                          <span className="text-[#333333] dark:text-white/90 text-base sm:text-lg font-bold">
                            $2.7m
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <span className="bg-primary/20 text-primary rounded-full px-4 py-1 text-xs sm:text-sm">
                      Received
                    </span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
