import ButtonComponent from "@/components/ButtonComponent";
import InputField from "@/components/forms/InputField";
import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="flex gap-y-3 lg:gap-y-0 justify-between items-center mb-[30px]">
     
        <div className="flex gap-x-4 items-start">
          <div className="mt-1">
            <Link href="/investor/reports">
              <span className="h-5 w-5 flex items-center justify-center text-[#3A434B] dark:text-white/80">
                {" "}
                <FaChevronLeft />{" "}
              </span>
            </Link>
          </div>
          <div className="flex-1">
            <h1 className="text-lg lg:text-3xl font-bold text-[#3A434B] dark:text-white/80">
              {" "}
              About Startup
            </h1>
            <p className="text-sm text-[#677684] dark:text-white/60">Details...</p>
          </div>
        </div>
     
      <ButtonComponent className="bg-primary text-white flex items-center gap-x-2 text-sm lg:text-base px-3 lg:px-5">
        {" "}
        <Image src="/images/plus.svg" width={16} height={16} alt="plus" className="hidden lg:inline-flex" /> Add
        to list
      </ButtonComponent>
    </div>
  );
}
