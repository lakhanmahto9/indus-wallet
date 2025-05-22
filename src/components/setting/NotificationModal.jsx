import { Dialog } from "@mui/material";
import React from "react";
import { CrossIcon } from "../../assets/icons/Icons";

const NotificationModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="w-full sm:w-[400px] relative">
        <div className="w-full p-4 flex justify-center items-center sticky top-0 z-10 bg-white">
          <p className="text-lg font-medium">Turn on notifications</p>
          <div
            className="absolute right-2 cursor-pointer"
            onClick={handleClose}
          >
            <CrossIcon color="#000000" width="18" height="18" />
          </div>
        </div>
        <div className="p-4">
          <img
            src="/noti-image.png"
            alt=""
            className="w-full h-full rounded-md"
          />
        </div>
        <div className="p-4">
          <p>
            Stay in the loop on what's happening in your wallet with
            notifications.
          </p>
        </div>
        <div className="p-4">
          <p>
            You can turn off notifications at any time in the <span className="font-bold">notifications
            settings.</span>
          </p>
        </div>
        <div className="p-4 w-full">
            <button className="h-12 bg-blue-700 w-full text-white rounded-full">Turn on </button>
        </div>
      </div>
    </Dialog>
  );
};

export default NotificationModal;
