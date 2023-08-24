import React from "react";
import EmptyComponent from "@/components/EmptyComponent";
import formatCurrency from "@/utils/formatCurrency";
import moment from "moment";
export default function ContractLevel() {
  const headers = ["startup", "contract level"];
  const bodyData = [
    {
      logo: "/images/shadow.svg",
      startup: "credpal",
      level: "series a",
    },
    {
      logo: "/images/shadow.svg",
      startup: "helium health",
      level: "pre-seed",
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      level: "series a",
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      level: "series a",
    },
  ];
  function handleLevelColor(value) {
    if (value === "pre-seed") {
      return "text-[#F5A623]";
    }
    if (value === "series a") {
      return "text-primary";
    }
  }
  return (
    <div className="border border-[#F2F2F2] rounded-[6px] bg-white dark:bg-dark overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#BAC2C9]">
            {headers.map((data) => (
              <th
                className="text-left capitalize text-sm text-[#1D1D35] font-medium p-4"
                key={data}
              >
                {data}
              </th>
            ))}
          </tr>
        </thead>
        {bodyData.length > 0 && (
          <tbody>
            {bodyData.map((tdata, index) => (
              <tr
                key={`index-${index}-id`}
                className="border-b border-[#F2F2F2]"
              >
                <td className="text-[#686878] p-4 text-sm capitalize">
                  {tdata.startup}
                </td>
                <td
                  className={`text-[#686878] p-4 text-sm capitalize ${handleLevelColor(
                    tdata.level
                  )}`}
                >
                  {tdata.level}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
     {
        !bodyData.length &&  <EmptyComponent
        heading="You currently have no data"
        text="Your contract levels will appear here"
      />
     }
    </div>
  );
}
