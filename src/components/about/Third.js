import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Third() {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-[52px] mb-28 lg:mb-[140px]">
      <div className="relative order-2 lg:order-1">
         <ScrollAnimation animateOnce  animateIn="fade-in-bottom">
          <Image
            src="/images/innovate.png"
            width={636}
            height={428}
            alt="dealflow"
            className=" h-auto w-full max-w-[636px] mx-auto"
          />
        </ScrollAnimation>
      </div>
      <div className="order-1 lg:order-2 text-center lg:text-left">
         <ScrollAnimation animateOnce  animateIn="text-focus-in">
          <h2 className="text-dark dark:text-white/90 text-2xl lg:text-[32px] mb-4 font-bold">
            Portfolio development beyond investment
          </h2>
          <p className="text-[#828282] dark:text-white/80 font-normal text-base lg:text-xl lg:leading-[32px]">
            Beyond the initial raise, JXTGOTFUNDED supports its portfolio of
            companies with extensive business development and access to its
            well-connected global investment community. JXTGOTFUNDED vast global
            network includes multinational corporations, entrepreneurs,
            investors, venture capitalists, and global institutions.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Third;
