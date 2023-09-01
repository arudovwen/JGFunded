import TopBar from "./TopBar";
import Content from "./Content";
import React from "react";
import TeamMembers from "./TeamMembers";

export default function IndexComponent() {
  return (
    <div>
      <TopBar />
      <Content />
      <TeamMembers />
    </div>
  );
}
