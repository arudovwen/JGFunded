import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

function Join() {
  const logos = [
    "/images/helium.svg",
    "/images/orbit.svg",
    "/images/nowmoney.svg",
    "/images/max.svg",
    "/images/clarit.svg",
  ];
  return (
    <section className="bg-[#F2FCF4] dark:bg-dark py-[100px] lg:py-[120px] px-6 lg:px-[128px]">
      <ScrollAnimation animateOnce animateIn="fade-in-bottom">
        <div className="container">
          <h2 className="text-[#333333] mb-4 dark:text-white/90 text-3xl sm:text-4xl xl:text-7xl text-center">
            Join our platform and enhance your chances for securing funding
          </h2>
          <p className="text-center mb-14 text-base lg:text-xl text-[#828282] dark:text-white/80 max-w-[600px] mx-auto">
            Maximize your funding potential by connecting with our extensive
            network of investors.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 justify-center items-center max-w-[500px] lg:max-w-[1000px] mx-auto">
            {logos.map((logo, i) => (
              <div key={`${i}tex`}>
                <Image
                  className="mx-auto w-auto h-auto"
                  src={logo}
                  alt="icon"
                  width={150}
                  height={32}
                />
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Join;
