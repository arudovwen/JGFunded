import formatCurrency from "@/utils/formatCurrency";
import React, { useState } from "react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="flex flex-col sm:flex-row gap-x-6 gap-y-6 lg:gap-y-0 mb-6">
      <div className="border-[#1D1D351A] dark:border-gray-50/20 flex items-start gap-x-7 relative border bg-[#1D1D350D] dark:bg-gray-50/10  px-4 rounded-2xl pb-7 pt-6 w-full sm:max-w-[220px]">
        <span className="bg-[#1D1D350D] dark:bg-gray-50/10 w-[50px] h-[50px] rounded-[12px] flex items-center justify-center">
          <Image
            className=""
            width={24}
            height={24}
            alt="arrow"
            src="/images/ongoing.svg"
          />{" "}
        </span>
        <div className="text-center flex-1">
          <p className="mb-2  text-[#686878] text-sm dark:text-white/70">
            Ongoing Course
          </p>
          <p className="text-xl font-bold text-[#434357] dark:text-white/90">
            4
          </p>
        </div>
      </div>
      <div className="bg-primary/10  flex items-start gap-x-7 relative border border-primary/20 px-4 rounded-2xl pb-7 pt-6 w-full sm:max-w-[220px]">
        <span className="bg-primary/10 w-[50px] h-[50px] rounded-[12px] flex items-center justify-center">
          <Image
            className=""
            width={24}
            height={24}
            alt="arrow"
            src="/images/completed.svg"
          />{" "}
        </span>
        <div className="text-center flex-1">
          <p className="mb-2  text-[#686878]  text-sm dark:text-white/70">
            Completed
          </p>
          <p className="text-xl font-bold text-[#434357] dark:text-white/90">
            4
          </p>
        </div>
      </div>
      <div className="relative border border-[#F5A6234D] bg-[#F5A6231A] px-4 rounded-xl  flex items-start gap-x-7  pb-7 pt-6 w-full sm:max-w-[220px]">
        <span className="bg-[#F5A6231A] w-[50px] h-[50px] rounded-[12px] flex items-center justify-center">
          <Image
            className=""
            width={24}
            height={24}
            alt="arrow"
            src="/images/certifications.svg"
          />{" "}
        </span>
        <div className="text-center flex-1">
          <p className="mb-2  text-[#686878]  text-sm dark:text-white/70">
            Certifications
          </p>

          <p className="text-xl font-bold text-[#434357] dark:text-white/90">
            4
          </p>
        </div>
      </div>
    </div>
  );
}
