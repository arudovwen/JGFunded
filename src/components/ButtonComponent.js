import { forwardRef } from "react";

function ButtonComponent({
  type = "submit",
  className = "",
  processing,
  children,
}) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center px-8 py-3 bg-[#F2F2F2] border border-transparent font-normal text-base text-primary capitalize tracking-widest active:bg-[#F2F2F2] hover:opacity-75 transition ease-in-out duration-150 rounded-md ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;
