"use client";

import { usePathname, useRouter } from "next/navigation";
import Slider from "@/components/template/index/slider/Slider";
import Link from "next/link";
import React, { KeyboardEvent, useState } from "react";
import { FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const NavBar = ({ isUser }: any, params: any) => {
  const [search, setSearch] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const pAdmin = "/p-admin";
  return (
    <>
      <nav
        className={
          pathname == pAdmin
            ? " hidden"
            : " absolute flex flex-row justify-between items-center p-3 z-50  ml-[3%] mt-4 container bg-slate-200 shadow-xl  rounded-2xl"
        }
      >
        <img className="w-[130px] h-[50px] p-3" src="/logo.png" alt="logo" />
        <div className=" flex gap-4 items-center">
          <input
            className="bg-gray-300 text-sky-800 rounded-3xl shadow-xl p-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            onKeyDown={(e) =>
              e.keyCode == 13 && search && router.push(`/search/${search}`)
            }
            placeholder="search"
          />
          <FaSearch
            onClick={() =>
              !search ? alert("add one word") : router.push(`/search/${search}`)
            }
          />
        </div>
        <div className="flex flex-row items-center justify-around gap-16">
          {isUser == "LOGOUT" ? (
            <>
              <div className=" bg-slate-100 p-2 rounded-full shadow-xl text-xl">
                <Link href="/p-admin">
                  <FaUser />
                </Link>
              </div>
              <div className=" bg-slate-100 p-2 rounded-full shadow-xl text-xl">
                <Link href="/">
                  <FaShoppingBasket />
                </Link>
              </div>
              <div className=" bg-slate-100 p-2 rounded-full shadow-xl text-xl">
                <Link href="/">
                  <IoMdLogOut />
                </Link>
              </div>
            </>
          ) : (
            <div className=" bg-slate-100 p-2 rounded-2xl shadow-xl">
              <button>
                <Link href="/singup" className=" font-bold text-xl">
                  login
                </Link>
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="  relative">{pathname !== "/singup" && <Slider />}</div>
    </>
  );
};

export default NavBar;
