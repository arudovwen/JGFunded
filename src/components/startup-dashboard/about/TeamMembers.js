import React, { useState, useEffect } from "react";
import EmptyComponent from "@/components/EmptyComponent";
import PreLoader from "@/components/Loader";
import moment from "moment";

export default function Table() {
  const [loading, setLoading] = useState(true);
  const headers = ["Materials provided", "Investors remark"];
  const bodyData = [
    {
      materials: "Pitch deck",
      status: "good",
    },
    {
      materials: "Business plan",
      status: "required",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="max-w-full bg-white dark:bg-dark overflow-auto border border-[#F2F2F2] rounded-[6px]">
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
                  {tdata.materials}
                </td>
                <td
                  className={` p-4 text-sm capitalize ${
                    tdata.status === "good" ? "text-primary" : "text-[#F5A623]"
                  }`}
                >
                  {tdata.status}
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
