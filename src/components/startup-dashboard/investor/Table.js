import SideModal from "@/components/modals/SideModal";
import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import RangeComponent from "@/components/RangeComponent";
import EmptyComponent from "@/components/EmptyComponent";
import PreLoader from "@/components/Loader";
import formatCurrency from "@/utils/formatCurrency";

export default function Table() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const headers = [
    "investor",
    "sector",
    "investment type",
    "investment pool",
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
      investor:"Success Ahon",
      investment_type:"VC",
      investment_pool:"200000"
    },
    {
      logo: "/images/shadow.svg",
      startup: "helium health",
      sector: "healthcare",
      location: "lagos, Nigeria",
      match: "10",
      website: "www.helium.com",
      amount: "22000000",
      investor:"Success Ahon",
      investment_type:"accelerator",
      investment_pool:"200000"
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "55",
      website: "www.sabi.com",
      amount: "12000000",
      investor:"Success Ahon",
      investment_type:"incubator",
      investment_pool:"200000"
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "healthcare",
      location: "lagos, Nigeria",
      match: "100",
      website: "www.sabi.com",
      amount: "32000000",
      investor:"Success Ahon",
      investment_type:"angel investor",
      investment_pool:"200000"
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
  <div>
      <h2 className="text-xl text-[#1C1C1C] dark:text-white/80  font-bold mb-6">Recommended investors</h2>
    <div className="max-w-full border border-[#F2F2F2] rounded-[6px] bg-white dark:bg-dark overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#BAC2C9]">
            {headers.map((data) => (
              <th
                className="whitespace-nowrap text-left capitalize text-sm text-[#1D1D35] dark:text-white/50  font-medium p-4"
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
                <td className="whitespace-nowrap text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {tdata.investor}
                </td>
                <td className="whitespace-nowrap text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {tdata.sector}
                </td>
                <td className="whitespace-nowrap text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {tdata.investment_type}
                </td>
                <td className="whitespace-nowrap text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {formatCurrency(tdata.investment_pool)}
                </td>
                <td className="whitespace-nowrap text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  {tdata.location}
                </td>
                <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  <RangeComponent value={tdata.match} />
                </td>
                <td className="whitespace-nowrap text-[#686878] dark:text-white/80  p-4 text-sm capitalize">
                  <button
                    onClick={() => {
                      setDetail(tdata);
                      setOpen(true);
                    }}
                    className="text-[#27AE60] hover:underline outline-none"
                  >
                    View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {!loading && !bodyData.length && (
        <EmptyComponent
          heading="You currently have no matches"
          text="Your matches will appear here"
        />
      )}
      {loading && <PreLoader />}
      <SideModal open={open} setOpen={setOpen}>
        <Profile detail={detail} handleClick={() => setOpen(false)} />
      </SideModal>
    </div>
  </div>
  );
}
