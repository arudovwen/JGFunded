import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import clsx from "clsx";

export default function InputField({
  label,
  name,
  placeholder,
  icon,
  type,
  className = "",
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const merged = clsx("input", className);
  return (
    <div className="w-full max-w-[374px]">
      {label && (
        <label className="block text-sm text-[#686878] mb-2">{label}</label>
      )}
      <div className="flex items-center relative">
        <input
          className={merged}
          placeholder={placeholder}
          type={type === "password" && isPasswordVisible ? "text" : type}
        />
        {icon && (
          <span
            className={`text-xl absolute right-4 ${
              type === "password" ? "top-1/2 transform -translate-y-1/2" : ""
            }`}
          >
            {type === "password" ? (
              <button type="button" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            ) : (
              icon
            )}
          </span>
        )}
      </div>
    </div>
  );
}
