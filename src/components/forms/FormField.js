import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import clsx from "clsx";

export default function FormField({
  label,
  name,
  placeholder,
  icon,
  type,
  className = "",
  register,
  value,
  errors,
  isCheckbox = false, // Add this prop to indicate if it's a checkbox
  isRadio = false,
  maxW = "max-w-[374px]",
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const merged = clsx("input", className);

  return (
    <div className={`w-full ${maxW}`}>
      {label && !isCheckbox && !isRadio && (
        <label className="block text-sm text-[#686878] mb-2">{label}</label>
      )}
      <div className="flex items-center relative">
        {isCheckbox ? ( // Check if it's a checkbox
          <div>
            <label className="text-sm text-[#686878] flex gap-x-2 items-start whitespace-nowrap">
              {" "}
              <input
                className={`${merged} w-auto mt-1`}
                type="checkbox"
                value={value}
                {...register(name)}
              />{" "}
              {label}
            </label>
          </div>
        ) : isRadio ? (
          <div>
            <label className="text-sm text-[#686878] flex gap-x-2 items-start">
              {" "}
              <input
                className={`${merged} w-auto mt-1`}
                type="checkbox"
                {...register(name)}
              />{" "}
              {label}
            </label>
          </div>
        ) : (
          <input
            className={merged}
            placeholder={placeholder}
            {...register(name)}
            type={type === "password" && isPasswordVisible ? "text" : type}
          />
        )}
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
      {errors && <span className="text-sm text-red-500">{errors.message}</span>}
    </div>
  );
}
