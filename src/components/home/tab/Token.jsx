import React from "react";
import {
  DownAeroIcon,
  FilterIcon,
  VerticalThreeDotIcon,
} from "../../../assets/icons/Icons";

const Token = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center my-2">
        <div className="flex gap-2 items-center p-2 bg-slate-50 rounded-full cursor-pointer">
          <p className="font-bold text-sm">Popular network</p>
          <DownAeroIcon coor="" width="14" height="14" />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <FilterIcon color="#000000" width="20" height="20" />
          <VerticalThreeDotIcon color="#000000" width="16" height="16" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 hover:bg-slate-50">
        <div className="flex gap-1 justify-start items-center">
          <div>
            <img
              src="/eth_logo.svg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium">Ehtereum</p>
            <p className="text-red-500 font-medium">-7.3%</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-sm">$0.00</p>
          <p className="font-bold text-sm text-slate-500">0 ETH</p>
        </div>
      </div>
      <div className="flex justify-between items-center my-2 hover:bg-slate-50">
        <div className="flex gap-1 justify-start items-center">
          <div>
            <img
              src="/eth_logo.svg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium">Ehtereum</p>
            <p className="text-red-500 font-medium">-7.3%</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-sm">$0.00</p>
          <p className="font-bold text-sm text-slate-500">0 ETH</p>
        </div>
      </div>
      <div className="flex justify-between items-center hover:bg-slate-50">
        <div className="flex gap-1 justify-start items-center">
          <div>
            <img
              src="/eth_logo.svg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium">Ehtereum</p>
            <p className="text-red-500 font-medium">-7.3%</p>
          </div>
        </div>
        <div>
          <p className="font-bold text-sm">$0.00</p>
          <p className="font-bold text-sm text-slate-500">0 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default Token;
