import React from "react";
import AccordionLayout from "../layouts/AccordionLayout";
import ScrollAnimation from "react-animate-on-scroll";

function Faqs() {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const content = [
    {
      icon: "",
      title: "Is there a free trial available?",
      text: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      icon: "",
      title: "How do you get the borrower’s financial records?",
      text: "We use Machine Learning algorithims to Analyze startups and match them to their potential investors",
    },
    {
      icon: "",
      title: "What is your cancellation policy?",
      text: "No more hassles in due delligence, we got you covered, a streamlined and less stressfull due delligence process.",
    },
    {
      icon: "",
      title: "How does billing work?",
      text: "We build community ",
    },
  ];
  return (
    <section className="container py-20 px-6 xl:px-0">
      <ScrollAnimation animateOnce animateIn="fade-in-bottom">
        <h3 className="text-[#101828] font-bold mb-4 dark:text-white/90 text-3xl lg:text-4xl text-center">
          Frequently asked questions
        </h3>
        <p className="text-[#667085] dark:text-white/80 text-base lg:text-xl mb-12 mx-auto text-center">
          Everything you need to know about the product and billing.
        </p>
        <div className="flex flex-col justify-center items-center max-w-[768px] mx-auto">
          {content.map((item, index) => (
            <AccordionLayout
              title={item.title}
              index={index}
              key={`${index}faq`}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              {item.text}
            </AccordionLayout>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}

export default Faqs;
