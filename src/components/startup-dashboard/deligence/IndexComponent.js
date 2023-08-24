import TopBar from "./TopBar";
import Table from "./Table";
import React, { useState } from "react";

export default function IndexComponent() {
  const [active, setActive] = useState("Companies Invested");
  return (
    <div>
      <TopBar />
      <Table />
    </div>
  );
}
