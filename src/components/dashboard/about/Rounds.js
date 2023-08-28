import ButtonComponent from "@/components/ButtonComponent";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import RangeComponent from "@/components/RangeComponent";
import EmptyComponent from "@/components/EmptyComponent";
import PreLoader from "@/components/Loader";
import formatCurrency from "@/utils/formatCurrency";
import moment from "moment";

export default function Rounds() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const stage = 0
  const headers = [
    "date",
    "location",
    "investments",
    "investors",
    "deal term",
    "amount",
  ];
  const bodyData = [
    {
      logo: "/images/shadow.svg",
      investor: "Aliko Dangote & Sons manufacturing Plc",
      investment: "Equity/ $10M",
      location: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
      date: new Date(),
      deal_term:"Priced"
    },{
      logo: "/images/shadow.svg",
      investor: "Aliko Dangote & Sons manufacturing Plc",
      investment: "Equity/ $10M",
      location: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
      date: new Date(),
      deal_term:"Priced"
    },{
      logo: "/images/shadow.svg",
      investor: "Aliko Dangote & Sons manufacturing Plc",
      investment: "Equity/ $10M",
      location: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
      date: new Date(),
      deal_term:"Priced"
    },{
      logo: "/images/shadow.svg",
      investor: "Aliko Dangote & Sons manufacturing Plc",
      investment: "Equity/ $10M",
      location: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
      date: new Date(),
      deal_term:"Priced"
    },
   
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="w-full rounded-[20px] p-6 border border-[#F2F2F2] mb-5 bg-[#F2F2F24D]">
      <h2 className="px-3 border-l-[5px] border-[#1D1D35] text-[#170D33] text-xl font-bold mb-6">
        Funding rounds (2) - $2.6M
      </h2>
      <div className="bg-[#1D1D35] px-5 py-4 rounded-t-[6px] flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-8 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:items-center gap-x-8">
          <span className="flex items-center gap-x-2">
            <span className="text-[#686878] flex items-center gap-x-1">
              <Image
                width={16}
                height={16}
                alt="icons"
                src="/images/emptywallet.svg"
              />{" "}
              Round:
            </span>
            <span className="text-[#D2D2D7]">Stage one</span>
          </span>
          <span className="flex items-center gap-x-2">
            <span className="text-[#686878] flex items-center gap-x-1">
              <Image
                width={16}
                height={16}
                alt="icons"
                src="/images/moneyrecive.svg"
              />{" "}
              Amount:
            </span>
            <span className="text-[#D2D2D7]">$4m</span>
          </span>
          <span className="flex items-center gap-x-2">
            <span className="text-[#686878] flex items-center gap-x-1">
              <Image
                width={16}
                height={16}
                alt="icons"
                src="/images/chart1.svg"
              />{" "}
              Valuation estimate:
            </span>
            <span className="text-[#D2D2D7]">$12m - $15m</span>
          </span>
        </div>
        <ButtonComponent className="bg-white text-[#1D1D35] text-sm flex items-center gap-x-1 px-5 rounded-lg py-2 w-full sm:w-auto justify-center">
          <Image width={16} height={16} alt="icons" src="/images/verify.svg" />{" "}
          Verified
        </ButtonComponent>
      </div>
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
                  className={`border-b border-[#F2F2F2] ${index <= stage? "":"blur-sm"}`}
                >
                  <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize whitespace-nowrap">
                    {moment(tdata.date). format("ll")}
                  </td>
                  <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize whitespace-nowrap">
                    {tdata.location}
                  </td>
                  <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize whitespace-nowrap">
                    {tdata.investment}
                  </td>
                  <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize whitespace-nowrap">
                    {tdata.investor}
                  </td>
                 
                  <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize whitespace-nowrap">
                    {tdata.deal_term}
                  </td>
                 
                 <td className="text-[#686878] dark:text-white/80  p-4 text-sm capitalize whitespace-nowrap">
                    {formatCurrency(tdata.amount)}
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
      </div>
    </div>
  );
}
