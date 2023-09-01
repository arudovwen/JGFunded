import React, { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineBell } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import Hamburger from "hamburger-react";
import MobileSideBar from "./MobileSideBar";
import Link from "next/link";
export default function TopBar() {
  const router = useRouter();
  const name = router.pathname.split("/")[2];
  const [isOpen, setOpen] = useState(false);

  function handleText(value) {
    if (value?.toLowerCase() === "settings") {
      return "Manage your account settings and preferences.";
    }
    if (value?.toLowerCase() === "profile") {
      return "Welcome to your profile page";
    }
    return "";
  }
  return (
    <>
      <nav className="flex items-center justify-between pt-4 md:pt-5 pb-5 px-[18px]">
        <div>
          <h1 className="capitalize text-base lg:text-xl font-bold text-[#3A434B] dark:text-white/90">
            {name?.replace("-", " ")}
          </h1>
          <p className="text-xs lg:text-sm text-[#677684] dark:text-white/60 max-w-[165px] lg:max-w-[350px]">
            {handleText(name?.replace("-", " "))}
          </p>
        </div>
        <div className="flex gap-x-3 items-center">
          <div>
            <AiOutlineBell style={{ color: "#B2AEBB", fontSize: "25px" }} />
          </div>
          <div className="w-[1px] h-4 bg-[#B2AEBB]" />
          <Link href="/investor/settings">
            <div className="w-8 lg:w-10 h-8 lg:h-10 border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary">
              U
            </div>
          </Link>
          <div>
            <BsChevronDown style={{ color: "#B2AEBB" }} />
          </div>
          <div className="lg:hidden">
            <Hamburger
              size={24}
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
