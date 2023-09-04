import ButtonComponent from "@/components/ButtonComponent";
import RangeComponent from "@/components/RangeComponent";
import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiBuildingLine } from "react-icons/ri";
import formatCurrency from "@/utils/formatCurrency";
import EditorConvertToHTML from "@/components/Editor";

export default function Detail({ handleClick, detail }) {
  const type = ["startup", "early stage"];
  return (
    <div className="h-full flex flex-col justify-between gap-y-10">
      <div>
        <div className="flex items-center gap-x-2 mb-[14px]">
          <Image
            width={24}
            height={24}
            alt="logo"
            src={detail?.logo}
            className="rounded-full w-6 h-6"
          />
          <span className="text-[#0D0F11]  dark:text-white/80  text-2xl font-bold capitalize">
            {detail?.startup}
          </span>
        </div>
        <div className="text-sm text-[#8E8E9A] dark:text-white/70  mb-4">
          <p className="mb-2"> Hello Xfinance,</p>
          <p className="mb-2">
            {" "}
            The investment so far for Credpal has been very great with an ROI of
            4.5% in 3 months.
          </p>
          <p>
            {" "}
            Regards,
            <br /> Micheal Phillips
          </p>
        </div>
        <hr className="my-7 border-[#D7DCE0]" />
        <div>
          <div className="flex justify-between items-center text-xs mb-2">
            <span className="text-[#686878]  dark:text-white/70 ">
              2 attachments
            </span>
            <button className="text-primary outline-none">Download all</button>
          </div>
          <div className="flex gap-x-3 mb-8">
            {type.map((item) => (
              <span
                key={item}
                className="capitalize rounded text-xs bg-[#F2F2F2] text-[#686878] px-3 py-2 flex gap-x-2 items-center"
              >
                <Image src="/images/Pdf.svg" alt="pdf" width={16} height={16} />{" "}
                {item}
              </span>
            ))}
          </div>

          <div>
            <div className="bg-[#54BD9533] rounded-[10px] p-6 text-sm text-[#434357] dark:text-white/70  max-w-[300px] ml-auto relative">
              <p className="mb-2">Hello Credpal,</p>
              <p>The Documents you sent has been well received, thank you.</p>
              <AiFillCheckCircle className="absolute right-4 top-4 text-[#11998E]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F2F2] rounded-lg p-4">
        <EditorConvertToHTML />
        <div className="flex gap-x-2 items-center justify-end pt-4">
          <ButtonComponent
            onClick={() => handleClick()}
            className="bg-transparent text-[#D2D2D7] dark:text-[#686878] px-4 py-2 h-auto text-xs flex gap-x-2 items-center"
          >
            <Image
              src="/images/closecircle.svg"
              alt="pdf"
              width={14}
              height={14}
            />{" "}
            Clear all
          </ButtonComponent>
          <ButtonComponent
            onClick={() => handleClick()}
            className="bg-primary text-white  px-4 py-2 h-auto text-xs flex gap-x-2 items-center"
          >
            <Image src="/images/send2.svg" alt="pdf" width={14} height={14} />{" "}
            Send
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
}
