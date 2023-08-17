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
          <h1 className="text-[#1D1D35] dark:text-white/90  text-2xl lg:text-[40px] font-bold mb-1">
            Reset your Password?
          </h1>
          <p className="text-[#686878] dark:text-white/70  lg:text-xl mb-8">
            Enter your new password to compolete reset.
          </p>

          <form className="w-full">
            <div className="w-full">
              <div className="grid gap-y-6">
                <InputField
                  icon="password"
                  label="New Password"
                  placeholder="Provide a new password"
                  type="password"
                />
                <InputField
                  icon="password"
                  label="Confirm Password"
                  placeholder="Provide confirm your password"
                  type="password"
                />
              </div>

              <div className="mt-12">
                <ButtonComponent className="bg-primary text-white w-full text-center flex-items-center justify-center py-3">
                  Reset password
                </ButtonComponent>
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
