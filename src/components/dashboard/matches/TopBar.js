import InputField from "@/components/forms/InputField";
import CustomSelect from "@/components/forms/Select";
import React, { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

export default function TopBar() {
  const options = [
    { value: "", label: "Filter" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 justify-between items-center mb-9 gap-x-8">
      <div className="flex gap-x-8 items-center dark:text-white/70 w-full sm:w-auto justify-between sm:justify-start">
        <div>
          <span className=" mb-1 text-[#3A434B] dark:text-white/70 text-sm font-bold flex items-center gap-x-2 ">
            <span>Overview</span> <BsInfoCircle className="text-xs" />
          </span>
          <div className="flex gap-x-1 items-center">
            <span className="h-4 w-2 rounded-[2px] bg-[#CA1B1B]" />
            <span className="h-4 w-4 rounded-[2px] bg-[#E6A900]" />
            <span className="h-4 w-6 rounded-[2px] bg-[#27BE63]" />
            <span className="h-4 w-8 rounded-[2px] bg-[#22B9C3]" />
          </div>
        </div>
        <div >
          <div className="text-[#3A434B] dark:text-white/70  text-base font-bold">65%</div>
          <div className="text-[#3A434B] dark:text-white/70  text-xs font-normal whitespace-nowrap">
            Matching Average
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 gap-x-4 items-center">
        <InputField
          placeholder="Search by sector or location"
          className="w-full lg:w-[374px] h-10 rounded px-4 py-3"
        />
        <CustomSelect
          options={options}
          className="h-10 px-4 py-3 min-w-[170px] w-full lg:w-auto flex items-center justify-start rounded"
        />
      </div>
    </div>
  );
}
