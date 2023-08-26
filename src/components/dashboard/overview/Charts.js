import React from "react";
import LineChart from "./LineChart";
import LocationChart from "./LocationChart";
import DonutChart from "./DonutChart";

export default function Charts() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start mb-10 lg:h-[320px]">
      <div className="h-full w-full lg:w-auto flex-1 border border-[#F2F2F2] rounded-2xl bg-white dark:bg-dark overflow-auto py-5 px-4">
        <LineChart />
      </div>
      <div className="h-full border border-[#F2F2F2] w-full lg:w-[200px] rounded-2xl bg-white dark:bg-dark  py-5 px-4">
        <LocationChart />
      </div>
      <div className="h-full border border-[#F2F2F2] w-full lg:w-[200px] rounded-2xl bg-white dark:bg-dark  py-5 px-4">
        <DonutChart />
      </div>
    </div>
  );
}
