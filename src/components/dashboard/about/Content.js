import ButtonComponent from "@/components/ButtonComponent";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import {
  FaCamera,
  FaLock,
  FaPalfed,
  FaPencilAlt,
  FaPlusSquare,
  FaUser,
} from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import LocationChart from "./Location";
import Rounds from "./Rounds";
import TeamMembers from "./TeamMembers";

export default function Content() {
  const content = [
    {
      img: "",
      title: "Samson Felix",
      text: "The investment so far for Credpal has been very great with an ROI of 4.5% in 3 months. The investment so far for Credpal has been very great with an ROI of 4.5% in 3 months ",
      date: new Date(),
    },
    {
      img: "",
      title: "Samson Felix",
      text: "The investment so far for Credpal has been very great with an ROI of 4.5% in 3 months. The investment so far for Credpal has been very great with an ROI of 4.5% in 3 months ",
      date: new Date(),
    },
  ];
  const buttons = [
    {
      label: "Follow",
      icon: "/images/plus.svg",
      className: "bg-primary text-white border border-primary",
    },
    {
      label: "Add bio",
      icon: "/images/edit-2.svg",
      className: "bg-white border border-[#D2D2D7] text-[#434357]",
    },
    {
      label: "More",
      icon: "/images/dots.svg",
      className: "bg-white border border-[#D2D2D7] text-[#434357]",
    },
  ];
  return (
    <div>
      <div className="bg-[#1D1D35] rounded-[20px] py-6 lg:py-[36px] px-6 lg:px-[60px] mb-[52px] h-full">
        <div className="flex flex-col lg:flex-row items-start gap-y-6 lg:gap-y-0 gap-x-12 mb-[60px]">
          <Image
            width={100}
            height={100}
            alt="image"
            src="/images/avatar.svg"
            className="text-2xl rounded-full"
          />
          <div>
            <h2 className="text-white text-xl font-bold mb-8 text-center lg:text-left">
              Credpal Financial Service
            </h2>
            <div className="flex flex-wrap gap-y-6 lg:gap-y-0 gap-x-14">
              <div>
                <h3 className="text-[#686878] text-sm lg:text-base mb-[6px] lg:mb-[10px]">Sector</h3>
                <p className="text-[#D2D2D7] text-sm lg:text-base font-medium">Fintech</p>
              </div>
              <div>
                <h3 className="text-[#686878] text-sm lg:text-base mb-[6px] lg:mb-[10px]">
                  Contact Number
                </h3>
                <p className="text-[#D2D2D7] text-sm lg:text-base font-medium">
                  (+12) 009 4356-7120
                </p>
              </div>
              <div>
                <h3 className="text-[#686878] text-sm lg:text-base mb-[6px] lg:mb-[10px]">Email</h3>
                <p className="text-[#D2D2D7] text-sm lg:text-base font-medium">info@credpal.com</p>
              </div>
              <div>
                <h3 className="text-[#686878] text-sm lg:text-base mb-[6px] lg:mb-[10px]">Website</h3>
                <p className="font-medium text-sm lg:text-base text-primary">www.credpal.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 lg:gap-x-6  gap-y-4 lg:gap-y-6">
          <span className="max-w-max flex gap-x-[10px] items-center border border-[#0000004D] bg-[#FFFFFF1A] px-4 py-5 rounded-[10px]">
            <span className="text-xs lg:text-sm text-[#B4B4BC]">Business type</span>
            <span className="text-xs lg:text-base text-white capitalize font-medium">B2C</span>
          </span>
          <span className="max-w-max flex gap-x-[10px] items-center border border-[#0000004D] bg-[#FFFFFF1A] px-4 py-5 rounded-[10px]">
            <span className="text-xs lg:text-sm text-[#B4B4BC]">Sector</span>
            <span className="text-xs lg:text-base text-white capitalize font-medium">Pre-seed</span>
          </span>
          <span className="max-w-max flex gap-x-[10px] items-center border border-[#0000004D] bg-[#FFFFFF1A] px-4 py-5 rounded-[10px]">
            <span className="text-xs lg:text-sm text-[#B4B4BC]">Date Founded</span>
            <span className="text-xs lg:text-base text-white capitalize font-medium">Jan 21, 2021</span>
          </span>
          <span className="max-w-max flex gap-x-[10px] items-center border border-[#0000004D] bg-[#FFFFFF1A] px-4 py-5 rounded-[10px]">
            <span className="text-xs lg:text-sm text-[#B4B4BC]">Founder(s)</span>
            <span className="text-xs lg:text-base text-white capitalize font-medium">3</span>
          </span>
          <span className="max-w-max flex gap-x-[10px] items-center border border-[#0000004D] bg-[#FFFFFF1A] px-4 py-5 rounded-[10px]">
            <span className="text-xs lg:text-sm text-[#B4B4BC]">Company size</span>
            <span className="text-xs lg:text-base text-white capitalize font-medium">50 - 100</span>
          </span>
          <span className="max-w-max flex gap-x-[10px] items-center border border-[#0000004D] bg-[#FFFFFF1A] px-4 py-5 rounded-[10px]">
            <span className="text-xs lg:text-sm text-[#B4B4BC]">Development Stage</span>
            <span className="text-xs lg:text-base text-white capitalize font-medium">Growth</span>
          </span>
          <span className="max-w-max flex gap-x-[10px] items-center border border-[#0000004D] bg-[#FFFFFF1A] px-4 py-5 rounded-[10px]">
            <span className="text-xs lg:text-sm text-[#B4B4BC]">Generates</span>
            <span className="text-xs lg:text-base text-white  capitalize font-bold">Yes</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mb-[52px]">
        <div className="bg-[#27AE601A] p-6 rounded-[20px] flex-1 border border-[#27AE601A] min-h-[350px]">
          <h2 className="px-3 border-l-[5px] border-primary text-xl font-bold mb-4">
            About Company
          </h2>
          <p className="text-[#686878] dark:text-white/70">
            Credpal is a tech company that allows consumers to buy anything
            across various online and offline merchants and pay for it in
            installments. Credpal is a tech company that allows consumers to buy
            anything across various online and offline merchants and pay for it
            in installments. Credpal is a tech company that allows consumers to
            buy anything across various online and offline merchants and pay for
            it in installments. Credpal is a tech company that allows consumers
            to buy anything across various online and offline. various online
            anything across various online and offline merchants and pay for it
            in installments. Credpal is a tech company that allows consumers to
            buy. Read more
          </p>
        </div>
        <div className="w-full lg:w-[282px] rounded-[20px] p-6 border border-[#F2F2F2] min-h-[350px] ">
          <LocationChart />
        </div>
      </div>
      <Rounds />
      <div className="bg-[#27AE6033] px-8 py-5 rounded-[10px] flex flex-col sm:flex-row sm:items-center gap-y-5 sm:gap-y-0 justify-between mb-8">
        <div className="flex gap-x-2 items-start">
          <Image src="/images/lock.svg" alt="lock" width={24} height={24} />
          <div>
            <p className="text-[#434357] dark:text-white/70 text-base font-bold">
              Preview of a Locked Feature
            </p>
            <p className="text-sm text-[#686878] dark:text-white/60">
              Upgrade to view all investors for this startup
            </p>
          </div>
        </div>
        <ButtonComponent className="bg-[#27AE60] text-white py-[10px] flex items-center justify-center">
          Upgrade
        </ButtonComponent>
      </div>
      <TeamMembers />
    </div>
  );
}
