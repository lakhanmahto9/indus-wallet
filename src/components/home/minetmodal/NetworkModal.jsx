import { Dialog } from "@mui/material";
import React, { useState } from "react";
import AllNetwork from "./AllNetwork";
import AddCustomeNetwork from "./AddCustomeNetwork";
import AddRPCUrl from "./AddRPCUrl";
import ExplorerURL from "./ExplorerURL";

const NetworkModal = ({
  selectedNetwork,
  handleChangeNetwork,
  open,
  handleClose,
}) => {
  const [type, setType] = useState("all");
  const changeNetworkPage = (page) => {
    setType(page);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="w-full">
        {type === "all" && (
          <AllNetwork
            selectedNetwork={selectedNetwork}
            handleChangeNetwork={handleChangeNetwork}
            changeNetworkPage={changeNetworkPage}
            handleClose={handleClose}
          />
        )}
        {type === "custome" && (
          <AddCustomeNetwork
            changeNetworkPage={changeNetworkPage}
            handleClose={handleClose}
          />
        )}
        {type === "rpcurl" && (
          <AddRPCUrl
            changeNetworkPage={changeNetworkPage}
            handleClose={handleClose}
          />
        )}
         {type === "explorerurl" && (
          <ExplorerURL
            changeNetworkPage={changeNetworkPage}
            handleClose={handleClose}
          />
        )}
      </div>
    </Dialog>
  );
};

export default NetworkModal;
