
import TotualBox from "@/components/template/p-admin/box/TotualBox";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-3">
       <TotualBox url={"/api/products"} name={"products"}/>
       <TotualBox url={"/api/users"} name={"users"}/>
    </div>
  );
};

export default page;
