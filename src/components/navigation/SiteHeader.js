import { useState, useEffect } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
import ButtonComponent from "../ButtonComponent";

import Link from "next/link";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";

const links = [
  // {
  //   title: "Use Cases",
  //   url: "",
  // },
  {
    title: "About us",
    url: "/about",
  },
  {
    title: "Careers",
    url: "/careers",
  },
  {
    title: "Pricings",
    url: "/#pricing",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

function SiteHeader() {
  const [isOpen, setOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const router = useRouter();

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("scrolled")
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [router]);

  // Handle nav visibility on scroll
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  return (
    <nav className={`w-full py-4 px-6 ${stickyClass} bg-white dark:bg-black`}>
      <div className={`container flex items-center justify-between`}>
        <div className="flex items-center gap-x-10">
          <Link href="/">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[130px] lg:w-[156px] h-auto"
              src="/images/logo.svg"
              alt="Fundit Logo"
              width={156}
              height={45}
              priority
            />
          </Link>

          <ul className={`hidden lg:flex items-center gap-x-8 nav__menu`}>
            {links.map((link) => (
              <Link key={link.title} href={link.url}>
                {" "}
                <li
                  className={`text-sm  nav__item text-dark dark:text-white ${
                    router.pathname === link.url && "active"
                  }`}
                >
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div id="" className="hidden lg:flex items-center gap-x-8">
          <Link href={"/"}>
            <ButtonComponent className="bg-transparent font-medium">
              Login
            </ButtonComponent>
          </Link>
          <Link href="/">
            <ButtonComponent>Get started</ButtonComponent>
          </Link>
        </div>
        <div className="lg:hidden">
          <Hamburger
            size={28}
            toggled={isOpen}
            toggle={setOpen}
            color="#27AE60"
          />
        </div>
      </div>

      <MobileNav open={isOpen} setOpen={setOpen} />
    </nav>
  );
}

export default SiteHeader;
