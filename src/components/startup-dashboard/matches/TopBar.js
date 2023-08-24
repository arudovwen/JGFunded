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
    <div className="flex justify-between items-center mb-9">
      <div className="flex gap-x-8 items-center">
        <div>
          <span className=" mb-1 text-[#3A434B] text-sm font-bold flex items-center gap-x-2">
            <span>Overview</span> <BsInfoCircle className="text-xs" />
          </span>
          <div className="flex gap-x-1 items-center">
            <span className="h-4 w-2 rounded-[2px] bg-[#CA1B1B]" />
            <span className="h-4 w-4 rounded-[2px] bg-[#E6A900]" />
            <span className="h-4 w-6 rounded-[2px] bg-[#27BE63]" />
            <span className="h-4 w-8 rounded-[2px] bg-[#22B9C3]" />
          </div>
        </div>
        <div>
          <div className="text-[#3A434B] text-base font-bold">65%</div>
          <div className="text-[#3A434B] text-xs font-normal">
            Matching Average
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 items-center">
        <InputField
          placeholder="Search by sector or location"
          className="w-[374px] h-10 rounded px-4 py-3"
        />
        <CustomSelect
          options={options}
          className="h-10 px-4 py-3 min-w-[160px] flex items-center justify-start rounded"
        />
      </div>
    </div>
  );
}