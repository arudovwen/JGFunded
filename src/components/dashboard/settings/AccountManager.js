import ButtonComponent from "@/components/ButtonComponent";
import Image from "next/image";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function AccountManager() {
  const content = [
    {
      name: "Samson Felix",
      email: "samfelix456@gmail.com",
      phone: "08056832583",
      clients: "43",
      roi: "25",
      img: "/images/avatar.svg",
    },
    {
      name: "Samston Feltix",
      email: "samfelix456@gmail.com",
      phone: "08056832583",
      clients: "43",
      roi: "25",
      img: "/images/avatar.svg",
    },
  ];
  return (
    <div>
      <h2 className="text-base text-[#1D1D35] dark:text-white/80 font-medium mb-1">
        Add account manager
      </h2>
      <p className="text-sm text-[#677684] dark:text-white/80 mb-10">
        Kindly select your desired manaager to help with accountability as
        regards your account
      </p>

      <div className="grid lg:grid-cols-2 lg:gap-x-12 gap-y-6 max-w-[660px]">
        {content.map((item) => (
          <div
            key={item.name}
            className="p-6 rounded-2xl border border-[#D7DCE0] relative"
          >
            <span className="absolute top-4 right-4">
              <BsPatchCheckFill />
            </span>
            <div className="flex items-start gap-x-4">
              <div>
                <Image
                  alt="avatar"
                  src="/images/avatar.svg"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-[#24292E] dark:text-white/80 mb-2 capitalize">
                  {item.name}
                </p>
                <p className="text-xs text-[#8E8E9A] dark:text-white/80 mb-[6px]">{item.email}</p>
                <p className="text-xs text-[#8E8E9A] dark:text-white/80 mb-4">{item.phone}</p>
                <p className="text-xs text-[#8E8E9A] dark:text-white/80 flex items-center gap-x-2 mb-[6px]">
                  <Image
                    src="/images/user.svg"
                    width={13}
                    height={13}
                    alt="chart"
                  />
                  <span>
                    {" "}
                    <span className="text-[#434357] dark:text-white/80">{item.clients}</span>{" "}
                    Clients
                  </span>
                </p>
                <p className="text-xs text-[#8E8E9A] dark:text-white/80 mb-8 flex items-center gap-x-2">
                  <Image
                    src="/images/chart21.svg"
                    width={13}
                    height={13}
                    alt="chart"
                  />
                  <span>
                    {" "}
                    <span className="text-[#434357] dark:text-white/80">{item.roi}%</span> roi
                  </span>
                </p>
              </div>
            </div>
            <ButtonComponent className="flex items-center text-sm w-full border-primary bg-transparent text-primary">
              Select account officer
            </ButtonComponent>
          </div>
        ))}
      </div>
    </div>
  );
}
