import React from "react";
import SiteFooter from "../navigation/SiteFooter";
import SiteHeader from "../navigation/SiteHeader";

function WebLayout({ children }) {
  return (
    <main className={` flex min-h-screen flex-col`}>
      <SiteHeader />
      <div className="flex-1 container">{children}</div>
      <div>
        <SiteFooter />
      </div>
    </main>
  );
}

export default WebLayout;
