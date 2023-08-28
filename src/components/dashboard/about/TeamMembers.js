import Image from "next/image";
import React from "react";

export default function TeamMembers() {
  const content = [
    {
      img: "/images/name.svg",
      name: "Nmandi Samuel",
      title: "Founder",
    },
    {
        img: "/images/name.svg",
        name: "Nmandi Samul",
        title: "Founder",
      },
      {
        img: "/images/name.svg",
        name: "Nmand Samuel",
        title: "Founder",
      },
  ];
  return (
    <div className="pb-10">
      <h2 className="px-3 border-l-[5px] border-[#A6A6A6] text-[#170D33] dark:text-white/80 text-xl font-bold mb-8">
        Team Members{" "}
        <span className="text-[#8E8E9A] dark:text-white/60 font-normal text-base">
          (showing 3 of 10)
        </span>
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:gap-x-6 gap-y-10">
        {content.map((item) => (
          <div key={item.name} className="flex gap-x-4">
            <Image
              width={107}
              height={107}
              src={item.img}
              className="rounded-full border  border-primary"
              alt="team"
            />
            <div className="flex-1">
              <span className="block text-base font-bold text-[#1D1D35] dark:text-white/70 mb-1 capitalize">
                {item.name}
              </span>
              <span className="text-sm text-[#434357] dark:text-white/70 block mb-[10px] capitalize">
                {item.title}
              </span>
              <span className="text-sm text-[#8E8E9A] dark:text-white/60 block mb-2">
                1 email address found{" "}
                <span className="text-primary font-bold">Unlock</span>
              </span>
              <span className="flex gap-x-3 items-center">
                <Image
                  width={20}
                  height={20}
                  alt="social"
                  src="/images/linkedin.svg"
                />
                <Image
                  width={20}
                  height={20}
                  alt="social"
                  src="/images/instagram.svg"
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
