"use client";

import useCart from "@/store/useCart";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const page = ({ params }: number | string | any) => {
  const [product, setProduct] = useState([]);
  const [loding, setLoding] = useState(true);
  const [count, setCount] = useState(1);
  const cart = useCart()

  useEffect(() => {
    const getproducts = async () => {
      setLoding(true);
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
      setLoding(false);
    };
    getproducts();
  }, []);

  return (
    <div className="w-full flex gap-16 p-6 px-24 bg-slate-300">
      {loding && <>loding...</>}
      <main className="">
        <img
          className="w-[400px] rounded-2xl shadow-xl"
          src={product?.img}
          alt=""
        />
      </main>
      <main className=" gap-6">
        <h2 className=" text-2xl font-bold text-sky-900 bg-slate-300 rounded-xl mt-3 shadow-xl p-3">
          {product?.name}
        </h2>
        <p className="mt-4 text-2xl font-bold text-sky-900 bg-slate-300 rounded-xl shadow-xl p-3">
          {product.shortDescription}
        </p>
        <div className="flex w-[160px] gap-4 m-2 mt-4 bg-gray-300 p-2 rounded-2xl shadow-xl">
          {new Array(product?.score).fill(0).map((item: any, index: number) => (
            <FaStar className="mx-auto text-yellow-500" key={index} />
          ))}
          {/* {new Array(1 - product.score).fill(0).map((item: any, index: number) => (
              <FaRegStar key={index} />
            ))} */}
        </div>
        <div>
          <p className="text-sky-900 text-2xl bg-gray-300 font-bold rounded-2xl shadow-xl p-2 m-6 mt-7 text-center">
            $ {product.price}
          </p>
        </div>
        <div className="ml-2 flex w-[150px] px-4 justify-between items-center bg-slate-300 rounded-xl shadow-lg">
          <p
            className=" text-2xl  bg-slate-200 text-sky-900 px-2 my-2 rounded-full shadow-xl font-bold"
            onClick={() => setCount((pev) => pev + 1)}
          >
            +
          </p>
          <p className=" text-2xl  bg-slate-200 text-sky-900 px-2 my-2 rounded-full shadow-xl font-bold">
            {count}
          </p>
          <p
            className=" text-2xl  bg-slate-200 text-sky-900 px-2 my-2 rounded-full shadow-xl font-bold"
            onClick={() => (count == 1 ? null : setCount((pev) => pev - 1))}
          >
            <FaMinus />
          </p>
        </div>
        <div>
          <button onClick={()=> {cart.addItem({item: product , quantity: count})}} className="text-sky-600 hover:text-sky-900 text-2xl bg-gray-300 font-bold rounded-2xl shadow-xl p-2 m-6 mt-6">
            add to cart
          </button>
        </div>
      </main>
    </div>
  );
};

export default page;
