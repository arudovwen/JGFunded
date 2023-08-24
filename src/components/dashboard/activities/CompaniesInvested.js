import React from "react";
import EmptyComponent from "@/components/EmptyComponent";
import formatCurrency from "@/utils/formatCurrency";
import moment from "moment";
export default function ContractLevel() {
  const headers = ["startup", "funding level", "invested amount", "date"];
  const bodyData = [
    {
      logo: "/images/shadow.svg",
      startup: "credpal",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
      level: "pre-seed",
      date: new Date(),
    },
    {
      logo: "/images/shadow.svg",
      startup: "helium health",
      sector: "healthcare",
      location: "lagos, Nigeria",
      match: "10",
      website: "www.helium.com",
      amount: "22000000",
      level: "pre-seed",
      date: new Date(),
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "55",
      website: "www.sabi.com",
      amount: "12000000",
      level: "pre-seed",
      date: new Date(),
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "100",
      website: "www.sabi.com",
      amount: "32000000",
      level: "series A",
      date: new Date(),
    },
  ];
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
                <td className="text-[#686878] p-4 text-sm capitalize">
                  {tdata.level}
                </td>
                <td className="text-[#686878] p-4 text-sm capitalize">
                  {formatCurrency(tdata.amount)}
                </td>

                <td className="text-[#686878] p-4 text-sm capitalize">
                  {moment(tdata.date).format("ll")}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {!bodyData.length && (
        <EmptyComponent
          heading="You currently have no companies invested"
          text="Your invested companies will appear here"
        />
      )}
    </div>
  );
}
