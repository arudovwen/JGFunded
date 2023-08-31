import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const DonutChart = ({ value }) => {
  const data = [
    { value: value, color: "#F5A623" },
    { value: 100 - value, color: "#e2e8f0" },
  ];

  return (
    <div className="w-9 h-9 relative">
      <PieChart
        data={data}
        lineWidth={20}
        radius={40}
        animate
        animationDuration={500}
        animationEasing="ease-out"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[8px] font-bold text-gray-700 dark:text-white/90 ">{value}%</span>
      </div>
    </div>
  );
};

export default DonutChart;
