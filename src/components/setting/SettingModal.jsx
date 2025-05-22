import React, { useState } from "react";
import {
  BellIcon,
  BoxQubeIcon,
  ChatIcon,
  ExpandIcon,
  LockIcon,
  PermissionIcon,
  QRIcon,
  SettingIcon,
} from "../../assets/icons/Icons";
import NotificationModal from "./NotificationModal";
import AccountModal from "./account/AccountModal";

const SettingModal = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const handleOpenNotificationOpen = (type) => {
    if (type === "noti") {
      setNotificationOpen(true);
    } else if (type === "account") {
      setAccountOpen(true);
    }
  };
  return (
    <>
      <div className="w-full">
        <div
          onClick={() => handleOpenNotificationOpen("noti")}
          className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50"
        >
          <div className="flex items-center gap-2">
            <BellIcon color="#000000" width="16" height="16" />
            <p className="text-slate-700 text-sm">Notifications</p>
          </div>
          <div className="bg-indigo-500 p-1 rounded-md">
            <p className="text-sm text-white">New</p>
          </div>
        </div>
        <hr />
        <div>
          <div
            onClick={() => handleOpenNotificationOpen("account")}
            className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50"
          >
            <div className="flex items-center gap-2">
              <QRIcon color="#000000" width="16" height="16" />
              <p className="text-slate-700 text-sm">Account details</p>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50">
            <div className="flex items-center gap-2">
              <ExpandIcon color="#000000" width="16" height="16" />
              <p className="text-slate-700 text-sm">View Explorer</p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50">
            <div className="flex items-center gap-2">
              <PermissionIcon color="#000000" width="16" height="16" />
              <p className="text-slate-700 text-sm">All Permission</p>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50">
            <div className="flex items-center gap-2">
              <BoxQubeIcon color="#000000" width="16" height="16" />
              <p className="text-slate-700 text-sm">Snaps</p>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50">
            <div className="flex items-center gap-2">
              <ChatIcon color="#000000" width="16" height="16" />
              <p className="text-slate-700 text-sm">Support</p>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50">
            <div className="flex items-center gap-2">
              <SettingIcon color="#000000" width="16" height="16" />
              <p className="text-slate-700 text-sm">Settings</p>
            </div>
          </div>
          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50">
            <div className="flex items-center gap-2">
              <LockIcon color="#000000" width="16" height="16" />
              <p className="text-slate-700 text-sm">Lock IndusWallet</p>
            </div>
          </div>
        </div>
        <NotificationModal
          open={notificationOpen}
          handleClose={() => setNotificationOpen(false)}
        />
        <AccountModal
          open={accountOpen}
          handleClose={() => setAccountOpen(false)}
        />
      </div>
    </>
  );
};

export default SettingModal;
