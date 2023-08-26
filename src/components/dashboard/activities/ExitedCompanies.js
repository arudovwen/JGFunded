import React, {useState, useEffect } from "react";
import EmptyComponent from "@/components/EmptyComponent";
import moment from "moment";
import PreLoader from "@/components/Loader";

export default function ExitedCompanies() {
  const headers = ["startup", "exited", "date"];
  const [loading, setLoading] = useState(true);
  const bodyData = [
    {
      logo: "/images/shadow.svg",
      startup: "credpal",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
      exited: "left",
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
      exited: "left",
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
      exited: "left",
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
      exited: "left",
      date: new Date(),
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="border border-[#F2F2F2] rounded-[6px] bg-white dark:bg-dark overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#BAC2C9]">
            {headers.map((data) => (
              <th
                className="text-left capitalize text-sm text-[#1D1D35] font-medium p-4 whitespace-nowrap dark:text-white/60"
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
                className="border-b border-[#F2F2F2] text-left"
              >
                <td className=" p-4 text-sm capitalize text-[#686878] dark:text-white/80  whitespace-nowrap">
                  {tdata.startup}
                </td>
                <td className="text-red-500 p-4 text-sm capitalize ">
                  {tdata.exited}
                </td>
                <td className="text-[#686878] p-4 text-sm capitalize dark:text-white/80">
                  {moment(tdata.date).format("ll")}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {!loading && !bodyData.length && (
        <EmptyComponent
          heading="You currently have no exited companies"
          text="Your exited companies will appear here"
        />
      )}
      {loading && <PreLoader />}
    </div>
  );
}
