import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const NewProducts = ({ ocClose }: any) => {
  return (
    <div className=" flex justify-between items-center p-4">
      <form>
        <div className=" font-bold p-2 text-2xl">
        this item is available , when we build the back end  
        </div>
      </form>
      <div onClick={ocClose}>
        <IoMdCloseCircleOutline className=" text-3xl" />
      </div>
    </div>
  );
};

export default NewProducts;
