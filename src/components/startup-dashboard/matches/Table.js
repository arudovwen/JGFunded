import SideModal from "@/components/modals/SideModal";
import React, { useState } from "react";
import Profile from "./Profile";
import RangeComponent from "@/components/RangeComponent";
import EmptyComponent from "@/components/EmptyComponent";

export default function Table() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(null);
  const headers = [
    "startup",
    "sector",
    "location",
    "match percentage",
    "actions",
  ];
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
        {!bodyData.length > 0 && (
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
                  {tdata.sector}
                </td>
                <td className="text-[#686878] p-4 text-sm capitalize">
                  {tdata.location}
                </td>
                <td className="text-[#686878] p-4 text-sm capitalize">
                  <RangeComponent value={tdata.match} />
                </td>
                <td className="text-[#686878] p-4 text-sm capitalize">
                  <button
                    onClick={() => {
                      setDetail(tdata);
                      setOpen(true);
                    }}
                    className="text-[#27AE60] underline outline-none"
                  >
                    View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {!bodyData.length && (
        <EmptyComponent
          heading="You currently have no matches"
          text="Your matches will appear here"
        />
      )}
      <SideModal open={open} setOpen={setOpen}>
        <Profile detail={detail} handleClick={() => setOpen(false)} />
      </SideModal>
    </div>
  );
}
