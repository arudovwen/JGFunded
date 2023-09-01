import InputField from "@/components/forms/InputField";
import React, { useState } from "react";
import CustomSelect from "@/components/forms/Select";
export default function TopBar() {
  const options = [
    { value: "", label: "Sector" },
    { value: "investment_pool", label: "Invesment pool" },
    { value: "investment_type", label: "Investment type" },
    { value: "location", label: "Location" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="mb-12">
    
      <div className="flex flex-wrap gap-x-4 gap-y-4 sm:gap-y-0 items-center">
        <InputField
          placeholder="Search by sector or location"
          className="min-w-[300px] h-10 rounded-[6px] px-4 py-3 flex-1"
        />
          <CustomSelect
          options={options}
          placeholder="Sector"
          className="h-10 px-4 py-3 min-w-[150px] w-full flex-1 lg:w-auto flex items-center justify-start rounded-[6px]"
        />
          <CustomSelect
          options={options}
          placeholder="Investment pool"
          className="h-10 px-4 py-3 min-w-[160px] w-full flex-1 lg:w-auto flex items-center justify-start rounded-[6px]"
        />
          <CustomSelect
          options={options}
          placeholder="Investment type"
          className="h-10 px-4 py-3 min-w-[160px] w-full lg:w-auto flex items-center justify-start rounded-[6px]"
        />
          <CustomSelect
          options={options}
          placeholder="Location"
          className="h-10 px-4 py-3 min-w-[150px] w-full lg:w-auto flex items-center justify-start rounded-[6px]"
        />
      </div>
    </div>
  );
}
