import React, { useState, useEffect } from "react";
import RangeComponent from "@/components/RangeComponent";
import EmptyComponent from "@/components/EmptyComponent";
import PreLoader from "@/components/Loader";

export default function Content() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const headers = ["startup", "sector", "location", "match percentage"];
  const bodyData = [
    {
      logo: "/images/shadow.svg",
      startup: "credpal",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
    },
    {
      logo: "/images/shadow.svg",
      startup: "helium health",
      sector: "healthcare",
      location: "lagos, Nigeria",
      match: "10",
      website: "www.helium.com",
      amount: "22000000",
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "55",
      website: "www.sabi.com",
      amount: "12000000",
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "100",
      website: "www.sabi.com",
      amount: "32000000",
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start">
      <div className="max-w-full flex-1 border border-[#F2F2F2] rounded-2xl bg-white dark:bg-dark overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#BAC2C9]">
              {headers.map((data) => (
                <th
                  className="text-left capitalize text-sm text-[#1D1D35] whitespace-nowrap dark:text-white/50  font-bold p-4"
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
                  <td className="text-[#1D1D35] dark:text-white/80  p-4 text-sm whitespace-nowrap capitalize">
                    {tdata.startup}
                  </td>
                  <td className="text-[#1D1D35] dark:text-white/80  p-4 text-sm whitespace-nowrap capitalize">
                    {tdata.sector}
                  </td>
                  <td className="text-[#1D1D35] dark:text-white/80  p-4 text-sm whitespace-nowrap capitalize">
                    {tdata.location}
                  </td>
                  <td className="text-[#1D1D35] dark:text-white/80  p-4 text-sm capitalize">
                    <div className="flex gap-x-2 items-center">
                      <div className="bg-[#D7DCE0] w-full max-w-[190px] rounded h-[2px]">
                        <div
                          className="rounded h-[2px] bg-[#F5A623]"
                          style={{ width: `${tdata.match}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-[##1D1D35] dark:text-white/80 font-medium">
                        {tdata.match}%
                      </span>
                    </div>
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
      <div className="border border-[#F2F2F2] w-[200px] rounded-2xl bg-white dark:bg-dark p-4"></div>
    </div>
  );
}
