import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function Feeds() {
  const [active, setActive] = useState(0);
  function handleIndex(index) {
    active === index ? setActive(null) : setActive(index);
  }
  const content = [
    {
      title: "Credpal Investment $ 15,450,00",
      text: "The investment so far for Credpal has been very great with an ROI of 4.5% in 3 months. The investment so far for Credpal has been very great with an ROI of 4.5% in 3 months",
    },
    {
      title: "Sabi Investment $ 15,450,00",
      text: "The investment so far for Credpal has been very great with an ROI of 4.5% in 3 months. The investment so far for Credpal has been very great with an ROI of 4.5% in 3 months",
    },
  ];
  return (
    <div>
      <h2 className="text-base text-[#1D1D35] dark:text-white/80 font-medium mb-1">
        Category Feeds
      </h2>
      <p className="text-sm text-[#677684] dark:text-white/80 mb-10">
        Display feeds from all categories
      </p>

      <div className="grid gap-y-8">
        {content.map((item, index) => (
          <div
            key={item.title}
            className={`transition-all ease-in-out duration-300 w-[464px]  border rounded-[12px] px-5 py-[14px] ${
              active === index
                ? "border-primary bg-primary/10"
                : "border-[#D2D2D7] "
            }`}
          >
            <div className="flex justify-between items-center">
              <p
                className={`${
                  active === index ? "text-primary" : "text-[#686878] dark:text-white/80"
                } font-medium`}
              >
                {item.title}
              </p>
              <span className="p-1" onClick={() => handleIndex(index)}>
                <BiChevronDown />
              </span>
            </div>

            {active === index && (
              <p className="transition-all ease-in-out duration-500 text-[#8E8E9A] dark:text-white/80 text-sm mt-5">
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
