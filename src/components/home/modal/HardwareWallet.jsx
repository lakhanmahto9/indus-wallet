import React from "react";
import { CrossIcon, LeftAngleIcon } from "../../../assets/icons/Icons";

const HardwareWallet = ({ handleClose, createNewAccount }) => {
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
          <p className="text-lg font-bold">Hardware wallet</p>
          <div
            className="absolute top-1 right-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={handleClose}
          >
            <CrossIcon color="#000000" width="18" height="18" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-center font-medium text-blue-300">Comming soon...</p>
      </div>
    </div>
  );
};

export default HardwareWallet;
