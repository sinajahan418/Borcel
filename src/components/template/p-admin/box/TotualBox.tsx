"use client";
import React, { useEffect, useState } from "react";

const TotualBox = (url: string , name: string) => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const getParamsApi = async () => {
      const res = await fetch(url.url);
      const response = await res.json();
      setData(response);
    };
    getParamsApi();
  }, []);
  return (
    <div className="w-[180px] gap-6 border-sky-800 border-2 p-3 rounded-2xl bg-slate-300 m-5">
      <h1>all  users</h1>
      {data.length == 0 ? "" : data.length}
    </div>
  );
};

export default TotualBox;
