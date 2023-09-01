import formatCurrency from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";

export default function Card({ detail }) {
  return (
    <div
      key={detail.name}
      className="p-6 rounded-2xl border border-[#D7DCE0] relative"
    >
      <span className="absolute top-4 right-4">
        <BsPatchCheckFill />
      </span>
      <div className="flex details-start gap-x-4">
        <div>
          <Image
            alt="avatar"
            src="/images/avatar.svg"
            width={45}
            height={45}
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <p className="text-base font-medium text-[#24292E] dark:text-white/80 mb-2 capitalize">
            {detail.name}
          </p>
          <p className="text-xs text-[#8E8E9A] dark:text-white/80 mb-[6px]">
            {detail.email}
          </p>
          <p className="text-xs text-[#8E8E9A] dark:text-white/80 mb-4">
            {detail.phone}
          </p>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl text-primary font-bold mb-[6px]">
                {formatCurrency(detail.amount)}
              </p>
              <p className="text-sm text-[#677684] dark:text-white/80">
                Investment pool
              </p>
            </div>
           <Link href="/startup/about/1">
           <span className="p-2"> <FaChevronRight className="text-base" /></span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
