import formatCurrency from "@/utils/formatCurrency";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="rounded-[20px] pt-6 pb-8 px-6 sm:px-10 bg-[#1D1D35] banner relative">
      
      <h1 className="mb-8 text-[#686878] font-medium">Hello, Credpal</h1>
      <div className="flex justify-between sm:justify-start gap-x-5 sm:gap-x-24 mb-7 md:mb-0">
        <div>
          <p className="text-white text-base sm:text-2xl font-bold mb-1">
            {formatCurrency(20000000)}
          </p>
          <p className="text-[#B4B4BC] text-xs sm:text-sm">Total Value Raised</p>
        </div>
        <div>
          <p className="text-white text-base sm:text-2xl font-bold mb-1">2,000,000</p>
          <p className="text-[#B4B4BC] text-xs sm:text-sm">Investors</p>
        </div>
      </div>
      <span className="relative md:absolute sm:right-20 lg:-right-4 md:top-1/2 sm:translate-y-[-50%] translate-x-[60px]">
        <Image src="/images/arrow1.png" width={180} height={56} alt="arrow" className="w-[180px] h-auto" />
        <span className="absolute left-[1/2] top-1/2 translate-y-[-50%] translate-x-[60px] text-[#F2FCF4] font-medium leading-none">
          Series B
        </span>
      </span>
    </div>
  );
}
