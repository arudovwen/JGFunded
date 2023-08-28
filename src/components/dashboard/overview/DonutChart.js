import formatCurrency from "@/utils/formatCurrency";
import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
      value: 390,
      bg: "#C6C7F8",
    },
    {
      name: "E-mail",
      value: 469,
      bg: "#95A4FC",
    },
  ];
  const series = [4956, 895, 390, 469];
  const options = {
    legend: {
      show: false,
    },
    colors: ["#BAEDBD", "#000", "#C6C7F8", "#95A4FC"],
    chart: {
      type: "donut",
      id: "investment",
      // toolbar: false,
    },
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    dataLabels: {
      enabled: true,
      dropShadow:{
        enabled:true,
        top: 1,
        left: 1,
        blur: 1,
        color: '#000',
        opacity: 0.45
      },
    },
    donut: {
      background: "green",
    },
   


  };
  return (
    <div>
      <h2 className="font-semibold text-sm text-[#1C1C1C] dark:text-white/90">
        Total Investment
      </h2>{" "}
      <div className="mb-5 min-h-[110px]">
        {typeof window !== "undefined" && (
          <Chart options={options} series={series} type="donut" />
        )}
      </div>
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
