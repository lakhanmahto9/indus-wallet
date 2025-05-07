import React from "react";
import { CrossIcon, VerticalThreeDotIcon } from "../../../assets/icons/Icons";
import { truncateString } from "../addressTruncate";
import { useSelector } from "react-redux";

const AddAccountOption = ({handleCose, createNewAccount}) => {
    const { address } = useSelector((state) => state.password);
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center h-16">
        <div className="w-full relative flex justify-center items-center">
          <p className="text-lg font-bold">Select an account</p>
          <div
            className="absolute top-1 right-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={handleCose}
          >
            <CrossIcon color="#000000" width="18" height="18" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#ebeafa] p-2">
        <div className="flex justify-between items-center space-x-20 sm:space-x-48">
          <div className="flex justify-center items-center gap-1">
            <div>
              <img src="/icon.png" alt="" className="w-10 h-10 rounded-full" />
            </div>
            <p className="font-bold">Account1</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-sm">$0.00 USD</p>
            <div>
              <VerticalThreeDotIcon color="" width="16" height="16" />
            </div>
          </div>
        </div>
        <div className="flex justify-between px-10">
          <div className="text-slate-400 text-sm">
            {truncateString(address)}
          </div>
          <div className="flex items-center gap-2">
            <div>
              <img
                src="/eth_logo.svg"
                alt=""
                className="w-4 h-4 rounded-full"
              />
            </div>
            <p className="text-sm text-slate-500">0 ETH</p>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div onClick={()=>createNewAccount("create")} className="border h-12 rounded-full flex justify-center cursor-pointer items-center hover:bg-blue-700 hover:text-white text-blue-700 font-bold border-blue-700">
          + Add account or hardware wallet
        </div>
      </div>
    </div>
  );
};

export default AddAccountOption;
