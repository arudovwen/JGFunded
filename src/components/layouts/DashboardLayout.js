import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SideBar from "../navigation/SideBar";
import TopBar from "../navigation/TopBar";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     router.push(`/login?return_to=${router.pathname}`);
  //   }
  // }, []);

  return (
    <section className="flex h-screen">
      <aside className="h-screen hidden lg:flex flex-col lg:w-[245px] border-r-2 border-[#F2F2F]">
        <SideBar />
      </aside>
      <main className="flex-1 h-full overflow-y-auto flex flex-col pb-20">
        <TopBar />
       <div className="flex-1 pt-5  px-[18px]">
       {children}</div></main>
    </section>
  );
}
