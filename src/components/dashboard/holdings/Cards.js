import ButtonComponent from "@/components/ButtonComponent";
import React, { useState } from "react";
import Card from "./Card";
import CenterModal from "@/components/modals/CenterModal";

export default function Cards() {
  const [detail, setDetail] = useState(null);
  const [open, setOpen] = useState(false);
  const bodyData = [
    {
      logo: "/images/shadow.svg",
      startup: "credpal",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "90",
      website: "www.credpal.com",
      amount: "2000000",
      status: "live",
      roi: 0.59,
      date: "11-09-2023",
      tenor: "180",
      description:"A financial institution that offers innovative financial solutions including investments and credit services .",
      phone:"01 700 7999",
      email:"info@credpal.com",
      address:"75b Olonode Street, Off Spencer St, Alagomeji-Yaba, Lagos."
    },
    {
      logo: "/images/shadow.svg",
      startup: "helium health",
      sector: "healthcare",
      location: "lagos, Nigeria",
      match: "10",
      website: "www.helium.com",
      amount: "22000000",
      status: "processing",
      roi: 1.76,
      date: "21-09-2023",
      tenor: "30",
      description:"A financial institution that offers innovative financial solutions including investments and credit services .",
      phone:"01 700 7999",
      email:"info@credpal.com",
      address:"75b Olonode Street, Off Spencer St, Alagomeji-Yaba, Lagos."
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "55",
      website: "www.sabi.com",
      amount: "12000000",
      status: "processing",
      roi: 1.93,
      date: "11-08-2023",
      tenor: "180",
      description:"A financial institution that offers innovative financial solutions including investments and credit services .",
      phone:"01 700 7999",
      email:"info@credpal.com",
      address:"75b Olonode Street, Off Spencer St, Alagomeji-Yaba, Lagos."
    },
    {
      logo: "/images/shadow.svg",
      startup: "sabi",
      sector: "fintech",
      location: "lagos, Nigeria",
      match: "100",
      website: "www.sabi.com",
      amount: "32000000",
      status: "live",
      roi: 2.51,
      date: "11-10-2023",
      tenor: "100",
      description:"A financial institution that offers innovative financial solutions including investments and credit services .",
      phone:"01 700 7999",
      email:"info@credpal.com",
      address:"75b Olonode Street, Off Spencer St, Alagomeji-Yaba, Lagos."
    },
  ];
  return (
    <>
      <div>
        <div className="flex gap-x-4 items-center mb-16">
          <ButtonComponent className="bg-primary text-white py-3">
            Fund wallet
          </ButtonComponent>{" "}
          <ButtonComponent className="py-3">Withdraw</ButtonComponent>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {bodyData.map((item, index) => (
            <div
              onClick={() => {
                setDetail(item);
                setOpen(true);
              }}
              key={`index-${index}-id`}
            >
              <Card detail={item} />
            </div>
          ))}
        </div>
      </div>
      <CenterModal open={open} setOpen={setOpen}>
        <Card detail={detail} isFull />
      </CenterModal>
    </>
  );
}
