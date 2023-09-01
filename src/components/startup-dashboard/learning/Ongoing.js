import React from "react";
import dynamic from "next/dynamic";
import { FaPlay } from "react-icons/fa";
import DonutChart from "@/components/DonutChart";
export default function Ongoing() {
  const content = [
    {
      title: "90 days of investment learning",
      completion: 80,
      img: "/images/bg.png"
    },
    {
      title: "Investment Learning",
      completion: 40,
      img: "/images/bg4.png"
    },
    {
      title: "Business language and approach",
      completion: 58,
      img: "/images/bg3.png"
    },
  ];
  return (
    <div>
      {" "}
      <h2 className="text-xl text-[#1D1D35] dark:text-white/80  font-bold mb-6">
        Ongoing Course 🚀
      </h2>
      <div className="flex gap-x-8 flex-wrap">
        {content.map((item) => (
          <div
            key={item.title}
            className="sm:max-w-[228px] w-full rounded-2xl overflow-hidden"
          >
            <div
              className={`h-[150px] sm:h-[100px] w-full relative bg-cover bg-no-repeat`}
              style={{ backgroundImage: `url('${item.img}')` }}
            >
              <div
                className={`h-full w-full bg-dark/50 absolute top-0 left-0`}
              ></div>
              <div
                className={`h-full w-full flex items-center justify-center object-cover relative`}
              >
                <FaPlay className="text-white text-2xl" />
              </div>
            </div>
            <div className="bg-[#F2F2F2] dark:bg-gray-700 flex items-center justify-between gap-x-4 py-2 px-[10px]">
              <p className="text-sm text-[#1D1D35] dark:text-white/70  font-medium flex-1">
                {item.title}
              </p>
              <div>
                <DonutChart value={item.completion} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
