import React from "react";
import { CiHeart } from "react-icons/ci";

const ProductsCarts = ({ products }: any) => {
  return (
    <div className=" shadow-xl my-8">
        <img src={products.img} alt=""  className=" rounded-t-3xl shadow-xl"/>
      <h1 className=" text-center w-full bg-slate-200">{products.name}</h1>
      <div className="flex justify-between items-center font-bold text-xl p-3 bg-slate-200 rounded-b-2xl">
        <p>${products.price}</p>
        <span className=" text-3xl"><CiHeart/></span>
      </div>
    </div>
  );
};

export default ProductsCarts;
