import React, { useState } from "react";
import Home from "../Home";
import { updatePassword } from "../../../redux/slice/passwordSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Lock = () => {
  const password = useSelector((state) => state.password.password);
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const [passcode, setPasscode] = useState("");
  const [show, setShow] = useState(false);

  const isFormValid = passcode.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      if (password === passcode) {
        dispatch(updatePassword(true));
        navigete("/secure-wallet");
      } else {
        setShow(true);
        navigete("/lock");
      }
    }
  };

  return (
    <Home>
      <div className="w-full flex justify-center items-center my-8 sm:my-2 p-4">
        <div className="w-full sm:w-1/3 border rounded-2xl border-blue-500 p-4 sm:p-20 flex flex-col justify-center items-center">
          <img src="/icon7.png" alt="" />
          <p className="font-bold text-3xl">Welcome back!</p>
          <p>The decentralized web awaits</p>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4 my-8 sm:my-2"
          >
            <input
              type="password"
              placeholder="Enter Passcode"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value), setShow(false);
              }}
              className={`w-full h-12 border ${show?"outline-red-500 border-red-500":"outline-blue-500 border-blue-500"} px-4 rounded-md`}
            />
            {show && passcode && (
              <p className="text-red-500 text-sm">Incorrect passcode</p>
            )}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full border rounded-full py-4 ${
                isFormValid
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              UNLOCK
            </button>
          </form>

          <p className="text-sm text-blue-500 my-8 sm:my-2">Forget password?</p>
        </div>
      </div>
    </Home>
  );
};

export default Lock;
