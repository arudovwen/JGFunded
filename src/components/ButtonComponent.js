import { forwardRef } from "react";
import clsx from "clsx";
import { BiLoaderAlt } from "react-icons/bi";

function ButtonComponent({
  type = "submit",
  className = "",
  isLoading,
  children,
  disabled,
  onClick
}) {
  const merged = clsx("btn", className);

  return (
    <button onClick={onClick} disabled={disabled || isLoading} type={type} className={merged}>
      {children}
      {isLoading && (
        <span>
          <BiLoaderAlt data-testid="loader" className="animate-spin" />
        </span>
      )}
    </button>
  );
}

export default ButtonComponent;
