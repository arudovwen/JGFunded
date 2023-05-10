import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ScrollAnimation from "react-animate-on-scroll";

function Board() {
  const content = [
    {
      name: "fintech",
      amount: "1,000,000",
    },
    {
      name: "health tech",
      amount: "2,000,000",
    },
    {
      name: "blockchain",
      amount: "1,200,000",
    },
    {
      name: "climate tech",
      amount: "1,800,000",
    },
  ];
  return (
    <section className="container  pb-[40px] px-6 xl:px-0">
      <ScrollAnimation animateOnce animateIn="fade-in-bottom">
        <Carousel
          className="w-full board__carousel"
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          infiniteLoop={true}
          dynamicHeight={false}
          autoPlay
          interval={5000}
        >
          {content.map((item,i) => (
            <div key={`${i}text`} className="px-4 py-20 text-left">
              <div className=" cursor-pointer px-6 sm:px-8 py-6 rounded-[25px] bg-white dark:bg-gray-900 shadow-[0px_0px_60px_1px_rgba(0,0,0,0.1)] flex items-end gap-x-4">
                <div className="flex-1">
                  <div className="mb-[10px]">
                    <Image
                      src="/images/health.svg"
                      alt="icon"
                      width={32}
                      height={32}
                      className="w-8 h-8 mr-auto"
                    />
                  </div>
                  <p className="text-lg font-bold text-[#333333] dark:text-white/90 mb-[2px] capitalize">
                    {item.name}
                  </p>
                  <p>
                    <span className="text-primary text-base font-bold">
                      ${item.amount}
                    </span>{" "}
                    <span className="text-[#333333] dark:text-white/80 text-sm">
                      needed
                    </span>
                  </p>
                </div>
                <div>
                  {" "}
                  <Image
                    src="/images/flag.png"
                    alt="icon"
                    width={32}
                    height={22}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </ScrollAnimation>
    </section>
  );
}

export default Board;
