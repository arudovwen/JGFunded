import React from "react";

export default function LocationChart() {
  const content = [
    {
      name: "Nigeria",
      value: 49,
      count: "3.2m",
    },
    {
      name: "Ghana",
      value: 89,
      count: "3.2m",
    },
    {
      name: "Kenya",
      value: 39,
      count: "3.2m",
    },
    {
      name: "Mali",
      value: 69,
      count: "3.2m",
    },
  ];
  return (
    <div>
      <h2 className="font-semibold text-sm text-[#1C1C1C] dark:text-white/90">
        Investment by Location
      </h2>{" "}
      <div className="mb-4 h-20"></div>
      <div className="grid gap-y-6">
        {content.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between gap-x-2 items-center mb-1">
              <span className="text-xs text-[#1C1C1C] dark:text-white/80 font-medium">
                {item.name}
              </span>
              <span className="text-xs text-[#1C1C1C] dark:text-white/80 font-medium">
                {item.count}
              </span>
            </div>
            <div className="bg-[#D7DCE0] w-full max-w-[190px] rounded h-[2px]">
              <div
                className="rounded h-[2px] bg-[#E6A900]"
                style={{
                  width: `${item.value}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
