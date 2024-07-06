import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const NewProducts = ({ ocClose }: any) => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">title</label>
          <input type="text" />
        </div>
      </form>
      <div onClick={ocClose}>
        <IoMdCloseCircleOutline className=" text-3xl" />
      </div>
    </div>
  );
};

export default NewProducts;
