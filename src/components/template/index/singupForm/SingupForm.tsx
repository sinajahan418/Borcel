import React from 'react';

const SingupForm = () => {
  return (
    <form>
    <div className=" w-[250px] gap-3 flex flex-col">
      <label>
        <span className=" font-medium">name:</span>
      </label>
      <input className=" bg-slate-200 rounded-3xl shadow-xl" type="text" />
    </div>
    <div className=" w-[250px] gap-3 flex flex-col">
      <label>
        <span className=" font-medium">email:</span>
      </label>
      <input className=" bg-slate-200 rounded-3xl shadow-xl" type="email" />
    </div>
    <div className=" w-[250px] gap-3 flex flex-col">
      <label>
        <span className=" font-medium">phone:</span>
      </label>
      <input className=" bg-slate-200 rounded-3xl shadow-xl" type="text" />
    </div>
    <div className=" w-[250px] gap-3 flex flex-col">
      <label>
        <span className=" font-medium">password:</span>
      </label>
      <input className=" bg-slate-200 rounded-3xl shadow-xl" type="password" />
    </div>
  </form>
  );
}

export default SingupForm;
