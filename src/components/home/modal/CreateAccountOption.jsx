import React from "react";
import {
  ConnectIcon,
  CrossIcon,
  LeftAngleIcon,
  PlusIcon,
  WalletIcon,
} from "../../../assets/icons/Icons";
import { Key } from "@mui/icons-material";

const CreateAccountOption = ({ handleClose, createNewAccount }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center h-16">
        <div className="w-full relative flex justify-center items-center">
          <div
            className="absolute top-1 left-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={() => createNewAccount("add")}
          >
            <LeftAngleIcon color="#000000" width="18" height="18" />
          </div>
          <p className="text-lg font-bold">Add account</p>
          <div
            className="absolute top-1 right-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={handleClose}
          >
            <CrossIcon color="#000000" width="18" height="18" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-slate-400 font-medium">Create a new account</p>
        <p onClick={() => createNewAccount("crateEthAcc")} className="text-blue-700 font-medium cursor-pointer flex gap-2 items-center">
          <PlusIcon color="#2c59da" widht="16" height="16" /> Ethereum account
        </p>
        <p className="text-slate-400 font-medium">Import a wallet or account</p>
        <p onClick={() => createNewAccount("import-secrect-recovery-phrase")} className="text-blue-700 font-medium cursor-pointer flex gap-2 items-center">
          <WalletIcon color="#2c59da" widht="16" height="16" /> Secret Recovery
          Phrase
        </p>
        <p onClick={() => createNewAccount("private-key")} className="text-blue-700 font-medium cursor-pointer flex gap-2 items-center">
          <Key /> Private Key
        </p>
        <p className="text-slate-400 font-medium">Connect an account</p>
        <p onClick={() => createNewAccount("hardware-wallet")} className="text-blue-700 font-medium cursor-pointer flex gap-2 items-center">
          <ConnectIcon color="#2c59da" widht="18" height="18" />
          Hardware wallet
        </p>
      </div>
    </div>
  );
};

export default CreateAccountOption;
