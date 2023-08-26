import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import clsx from "clsx";

export default function TextField({
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
    <div className="w-full">
      {label && (
        <label className="block text-sm text-[#686878] mb-2">{label}</label>
      )}
      <div className="flex items-center relative">
        <textarea className={merged} placeholder={placeholder}></textarea>
        {icon && <span className={`text-xl absolute right-4 `}>{icon}</span>}
      </div>
    </div>
  );
}
