import AccountManager from "./AccountManager";
import EditProfile from "./EditProfile";
import Feeds from "./Feeds";
import Navigation from "./Navigation";
import PasswordReset from "./PasswordReset";
import TopBar from "./TopBar";
import React, { useState } from "react";
import Upgrade from "./Upgrade";

export default function IndexComponent() {
  const [active, setActive] = useState("Category Feeds");
  return (
    <div>
      <TopBar />
      <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-20">
        <Navigation active={active} setActive={setActive} />

        <div className="flex-1">
          {active === "Add Account Manager" && <AccountManager />}
          {active === "Edit Profile" && <EditProfile />}
          {active === "Category Feeds" && <Feeds />}
          {active === "Password Reset" && <PasswordReset />}
          {active === "Account Upgrade" && <Upgrade />}
        </div>
      </div>
    </div>
  );
}
