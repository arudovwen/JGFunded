import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "../ButtonComponent";

const links = [
  // {
  //   title: "Products",
  //   url: "",
  // },
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
    url: "",
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

export default function MobileNav({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-[#191A15] py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 mb-10">
                        <Link href="/">
                          <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-[130px] lg:w-[156px]"
                            src="/images/logo.svg"
                            alt="Fundit Logo"
                            width={156}
                            height={45}
                            priority
                          />
                        </Link>
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ul className={`flex flex-col gap-4`}>
                        {links.map((link) => (
                          <Link key={link.title} href={link.url}>
                            {" "}
                            <li className="text-base text-dark dark:text-white/80">{link.title}</li>
                          </Link>
                        ))}
                        <hr className="my-6 border-[#0a142f1a]" />
                       <div className="flex justify-center">
                       <Link href={"/"}>
                          <ButtonComponent className="bg-transparent font-medium">
                            Login
                          </ButtonComponent>
                        </Link>
                        <Link href="/">
                          <ButtonComponent className="text-sm">Get started</ButtonComponent>
                        </Link>
                       </div>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
