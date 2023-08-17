import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "@/components/ButtonComponent";
import AuthLayout from "@/components/layouts/AuthLayout";
import InputField from "@/components/forms/InputField";

export default function ForgotPassword() {
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
          <h1 className="text-[#1D1D35] dark:text-white/90  text-2xl lg:text-[40px] font-bold mb-1">
            Forgot Password?
          </h1>
          <p className="text-[#686878] dark:text-white/70  lg:text-xl mb-8">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </p>

          <form className="w-full">
            <div className="w-full">
              <div className="grid gap-y-6">
                <InputField
                  label="Email address"
                  placeholder="Provide your valid email address"
                  type="email"
                />
              </div>

              <div className="mt-12">
               <Link href="/reset-password">
               <ButtonComponent className="bg-primary text-white w-full text-center flex-items-center justify-center py-3">
                  Request link
                </ButtonComponent></Link>
              </div>
            </div>
          </form>

          <div className="text-sm lg:text-base text-center text-[#686878] dark:text-white/70  mt-6 font-medium rounded-[10px]">
            <Link href="/login">
              <span className="text-primary font-medium"> Return to login</span>
            </Link>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
