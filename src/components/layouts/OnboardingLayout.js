import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function AuthLayout({ children }) {
  const firstContent = [
    {
      text: " Our startup was fortunate enough to connect with JGFunded in ourpursuit of securing investment.",
      name: "Oluwabusayomi Aminat Ogunniyi",
      img: "/images/profile.png",
      title: "Avanti",
    },
    {
      text: "Our startup was fortunate enough to connect with JGFunded in ourpursuit of securing investment.",
      name: "Second Aminat Ogunniyi",
      img: "/images/profile.png",
      title: "Avanti2",
    },
  ];

  const secondContent = [
    {
      text: " Our startup was fortunate enough to connect with JGFunded in ourpursuit of securing investment.",
      name: "Oluwabusayomi Aminat Ogunniyi",
      img: "/images/googlecolor.svg",
      title: "Avanti",
    },
    {
      text: "Our startup was fortunate enough to connect with JGFunded in ourpursuit of securing investment.",
      name: "Second Aminat Ogunniyi",
      img: "/images/googlecolor.svg",
      title: "Avanti2",
    },
  ];
  return (
    <section className="h-screen grid lg:grid-cols-2 overflow-hidden">
      <div className="h-screen overflow-y-auto px-6 lg:px-[50px] pt-8 lg:pt-[50px] pb-1  lg:pb-[70px] mx-auto no-scrollbar w-full lg:w-auto">
        {children}
      </div>
      <div className="h-screen bg-[url(/images/authsvg.svg)] bg-no-repeat bg-cover hidden lg:flex flex-col items-center justify-center">
        <Carousel
          className="mb-24 max-w-[489px]"
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          autoPlay
          interval={5000}
        >
          {firstContent.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800 w-full text-left"
            >
              <p className="mb-6 text-xl text-[#46474E] dark:text-white/80 text-left">{item.text}</p>
              <div className="flex gap-x-5 items-center">
                <Image
                  src={item.img}
                  width={70}
                  height={70}
                  className="rounded-full w-[70px] h-[70px]"
                  alt={item.title}
                />
                <div>
                  <span className="text-[#181818] dark:text-white/70 block font-bold text-xl">
                    {item.name}
                  </span>
                  <span className="text-[#181818] dark:text-white/70 block text-base">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>


        <Carousel
          className="mb-10 max-w-[489px] auth__carousel"
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay
          interval={5000}
        >
          {secondContent.map((item) => (
            <div key={item.text} className="max-w-[489px] text-left mb-16">
            <p className="mb-4 text-3xl text-white/80 font-semibold">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="">
              <div>
                <span className="text-white/70 block text-sm">
                  Accept payments | Send money | Manage your finances | Grow your
                  business
                </span>
              </div>
            </div>
          </div>
          ))}
        </Carousel>
       
      </div>
    </section>
  );
}
