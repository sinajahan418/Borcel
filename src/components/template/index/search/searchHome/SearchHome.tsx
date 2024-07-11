import useCart from "@/store/useCart";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchProduct from "../searchProduct/SearchProduct";

const SearchHome = ({ url }: any) => {
  const [product, setProduct] = useState([]);
  const [loding, setLoding] = useState(true);
  const cartLoding = new Array(4).fill(0);


  useEffect(() => {
    const getSearchParams = async () => {
      const res = await fetch(`/api/search/${url}`);
      const data = await res.json();
      setLoding(false);
      setProduct(data);
      console.log(product);
    };
    getSearchParams();
  }, []);
  return (
    <div className=" grid gap-7 grid-cols-5 items-center justify-center">
              {loding &&
        cartLoding.map((item: any) => (
          <>
            <div className=" shadow-xl my-8 animate-pulse bg-slate-500 rounded-2xl  h-[300px]">
              <p className=" rounded-t-3xl shadow-xl" />
              <h1 className=" text-center w-full bg-slate-200"></h1>
              <div className="flex justify-between items-end font-bold text-xl animate-pulse p-3 mt-[70%] bg-white h-[3px] rounded-2xl">
                <p className=" bg-white h-5"></p>
                <span className=" text-3xl"></span>
              </div>
            </div>
          </>
        ))}
      { product.length == 0 && !loding ? (
        <div className=" container ml-[220%] text-5xl font-bold text-sky-900 mx-auto p-7 text-center ">no result</div>
      ): 
      product.map((item: any) => (
        <>
          <Link data-aos="flip-down" href={`/products/${item._id}`}>
            <SearchProduct key={item._id} products={item} />
          </Link>
        </>
      ))}
    </div>
  );
};

export default SearchHome;
