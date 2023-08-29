import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SideBar from "../navigation/StartUpSideBar";
import TopBar from "../navigation/StartUpTopBar";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     router.push(`/login?return_to=${router.pathname}`);
  //   }
  // }, []);

  return (
    <section className="flex h-screen 2xl:container">
      <aside className="h-screen hidden lg:flex flex-col lg:w-[245px] border-r-2 border-[#F2F2F]">
        <SideBar />
      </aside>
      <main className="flex-1 h-full overflow-y-auto flex flex-col">
        <TopBar />
       <div className="flex-1 py-5 px-[18px]">
       {children}</div></main>
    </section>
  );
}
