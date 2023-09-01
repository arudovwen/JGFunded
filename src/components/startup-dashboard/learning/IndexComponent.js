import TopBar from "./TopBar";
import Content from "./Content";
import Ongoing from "./Ongoing";
import Lessons from "./Lessons";
import React from "react";

export default function IndexComponent() {
  const content = [
    {
      title: "90 days of investment learning",
      completion: 80,
      lock: false,
      img: "/images/bg1.png"
    },
    {
      title: "Investment Learning",
      completion: 40,
      lock: true,
      img: "/images/bg3.png"
    },
    {
      title: "Business language and approach",
      completion: 58,
      lock: true,
      img: "/images/bg2.png"
    },
    {
      title: "Business languages and approaches",
      completion: 88,
      lock: true,
      img: "/images/bg4.png"
    },
  ];
  return (
    <div>
      <TopBar />
      <div className="flex flex-col gap-y-8">
        <Content />
        <Ongoing />
        <hr className="border-[#D7DCE0]" />
        <Lessons title="Start up Lessons" data={content} />
        <Lessons title="How to invest" data={content} />
        <Lessons title="Funding tutorial" data={content} />
      </div>
    </div>
  );
}
