"use client";
import React, { useEffect, useState } from "react";
import ProductSwiper from "../productSwiper/ProductSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const HomeProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
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
    <>
      <div className=" m-2 rounded-3xl opacity-[0.9] shadow-2xl  p-4">
        <div className=" flex flex-row items-center justify-between p-2">
          <h1 className="flex flex-row gap-2 items-center font-bold text-xl bg-gray-300 shadow-xl p-2 rounded-2xl">
          <FaChevronLeft />
            {" "}
            <Link href="/products">
            all products

            </Link>
          </h1>
          <h1 className=" font-bold text-2xl">Products</h1>
        </div>
        {loading && (
          <div className=" w-[40%] h-[300px] animate-pulse bg-slate-300 mx-auto rounded-3xl shadow-xl"></div>
        )}
        {product.length !== 0 ? (
          <div className="w-[40%] h-[300px] mx-auto">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              //  loop={true}
              centeredSlides={true}
              autoplay={{ delay: 1000 }}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper bg-gray-300 rounded-2xl shadow-xl p-6"
            >
              {product.slice(0, 3).map((item: any, index: number) => (
                <>
                  <SwiperSlide className="h-full " key={index}>
                    <img className=" h-full h-screen" src={item.img} />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default HomeProduct;
