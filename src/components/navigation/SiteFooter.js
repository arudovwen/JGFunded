import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    heading: "Company",
    links: [
      {
        title: "Products",
        url: "#",
      },
      {
        title: "Pricing",
        url: "#pricing",
      },
      {
        title: "Use cases",
        url: "#",
      },
      {
        title: "Careers",
        url: "#",
      },
    ],
  },
  {
    heading: "Help and Solution",
    links: [
      {
        title: "Talk to support",
        url: "#",
      },
      {
        title: "Support docs",
        url: "#",
      },
      {
        title: "System status",
        url: "#",
      },
    ],
  },
  {
    heading: "Support",
    links: [
      {
        title: "Help Centre",
        url: "#",
      },
      {
        title: "Account Information ",
        url: "/#",
      },
      {
        title: "About",
        url: "/about",
      },
      {
        title: "Contact Us",
        url: "/contact-us",
      },
    ],
  },
];
const socials = [
  {
    name: "linkedin",
    url: "/images/lk.svg",
    link: "https://linkedin.com",
    w: 12,
    h: 12,
  },
  {
    name: "facebook",
    url: "/images/fb.svg",
    link: "https://facebook.com",
    w: 7,
    h: 12,
  },
  {
    name: "twitter",
    url: "/images/twitter.svg",
    link: "https://twitter.com",
    w: 12,
    h: 10,
  },
];

const securities = [
  {
    name: "terms",
    url: "",
  },
  {
    name: "privacy",
    url: "",
  },
  {
    name: "cookies",
    url: "",
  },
];
function SiteFooter() {
  return (
    <footer className=" pt-24 pb-16 px-6 w-full">
      <div className="container">
        <div className="flex w-full flex-col md:flex-row gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
            {links.map((link) => (
              <ul key={link.heading} className="w-full">
                <p className="text-xs lg:text-base text-dark font-semibold mb-4">
                  {link.heading}
                </p>
                {link.links.map((link) => (
                  <li
                    className="text-dark opacity-50 font-normal text-xs lg:text-base mb-3 hover:opacity-80"
                    key={link.title}
                  >
                    <Link href={link.url}> {link.title}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="bg-[#F2FCF4] mix-blend-normal text-center lg:text-left lg:w-[338px] px-6 md:px-10 py-4 md:py-8">
            <form>
              <legend className="text-dark font-bold mb-4">Subscribe</legend>
              <div className="flex w-full mb-5">
                <input
                  placeholder="Email address"
                  className="flex-1 h-[50px] min-w-[100px] border border-[#E7E8F2] border-r-0 rounded-l-[6px] placeholder:text-dark placeholder:opacity-50 p-4 text-sm"
                />
                <button
                  type="button"
                  className="bg-primary p-2 rounded-r-[6px] flex items-center justify-center hover:opacity-75 w-12"
                >
                  <Image
                    src="/images/arrowright.svg"
                    alt="arrow right"
                    width={13}
                    height={15}
                  />
                </button>
              </div>
              <small className="text-xs opacity-60">
                © {new Date().getFullYear()} JxtGotFunded. Copyright and rights
                reserved.
              </small>
            </form>
          </div>
        </div>
        <hr className="my-[52px] border-[#0a142f1a]" />
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-[130px] lg:w-[156px]"
            src="/images/logo.svg"
            alt="Fundit Logo"
            width={156}
            height={45}
          />
          <ul className="flex gap-x-2 lg:gap-x-10 items-center">
            {securities.map((link) => (
              <li
                className="text-dark font-normal capitalize text-xs sm:text-sm hover:opacity-80"
                key={link.name}
              >
                <Link href={link.url}> {link.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-x-2 sm:gap-x-4 items-center">
            {socials.map((link) => (
              <li className="text-dark font-normal text-base" key={link.name}>
                <Link href={link.link}>
                  <span className="w-8 h-8 rounded-full border border-[#0a142f1a] flex items-center justify-center hover:bg-primary/10">
                    <Image
                      alt={link.name}
                      src={link.url}
                      width={link.w}
                      height={link.h}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
