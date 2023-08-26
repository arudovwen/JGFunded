import React from "react";

import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) =>
    activeIndex !== index ? setActiveIndex(index) : setActiveIndex();

  return (
    <div className="border-b border-[#E4E7EC] w-full py-6">
      <div className="flex justify-between mb-2 rounded items-start gap-x-5">
        <p className="text-[#101828] dark:text-white/90 font-bold text-base sm:text-lg">
          {title}
        </p>

        <div
          className="flex items-center justify-center mt-1 cursor-pointer"
          onClick={() => handleSetIndex(index)}
        >
          {activeIndex !== index ? (
            <AiOutlinePlusCircle className="w-5 h-5 text-primary" />
          ) : (
            <AiOutlineMinusCircle className="w-5 h-5 text-primary" />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div className="transition ease-in-out duration-500 text-left text-base text-[#667085]">{children}</div>
      )}
    </div>
  );
};

export default AccordionLayout;
