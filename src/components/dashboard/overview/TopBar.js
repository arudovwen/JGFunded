import InputField from "@/components/forms/InputField";
import formatCurrency from "@/utils/formatCurrency";
import React, { useState } from "react";
import Image from "next/image";

export default function TopBar() {
  return (
    <div className="grid  sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center mb-10">
      <div className="border border-[#F2F2F2] px-6 rounded-xl bg-[#1D1D35] pb-7 pt-6">
        <p className="text-sm mb-2 font-medium text-white">Investment</p>
        <p className="text-xl mb-2 font-bold text-white">
          {formatCurrency(20000000)}
        </p>
      </div>
      <div className="border border-[#F2F2F2] px-6 rounded-xl pb-7 pt-6">
        <p className="text-sm mb-2 font-medium text-[#1C1C1C] dark:text-white/70">
          Portfolio
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xl mb-2 font-bold text-[#1C1C1C] dark:text-white/90">
            {6}
          </p>
          <p className="text-xs mb-2 font-bold text-[#1C1C1C] dark:text-white/90 flex items-center gap-x-1">
            +1.78%{" "}
            <Image
              src="/images/arrow-rise.svg"
              width={14}
              height={14}
              alt="arrow"
            />
          </p>
        </div>
      </div>
      <div className="border border-[#F2F2F2] px-6 rounded-xl  pb-7 pt-6">
        <p className="text-sm mb-2 font-medium text-[#1C1C1C] dark:text-white/70">ROI</p>

        <div className="flex items-center justify-between">
          <p className="text-xl mb-2 font-bold text-[#1C1C1C] dark:text-white/90">
            {formatCurrency(200)}
          </p>
          <p className="text-xs mb-2 font-bold text-[#1C1C1C] dark:text-white/90 flex items-center gap-x-1">
            +1.78%{" "}
            <Image
              src="/images/arrow-fall.svg"
              width={14}
              height={14}
              alt="arrow"
            />
          </p>
        </div>
      </div>
      <div className="border border-[#F2F2F2] px-6 rounded-xl  pb-7 pt-6">
        <p className="text-sm mb-2 font-medium text-[#1C1C1C] dark:text-white/70">Growth</p>
        <div className="flex items-center justify-between">
          <p className="text-xl mb-2 font-bold text-[#1C1C1C] dark:text-white/90">30.1%</p>
          <p className="text-xs mb-2 font-bold text-[#1C1C1C] dark:text-white/90 flex items-center gap-x-1">
            +1.78%{" "}
            <Image
              src="/images/arrow-rise.svg"
              width={14}
              height={14}
              alt="arrow"
            />
          </p>
        </div>
      </div>
      <div className="border border-[#F2F2F2] px-6 rounded-xl  pb-7 pt-6">
        <p className="text-sm mb-2 font-medium text-[#1C1C1C] dark:text-white/70">Exists</p>
        <p className="text-xl mb-2 font-bold text-[#1C1C1C] dark:text-white/90">{5}</p>
      </div>
    </div>
  );
}
