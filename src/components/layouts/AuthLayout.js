import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AuthLayout({ children }) {
  const router = useRouter();
  return (
    <section className="h-screen">
      <div className="pl-4 pr-6 lg:pl-[70px] lg:pr-[70px] py-[20px] flex justify-between items-center gap-x-2">
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

        <div className="text-base text-[#686878] dark:text-white/70  flex gap-x-1">
          <span className="hidden lg:inline">
            {" "}
            {router.pathname === "/login"
              ? "New to JGFunded?"
              : " Already signed up? "}
          </span>

          {router.pathname === "/login" ? (
            <Link href="/onboarding/account-type">
              <span className="text-primary font-medium">Sign up</span>
            </Link>
          ) : (
            <Link href="/login">
              <span className="text-primary font-medium">Log in</span>
            </Link>
          )}
        </div>
      </div>
      <div className="overflow-y-auto mt-10 lg:mt-[80px] pb-4 lg:pb-[50px] max-w-[550px] mx-auto px-6 lg:px-0 no-scrollbar">
        {children}
      </div>
    </section>
  );
}
