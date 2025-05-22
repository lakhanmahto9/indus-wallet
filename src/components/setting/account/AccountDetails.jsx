import React, { useState } from "react";
import {
  CopyIcon,
  CrossIcon,
  EditIcon,
  LeftAngleIcon,
  TickIcon,
} from "../../../assets/icons/Icons";
import QRCodeGenerator from "./QRCodeGenerator";
import { useSelector } from "react-redux";

const AccountDetails = ({ handleClose }) => {
  const { address } = useSelector((state) => state.password);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Account1");
  const openEdit = () => {
    setOpen(true);
  };
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="w-full sm:w-[400px] relative">
      <div className="w-full p-4 flex justify-center items-center sticky top-0 z-10 bg-white">
        <div
          className="absolute top-5 left-2 hover:bg-slate-100 p-1 cursor-pointer"
          onClick={handleClose}
        >
          <LeftAngleIcon color="#000000" width="18" height="18" />
        </div>
        <div>
          <img src="/icon2.png" alt="" className="w-10 h-10" />
        </div>
        <div className="absolute right-2 cursor-pointer" onClick={handleClose}>
          <CrossIcon color="#000000" width="18" height="18" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {!open ? (
          <div className="flex gap-4 items-center">
            <p className="font-bold">{name}</p>
            <div
              onClick={openEdit}
              className="p-1 bg-slate-50 rounded-md cursor-pointer"
            >
              <EditIcon color="#030387" width="16" height="16" />
            </div>
          </div>
        ) : (
          <div className="w-full p-4 flex items-center gap-4">
            <input
              name="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Account name"
              className=" h-12 w-full rounded-sm outline-blue-700 border px-4"
            />
            <div
              onClick={() => setOpen(false)}
              className="p-2 bg-slate-50 rounded-md"
            >
              <TickIcon color="#030387" width="16" height="16" />
            </div>
          </div>
        )}
      </div>
      <div className="w-full">
        <QRCodeGenerator text={`ethereum:${address}`} />
      </div>
      <div className="px-4 sm:px-20">
        <div className="w-full text-center font-medium text-slate-400 py-4 text-sm break-words">
          <p>
            {address?.slice(0, 30)}
            <br />
            {address?.slice(22)}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => copyToClipboard(address)}
          className="flex gap-2 justify-center items-center text-blue-700"
        >
          <CopyIcon color="#030387" width="14" height="14" /> Copy address
        </button>
      </div>
      <div className="w-full p-4">
        <button className="border border-blue-700 text-blue-700 w-full h-12 rounded-full">
          Show private key
        </button>
      </div>
      <div className="w-full px-4 pb-4">
        <button className="border border-blue-700 text-blue-700 w-full h-12 rounded-full">
          Show Secret Recovery Phrase
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
