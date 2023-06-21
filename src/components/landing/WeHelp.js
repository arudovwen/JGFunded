/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import ButtonComponent from "../ButtonComponent";
import { RxSpeakerLoud } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbUsers } from "react-icons/tb";
import { RiUserSearchLine } from "react-icons/ri";

function WeHelp() {
  const content = [
    {
      icon: "",
      title: "Advertising",
      text: "We help StartUps advertise their startup to potential investors and get noticed by VCs.",
    },
    {
      icon: "",
      title: "Match - making",
      text: "We use Machine Learning algorithms to Analyze startups and match them to their potential investors",
    },
    {
      icon: "",
      title: "Due Diligence",
      text: "No more hassles in due diligence, we got you covered, a streamlined and less stressful due diligence process.",
    },
    {
      icon: "",
      title: "Building Community ",
      text: "We build community ",
    },
  ];
  return (
    <section className="py-20 container px-6 xl:px-0">
      <ScrollAnimation animateOnce animateIn="fade-in-bottom">
        <h2 className="text-[#1E1E26] dark:text-white/90 text-4xl lg:text-[50px] font-bold leading-[50px] lg:leading-[60px] mb-3 text-center max-w-[500px] lg:max-w-[800px] mx-auto">
          We help{" "}
          <span className="text-shadow-drop-center text-primary relative img_under after:content-[url('/images/line.svg')] after:w-full after:absolute after:left-[6%] lg:after:left-[16%] after:bottom-[-50%] lg:after:bottom-[-33%]">
            StartUps
          </span>{" "}
          get their products seen.
        </h2>
        <p className="text-[#333333] dark:text-white/80 text-base font-normal mb-8 sm:mb-12 mx-auto max-w-[760px] text-center">
          Are you a Startup? You don't have to wait any longer until someone is
          responding to your deal. You can now actively search your matching
          investor and get funded from small private investors to large VCs
        </p>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="banner__image h-[300px] lg:h-[500px] bg-center lg:bg-right block sm:hidden lg:block"></div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {content.map((item, index) => (
                <div key={`${index}text`} className="text-center lg:text-left">
                  {index === 0 && (
                    <RxSpeakerLoud className="w-8 h-8 text-[#333333] dark:text-white/80 mb-4 mx-auto lg:mx-0" />
                  )}
                  {index === 3 && (
                    <HiOutlineUserGroup className="w-8 h-8 text-[#333333] dark:text-white/80 mb-4  mx-auto lg:mx-0" />
                  )}
                  {index === 1 && (
                    <TbUsers className="w-8 h-8 text-[#333333] dark:text-white/80 mb-4  mx-auto lg:mx-0" />
                  )}
                  {index === 2 && (
                    <RiUserSearchLine className="w-8 h-8 text-[#333333] dark:text-white/80 mb-4  mx-auto lg:mx-0" />
                  )}
                  <h4 className="font-bold text-base lg:text-2xl text-[#333333] dark:text-white/80 mb-1 lg:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#333333] dark:text-white/80 text-[13px] lg:text-sm max-w-[350px] mx-auto">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-x-4 items-center justify-center lg:justify-start">
              <ButtonComponent className="bg-primary text-white text-base">
                Try for free
              </ButtonComponent>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default WeHelp;
