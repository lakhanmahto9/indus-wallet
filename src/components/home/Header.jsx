import React, { useEffect, useRef, useState } from "react";
import {
  CopyIcon,
  DownAeroIcon,
  VerticalThreeDotIcon,
} from "../../assets/icons/Icons";
import { useSelector } from "react-redux";
import AddNewAccountModal from "./modal/AddNewAccountModal";
import { truncateString } from "./addressTruncate";
import NetworkModal from "./minetmodal/NetworkModal";
import SettingModal from "../setting/SettingModal";

const Header = () => {
  const { address } = useSelector((state) => state.password);
  const modalRef = useRef();
  const [myAddress, setMyAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showMinModal, setShowMinModal] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum Mainnet");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (address) {
      setMyAddress(truncateString(address));
    }
  }, []);
  const handleChangeNetwork = (network) => {
    setSelectedNetwork(network);
    setShowMinModal(false);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setShow(false);
  //     }
  //   };

  //   if (show) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [show]);

  return (
    <div className="w-full bg-white shadow-md">
      <div className="w-full flex justify-center items-center p-2 sm:p-5">
        <div className="hidden w-1/3 md:flex flex-start">
          <div
            onClick={() => setShowMinModal(true)}
            className="w-auto border p-1 flex justify-center items-center text-sm rounded-full bg-blue-50 text-slate-600 cursor-pointer gap-1"
          >
            <img src="/eth_logo.svg" alt="" className="w-5 h-5 rounded-full" />{" "}
            {selectedNetwork}
            <DownAeroIcon coor="" width="14" height="14" />
          </div>
        </div>
        <div className="w-1/6 sm:hidden"></div>
        <div className="w-4/6 md:w-1/3 flex flex-start flex-col">
          <div className="flex justify-center">
            <div
              onClick={() => setShowModal(true)}
              className="flex justify-center items-center text-sm font-bold px-1 rounded-full cursor-pointer gap-1 hover:bg-slate-100"
            >
              <img src="/icon.png" alt="" className="w-5 h-5 rounded-full" />{" "}
              Account <DownAeroIcon coor="" width="14" height="14" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="border flex justify-center items-center text-sm font-bold px-4 rounded-full cursor-pointer gap-1 bg-slate-100">
              <p>{myAddress}</p>
              <CopyIcon colo="#000000" width="14" height="14" />
            </div>
          </div>
        </div>
        <div className="w-1/6 md:w-1/3 flex justify-end relative">
          <div
            onClick={() => setShow(!show)}
            className="p-1 rounded-md cursor-pointer hover:bg-slate-50"
          >
            <VerticalThreeDotIcon color="" width="14" height="14" />
          </div>
          {show && (
            <div
              // ref={modalRef}
              className="absolute top-8 bg-white w-60 rounded-lg border shadow-lg"
            >
              <SettingModal closeModal={() => setShow(false)} />
            </div>
          )}
        </div>
      </div>
      <AddNewAccountModal
        open={showModal}
        handleClose={() => setShowModal(false)}
      />
      <NetworkModal
        selectedNetwork={selectedNetwork}
        handleChangeNetwork={handleChangeNetwork}
        open={showMinModal}
        handleClose={() => setShowMinModal(false)}
      />
    </div>
  );
};

export default Header;
