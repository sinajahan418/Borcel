"use client";
import React, { useEffect, useState } from "react";
import NewForm from "../newForm/NewForm";
import Column from "../column/Column";
import { ReactSortable } from "react-sortablejs";
import { useRouter } from "next/navigation";
// import { ReactSortable } from "react-sortable";

export type Column = {
  id: string | number;
  title: string;
};
const columnList: Column[] = [
  { id: "1", title: "no one" },
  { id: "2", title: "one day" },
  { id: "3", title: "day one" },
];

const Board = () => {
  const router = useRouter();
  const [carts, setCarts] = useState<Column[]>(columnList);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    const isUserIn = async () => {
      setLoding(true);
      const res = await fetch("api/auth/authuser");
      const data = await res.json();
      setLoding(false);
      if (!data?.data) {
        router.replace("/singup");
      }
    };
    isUserIn();
  }, []);
  return (
    <>
      {loding ? (
        <h1>plesss weate ...</h1>
      ) : (
        <div className="  flex gap-0 grid-cols-2">
          <NewForm />
          <div className=" grid grid-cols-5">
            {/* <ReactSortable list={carts} setList={setCarts}> */}
            {carts.map((column) => (
              <>
                <div
                  key={column.id}
                  className="m-4 gap-8 flex flex-col justify-center items-center rounded-xl shadow-2xl w-[200px]  bg-slate-100"
                >
                  <img src="#" alt="img" />
                  <p>{column.title}</p>
                </div>
              </>
            ))}
            {/* </ReactSortable> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Board;
