import React, { useState, useEffect } from "react";
import RangeComponent from "@/components/RangeComponent";
import EmptyComponent from "@/components/EmptyComponent";
import PreLoader from "@/components/Loader";
import moment from "moment";
import formatCurrency from "@/utils/formatCurrency";
import Link from "next/link";

export default function Table() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const headers = [
    "startup",
    "sector",
    "startup HQ",
    "last date raised",
    "last amount raised",
    "action",
  ];
  const bodyData = [
    {
      logo: "/images/shadow.svg",
      startup: "credpal",
      sector: "fintech",
      startup_hq: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
      date: new Date(),
    },
    {
      logo: "/images/shadow.svg",
      startup: "helium health",
      sector: "healthcare",
      startup_hq: "lagos, Nigeria",
      match: "10",
      website: "www.helium.com",
      amount: "22000000",
      date: new Date(),
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      startup_hq: "lagos, Nigeria",
      match: "55",
      website: "www.sabi.com",
      amount: "12000000",
      date: new Date(),
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      startup_hq: "lagos, Nigeria",
      match: "100",
      website: "www.sabi.com",
      amount: "32000000",
      date: new Date(),
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      <h2 className="text-lg text-[#170D33] mb-6 font-medium">Recently Funded Startups</h2>
      <div className="">
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
                      {tdata.startup_hq}
                    </td>
                    <td className="text-[#1D1D35] dark:text-white/80  p-4 text-sm capitalize">
                      {moment(tdata.date).format("ll")}
                    </td>
                    <td className="text-[#1D1D35] dark:text-white/80  p-4 text-sm capitalize">
                      {formatCurrency(tdata.amount)}
                    </td>
                    <td className="text-[#1D1D35] dark:text-white/80  p-4 text-sm capitalize">
                    <Link href="/investor/about/1">
                    <button className="text-[#F5A623] outline-none">
                        View
                      </button></Link>
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
    </div>
  );
}
