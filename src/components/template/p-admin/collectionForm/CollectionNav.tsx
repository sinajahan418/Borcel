"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import CollectionForm from "./CollectionForm";

const CollectionNav = () => {
  const [newCollection, setNewCollection] = useState(false);
  return (
    <>
      <nav className=" w-full flex flex-row items-center justify-between p-5 px-7 border-b-2 border-sky-200">
        <h1 className=" font-bold text-2xl">Collections</h1>
        <div
          onClick={() => setNewCollection(true)}
          className=" flex flex-row items-center justify-around gap-3 p-2 bg-slate-100 rounded-2xl shadow-xl"
        >
          <FaPlus />
          <button className="font-bold hover:font-medium">
            create collection
          </button>
        </div>
      </nav>
      {newCollection && <CollectionForm onClose={()=> setNewCollection(false)}/>}
    </>
  );
};

export default CollectionNav;
