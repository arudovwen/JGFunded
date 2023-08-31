import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineBell } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import Hamburger from "hamburger-react";
import MobileSideBar from "./StartUpMobileSideBar";
export default function TopBar() {
  const router = useRouter();
  const name = router.pathname.split("/")[2].replace("-", " ");
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between py-5 px-[18px]">
        <h1 className="capitalize text-xl font-bold text-[#3A434B] dark:text-white/90">
          {name}
        </h1>
        <div className="flex gap-x-3 items-center">
          <div>
            <AiOutlineBell style={{ color: "#B2AEBB", fontSize: "25px" }} />
          </div>
          <div className="w-[1px] h-4 bg-[#B2AEBB]" />
          <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary">
            U
          </div>
          <div>
            <BsChevronDown style={{ color: "#B2AEBB" }} />
          </div>
          <div className="lg:hidden">
            <Hamburger
              size={28}
              toggled={isOpen}
              toggle={setOpen}
              color="#27AE60"
            />
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden">
          <MobileSideBar open={isOpen} setOpen={setOpen} />
        </div>
      )}
    </>
  );
}
