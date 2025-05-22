import { Dialog } from "@mui/material";
import React from "react";
import AccountDetails from "./AccountDetails";


const AccountModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <AccountDetails handleClose={handleClose}/>
    </Dialog>
  );
};

export default AccountModal;
