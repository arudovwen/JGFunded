import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import features from "@/utils/features.json";

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
      name: "South Africa",
      value: 69,
      count: "3.2m",
    },
  ];
  return (
    <div>
      <h2 className="font-semibold text-sm text-[#1C1C1C] dark:text-white/90">
        Investment by Location
      </h2>{" "}
      <div className="mb-7 min-h-20 relative">
        <ComposableMap>
          <Geographies geography={features}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#A8C5DA80"
                  stroke="#fff"
                />
              ))
            }
          </Geographies>
          <Marker coordinates={[8.6753, 9.082]}>
            <circle r={8} fill="#1C1C1C" />
          </Marker>
          <Marker coordinates={[36.8219, -1.2921]}>
            <circle r={8} fill="#1C1C1C" />
          </Marker>
          <Marker coordinates={[-1.0232, 7.9465]}>
            <circle r={8} fill="#1C1C1C" />
          </Marker>
          <Marker coordinates={[22.9375, -30.5595]}>
            <circle r={8} fill="#1C1C1C" />
          </Marker>
        </ComposableMap>
      </div>
      <div className="grid gap-y-5">
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
