import React from "react";
import ButtonComponent from "../ButtonComponent";
import { AiFillCheckCircle } from "react-icons/ai";
import ScrollAnimation from "react-animate-on-scroll";

const plans = [
  {
    name: "free",
    price: "0",
    description: "Have a go  and test your  superpowers",
    uses: [
      "2 Matches",
      "File Uploads",
      "Public share & comments",
      "Chat Support",
    ],
    btnText: "Sign up for free",
  },
  {
    name: "basic",
    price: "19",
    description: "Get Funding and unlimited matches",
    uses: [
      "This feature is available for you.",
      "Full time view on your analytics.",
      "Real time with our  support team.",
      "Some amount of users for this plan.",
      "This feature is available for you.",
    ],
    btnText: "Let's Go pro",
  },
  {
    name: "standard",
    price: "25",
    description: "A detailed wireframe kit made of comprehensive components.",
    uses: [
      "AdvertiAdvertisement",
      "Account sucess manager",
      "Unlimited Matched ",
      "Accelerator  Program",
      "Pitch Review",
    ],
    btnText: "Let's get started",
  },
];
function Pricing() {
  const [active, setActive] = React.useState(0);
  return (
    <section className="container text-center py-20 px-6 xl:px-0">
      <ScrollAnimation animateOnce animateIn="fade-in-bottom">
        <h3 className="text-[#1B1B1B] font-bold mb-[10px] dark:text-white/90 text-3xl lg:text-[40px]">
          Simple and transparent pricing
        </h3>
        <p className="text-[#828282] dark:text-white/80 text-base lg:text-xl mb-12 max-w-[500px] mx-auto">
          Straight to the point pricing plans. No surprises or hidden charges.
          All is clear.
        </p>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 items-center lg:items-start justify-center gap-10 text-left sm:max-w-[768px] xl:max-w-[1180px] mx-auto">
          {plans.map((plan, index) => (
            <div key={plan.name + index} className="w-full lg:max-w-[360px]">
              <div
                className={`border border-[#D3D7DB] rounded-[20px] py-10 px-5 lg:px-8 w-full transition-all ease-in-out duration-500 group hover:bg-[linear-gradient(158.73deg,#27AE60_0%,#11998E_100%)]
               cursor-pointer hover:scale-[1.01] ${active === index ? "" : ""}`}
              >
                <p
                  className={`capitalize text-xl mb-[30px] font-bold group-hover:text-white text-[#0C111A] dark:text-white/70
                `}
                >
                  {plan.name} Plan
                </p>
                <p
                  className={`text-base  mb-[30px] group-hover:text-white text-[#1B1B1B] dark:text-white/70 `}
                >
                  <span
                    className={`text-[40px]  font-bold group-hover:text-white text-[#1B1B1B] dark:text-white/70 `}
                  >
                    ${plan.price}
                  </span>{" "}
                  / Month
                </p>
                <p
                  className={` mb-[30px] text-sm max-w-[220px] text-[#5C5C5C] dark:text-white/70 group-hover:text-white `}
                >
                  {plan.description}
                </p>
                <ul className="mb-6 group-hover:p-4 rounded-lg group-hover:bg-white">
                  {plan.uses.map((use, index) => (
                    <li
                      key={use + index}
                      className={`text-sm mb-4 flex gap-x-2 items-center  text-[#1B1B1B] dark:text-white/70 group-hover:dark:text-[#1b1b1b]`}
                    >
                      <AiFillCheckCircle
                        className={`w-4 h-4  dark:text-white/70}`}
                      />{" "}
                      {use}
                    </li>
                  ))}
                </ul>
                <ButtonComponent className="w-full text-center justify-center flex text-base py-3 rounded-[10px]">
                  {plan.btnText}
                </ButtonComponent>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Pricing;
