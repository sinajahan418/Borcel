"use client";
import ProductsCarts from "@/components/template/index/productsCarts/ProductsCarts";
import SearchHome from "@/components/template/index/search/searchHome/SearchHome";
import useCart from "@/store/useCart";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMinus, FaStar } from "react-icons/fa";

const page = ({ params }: { params: { query: string } }) => {
 

  return (
  <div className="m-5">
    <SearchHome url={params.query}/>
  </div>
  );
};

export default page;
