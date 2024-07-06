"use client"
import React, { useEffect, useState } from 'react';

const AllProducts = () => {
  const [data , setData] = useState([])
  useEffect(()=>{
const getAllProducts = async()=>{
   const res = await fetch("/api/products") 
   const resData = await res.json()
   setData(resData)
}
getAllProducts()
  },[])
  return (
    <div>
      {
        data.length == 0 ? (
          <div className=' w-full h-full p-5 justify-center items-center flex font-bold bg-slate-200 rounded-3xl shadow-xl mt-5'>product is empty pless add products</div>
        ) :
        (
          <div>
            {
              data.map((product)=> <>
              <h1>product</h1>
              </>)
            }
          </div>
        )
      }
    </div>
  );
}

export default AllProducts;
