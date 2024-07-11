"use client";
import React, { useEffect, useState } from "react";
import ProductsCarts from "../productsCarts/ProductsCarts";
import Link from "next/link";
import { useProduct } from "@/store/useProducts";

const SliceProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { oneProduct, setOneProduct }: any = useProduct();
  const cartLoding = new Array(4).fill(0);
  const getProducts = (item) => {
    setOneProduct({
      id: item._id,
      name: item.name,
      price: item.price,
      img: item.img,
      suitableFor: item.suitableFor,
      shortDescription: item.shortDescription,
      longDescription: item.longDescription,
      score: item.score,
    });
  };
  console.log(oneProduct);

  useEffect(() => {
    const getHomeProduct = async () => {
      setLoading(true);
      const res = await fetch("api/products");
      const data = await res.json();
      setLoading(false);
      setProduct(data);
    };
    getHomeProduct();
  }, []);
  return (
    <div className="grid gap-7 grid-cols-4 items-center justify-center">
      {loading &&
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
      {product.slice(0, 8).map((item: any) => (
        <>
          <Link
            onClick={() => getProducts(item)}
            data-aos="flip-down"
            href={`/products/${item._id}`}
          >
            <ProductsCarts key={item._id} products={item} />
          </Link>
        </>
      ))}
    </div>
  );
};

export default SliceProducts;
