import SideModal from "@/components/modals/SideModal";
import React, { useState, useEffect } from "react";
import Detail from "./Card";
import EmptyComponent from "@/components/EmptyComponent";
import moment from "moment";
import PreLoader from "@/components/Loader";
import Card from "./Card";

export default function Table() {
  const [loading, setLoading] = useState(true);
  const content = [
    {
      name: "Samson Felix",
      email: "samfelix456@gmail.com",
      phone: "08056832583",
      clients: "43",
      roi: "25",
      img: "/images/avatar.svg",
      amount: 130040,
    },
    {
      name: "Samston Feltix",
      email: "samfelix456@gmail.com",
      phone: "08056832583",
      clients: "43",
      roi: "25",
      img: "/images/avatar.svg",
      amount: 200004,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      <h1 className="font-medium text-2xl text-[#3A434B] dark:text-white/80  mb-6">Investors</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 gap-y-6 w-full">
        {!loading &&
          content.map((tdata, index) => (
            <Card
              key={`index-${index}-id`}
              className="border-b border-[#F2F2F2]"
              detail={tdata}
            />
          ))}
      </div>{" "}
      {!loading && !content.length && (
        <EmptyComponent
          heading="You currently have no data"
          text="Your data will appear here"
        />
      )}
      {loading && <PreLoader />}
    </div>
  );
}
