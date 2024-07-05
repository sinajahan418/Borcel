"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingupForm = () => {
    const router = useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loding, setLoding] = useState(false);

  const singUpHandler = async () => {
    if (!name.trim()) {
        return toast.error("pless enter a name") 
        alert("sssssssssssss")
    }
    const user = {
      name,
      email,
      phone,
      password,
    };
    setLoding(true);
    const res = await fetch("api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    setLoding(false);
    if (res.status == 201) {
    toast.success("singup successfully")
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      router.replace("/p-user")
    }
  };

  return (
    <form
      className="ml-[35%] mt-8 w-[400px] flex flex-col justify-center items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      {loding ? (
        <div>pless weate ...</div>
      ) : (
        <>
          <h2  className="m-4 p-1 rounded-lg shadow-xl text-2xl font-medium bg-gray-100">
            welcome
          </h2>
          <div className=" w-[250px] gap-3 flex flex-col">
            <label>
              <span className=" font-medium">name:</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" bg-slate-200 rounded-3xl shadow-xl"
              type="text"
            />
          </div>
          <div className=" w-[250px] gap-3 flex flex-col">
            <label>
              <span className=" font-medium">email:</span>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-slate-200 rounded-3xl shadow-xl"
              type="email"
            />
          </div>
          <div className=" w-[250px] gap-3 flex flex-col">
            <label>
              <span className=" font-medium">phone:</span>
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" bg-slate-200 rounded-3xl shadow-xl"
              type="text"
            />
          </div>
          <div className=" w-[250px] gap-3 flex flex-col">
            <label>
              <span className=" font-medium">password:</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-slate-200 rounded-3xl shadow-xl"
              type="password"
            />
          </div>
          <button
            onClick={singUpHandler}
            className="m-4 p-1 mt-5 rounded-lg shadow-xl text-2xl font-medium bg-gray-100"
          >
            sing up
          </button>
          <ToastContainer />
        </>
      )}
    </form>
  );
};

export default SingupForm;
