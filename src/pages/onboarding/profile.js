import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import ButtonComponent from "@/components/ButtonComponent";
import AuthLayout from "@/components/layouts/AuthLayout";
import InputField from "@/components/forms/InputField";

export default function Profile() {
  return (
    <AuthLayout>
      <section>
        <div>
          <h1 className="text-[#1D1D35] dark:text-white/90  text-2xl lg:text-[40px] font-bold mb-1">
            Tell us a bit about yourself
          </h1>
          <p className="text-[#686878] dark:text-white/70  lg:text-xl mb-8">
            Enter your personal details below
          </p>

          <form className="w-full">
            <div className="w-full">
              <div className="grid gap-y-6">
                <InputField
                  label="First Name"
                  placeholder="Provide your first name"
                />
                <InputField
                  label="Last Name"
                  placeholder="Provide your last name"
                />
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
              <div className="mt-12">
              <Link href="/login">
              <ButtonComponent className="bg-primary text-white w-full text-center flex-items-center justify-center py-3">
                  Done
                </ButtonComponent></Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </AuthLayout>
  );
}
