"use client";

import React, { FormEvent } from "react";

const NewForm = () => {
  const handleNewColumn = (e: FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).querySelector("input");
    if (input) {
      const columnName = input?.value;
      input.value = "";
      alert(input.value);
    }
  };
  return (
    <>
      <form
        onSubmit={handleNewColumn}
        action=""
        className="m-6 flex flex-col gap-2 w-[300px] h-[180px] bg-white shadow-2xl p-2 rounded-2xl"
      >
        <label htmlFor="">column name:</label>
        <input
          placeholder="column name"
          className=" p-2 h-[33px] border-none bg-slate-200 rounded-3xl shadow-2xl"
          type="text"
        />
        <button className=" mt-2 p-1 bg-blue-400 rounded-2xl shadow-2xl py-3 text-white">
          {" "}
          create column
        </button>
      </form>
    </>
  );
};

export default NewForm;
