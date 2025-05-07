import React, { useEffect, useRef, useState } from "react";
import { CrossIcon, EyeIcon, EyeOffIcon, LeftAngleIcon } from "../../../assets/icons/Icons";

const SecretKey = ({ handleClose, createNewAccount }) => {
  const inputRef = useRef(null);
  const [show, setShow] = useState(false);
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
          <p className="text-lg font-bold">Private Key</p>
          <div
            className="absolute top-1 right-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={handleClose}
          >
            <CrossIcon color="#000000" width="18" height="18" />
          </div>
        </div>
      </div>
      <p className="p-4 text-sm">
        Imported accounts won’t be associated with your IndusWallet Secret
        Recovery Phrase.
      </p>
      <form className="flex flex-col gap-4 p-4">
        <label htmlFor="name" className="font-medium">
          Enter your private key string here:
        </label>
        <div className="w-full relative">
          <input
            id="name"
            type={show?"text":"password"}
            className="h-12 border w-full outline-blue-700 px-4"
            ref={inputRef}
          />
          {show ? (
            <div onClick={()=>setShow(false)} className="absolute top-3 right-2 cursor-pointer">
              <EyeIcon color="#000000" widht="20" height="20" />
            </div>
          ) : (
            <div onClick={()=>setShow(true)} className="absolute top-3 right-2 cursor-pointer">
              <EyeOffIcon color="#000000" widht="20" height="20" />
            </div>
          )}
        </div>
        <div className="w-full flex gap-4">
          <button
            onClick={() => createNewAccount("add")}
            type="button"
            className="border w-full rounded-full h-12 text-blue-700 font-medium border-blue-700"
          >
            Cancel
          </button>
          <button className="border w-full rounded-full h-12 text-white bg-blue-700 font-medium border-blue-700">
            Import
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecretKey;
