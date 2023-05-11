import React from "react";
import AccordionLayout from "../layouts/AccordionLayout";
import ScrollAnimation from "react-animate-on-scroll";

function Faqs() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const content = [
    {
      icon: "",
      title: "Is there a free trial available?",
      text: "Yes, you can try us for free for 30 days. If you want, we would provide a free personalized 30-minutes onboarding call to get you up and running as soon as possible.",
    },
    {
      icon: "",
      title: "How do you my startup get funded?",
      text: "We use Machine Learning algorithims to Analyze startups and match them to their potential investors",
    },
    {
      icon: "",
      title: "How will i go about due deligence?",
      text: "No more hassles in due deligence, we got you covered, a streamlined and less stressfull automated due deligence process.",
    },
     {
      icon: "",
      title: "Why invest in a startups?",
      text: "Technology startups are changing nearly every aspect of life, creating explosive social and financial value. Most people have to wait for a company to go public before they can invest and be a part of a company’s growth. By the time a startup goes public or gets acquired, much of the growth has been accrued by early private investors and investment banks. Jxtgotfunded platform gives accredited investors exclusive access to participate in promising private startup funding rounds alongside top-tier VCs at the same terms, starting at $5,000.",
    },
    {
      icon: "",
      title: "What kind of updates will I receive about my portfolio companies?",
      text: "Investors receive quarterly reports containing updates on company progress and estimated metrics. When relevant, investors also receive a monthly digest of news featuring their portfolio companies, as well as other timely updates relating to investments.",
    },
    {
      icon: "",
      title: "How does billing work?",
      text: "It works based on your subscription plan",
    },
  ];
  return (
    <section className="container py-20 px-6 xl:px-0" id="faqs">
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
