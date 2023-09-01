import TopBar from "./TopBar";
import Content from "./Content";
import React from "react";
import LineChart from "./LineChart";
import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";

export default function IndexComponent() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-col gap-y-7">
        <Content />
        <LineChart />
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-8 w-full">
          <FirstTable />
          <SecondTable />
        </div>
      </div>
    </div>
  );
}
