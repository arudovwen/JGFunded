import ButtonComponent from "@/components/ButtonComponent";
import RangeComponent from "@/components/RangeComponent";
import Image from "next/image";
import React from "react";
import { BiMap } from "react-icons/bi";
import { RiBuildingLine } from "react-icons/ri";
import formatCurrency from "@/utils/formatCurrency";

export default function Profile({ handleClick, detail }) {
  const type = ["startup", "early stage"];
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-x-2 mb-[14px]">
          <Image
            width={48}
            height={48}
            alt="logo"
            src={detail?.logo}
            className="rounded-full w-12 h-12"
          />
          <span className="text-[#0D0F11] text-2xl font-bold capitalize">
            {detail?.startup}
          </span>
        </div>
        <div className="text-xs text-[#8E8E9A] mb-4 flex items-center gap-x-1 capitalize">
          <RiBuildingLine /> <span>{detail?.sector}</span>
        </div>
        <div className="text-xs text-[#8E8E9A] mb-4 flex items-center gap-x-1 capitalize">
          <BiMap /> <span>{detail?.location}</span>
        </div>
        <div className="text-xs text-[#27AE60]">
          <a href={detail?.website} target="_blank">
            {detail?.website}
          </a>
        </div>
        <hr className="my-4 border-[#D7DCE0]" />
        <div className="mb-5">
          <h3 className="text-[#686878] text-sm mb-1">Matching Percentage </h3>
          <RangeComponent value={detail?.match} />
        </div>
        <div className="mb-7">
          <h3 className="text-[#686878] text-sm mb-1">Company Type</h3>
          <div className="flex gap-x-3">
            {type.map((item) => (
              <span
                key={item}
                className="capitalize rounded-full text-xs bg-[#F2F2F2] px-3 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h3 className="text-[#333] text-sm mb-1">Funding Required</h3>
          <span className="text-[#27AE60] text-2xl font-bold">
            {formatCurrency(detail.amount)}
          </span>
        </div>
      </div>
      <div className="flex gap-x-2 items-center">
        <ButtonComponent
          onClick={() => handleClick()}
          className="bg-primary text-white px-8 py-3 h-auto"
        >
          Accept
        </ButtonComponent>
        <ButtonComponent
          onClick={() => handleClick()}
          className="bg-transparent  px-8 py-3 h-auto"
        >
          Decline
        </ButtonComponent>
      </div>
    </div>
  );
}
