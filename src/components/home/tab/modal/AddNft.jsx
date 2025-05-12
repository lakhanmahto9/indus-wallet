import React from "react";
import { CrossIcon, LeftAngleIcon } from "../../../../assets/icons/Icons";

const AddNft = ({ handleClose }) => {
  return (
    <div className="w-full sm:w-[400px] relative">
      <div className="w-full p-4 flex justify-center items-center sticky top-0 z-10 bg-white">
        <p className="text-lg font-medium">Import NFT</p>
        <div className="absolute right-2 cursor-pointer" onClick={handleClose}>
          <CrossIcon color="#000000" width="18" height="18" />
        </div>
      </div>
      <div className="p-4 w-full">
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="address" className="font-bold">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="0x...."
              className="px-4 h-12 border outline-blue-700 w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="font-bold">
              Token ID
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter the token id"
              className="px-4 h-12 border outline-blue-700 w-full"
            />
          </div>
          <div className="w-full flex gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="w-full border h-12 rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full border h-12 bg-blue-700 text-white rounded-full"
            >
              Import
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNft;
