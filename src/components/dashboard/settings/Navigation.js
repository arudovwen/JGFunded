import React from "react";

export default function Navigation({setActive, active}) {
  const navs = [
    "Category Feeds",
    "Account Upgrade",
    "Add Account Manager",
    "Password Reset",
    "Edit Profile",
  ];
  return (
    <div className="border border-[#D7DCE0] py-6 px-5 rounded-[16px]">
      <ul className="grid gap-y-4">
        {navs.map((item) => (
          <li
          onClick={()=> setActive(item)}
            className={`pl-3 border-l-[3px] text-sm leading-6  ${
              active === item
                ? "text-primary border-primary"
                : "text-[#8E8E9A] border-transparent"
            }`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
