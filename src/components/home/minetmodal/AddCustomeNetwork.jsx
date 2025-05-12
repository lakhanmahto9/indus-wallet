import React, { useState } from "react";
import {
  AddIcon,
  CrossIcon,
  DeleteIcon,
  DownAeroIcon,
  LeftAngleIcon,
  UpAngleIcon,
} from "../../../assets/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRpcUrl,
  setActiveRpcUrl,
} from "../../../redux/slice/rpcurlSlice";
import {
  deleteExplorerUrl,
  setActiveExplorerUrl,
} from "../../../redux/slice/explorerUrlSlice";

const AddCustomeNetwork = ({ changeNetworkPage, handleClose }) => {
  const dispatch = useDispatch();
  const rpcurl = useSelector((state) => state.rpcurl.url || []);
  const explorer = useSelector((state) => state.explorerurl.url || []);
  const [arrow, setArrow] = useState(false);
  const [exarrow, setExArrow] = useState(false);
  const changeRpc = (id) => {
    dispatch(setActiveRpcUrl(id));
    setArrow(false);
  };
  const changeExplorerUrl = (id) => {
    dispatch(setActiveExplorerUrl(id));
    setExArrow(false);
  };
  const deleteItem = (id) => {
    dispatch(deleteRpcUrl(id));
    setArrow(false);
  };
  const deleteExItem = (id) => {
    dispatch(deleteExplorerUrl(id));
    setExArrow(false);
  };
  return (
    <div className="w-full sm:w-[400px] relative">
      <div className="w-full p-4 flex justify-center items-center sticky top-0 z-10 bg-white">
        <div
          className="absolute left-2 cursor-pointer"
          onClick={() => changeNetworkPage("all")}
        >
          <LeftAngleIcon color="#000000" width="18" height="18" />
        </div>
        <p className="text-lg font-medium">Add a custom network</p>
        <div className="absolute right-2 cursor-pointer" onClick={handleClose}>
          <CrossIcon color="#000000" width="18" height="18" />
        </div>
      </div>
      <form className="w-full flex flex-col gap-2 p-4 border">
        <div className="w-full flex flex-col">
          <label
            htmlFor="network-name"
            className="text-sm text-slate-400 font-semibold"
          >
            Network name
          </label>
          <input
            id="network-name"
            type="text"
            placeholder="Enter network name"
            className="h-12 border-2 px-4 outline-blue-700"
          />
        </div>
        <div className="w-full flex flex-col relative cursor-pointer">
          <label htmlFor="rpc" className="text-sm text-slate-400 font-semibold">
            Default RPC URL
          </label>
          <div
            onClick={() => setArrow(!arrow)}
            className={`${
              rpcurl.length > 0 ? "h-auto" : "h-12"
            } border-2 flex justify-between items-center px-4 ${
              arrow ? "border-blue-700" : ""
            }`}
          >
            <div className="flex flex-col">
              {rpcurl.length > 0 ? (
                rpcurl.map(
                  (item, index) =>
                    item.status && (
                      <div key={index} className="p-2">
                        <p className="font-bold text-sm">{item.rpcName}</p>{" "}
                        <p className="text-slate-400 text-sm">{item.rpcUrl}</p>
                      </div>
                    )
                )
              ) : (
                <p className="text-sm text-slate-400">Add a URL</p>
              )}
            </div>
            {!arrow ? (
              <DownAeroIcon color="#000000" width="18" height="18" />
            ) : (
              <UpAngleIcon color="#000000" width="18" height="18" />
            )}
          </div>
          {arrow && (
            <div
              className={`absolute top-20 border shadow-md cursor-pointer font-bold rounded-md bg-white w-full z-10 flex flex-col justify-center items-center`}
            >
              {rpcurl.length > 0 &&
                rpcurl.map((item, index) => (
                  <div
                    onClick={() => changeRpc(index)}
                    key={index}
                    className={`w-full border p-2 flex justify-between items-center ${
                      item.status ? "bg-[#ebeafa]" : ""
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium">{item.rpcName}</p>
                      <p className="text-xs text-slate-400">{item.rpcUrl}</p>
                    </div>
                    <div
                      onClick={() => deleteItem(index)}
                      className="p-1 bg-red-50 rounded-lg"
                    >
                      <DeleteIcon color="#ff0000" width="12" height="12" />
                    </div>
                  </div>
                ))}
              <div onClick={() => changeNetworkPage("rpcurl")} className="p-4">
                <p className="text-blue-700">+ Add RPC URL</p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col">
          <label
            htmlFor="network-name"
            className="text-sm text-slate-400 font-semibold"
          >
            Block chain ID
          </label>
          <input
            id="network-name"
            type="text"
            placeholder="Enter block chian ID"
            className="h-12 border-2 px-4 outline-blue-700"
          />
        </div>

        <div className="w-full flex flex-col">
          <label
            htmlFor="network-name"
            className="text-sm text-slate-400 font-semibold"
          >
            Currency symbol
          </label>
          <input
            id="network-name"
            type="text"
            placeholder="Enter symbol"
            className="h-12 border-2 px-4 outline-blue-700"
          />
        </div>
        <div className="w-full flex flex-col">
          <label
            htmlFor="explore"
            className="text-sm text-slate-400 font-semibold"
          >
            Block explorer URL
          </label>
          <div
            onClick={() => setExArrow(!exarrow)}
            className={`h-12 border p-4 cursor-pointer ${
              exarrow ? "border-blue-700 border-2" : ""
            }`}
          >
            <div className="flex h-full justify-between items-center">
              <div className="flex flex-col">
                {explorer.length > 0 ? (
                  explorer.map(
                    (item, index) =>
                      item.status && (
                        <div key={index} className="p-2">
                          <p className="text-slate-400 text-sm">
                            {item.explorer}
                          </p>
                        </div>
                      )
                  )
                ) : (
                  <p className="text-sm text-slate-400">Add a URL</p>
                )}
              </div>
              {!exarrow ? (
                <DownAeroIcon color="#000000" width="18" height="18" />
              ) : (
                <UpAngleIcon color="#000000" width="18" height="18" />
              )}
            </div>
          </div>
        </div>
        {exarrow && (
          <div className="border">
            {explorer.length > 0 &&
              explorer.map((item, index) => (
                <div
                  onClick={() => changeExplorerUrl(index)}
                  key={index}
                  className={`w-full border p-2 flex justify-between cursor-pointer items-center ${
                    item.status ? "bg-[#ebeafa]" : ""
                  }`}
                >
                  <div>
                    <p className="text-xs text-slate-400">{item.explorer}</p>
                  </div>
                  <div
                    onClick={() => deleteExItem(index)}
                    className="p-1 bg-red-50 rounded-lg"
                  >
                    <DeleteIcon color="#ff0000" width="12" height="12" />
                  </div>
                </div>
              ))}
            <div
              onClick={() => changeNetworkPage("explorerurl")}
              className="h-12 cursor-pointer bg-blue-50 rounded-md flex gap-4 justify-center items-center"
            >
              <AddIcon color="#1d4ed8" width="18" height="18" />
              <p className="text-blue-700">Add a block explorer URL</p>
            </div>
          </div>
        )}
        <div className="w-full bg-white sticky py-4 bottom-0">
          <button className="bg-blue-700 w-full text-white rounded-full h-12">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomeNetwork;
