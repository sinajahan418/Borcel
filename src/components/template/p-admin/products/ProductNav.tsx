"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import NewProducts from "./NewProducts";
// import useShowProductBox from "../../../../store/useShowProductBox";

const ProductNav = () => {
  const [createProductBox, setCreateProductBox] = useState(false);
  // const { createProductBox, setCreateProductBox } = useShowProductBox();
  return (
    <div>
      <nav className=" w-full flex flex-row items-center justify-between p-5 px-7 border-b-2 border-sky-200">
        <h1 className=" font-bold text-2xl">Products</h1>
        <div
          onClick={() => setCreateProductBox(true)}
          className=" flex flex-row items-center justify-around gap-3 p-2 bg-slate-100 rounded-2xl shadow-xl"
        >
          <FaPlus />
          <button className="font-bold hover:font-medium">
            create Products
          </button>
        </div>
      </nav>
      {createProductBox && (
        <NewProducts ocClose={() => setCreateProductBox(false)} />
      )}
    </div>
  );
};

export default ProductNav;
