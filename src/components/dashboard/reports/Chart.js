import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { formatNumberAbbreviated } from "@/utils/formatNumberAbbreviated";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function LineChart() {
  const [options, setOptions] = useState({
    chart: {
      id: "revenue",
      gridline: false,
    },
    legend: {
      show: false,
    },
    colors: ["#E6EAEE", "#F5A623"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
      },
    },
    grid: {
      show: true,
      borderColor:"#f7f8fa"
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return formatNumberAbbreviated(value);
        },
      },
      axisBorder: {
        show: true
      },
    },
  });
  const [series, setSeries] = useState([
    {
      name: "Recent funding",
      data: [3000, 4000, 350, 500, 4900, 600, 700, 500, 4900, 600, 700, 5000],
    },
    {
      name: "Total funding",
      data: [2000, 4500, 650, 100, 890, 2500, 500, 4500, 650, 100, 890, 2500],
    },
  ]);
  return (
    <div className="w-full h-full flex flex-col mb-9">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full mb-5">
        <h2 className="font-medium text-xl text-[#1C1C1C] dark:text-white/90 capitalize">
          Recent funding
        </h2>{" "}
        <div className="border-r border-dark/10 h-5 hidden lg:inline" />
        <div className="flex items-center gap-x-4  text-sm text-[#1C1C1C] dark:text-white/80">
          <span className="flex items-center gap-x-1">
            <span className="h-2 w-2 bg-[#E6EAEE] block"></span>{" "}
            <span>Recent Funding </span>
          </span>
          <span className="flex items-center gap-x-1">
            <span className="h-2 w-2 bg-[#F5A623] block"></span>{" "}
            <span>Total funding rounds</span>
          </span>
        </div>
      </div>
      <div className="flex-1">
        {typeof window !== "undefined" && (
          <Chart
            options={options}
            series={series}
            type="bar"
            width="100%"
            height="350"
          />
        )}
      </div>
    </div>
  );
}
