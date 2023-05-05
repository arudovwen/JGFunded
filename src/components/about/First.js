import React from "react";

function First() {
  return (
    <section className="container text-center mb-28 lg:mb-[140px]">
      <h1 className="text-dark dark:text-white font-bold text-4xl lg:text-6xl text-center lg:leading-[88px] mb-2 text-focus-in">
        Making investing in <span className="text-primary text-shadow-drop-center">startups</span> easy
        <br className="hidden lg:block" /> and safe for <span className="text-primary text-shadow-drop-center">investors</span>
      </h1>
      <p className="text-[#333333] dark:text-white/80 text-base lg:text-xl max-w-[700px] mx-auto text-focus-in delay-75">
        JXTGOTFUNDED started in 2022, driven by the idea that the business of
        building startups grows bigger and better when the global crowd gains
        access to VC-level investment opportunities.
      </p>
    </section>
  );
}

export default First;
