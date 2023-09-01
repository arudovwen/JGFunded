import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { formatNumberAbbreviated } from "@/utils/formatNumberAbbreviated";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function LineChart() {
  const [options, setOptions] = useState({
    chart: {
      id: "revenue",
      toolbar: false,
    },
    legend: {
      show: false,
    },
    colors: ["#1C1C1C", "#F5A623"],
    stroke: {
      curve: "smooth",
      width:3
    },
    xaxis: {
      categories: ["5k", "10k", "15k", "20k", "25k", "30k", "35k"],
    },
    yaxis: {
        labels: {
          formatter: function (value) {
           return formatNumberAbbreviated(value)
          }
        },
      },
  });
  const [series, setSeries] = useState([
    {
      name: "current",
      data: [30000, 40000, 35000, 5000, 49000, 60000, 72000],
    },
    {
      name: "previous",
      data: [20000, 45300, 6500, 10890, 8990, 21500, 5200],
    },
  ]);
  return (
    <div className="w-full h-full flex flex-col border border-[#D7DCE0] rounded-2xl py-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full mb-3">
        <h2 className="font-semibold text-sm text-[#1C1C1C] dark:text-white/90 px-6">
        Received/ Expenditure
        </h2>{" "}
        <div className="border-r border-dark/10 h-5 hidden lg:inline" />
        <div className="px-6 flex items-center gap-x-4  text-sm text-[#1C1C1C] dark:text-white/80">
          <span className="flex items-center gap-x-1">
            <span className="h-2 w-2 rounded-full bg-[#1C1C1C] block"></span>{" "}
            <span>Received $58,211</span>
          </span>
          <span className="flex items-center gap-x-1">
            <span className="h-2 w-2 rounded-full bg-[#F5A623] block"></span>{" "}
            <span>Total Expected $68,768</span>
          </span>
        </div>
      </div>
      <div className="flex-1 px-[7px]">
        {typeof window !== "undefined" && (
          <Chart
            options={options}
            series={series}
            type="line"
            width="100%"
            height="250"
          />
        )}
      </div>
    </div>
  );
}
