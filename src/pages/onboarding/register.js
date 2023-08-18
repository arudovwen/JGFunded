import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import ButtonComponent from "@/components/ButtonComponent";
import InputField from "@/components/forms/InputField";
import OnboardingLayout from "@/components/layouts/OnboardingLayout";

function Register() {
  const [active, setActive] = useState("startup");
  const content = [
    {
      title: "Continue with Google",
      url: "Lorem ipsum dolor sit amet consectetur. Vel ipsum ac.",
      icon: "/images/googlecolor.svg",
    },
    {
      title: "Continue with Linkedin",
      text: "Lorem ipsum dolor sit amet consectetur. Vel ipsum ac.",
      icon: "/images/linkedincolor.svg",
    },
    {
      title: "Continue with Twitter",
      text: "Lorem ipsum dolor sit amet consectetur. Vel ipsum ac.",
      icon: "/images/twittercolor.svg",
    },
  ];
  return (
    <OnboardingLayout>
      <div className="h-full flex flex-col justify-between">
        <div className="max-w-[464px] mb-20">
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
          <p className="text-[#686878] dark:text-white/70  lg:text-xl mb-[60px]">
            How would you like to signup?
          </p>

          <div className="mb-12 w-full">
            <form className="w-full">
              <div className="w-full">
             
                <InputField
                  label="Email address"
                  placeholder="Provide your valid email address"
                  type="email"
                  icon={ <span className="text-primary">
                  <FiCheckCircle style={{ fontSize: "24px" }} />
                </span>}
                />
                <div className="mt-12">
                  <Link href="/onboarding/profile">
                    <ButtonComponent className="bg-primary text-white w-full text-center flex-items-center justify-center py-3">
                      Continue with Email
                    </ButtonComponent>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className=" p-2 overflow-hidden my-8 flex justify-center relative after:content-[''] after:absolute after:w-[45%] after:left-0 after:border-t after:border-[#D1D0D6] after:top-1/2 after:translate-y-0 before:content-[''] before:absolute before:w-[45%] before:right-0 before:border-t before:border-[#D1D0D6] before:top-1/2 before:translate-y-0 font-medium">
              Or
            </div>
            <div className="grid gap-y-6">
              {content.map((item) => (
                <ButtonComponent
                  key={item.title}
                  className="bg-transparent border border-[#CFCFCF] text-[#0F100F] dark:text-white/70 w-full text-center flex-items-center justify-center relative px-4 py-3"
                >
                  <Image
                    className="absolute left-4"
                    src={item.icon}
                    width={24}
                    height={24}
                    alt={item.title}
                  />{" "}
                  {item.title}
                </ButtonComponent>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left text-sm lg:text-lg text-[#686878]dark:text-white/70  pb-4 lg:pb-10">
          Already have an account?{" "}
          <Link href="/login"><span className="text-primary font-medium">Log in</span></Link>
        </div>
      </div>
    </OnboardingLayout>
  );
}

export default Register;
