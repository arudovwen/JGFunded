import ButtonComponent from "@/components/ButtonComponent";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import formatCurrency from "@/utils/formatCurrency";

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
        <div className="flex flex-col lg:flex-row items-start gap-y-6 lg:gap-y-0 mb-6 gap-x-12">
          <Image
            width={100}
            height={100}
            alt="image"
            src="/images/avatar.svg"
            className="text-2xl rounded-full"
          />
          <div>
            <h2 className="text-white text-xl font-bold mb-8 text-center lg:text-left flex gap-x-2 items-center">
              Adekanye Olumide  <BsPatchCheckFill className="text-primary" />
            </h2>
            <div className="flex flex-wrap gap-y-6 lg:gap-y-0 gap-x-14">
              <div>
                <h3 className="text-[#686878] text-sm lg:text-base mb-[6px] lg:mb-[10px]">
                  Contact Number
                </h3>
                <p className="text-[#D2D2D7] text-sm lg:text-base font-medium">
                  (+12) 009 4356-7120
                </p>
              </div>
              <div>
                <h3 className="text-[#686878] text-sm lg:text-base mb-[6px] lg:mb-[10px]">
                  Email
                </h3>
                <p className="text-[#D2D2D7] text-sm lg:text-base font-medium">
                  info@credpal.com
                </p>
              </div>
              <div>
                <h3 className="text-[#686878] text-sm lg:text-base mb-[6px] lg:mb-[10px]">
                  Investment pool
                </h3>
                <p className="font-medium text-lg lg:text-xl text-primary">
                  {formatCurrency(2900000)}
                </p>
              </div>
              <div>
                <h3 className="text-[#686878] text-sm lg:text-base mb-[6px] lg:mb-[10px]">
                  Due diligence
                </h3>
                <div className="flex gap-x-2 items-center">
                  <div className="bg-[#D7DCE0] w-[176px] rounded h-[8px]">
                    <div
                      className="rounded h-[8px] bg-[#22B9C3]"
                      style={{ width: `${80}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-[#B4B4BC] dark:text-white/80 font-medium">
                    80%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
