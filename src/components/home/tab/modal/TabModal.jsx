import { Dialog } from "@mui/material";
import React, { useState } from "react";
import AddNft from "./AddNft";

const TabModal = ({ open, handleClose }) => {
    const [type, setType] = useState("nft");
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="w-full">
        <AddNft handleClose={handleClose}/>
      </div>
    </Dialog>
  );
};

export default TabModal;
