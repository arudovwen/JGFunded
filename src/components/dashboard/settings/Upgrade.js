import ButtonComponent from "@/components/ButtonComponent";
import React, { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Upgrade() {
  const [active, setActive] = useState(0);
  function handleIndex(e, index) {
    console.log(e.target.checked);
    active === index ? setActive(null) : setActive(index);
  }
  const content = [
    {
      title: "Starter",
      text: "$12/ month",
      lists: [
        "Maxium ROI tracking on every of your investments.",
        "Maximum ROI tracking on every of your investments.",
      ],
      amount: 12,
    },
    {
      title: "Standard",
      text: "$24/ month",
      lists: [
        "Maxium ROI tracking on every of your investments.",
        "Maximum ROI tracking on every of your investments.",
      ],
      amount: 24,
    },
    {
      title: "Premium",
      text: "$36/ month",
      lists: [
        "Maxium ROI tracking on every of your investments.",
        "Maximum ROI tracking on every of your investments.",
      ],
      amount: 36,
    },
  ];
  return (
    <div>
      {" "}
      <h2 className="text-base text-[#1D1D35] dark:text-white/80 font-medium mb-1">
        Account Upgrade
      </h2>
      <p className="text-sm text-[#677684] dark:text-white/80 mb-10">
        Your free trial is over, kindly choose from the options below
      </p>
      <div className="grid gap-y-7">
        {content.map((item, index) => (
          <div key={item.title}>
            <label htmlFor={index}
              className={`transition-all ease-in-out duration-300 w-[464px]  border rounded-[12px] px-5 py-[14px] ${
                active === index
                  ? "border-primary bg-primary/10"
                  : "border-[#D2D2D7] "
              } flex justify-between items-center`}
            >
              <p
                className={`text-[#686878] dark:text-white/80 font-medium flex items-center gap-x-2`}
              >
                <input
                  type="radio"
                  style={{ accentColor: "green" }}
                  value={index}
                  checked={active == index}
                  id={index}
                  onChange={(e) => {
                    setActive(e.target.value);
                  }}
                />{" "}
                {item.title}
              </p>
              <span className="text-[#677684] dark:text-white/80">{item.text}</span>
            </label>

            {active == index && (
              <div className="mt-8">
                <p className="text-sm text-[#434357] dark:text-white/80 mb-2">What you get</p>
                <ul className="grid gap-y-2 mb-8">
                  {item.lists.map((list) => (
                    <li
                      key={list}
                      className="flex items-center gap-x-2 transition-all ease-in-out duration-500 text-[#677684] dark:text-white/80 text-sm"
                    >
                      <BsFillCheckCircleFill  /> {list}
                    </li>
                  ))}
                </ul>
                <div className="mb-10">
                  <p className="relative flex items-end">
                    <span className="text-5xl font-semibold flex items-start">
                      <span className="text-sm text-[#434357] dark:text-white/80">$</span>{" "}
                      {item.amount}
                    </span>
                    <span className="text-[#686878] dark:text-white/80 text-sm">
                      /mo (billed monthly)
                    </span>
                  </p>
                </div>

                <ButtonComponent className="bg-primary text-white w-full text-center flex justify-center max-w-[464px]">
                  Upgrade
                </ButtonComponent>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
