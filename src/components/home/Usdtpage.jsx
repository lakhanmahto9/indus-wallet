import React from "react";
import { ArrowUpRightIcon, BuySellIcon, EyeIcon, ImportIcon, QRIcon, TransactionIcon } from "../../assets/icons/Icons";

const Usdtpage = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col p-4 sm:p-8">
      <div className="flex gap-2 justify-center items-center">
        <p className="text-3xl font-bold text-green-500">67.89 BNB</p>
        <EyeIcon color="" width="18" height="18" />
      </div>
      <p className="text-lg font-medium">
        +$0 (+0.00%) <span className="text-blue-700">Portfolio</span>
      </p>
      <div className="my-4 flex gap-4">
        <div className="flex flex-col justify-center items-center">
          <div className="w-12 h-12 border rounded-full bg-blue-700 flex justify-center items-center">
            <BuySellIcon color="#ffffff" width="18" height="18" />
          </div>
          <p>Buy & Sell</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-12 h-12 border rounded-full bg-blue-700 flex justify-center items-center">
            <TransactionIcon color="#ffffff" width="18" height="18" />
          </div>
          <p>Swap</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-12 h-12 border rounded-full bg-blue-700 flex justify-center items-center">
            <ImportIcon color="#ffffff" width="18" height="18" />
          </div>
          <p>Import</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-12 h-12 border rounded-full bg-blue-700 flex justify-center items-center">
            <ArrowUpRightIcon color="#ffffff" width="18" height="18" />
          </div>
          <p>Send</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-12 h-12 border rounded-full bg-blue-700 flex justify-center items-center">
            <QRIcon color="#ffffff" width="18" height="18" />
          </div>
          <p>Receive</p>
        </div>
      </div>
      <div className="border w-full p-4">
        <p className="font-medium">Cash out with Neo Crypto Wallet</p>
        <p className="text-xs">Sell your crypto for cash</p>
      </div>
    </div>
  );
};

export default Usdtpage;
