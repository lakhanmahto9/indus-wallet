import React, { useEffect, useRef } from "react";
import { CrossIcon, LeftAngleIcon } from "../../../assets/icons/Icons";

const AddEthereumAcc = ({ handleClose, createNewAccount }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center h-16">
        <div className="w-full relative flex justify-center items-center">
          <div
            className="absolute top-1 left-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={() => createNewAccount("create")}
          >
            <LeftAngleIcon color="#000000" width="18" height="18" />
          </div>
          <p className="text-lg font-bold">Add Ethereum account</p>
          <div
            className="absolute top-1 right-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={handleClose}
          >
            <CrossIcon color="#000000" width="18" height="18" />
          </div>
        </div>
      </div>
      <form className="flex flex-col gap-4 p-4">
        <label htmlFor="name" className="font-medium">
          Account name
        </label>
        <input
          id="name"
          type="text"
          className="h-12 border outline-blue-700 px-4"
          placeholder="Account 2"
          ref={inputRef}
        />
        <div className="w-full flex gap-4">
          <button onClick={() => createNewAccount("add")} type="button" className="border w-full rounded-full h-12 text-blue-700 font-medium border-blue-700">
            Cancel
          </button>
          <button className="border w-full rounded-full h-12 text-white bg-blue-700 font-medium border-blue-700">
            Add account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEthereumAcc;
