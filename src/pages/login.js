import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import AuthLayout from "@/components/layouts/AuthLayout";
import InputField from "@/components/forms/InputField";

export default function Login() {
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
    <AuthLayout>
      <section>
        <div>
          <h1 className="text-[#1D1D35] dark:text-white/90 text-2xl lg:text-[40px] font-bold mb-1">
            Welcome to JGFunded
          </h1>
          <p className="text-[#686878] dark:text-white/70 lg:text-xl mb-8">
            Enter your details to continue
          </p>

          <form className="w-full">
            <div className="w-full">
              <div className="grid gap-y-6">
                <InputField
                  label="Email address"
                  placeholder="Provide your valid email address"
                  type="email"
                />
                <InputField
                  icon="password"
                  label="Password"
                  placeholder="Provide a valid password"
                  type="password"
                />
              </div>
              <div className="text-sm lg:text-base text-[#686878] dark:text-white/70  mt-6 text-right">
                Forgot your password?{" "}
               <Link href="/forgot-password"> <span className="text-primary font-medium">Reset here</span></Link>
              </div>
              <div className="mt-12">
               <Link href="/investor/dashboard">
               <ButtonComponent className="bg-primary text-white w-full text-center flex-items-center justify-center py-3">
                  Log in
                </ButtonComponent></Link>
              </div>
            </div>
          </form>
          <div>
            <div className=" p-2 overflow-hidden my-8 flex justify-center relative after:content-[''] after:absolute after:w-[45%] after:left-0 after:border-t after:border-[#D1D0D6] after:top-1/2 after:translate-y-0 before:content-[''] before:absolute before:w-[45%] before:right-0 before:border-t before:border-[#D1D0D6] before:top-1/2 before:translate-y-0 font-medium">
              Or
            </div>
            <div className="grid gap-y-6">
              {content.map((item) => (
                <ButtonComponent
                  key={item.title}
                  className="bg-transparent border-[#CFCFCF] text-[#0F100F] dark:text-white/70  w-full text-center flex-items-center justify-center relative px-4 py-3"
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
          <div className=" text-sm lg:text-base text-center text-[#686878] dark:text-white/70   mt-6 font-medium bg-[#F2FCF4] dark:bg-gray-800 w-full rounded-[10px] p-7">
            Having problems logging in?{" "}
            <Link href="/"><span className="text-primary font-medium"> Chat with us</span></Link>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
