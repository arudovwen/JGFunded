import React from "react";
import Card from "./Card";

export default function Lessons({ title, data }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-[#1D1D35] dark:text-white/80  font-bold ">{title}</h2>
        <button className="text-primary text-sm hover:underline bg-transparent outline-none">
          See more
        </button>
      </div>
      <div className="grid gap-y-7 sm:gap-y-0 sm:gap-x-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {
        data.map(item=> (
            <Card key={item.title}  detail={item} />
        ))
       }
      </div>
    </div>
  );
}
