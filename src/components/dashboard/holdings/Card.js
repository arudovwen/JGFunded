import formatCurrency from "@/utils/formatCurrency";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import moment from "moment";

export default function Card({ detail, isFull = false }) {
  function handleStatus(value) {
    if (value === "live") {
      return "bg-[#EAFBF1] text-primary";
    }
    if (value === "processing") {
      return "bg-[#FDF2E7] text-[#F5A623]";
    }
  }
  return (
    <div className="transition-all duration-500 hover:shadow-lg cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-2xl border border-[#D7DCE0]">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#24292E]  dark:text-white/80 text-lg font-bold capitalize mb-1">
            {detail?.startup}
          </p>
          <p className="text-sm text-[#677684] dark:text-white/80 mb-4 flex items-center gap-x-1 capitalize">
            <span>{detail?.sector}</span>, <span>{detail?.location}</span>
          </p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-[13px] capitalize flex items-center gap-x-2 ${handleStatus(
            detail?.status
          )}`}
        >
          {detail?.status} <BsInfoCircle className="text-xs" />
        </span>
      </div>
      <div className="text-primary text-2xl font-bold mb-7">
        {formatCurrency(detail?.amount)}
      </div>

      <div className="flex justify-between gap-x-2 max-w-[400px]">
        <div>
          <span className="block text-sm text-[#24292E] dark:text-white/60">
            ROI
          </span>
          <span className="text-[#3A434B] dark:text-white/60 font-bold">
            +{detail?.roi}
          </span>
        </div>
        <div>
          <span className="text-sm block text-[#24292E] dark:text-white/60">
            Start date
          </span>
          <span className="text-[#3A434B] dark:text-white/60 font-bold">
            {moment(detail?.date).format("l")}
          </span>
        </div>
        <div>
          <span className="text-sm block text-[#24292E] dark:text-white/60">
            Tenor
          </span>
          <span className="text-[#3A434B] dark:text-white/60 font-bold">
            {detail?.tenor} days
          </span>
        </div>
      </div>

      {isFull && (
        <div>
          <hr className="my-4" />
          <div className="mb-6">
            <p className="text-[#24292E]  dark:text-white/80 text-2xl font-bold capitalize mb-2">
              {detail?.startup}
            </p>
            <p className="text-sm text-[#677684] dark:text-white/80 mb-4 flex items-center gap-x-1 capitalize">
              <span>{detail?.description}</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
        <div>
          <span className="block text-sm text-[#24292E] dark:text-white/60 whitespace-nowrap">
            Contact Number
          </span>
          <span className="text-[#3A434B] dark:text-white/60 font-bold whitespace-nowrap">
            {detail?.phone}
          </span>
        </div>
        <div>
          <span className="text-sm block text-[#24292E] dark:text-white/60 whitespace-nowrap">
           Contact Email
          </span>
          <span className="text-[#3A434B] dark:text-white/60 font-bold">
            {detail.email}
          </span>
        </div>
        <div>
          <span className="text-sm block text-[#24292E] dark:text-white/60 whitespace-nowrap">
            Head Office
          </span>
          <span className="text-[#3A434B] dark:text-white/60 font-bold">
            {detail?.address}
          </span>
        </div>
      </div>

        </div>
      )}
    </div>
  );
}
