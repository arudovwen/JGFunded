import Image from "next/image";
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ScrollAnimation from "react-animate-on-scroll";
import ButtonComponent from "../ButtonComponent";
import { useRouter } from "next/router";

function Waitlist() {
  const router = useRouter();
  const keys = [
    "Market sizing",
    "Geographical benchmarking",
    "Deal  Size analysis",
    "Industry benchmarking",
  ];
  const [value, setValue] = React.useState(1);
  const [email, setEmail] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
   
    router.push(
      value === 1
        ? `/form/startup?email=${encodeURIComponent(email)}`
        : `/form/investor?email=${encodeURIComponent(email)}`
    );
  }

  return (
    <section
      id="waitlist"
      className="bg-[#1D1D35] dark:bg-[#161629] py-20 px-6"
    >
      <ScrollAnimation animateOnce animateIn="fade-in-bottom">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-[52px]">
            <Carousel
              className="w-full"
              showThumbs={false}
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              infiniteLoop={true}
              dynamicHeight={false}
              interval={5000}
              autoPlay
            >
              <div className="rounded-[20px] overflow-hidden bg-no-repeat bg-cover bg-[linear-gradient(189.18deg,rgba(0,0,0,0)_6.96%,#000000_99.86%),url('/images/waitlist.webp')] h-[350px] lg:h-[550px] max-w-[505px]">
                <div className="w-full h-full flex flex-col items-start justify-end pb-16 px-8">
                  <Image
                    src="/images/quote-down.svg"
                    alt="quote icon"
                    width={32}
                    height={32}
                    className="mb-4"
                  />
                  <span className="text-white  text-left text-base max-w-[365px]">
                    I got an investment of $700k, just after 3 months of
                    onboarding on JxtGotFunded. - PayLater
                  </span>
                </div>
              </div>
              <div className="rounded-[20px] overflow-hidden bg-no-repeat bg-cover bg-[linear-gradient(189.18deg,rgba(0,0,0,0)_6.96%,#000000_99.86%),url('/images/start.png')] h-[350px] lg:h-[550px] max-w-[505px]">
                <div className="w-full h-full flex flex-col items-start justify-end pb-16 px-8">
                  <Image
                    src="/images/quote-down.svg"
                    alt="quote icon"
                    width={32}
                    height={32}
                    className="mb-4"
                  />
                  <span className="text-white  text-left text-base max-w-[365px]">
                    I have been able to find good startups with great prospects
                    - Susan Cosby
                  </span>
                </div>
              </div>
            </Carousel>
            <div className="">
              <form onSubmit={handleSubmit} className="max-w-[464px] ml-auto">
                <legend className="text-white text-2xl font-bold mb-8">
                  Join the waiting list
                </legend>
                <div className="mb-6">
                  <label className="text-[#686878] text-sm mb-2 block">
                    Email address
                  </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white px-4 py-4 rounded-lg"
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="text-[#686878] text-sm mb-2 block">
                    Select customer type
                  </label>
                  <select
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full bg-white px-4 py-4 rounded-lg text-[#333]"
                  >
                    <option value={1}>Startup</option>
                    <option value={2}>Investor</option>
                  </select>
                </div>

                <div>
                  <ButtonComponent
                    type="submit"
                    className="bg-primary text-white w-full text-center justify-center"
                  >
                    Join Us
                  </ButtonComponent>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Waitlist;
