/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ButtonComponent from "../components/ButtonComponent";

function contactUs() {
  const [name, setName] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [message, setMessage] = React.useState("");
  const socials = [
    {
      name: "linkedin",
      url: "/images/lk.svg",
      link: "https://www.linkedin.com/company/jxtgotfunded/",
      w: 12,
      h: 12,
    },
    {
      name: "telegram",
      url: "/images/telegram.svg",
      link: "https://t.me/+1T9ga6pxTx1hYzQ0",
      w: 12,
      h: 12,
    },
    {
      name: "gmail",
      url: "/images/gmail.svg",
      link: "mailto:juxtgotfunded@gmail.com",
      w: 12,
      h: 10,
    },
  ];
  function sendMail(e) {
    if (!name || !companyName || !phoneNumber || !message) return;
    e.preventDefault();

    const body = `Full name: ${name} \nCompany name: ${companyName} \nPhone number: 234-${phoneNumber} \nMessage: ${message}`;
    window.open(
      `mailto:juxtgotfunded@gmail.com?subject=Contact mail&body=${encodeURIComponent(
        body
      )}`,
      "_blank"
    );
  }

  return (
    <WebLayout>
      <section className="pt-20 lg:pb-20 relative">
        <div className="container sm:mb-16  px-6 xl:px-0 relative">
          <h2 className="text-[#191A15] dark:text-white/90 text-3xl lg:text-[40px] lg:leading-[60px] mb-4 font-bold">
            Get in Touch with Us
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-6">
            <div>
              <p className="text-[#060214] dark:text-white/80 font-normal text-base lg:text-xl lg:leading-[32px] mb-5">
                We're here to help you with any questions or concerns you may
                have. Whether you need assistance with a product or service,
                have feedback to share, or simply want to say hello, we'd love
                to hear from you.
              </p>
              <p className="text-[#060214] dark:text-white/80 font-normal text-base lg:text-xl lg:leading-[32px] mb-5">
                To get in touch, please fill out the form below or reach out to
                us directly via email. Our team of experts is dedicated to
                providing you with prompt and helpful assistance, so don't
                hesitate to contact us.
              </p>
              <p className="text-[#060214] dark:text-white/80 font-normal text-base lg:text-xl lg:leading-[32px] mb-6">
                We look forward to hearing from you!
              </p>
            </div>
          </div>
          <div className="w-full !max-w-[450px] bg-white dark:bg-dark p-6 sm:p-12 rounded-[20px] sm:shadow-[0px_0px_60px_1px_rgba(0,0,0,0.1)] lg:absolute sm:right-[24px] xl:right-0 top-0 my-8 lg:my-0">
            <form className="" onSubmit={sendMail}>
              <legend className="text-[#170D33] dark:text-white/80 text-2xl font-medium mb-8">
                Send us a message
              </legend>
              <div className="mb-6">
                <label className="text-[#686878] dark:text-white/60 text-sm mb-2 block">
                  Full name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-[15px] bg-white dark:bg-white/60  px-4 py-3 rounded-lg border border-[#D1CFD6]"
                  placeholder="Provide your full name"
                />
              </div>
              <div className="mb-6">
                <label className="text-[#686878] dark:text-white/60 text-sm mb-2 block">
                  Company name
                </label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-[15px] bg-white dark:bg-white/60  px-4 py-3 rounded-lg  border border-[#D1CFD6]"
                  placeholder="Provide your comapany name"
                />
              </div>
              <div className="mb-6">
                <label className="text-[#686878]  dark:text-white/60 text-sm mb-2 block">
                  Phone number
                </label>
                <div className="flex gap-x-2">
                  <select
                    defaultValue={234}
                    className="bg-white dark:bg-white/60 text-[15px] px-2 py-2 rounded-lg text-[#333] w-[80px] border border-[#D1CFD6]"
                  >
                    <option value={234}>+234</option>
                  </select>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="number"
                    className="flex-1 text-[15px] bg-white dark:bg-white/60 px-4 py-3 rounded-lg  border border-[#D1CFD6]"
                    placeholder="8102457578"
                  />
                </div>
              </div>
              {/* <div className="mb-6">
                <label className="text-[#686878]  dark:text-white/60 text-sm mb-2 block">
                  Work Email
                </label>
                <input
                  type="email"
                  className="w-full text-[15px] bg-white dark:bg-white/60 px-4 py-3 rounded-lg  border border-[#D1CFD6] leading-normal"
                  placeholder="example@mail.com"
                />
              </div> */}

              <div className="mb-10">
                <label className="text-[#686878] dark:text-white/60 text-sm mb-2 block">
                  Your message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-[15px] bg-white dark:bg-white/60  px-4 py-3 rounded-lg  border border-[#D1CFD6]"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <ButtonComponent
                  type="submit"
                  className="bg-primary text-white w-full text-center justify-center"
                >
                  Submit
                </ButtonComponent>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-[#F2FCF4] dark:bg-[#313b33] py-12">
          <div className="grid lg:grid-cols-2 gap-x-12 container  px-6 xl:px-0">
            <div>
              <h3 className="text-[#191A15] dark:text-white/90 text-3xl lg:text-[40px] lg:leading-[60px] mb-1 font-bold text-center lg:text-left">
                Or email us
              </h3>
              <div className="mb-4 text-center lg:text-left">
                <a
                  href="mailto:juxtgotfunded@gmail.com"
                  className="text-primary font-normal text-base sm:text-xl"
                >
                  juxtgotfunded@gmail.com
                </a>
              </div>
              <ul className="flex gap-x-2 sm:gap-x-4 items-center mb-6 justify-center lg:justify-start">
                {socials.map((link) => (
                  <li
                    className="text-dark font-normal text-base"
                    key={link.name}
                  >
                    <Link href={link.link}>
                      <span className="w-7 h-7 rounded-full border border-[#0a142f1a] hover:border-primary/20 flex items-center justify-center hover:bg-primary/10 dark:bg-white">
                        <Image
                          alt={link.name}
                          src={link.url}
                          width={link.w}
                          height={link.h}
                          className="w-4 h-auto"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </WebLayout>
  );
}

export default contactUs;
