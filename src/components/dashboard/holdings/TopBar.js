import InputField from "@/components/forms/InputField";
import CustomSelect from "@/components/forms/Select";
import formatCurrency from "@/utils/formatCurrency";
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
          <span className=" text-primary text-base font-medium block">
            Wallet Balance
          </span>
          <span className="text-[32px] text-[#24292E] dark:text-white/80 font-bold">
            {formatCurrency(0)}
          </span>
        </div>
        <div></div>
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
