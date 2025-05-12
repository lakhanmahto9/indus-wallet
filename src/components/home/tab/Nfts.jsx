import React, { useState } from "react";
import {
  DownAeroIcon,
  FilterIcon,
  PlusIcon,
  RefreshIcon,
  VerticalThreeDotIcon,
} from "../../../assets/icons/Icons";
import TabModal from "./modal/TabModal";

const Nfts = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center my-2">
        <div className="flex gap-2 items-center p-2 bg-slate-50 rounded-full cursor-pointer">
          <p className="font-bold text-sm">Popular network</p>
          <DownAeroIcon coor="" width="14" height="14" />
        </div>
        <div className="flex gap-2 justify-center items-center">
          <FilterIcon color="#000000" width="20" height="20" />
          <VerticalThreeDotIcon color="#000000" width="16" height="16" />
        </div>
      </div>

      <div className="w-full py-20 text-center">
        <p className="text-sm text-slate-500">No NFTs yet</p>
      </div>
      <div className="flex flex-col gap-4">
        <p onClick={()=>setOpen(true)} className="font-bold text-blue-700 flex gap-1 items-center cursor-pointer">
          <PlusIcon color="#1d4ed8" width="18" height="18" /> Import NFT
        </p>
        <p className="font-bold text-blue-700 flex gap-1 items-center cursor-pointer">
          <RefreshIcon color="#1d4ed8" width="18" height="18" /> Refresh
        </p>
      </div>
      <TabModal open={open} handleClose={() => setOpen(false)} />
    </div>
  );
};

export default Nfts;
