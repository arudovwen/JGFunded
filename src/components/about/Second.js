import Image from "next/image";
import React from "react";

function Second() {
  return (
    <section className="container grid grid-cols-1 xl:grid-cols-2 gap-x-10 lg:gap-x-[58px] rounded-[40px] bg-[#F2FCF4] dark:bg-[#313b33] mb-28 lg:mb-[140px] fade-in-bottom">
      <div className="px-10 lg:px-20  py-12 lg:py-[60px] text-center lg:text-left">
        <h2 className="text-[#191A15] dark:text-white/90 text-2xl lg:text-[32px] mb-4 font-bold">
          Highly-Selective Dealflow
        </h2>
        <p className="text-[#828282] dark:text-white/80 font-normal text-base lg:text-xl lg:leading-[32px]">
          To achieve its highly selective deal flow, the JXTGOTFUNDED Machine
          learning algorithm reviews companies, evaluates management team, carry
          out in-depth due diligence process, selects opportunities to share
          with matched investor community. By leveraging its extensive network,
          JXTGOTFUNDED can proactively identify and pursue companies, gaining
          access to closed investment rounds for other new investors.
        </p>
      </div>
      <div className="relative hidden xl:block">
        
        <Image
          src="/images/dealflow.png"
          width={540}
          height={374}
          alt="dealflow"
          className=" h-auto w-full max-w-[574px] absolute bottom-0 right-[-67px]"
        />
      </div>
    </section>
  );
}

export default Second;
