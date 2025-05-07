import React from "react";
import Home from "./Home";
import { createNewWallet } from "./createnewWallet";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAddress, setSecretKey, setSeedPhrase } from "../../redux/slice/passwordSlice";

const Welcome = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const createWallet = () => {
    const wallet = createNewWallet();
    dispatch(setAddress(wallet.address));
    dispatch(setSeedPhrase(wallet.mnemonic));
    dispatch(setSecretKey(wallet.privateKey));
    console.log(wallet);
    navigate("/general-notice");
  };
  return (
    <Home>
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full lg:w-2/5 border shadow-md border-blue-500 my-8 py-4 px-4 lg:px-20 rounded-lg text-center flex justify-center items-center flex-col">
          <p className="text-3xl font-bold">Let's get started</p>
          <div className="w-auto lg:w-96 text-center">
            <p className="text-sm font-medium">
              Trusted by millions, IndusysWallet is a secure wallet making the
              world of web3 accessible to all.
            </p>
          </div>
          <div className="my-16 w-60">
            <img src="/icon7.png" alt="" />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p>
              I agree to IdusysWallet's{" "}
              <span className="cursor-pointer text-blue-500">Terms of use</span>
            </p>
          </div>
          <div className="flex flex-col">
            <button
              onClick={createWallet}
              className="text-white bg-blue-700 px-10 py-2 my-4 rounded-full"
            >
              Create a new wallet
            </button>
            <button className="border border-blue-500 text-blue-700 px-10 py-2 mb-4 rounded-full">
              Import an existing wallet
            </button>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Welcome;
