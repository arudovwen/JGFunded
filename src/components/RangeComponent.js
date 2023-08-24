import React from "react";

export default function RangeComponent({ value }) {
  function handleColor(value) {
    if (value <= 10) {
      return "#CA1B1B";
    }
    if (value <= 60) {
      return "#E6A900";
    }
    if (value <= 90) {
      return "#27AE60";
    }

    return "#22B9C3";
  }
  return (
    <div className="flex gap-x-2 items-center">
      <div className="bg-[#D7DCE0] w-full max-w-[190px] rounded h-2">
        <div
          className="rounded h-2"
          style={{ width: `${value}%`, background: `${handleColor(value)}` }}
        ></div>
      </div>
      <span className="text-sm text-[#8E8E9A] font-medium">{value}%</span>
    </div>
  );
}
