import InputField from "@/components/forms/InputField";
import React, { useState } from "react";

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
    <div className="flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 justify-between items-center mb-9">
      <div className="flex gap-x-8 items-center"></div>
      <div className="flex gap-x-4 items-center">
        <InputField
          placeholder="Search by sector or location"
          className="w-[374px] h-10 rounded px-4 py-3"
        />
      </div>
    </div>
  );
}
