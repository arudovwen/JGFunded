import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { TbUsers } from "react-icons/tb";
import { BsGrid1X2 } from "react-icons/bs";
function Features() {
  const content = [
    {
      icon: "",
      title: "Intuitive Dashboard",
      text: "Here you can handle projects together with team virtually",
    },
    {
      icon: "",
      title: "Match - making",
      text: "We always provide useful information to make it easier for you every day",
    },
  ];
  return (
    <section className="container grid grid-cols-1 xl:grid-cols-2 gap-x-10 lg:gap-x-[58px] sm:rounded-[40px] bg-[#F2FCF4] dark:bg-[#677c6b] mb-28 lg:mb-[140px] px-6 xl:px-0">
      <ScrollAnimation animateOnce animateIn="fade-in-bottom">
        <div className="sm:pl-10 lg:pl-20  py-12 lg:py-[60px] text-center lg:text-left">
          <h2 className="text-[#191A15] dark:text-white/90 text-3xl lg:text-[50px] lg:leading-[72px] mb-4 font-bold">
            Investor Features
          </h2>
          <p className="text-[#828282] dark:text-white/80 font-normal text-base lg:text-xl lg:leading-[32px] mb-14">
            We offer a variety of interesting features that you can help you
            manage your startup portfolio and matchmaking, scheduling processes.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {content.map((item, index) => (
              <div key={`${index}text`}>
                {index === 0 && (
                  <BsGrid1X2 className="mb-6 w-8 h-8 text-primary" />
                )}
                 {index === 1 && (
                  <TbUsers className="mb-6 w-8 h-8 text-primary" />
                )}
                <h4 className="font-bold text-xl lg:text-2xl text-[#16054E] dark:text-white/80 mb-2">
                  {item.title}
                </h4>
                <p className="text-[#16054E] dark:text-white/80 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
      <div className="relative hidden xl:block">
        <ScrollAnimation animateOnce animateIn="fade-in">
          <Image
            src="/images/dealflow.png"
            width={540}
            height={374}
            alt="dealflow"
            className=" h-auto w-full max-w-[574px] absolute bottom-0 right-[-67px]"
          />
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Features;
