import Image from "next/image";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Fourth() {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-2 gap-[52px] mb-28 lg:mb-[140px]">
      <div className="text-center lg:text-left">
       <ScrollAnimation animateOnce  animateIn="text-focus-in">
        <h2 className="text-dark dark:text-white/90 text-2xl lg:text-[32px] mb-4 font-bold">
          JXTGOTFUNDED Innovate
        </h2>
        <p className="text-[#828282] dark:text-white/80 font-normal text-base lg:text-xl lg:leading-[32px]">
          JXTGOTFUNDED Innovate is a corporate innovation program designed to
          help corporations support, collaborate, and invest in startups.
          Innovate members play a positive role in the development of startups,
          across stages and sectors from sourcing and funding to collaborating
          post-investment on strategic partnerships.
        </p>
        </ScrollAnimation>
      </div>
      <div className="relative">
       <ScrollAnimation animateOnce  animateIn="fade-in-bottom">
        <Image
          src="/images/innovate.webp"
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

export default Fourth;
