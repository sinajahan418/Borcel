

"use client";

import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CollectionForm = ({ onClose }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [products, setProducts] = useState([]);
  return (
    <div className=" w-full flex justify-between p-5 px-20">
      <form action="" className="text-2xl font-bold">
       coon .......
      </form>
      <div onClick={onClose}>
        <IoMdCloseCircleOutline className=" text-3xl"/>
      </div>
    </div>
  );
};

export default CollectionForm;
