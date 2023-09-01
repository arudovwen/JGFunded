import Select from "@/components/forms/Select";
import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { FaPlus, FaPlusCircle } from "react-icons/fa";
export default function TopBar() {
  const options = [
    { value: "option1", label: "April 1" },
    { value: "option2", label: "March 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [startDate, setStartDate] = useState(new Date());
  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="mb-9">
      <div className="flex justify-between items-center w-full mb-11">
        <h2 className="text-[#1C1C1C] dark:text-white/90 font-bold">
          Calendar
        </h2>
        <FaPlusCircle className="text-primary" />
      </div>
      <div className="mb-4">
        <Select
          options={options}
          className=" rounded-lg border-[0.3px] border-[rgba(196,196,196,0.70)] shadow-[2px_16px_19px_0px_rgba(0,0,0,0.09)]"
        />
      </div>
      <div className="mb-14  w-full">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
          className=""
        />
      </div>
      <div className="mx-h-[356px] overflow-auto">
        <h3 className="text-[#1C1C1C] dark:text-white/80 font-medium mb-5">
          {moment(startDate).format("DD MMMM")}{" "}
          <span className="text-sm font-normal">(3 events)</span>
        </h3>

        <div>
          <h4 className="flex items-center dark:text-white/70 gap-x-1 mb-2 text-sm">
            {" "}
            <Image
              src="/images/alarm.svg"
              width={14}
              height={14}
              alt="alarm"
            />{" "}
            09:00am
          </h4>
          <div className="bg-[#D2D2D7]/10 px-[14px] py-[10px] rounded-[10px] h-[95px]">
            <p className="text-xs font-bold mb-3 dark:text-white/70">
              Reminder
            </p>
            <p className="text-sm max-w-[264px] dark:text-white/70">
              <span className="text-dark dark:text-white/70 font-bold">
                Stock Doc -{" "}
              </span>{" "}
              <span className="text-[#808088] dark:text-white/60">Text</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
