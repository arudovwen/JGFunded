import formatCurrency from "@/utils/formatCurrency";
import React, { useState } from "react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-x-8 gap-y-8 sm:gap-y-0">
      <div className="relative border border-[#F2F2F2] px-6 rounded-xl  pb-7 pt-6 w-full sm:max-w-[318px]">
        <p className="mb-6 font-medium text-[#24292E] dark:text-white/70">
          Recieved
        </p>

        <div className="">
          <p className="text-2xl mb-2 font-bold text-primary ">
            {formatCurrency(20077777)}
          </p>
        </div>
        <Image
          className="absolute right-5 top-6"
          width={32}
          height={32}
          alt="arrow"
          src="/images/tarrow.svg"
        />
      </div>
      <div className="relative border border-[#F2F2F2] px-6 rounded-xl  pb-7 pt-6 w-full sm:max-w-[318px]">
        <p className="mb-6 font-medium text-[#24292E] dark:text-white/70">
        Total Expected
        </p>

        <div className="">
          <p className="text-2xl mb-2 font-bold text-[#1D1D35] dark:text-white/90">
            {formatCurrency(23555200)}
          </p>
        </div>
        <Image
          className="absolute right-4 top-6"
          width={32}
          height={32}
          alt="arrow"
          src="/images/rarrow.svg"
        />
      </div>
    </div>
  );
}
