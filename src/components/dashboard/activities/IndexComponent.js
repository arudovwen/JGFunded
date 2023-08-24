import TopBar from "./TopBar";
import Tabs from "./Tabs";
import React, { useState } from "react";
import CompaniesInvested from "./CompaniesInvested";
import Funding from "./Funding";
import ContractLevel from "./ContractLevel";
import ExitedCompanies from "./ExitedCompanies";

export default function IndexComponent() {
  const [active, setActive] = useState("Companies Invested");
  return (
    <div>
      <TopBar />
      <Tabs active={active} setActive={setActive} />
      {active === "Companies Invested" && <CompaniesInvested />}
      {active === "Funding" && <Funding />}
      {active === "Contract Level" && <ContractLevel />}
      {active === "Exited Companies" && <ExitedCompanies />}
    </div>
  );
}
