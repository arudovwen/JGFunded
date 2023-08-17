import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { RiBuildingLine } from "react-icons/ri";
import ButtonComponent from "@/components/ButtonComponent";

import OnboardingLayout from "@/components/layouts/OnboardingLayout";

function AccountType() {
  const [active, setActive] = useState("startup");
  const content = [
    {
      title: "Startup",
      text: "Lorem ipsum dolor sit amet consectetur. Vel ipsum ac.",
      icon: <RiBuildingLine />,
    },
    {
      title: "Individual investor",
      text: "Lorem ipsum dolor sit amet consectetur. Vel ipsum ac.",
      icon: <AiOutlineUser />,
    },
  ];
  return (
    <OnboardingLayout>
      <div className="h-full flex flex-col justify-betwee">
        <div className="mb-20">
          <div className="mb-12">
            <Link href="/">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[180px] h-auto dark:hidden"
                src="/images/logo-dark.png"
                alt="Fundit Logo"
                width={180}
                height={60}
                priority
              />
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[180px] h-auto hidden dark:inline-block"
                src="/images/logo-white.png"
                alt="Fundit Logo"
                width={180}
                height={60}
                priority
              />
            </Link>
          </div>
          <h1 className="text-[#1D1D35] dark:text-white/90  text-2xl lg:text-[40px] font-bold mb-1">
            Welcome to JGFunded
          </h1>
          <p className="text-[#686878] dark:text-white/70  lg:text-xl mb-16 lg:mb-[70px]">
            How would you like to register?
          </p>

          <div className="mb-12">
            {content.map((item) => (
              <div
                onClick={() => setActive(item.title.toLowerCase())}
                key={item.title}
                className={`transition-all duration-500 cursor-pointer max-w-[450px] flex items-center gap-x-4 border px-4 py-5 rounded-2xl mb-6 ${
                  active === item.title.toLowerCase()
                    ? "bg-[#27AE60] border-[#27AE60]"
                    : " border-[#D2D2D7]"
                }`}
              >
                <div
                  className={`h-10 w-10 flex items-center justify-center rounded-full ${
                    active !== item.title.toLowerCase()
                      ? "bg-[#27AE60] text-white"
                      : "bg-white text-[#27AE60]"
                  } text-2xl`}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h2
                    className={`text-xl font-bold mb-1 ${
                      active === item.title.toLowerCase()
                        ? "text-white"
                        : "text-[#1D1D35] dark:text-white/80"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`text-sm max-w-[219px] ${
                      active === item.title.toLowerCase()
                        ? "text-white"
                        : "text-[#1D1D35] dark:text-white/70 "
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
                <span
                  className={`${
                    active === item.title.toLowerCase()
                      ? "text-white"
                      : "text-[#1D1D35] dark:text-white/70"
                  } `}
                >
                  <FaAngleRight />
                </span>
              </div>
            ))}
          </div>
          <Link href="/onboarding/register">
            <ButtonComponent className="bg-primary text-white">
              Proceed
            </ButtonComponent>
          </Link>
        </div>
        <div className="text-sm lg:text-lg text-[#686878] dark:text-white/70  pb-4 lg:pb-10">
          Already have an account?{" "}
         <Link href="/login"> <span className="text-primary font-medium">Log in</span></Link>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default AccountType;
