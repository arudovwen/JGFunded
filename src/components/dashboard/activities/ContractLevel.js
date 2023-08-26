import React, { useState,useEffect } from "react";
import EmptyComponent from "@/components/EmptyComponent";
import formatCurrency from "@/utils/formatCurrency";
import moment from "moment";
import PreLoader from "@/components/Loader";

export default function ContractLevel() {
  const headers = ["startup", "contract level"];
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

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
                className="text-left capitalize text-sm text-[#1D1D35] font-medium p-4 dark:text-white/60 whitespace-nowrap"
                key={data}
              >
                {data}
              </th>
            ))}
          </tr>
        </thead>
        {!loading && bodyData.length > 0 && (
          <tbody>
            {bodyData.map((tdata, index) => (
              <tr
                key={`index-${index}-id`}
                className="border-b border-[#F2F2F2]"
              >
                <td className="text-[#686878] dark:text-white/80 p-4 text-sm capitalize  whitespace-nowrap">
                  {tdata.startup}
                </td>
                <td
                  className={`text-[#686878] dark:text-white/80 p-4 text-sm capitalize ${handleLevelColor(
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
      {!loading && !bodyData.length && (
        <EmptyComponent
          heading="You currently have no data"
          text="Your contract levels will appear here"
        />
      )}
      {loading && <PreLoader />}
    </div>
  );
}
