import SideBar from "./SideBar";
import Content from "./Content";
import React from "react";
import Table from "./Table";
import Banner from "./Banner";

export default function IndexComponent() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-8 w-full h-full">
      <div className="flex-1 flex flex-col gap-y-10">
        <Banner />
        <Content />
        <Table />
      </div>
      <div className="lg:w-[384px]  border border-[#D7DCE0] rounded-2xl p-6">
        <SideBar />
      </div>
    </div>
  );
}
