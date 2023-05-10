import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
import { toDarkMode, toLightMode } from "../Theme";

const links = [
  {
    heading: "Company",
    links: [
      // {
      //   title: "Products",
      //   url: "#",
      //   target:"_self"
      // },
      {
        title: "Pricing",
        url: "/#pricing",
        target: "_self",
      },
      // {
      //   title: "Use cases",
      //   url: "#",
      // },
      {
        title: "Careers",
        url: "/careers",
        target: "_self",
      },
    ],
  },
  {
    heading: "Help and Solution",
    links: [
      {
        title: "Talk to support",
        url: "https://t.me/+1T9ga6pxTx1hYzQ0",
        target: "_blank",
      },
      {
        title: "Support docs",
        url: "/#faqs",
        target: "_self",
      },
      // {
      //   title: "System status",
      //   url: "#",
      // },
    ],
  },
  {
    heading: "Support",
    links: [
      {
        title: "Help Centre",
        url: "https://t.me/+1T9ga6pxTx1hYzQ0",
        target: "_blank",
      },
      // {
      //   title: "Account Information ",
      //   url: "/#",
      // },
      {
        title: "About",
        url: "/about",
        target: "_self",
      },
      {
        title: "Contact Us",
        url: "/contact-us",
        target: "_self",
      },
    ],
  },
];
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

const securities = [
  {
    name: "terms",
    url: "#",
  },
  {
    name: "privacy",
    url: "#",
  },
  {
    name: "cookies",
    url: "#",
  },
];

function SiteFooter() {
  const [email, setEmail] = React.useState("");
  const [isSent, setIsSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const url =
      "https://script.google.com/macros/s/AKfycbzSeWwVYwcRgw8sW7kcW78arCfoH8bNGXf7ufiqbn1TvSeVdhmVyW0OnkY2LVxpV0hp/exec";

    const formD = new FormData();
    formD.append("Email", email);

    fetch(url, { method: "POST", body: formD })
      .then(() => {
        setIsSent(true);
        setEmail("");
        setLoading(false);
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
      })
      .catch(() => setLoading(false));
  }
  return (
    <footer className=" pt-32 pb-20 px-6 w-full bg-white dark:bg-black relative">
      <div className="container">
        <div className="flex w-full flex-col md:flex-row gap-6">
          <ScrollAnimation
            animateOnce
            animateIn="fade-in-bottom"
            className="flex-1"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {links.map((link) => (
                <ul key={link.heading} className="w-full">
                  <p className="text-sm lg:text-base text-dark dark:text-white/90 font-semibold mb-4">
                    {link.heading}
                  </p>
                  {link.links.map((link) => (
                    <li
                      className="text-dark dark:text-white/80 opacity-50 font-normal text-sm lg:text-base mb-3 hover:opacity-80"
                      key={link.title}
                    >
                      <Link href={link.url} target={link.target} scroll={false}>
                        {" "}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </ScrollAnimation>
          <div className="bg-[#F2FCF4] dark:bg-[#313b33] mix-blend-normal text-center lg:text-left lg:w-[338px] px-6 md:px-10 py-4 md:py-8">
            <ScrollAnimation animateOnce animateIn="fade-in">
              <form onSubmit={handleSubmit} name="submit-to-google-sheet">
                <legend className="text-dark dark:text-white/90 font-bold mb-4">
                  Subscribe
                </legend>
                <div className="mb-5">
                  <div className="flex w-full mb-1">
                    <input
                      type="email"
                      value={email}
                      name="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="flex-1 h-[50px] min-w-[100px] border border-[#E7E8F2] border-r-0 rounded-l-[6px] placeholder:text-dark placeholder:opacity-50 p-4 text-sm  dark:text-gray-800 outline-none placeholder:dark:text-gray-500"
                    />
                    <button
                      disabled={loading}
                      type="submit"
                      className="bg-primary dark:bg-black/50 p-2 rounded-r-[6px] flex items-center justify-center hover:opacity-75 w-12 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      
                        <Image
                          src="/images/arrowright.svg"
                          alt="arrow right"
                          width={13}
                          height={15}
                          className="w-auto h-auto"
                        />
                     
                    </button>
                  </div>
                  {isSent && (
                    <p className="text-[11px] text-green-600">
                      Email subscription successful!
                    </p>
                  )}
                </div>

                <p className="text-xs opacity-60  dark:text-white/80">
                  © {new Date().getFullYear()} JxtGotFunded. Copyright and
                  rights reserved.
                </p>
              </form>
            </ScrollAnimation>
          </div>
        </div>
        <hr className="my-[52px] border-[#0a142f1a] dark:border-white/40" />
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[130px] lg:w-[156px] h-auto"
            src="/images/logo.svg"
            alt="Fundit Logo"
            width={156}
            height={45}
          />

          <ul className="flex gap-x-4 lg:gap-x-10 items-center">
            {securities.map((link) => (
              <li
                className="text-dark dark:text-white/80 font-normal capitalize text-xs sm:text-sm hover:opacity-80"
                key={link.name}
              >
                <Link href={link.url}> {link.name}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex gap-x-2 sm:gap-x-4 items-center">
            {socials.map((link) => (
              <li className="text-dark font-normal text-base" key={link.name}>
                <a href={link.link} target="_blank">
                  <span className="w-8 h-8 rounded-full border border-[#0a142f1a] hover:border-primary/20 flex items-center justify-center hover:bg-primary/10 dark:bg-white">
                    <Image
                      alt={link.name}
                      src={link.url}
                      width={link.w}
                      height={link.h}
                      className="w-4 h-auto"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-2 p-2 absolute bottom-0 inset-x-0">
        <button
          id="header__sun"
          onClick={() => toLightMode()}
          title="Switch to system theme"
          className="relative focus:outline-none focus:shadow-outline text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-sun"
            width="18"
            height="18"
            viewBox="0 0 22 22"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
          </svg>
        </button>
        <button
          id="header__moon"
          onClick={() => toDarkMode()}
          title="Switch to light mode"
          className="relative focus:outline-none focus:shadow-outline text-gray-400"
        >
          <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 22 22">
            <path
              fill="currentColor"
              d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
            />
          </svg>
        </button>
        {/* <button
          id="header__indeterminate"
          onClick={() => toSystemMode()}
          title="Switch to dark mode"
          className="relative focus:outline-none focus:shadow-outline text-gray-400"
        >
          <svg style={{ width: "18px", height: "18px" }} viewBox="0 0 22 22">
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z"
            />
          </svg>
        </button> */}
      </div>
    </footer>
  );
}

export default SiteFooter;
