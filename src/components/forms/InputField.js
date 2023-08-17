import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function InputField({ label, name, placeholder, icon, type }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-full">
      <label className="block text-sm text-[686878] mb-2">{label}</label>
      <div className="flex items-center relative">
        <input
          className="border border-[#D2D2D7] rounded-[10px] p-4 w-full pr-11 outline-none focus:border-gray-400 dark:bg-gray-800 dark:text-white dark:placeholder:text-white/60"
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