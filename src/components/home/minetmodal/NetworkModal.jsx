import { Dialog } from "@mui/material";
import React from "react";
import AllNetwork from "./AllNetwork";

const NetworkModal = ({ selectedNetwork,handleChangeNetwork, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="w-full">
        <AllNetwork
          selectedNetwork={selectedNetwork}
          handleChangeNetwork={handleChangeNetwork}
          handleClose={handleClose}
        />
      </div>
    </Dialog>
  );
};

export default NetworkModal;
