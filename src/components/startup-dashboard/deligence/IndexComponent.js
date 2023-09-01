import TopBar from "./TopBar";
import Cards from "./Cards";
import React, { useState } from "react";

export default function IndexComponent() {
  const [active, setActive] = useState("Companies Invested");
  return (
    <div>
      <TopBar />
      <Cards />
    </div>
  );
}
