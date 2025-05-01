import React from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

const GeneralNotice = () => {
  const navigate = useNavigate();
  const createpasswordpage = () => {
    navigate("/create-password");
  };
  return (
    <Home>
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full lg:w-2/5 border shadow-md border-blue-500 my-8 p-4  rounded-lg flex justify-center items-center flex-col gap-4">
          <p className="text-3xl font-bold">Important Notice</p>
          <div className="p-4">
            <ul className="list list-disc">
              <li>This is a Non-custodial wallet</li>
              <li>
                We cannot recover your wallet if you lose your recovery phrase
              </li>
              <li>Store your recovery phrase in safe and private place</li>
              <li>Never share it with anyone,</li>
              By continuing, you are agree that you understand and accept full
              responsibility for securing your wallet
            </ul>
          </div>
          <div className="flex flex-row justify-between gap-4 w-full">
            <button
              onClick={createpasswordpage}
              className="border bg-white px-4 py-2 rounded-md w-full"
            >
              No Thanks
            </button>
            <button
              onClick={createpasswordpage}
              className="border bg-blue-500 px-4 py-2 rounded-md w-full text-white"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default GeneralNotice;
