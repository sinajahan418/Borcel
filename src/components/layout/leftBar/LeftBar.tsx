import { navLinks } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const LeftBar = () => {
  return (
    <div className="p-2 ">
      <img src="/logo.png" alt="img" width={150} height={70} />
      {navLinks.map((link) => (
        <>
          <div  className="px-3 py-9 gap-1 flex flex-row items-center justify-between">
            <p className=" text-2xl">{link.icon}</p>
            <Link className=" font-medium bg-gray-100 p-1 rounded-xl shadow-xl" href={link.url}>{link.label}</Link>
          </div>
        </>
      ))}
    </div>
  );
};

export default LeftBar;
