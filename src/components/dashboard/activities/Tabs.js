import React from "react";

export default function Tabs({ setActive, active }) {
  const tabsData = [
    "Companies Invested",
    "Exited Companies",
    "Contract Level",
    "Funding",
  ];
  return (
    <div className="flex items-center gap-x-4 mb-10 overflow-x-auto max-w-[100%] lg:max-w-none pb-2">
      {tabsData.map((item) => (
        <button
          onClick={() => setActive(item)}
          className={`text-sm lg:text-base px-4 py-2 rounded-full whitespace-nowrap ${
            active === item
              ? "text-primary bg-[#27AE6033]"
              : "text-[#170D33]  dark:text-white/80 "
          }`}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
