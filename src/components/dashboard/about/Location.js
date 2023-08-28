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
      name: "Kenya",
      value: 39,
      count: "3.2m",
    },
   
  ];
  return (
    <div>
      <h2 className="px-3 border-l-[5px] border-[#F5A623] text-xl font-bold">
        Demography
      </h2>
      <div className="relative">
        <ComposableMap>
          <Geographies geography={features}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#A8C5DA80"
                  stroke="#fff"
                  height={140}
                  style={{height:"120px"}}
                />
              ))
            }
          </Geographies>
        
          <Marker coordinates={[-1.0232, 7.9465]}>
            <circle r={8} fill="#1C1C1C" /> k
          </Marker>
        
        </ComposableMap>
      </div>
      <div className="grid gap-y-3">
        <div className="flex justify-between gap-x-2 items-center">
          <span className="text-[13px] text-[#8E8E9A] dark:text-white/80 font-medium">
            Headquarters:
          </span>
          <span className="text-[13px] text-[#434357] dark:text-white/70 font-medium">Kenya</span>
        </div>
        <div className="flex justify-between gap-x-2 items-center">
          <span className="text-[13px] text-[#8E8E9A] dark:text-white/80 font-medium">
            Branches:
          </span>
          <span className="text-[13px] text-[#434357] dark:text-white/70 font-medium">Nairobi, Nairobi</span>
        </div>
        <div className="flex justify-between gap-x-2 items-center">
          <span className="text-[13px] text-[#8E8E9A] dark:text-white/80 font-medium">
            Sector:
          </span>
          <span className="text-[13px] text-[#434357] dark:text-white/70 font-medium">Fintech</span>
        </div>
        <div className="flex justify-between gap-x-2 items-center">
          <span className="text-[13px] text-[#8E8E9A] dark:text-white/80 font-medium">
            Sub-industry:
          </span>
          <span className="text-[13px] text-[#434357] dark:text-white/70 font-medium">Fintech</span>
        </div>
      </div>
    </div>
  );
}
