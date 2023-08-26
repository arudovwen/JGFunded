import formatCurrency from "@/utils/formatCurrency";
import React from "react";

export default function DonutChart() {
  const content = [
    {
      name: "Direct",
      value: 4956,
      bg: "#BAEDBD",
    },
    {
      name: "Affiliate",
      value: 895,
      bg: "#000",
    },
    {
      name: "Sponsored",
      value: 39,
      bg: "#C6C7F8",
    },
    {
      name: "E-mail",
      value: 469,
      bg: "#95A4FC",
    },
  ];
  return (
    <div>
      <h2 className="font-semibold text-sm text-[#1C1C1C] dark:text-white/90">Total Investment</h2>{" "}
      <div className="mb-5 h-[110px]"></div>
      <div className="grid gap-y-4">
        {content.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between gap-x-2 items-center mb-1">
              <span className="flex items-center gap-x-2 text-xs text-[#1C1C1C] dark:text-white/80 font-medium">
                <span
                  style={{ background: item.bg }}
                  className="h-[6px] w-[6px] rounded-full  block"
                ></span>{" "}
                {item.name}
              </span>
              <span className="text-xs text-[#1C1C1C] dark:text-white/80 font-medium">
                {formatCurrency(item.value, 2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
