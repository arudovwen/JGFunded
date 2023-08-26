import ButtonComponent from "@/components/ButtonComponent";
import moment from "moment";
import Image from "next/image";
import React from "react";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { FaCamera, FaPencilAlt, FaPlusSquare, FaUser } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

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
      <div className="bg-primary/10 h-[96px] w-full rounded-2xl relative mb-24">
        <div className="rounded-full absolute left-[49px] top-[36px] bg-[#D2D2D7] h-[125px] w-[125px] flex items-center justify-center">
          <Image
            width={125}
            height={125}
            alt="image"
            src="/images/avatar.svg"
            className="text-2xl rounded-full"
          />
          <span className="absolute bottom-0 -right-1 h-8 w-8 flex items-center justify-center rounded-full bg-[#E6EAEE]">
            <FaCamera />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="pl-[49px]">
          <h2 className="text-[#24292E] text-xl font-medium mb-2">
            Goed Finance inc.
          </h2>
          <p className="text-sm text-[#8E8E9A] mb-4">goedfin456@gmail.com</p>
          <p className="max-w-[344px] text-sm text-[#434357]">
            Goed finance inc. so far for Credpal has been very great with an ROI
            of 4.5% in 3 months.
          </p>
        </div>
        <div>
          <div className="flex justify-end gap-x-6">
            {buttons.map((item) => (
              <ButtonComponent
                key={item.label}
                className={`${item.className} flex justify-center py-3 h-auto gap-x-2 max-w-[162px]`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={16}
                  height={16}
                />{" "}
                {item.label}
              </ButtonComponent>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 pl-[49px] max-w-[684px]">
        <h2 className="text-[#686878] font-medium flex items-center gap-x-2 mb-6">
          User responses <BsFillChatSquareDotsFill />
        </h2>
        <div className="border border-[#D7DCE0] rounded-2xl p-8">
          {content.map((item, index) => (
            <div
              key={`id-${index}-index`}
              className="flex gap-x-3 items-start group "
            >
              <div>
                {item.img ? (
                  <Image
                    width={24}
                    height={24}
                    alt="image"
                    className="rounded-full"
                  />
                ) : (
                  <span className="flex items-center justify-center bg-[rgba(230,234,238,1)] h-8 w-8 rounded-full">
                    {" "}
                    <FaUser className="text-lg" />
                  </span>
                )}
              </div>
              <div className="flex-1 border-b border-[#D7DCE0]  group-last:border-none pb-4 mb-4 group-last:mb-0 group-last:pb-0">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-[#24292E]">{item.title}</p>
                  <p className="text-sm text-[#B4B4BC]">
                    {moment(item.date).fromNow()}
                  </p>
                </div>
                <p className="text-sm text-[#686878]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
