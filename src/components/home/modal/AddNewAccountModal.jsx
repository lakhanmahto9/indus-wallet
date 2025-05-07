import { Dialog } from "@mui/material";
import React, { useState } from "react";
import AddAccountOption from "./AddAccountOption";
import CreateAccountOption from "./CreateAccountOption";
import AddEthereumAcc from "./AddEthereumAcc";
import SecretRecoveryPhrase from "./SecretRecoveryPhrase";
import SecretKey from "./SecretKey";
import HardwareWallet from "./HardwareWallet";

const AddNewAccountModal = ({ open, handleClose }) => {
  const [tab, setTab] = useState("add");
  const createNewAccount = (text)=>{
    setTab(text);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="w-[310px] sm:w-[450px]">
        {tab === "add" && (
          <AddAccountOption
            handleCose={handleClose}
            createNewAccount={createNewAccount}
          />
        )}
        {tab === "create" && (
          <CreateAccountOption
            handleClose={handleClose}
            createNewAccount={createNewAccount}
          />
        )}
        {tab === "crateEthAcc" && (
          <AddEthereumAcc
            handleClose={handleClose}
            createNewAccount={createNewAccount}
          />
        )}
        {tab === "import-secrect-recovery-phrase" && (
          <SecretRecoveryPhrase
            handleClose={handleClose}
            createNewAccount={createNewAccount}
          />
        )}
        {tab === "private-key" && (
          <SecretKey
            handleClose={handleClose}
            createNewAccount={createNewAccount}
          />
        )}
         {tab === "hardware-wallet" && (
          <HardwareWallet
            handleClose={handleClose}
            createNewAccount={createNewAccount}
          />
        )}
      </div>
    </Dialog>
  );
};

export default AddNewAccountModal;
