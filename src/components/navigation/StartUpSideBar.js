import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsArrowUpRightCircle } from "react-icons/bs";
import {
  Archive,
  ElementSvg,
  Activity,
  GlobalSearch,
  Bookmark,
  Receipt,
} from "@/assets/svgs/index";

export default function SideBar() {
  const router = useRouter();
  const navItems1 = [
    {
      title: "Overview",
      url: "/startup/overview",
    },
    {
      title: "Investor Finder",
      url: "/startup/investor-finder",
    },

    {
      title: "Due deligence",
      url: "/startup/due-deligence",
    },
    {
      title: "Fundings",
      url: "/startup/fundings",
    },
    {
      title: "Learning",
      url: "/startup/learning",
    },
  ];

  const navItems2 = [
    {
      title: "How to invest",
      url: "/startup/how-to-invest",
      icon: "",
    },
    {
      title: "Introductions",
      url: "/startup/introductions",
      icon: "",
    },
  ];
  return (
    <div className="bg-[#FBFBFB] dark:bg-gray-800 relative flex flex-col gap-y-10 justify-between h-full pb-4">
      <div>
        <div className="mb-12 py-4 px-10">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[160px] lg:w-[160px] h-auto dark:hidden"
            src="/images/logo-dark.png"
            alt="Fundit Logo"
            width={160}
            height={50}
            priority
          />
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[160px] lg:w-[160px] h-auto hidden dark:inline-block"
            src="/images/logo-white.png"
            alt="Fundit Logo"
            width={160}
            height={50}
            priority
          />
        </div>
        <div>
          <nav>
            <ul className="grid gap-y-2">
              {navItems1.map((item) => (
                <li
                  onClick={() => router.push(item.url)}
                  className={`border-r-4 py-[10px] pl-10 flex items-center gap-x-2 cursor-pointer ${
                    router.pathname === item.url
                      ? "border-primary font-bold text-primary"
                      : "border-transparent text-[#8E8E9A] dark:text-white/80"
                  }`}
                  key={item.title}
                >
                  {item.title.toLowerCase() === "overview" && (
                    <ElementSvg isActive={item.url === router.pathname} />
                  )}
                  {item.title.toLowerCase() === "fundings" && (
                    <Activity isActive={item.url === router.pathname} />
                  )}
                  {item.title.toLowerCase() === "due deligence" && (
                    <Bookmark isActive={item.url === router.pathname} />
                  )}
                  {item.title.toLowerCase() === "investor finder" && (
                    <GlobalSearch isActive={item.url === router.pathname} />
                  )}
                  {item.title.toLowerCase() === "reports" && (
                    <Receipt isActive={item.url === router.pathname} />
                  )}
                  {item.title.toLowerCase() === "learning" && (
                    <Archive isActive={item.url === router.pathname} />
                  )}

                  {item.title}
                </li>
              ))}
            </ul>
            <div className="my-8 border-b border-[#D2D2D7 mx-7" />
            <ul className="grid gap-y-2">
              {navItems2.map((item) => (
                <li
                  onClick={() => router.push(item.url)}
                  className={`border-r-4 py-[10px] pl-10 flex gap-x-2 items-center dark:text-white/80 ${
                    router.pathname === item.url
                      ? "border-primary font-bold text-primary"
                      : "border-transparent text-[#8E8E9A] "
                  }`}
                  key={item.title}
                >
                  {item.title}{" "}
                  <BsArrowUpRightCircle style={{ fontSize: "16px" }} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="">
        <div className="sidebar py-8 px-4 w-[180px] mr-auto text-sm ml-10">
          <p className="text-white/80">
            Upgrade to PRO to get access to all features!
          </p>
        </div>
      </div>
    </div>
  );
}
