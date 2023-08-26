import TopBar from "./TopBar";
import Content from "./Content";
import React from "react";
import Charts from "./Charts";

export default function IndexComponent() {
  return (
    <div>
      <TopBar />
      <Charts />
      <Content />
    </div>
  );
}
