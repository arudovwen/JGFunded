import React, { useState, useEffect } from "react";
import EmptyComponent from "@/components/EmptyComponent";
import PreLoader from "@/components/Loader";
import formatCurrency from "@/utils/formatCurrency";

export default function Table() {
  const [loading, setLoading] = useState(true);
  const headers = ["Investment Received", "amount", "tenure", "round"];
  const bodyData = [
    {
      investment: "Pitch deck",
      amount: 1389447,
      tenure: "3 years",
      round: 1,
    },
    {
      investment: "Accenture capital",
      amount: 1382497,
      tenure: "3 years",
      round: 1,
    },
    {
      investment: "Pitch Inc",
      amount: 13413897,
      tenure: "5 years",
      round: 1,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="max-w-full w-full bg-tab dark:bg-dark overflow-x-auto border border-[#F2F2F2] rounded-[6px]">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#BAC2C9]">
            {headers.map((data) => (
              <th
                className="text-left capitalize text-sm text-[#1D1D35] dark:text-white/50  font-medium p-4"
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
                <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {tdata.investment}
                </td>
                <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {formatCurrency(tdata.amount)}
                </td>
                <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {tdata.tenure}
                </td>
                <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {tdata.round}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {!loading && !bodyData.length && (
        <EmptyComponent
          heading="You currently have no data"
          text="Your data will appear here"
        />
      )}
      {loading && <PreLoader />}
    </div>
  );
}
