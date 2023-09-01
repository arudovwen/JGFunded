import React from "react";

import { FaPlay } from "react-icons/fa";
import Image from "next/image";
export default function card({ detail }) {
  return (
    <div
      key={detail.title}
      className="sm:max-w-[300px] w-full rounded-2xl overflow-hidden relative"
    >
      <div
        className={`h-[140px] w-full relative bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url('${detail.img}')` }}
      >
        <div className={`h-full w-full bg-dark/50 absolute top-0 left-0`}></div>
        <div
          className={`h-full w-full flex items-center justify-center relative`}
        >
          <FaPlay className="text-white text-2xl" />
        </div>
      </div>
      <div className="bg-[#F2F2F2] dark:bg-gray-700  items-center pt-3 pb-4 px-[10px]">
        <p className="text-sm text-[#1D1D35] dark:text-white/70  font-medium mb-[10px]">
          {detail.title}
        </p>
        <div className="flex justify-between gap-x-4 items-center text-xs text-[#8E8E9A] dark:text-white/60 ">
          <span>02:05</span>
          <span>2 weeks ago</span>
        </div>
      </div>

      {detail.lock && (
        <span className="absolute top-0 right-3">
          <Image src="/images/lockbg.svg" alt="lock" width={30} height={32} />
        </span>
      )}
    </div>
  );
}
