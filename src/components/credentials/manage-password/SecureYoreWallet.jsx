import React, { useEffect } from "react";
import HomeSecure from "./HomeSecure";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLevel } from "../../../redux/slice/passwordSlice";

const SecureYoreWallet = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const recoveryPhrase = () =>{
        navigate("/review-recovery-phrase");
    }
    useEffect(()=>{
      dispatch(setLevel(0));
    },[])
  return (
    <HomeSecure>
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <p className="text-3xl font-bold">Secure your wallet</p>
        <img src="/lock.png" alt="" className="w-60 h-52 rounded-2xl" />
        <button onClick={recoveryPhrase} className="bg-blue-500 text-white px-8 py-4 rounded-full">
          Secure Wallet
        </button>
        <div className="flex flex-col w-full justify-start">
            <p className="font-bold text-lg">What is a Secret Recovery Phrase?
           </p>
           <p className="text-sm font-medium"> Your Secret Recovery Phrase is a 12-word phrase that is the “master key” to your wallet and your funds</p>
        </div>
      </div>
    </HomeSecure>
  );
};

export default SecureYoreWallet;
