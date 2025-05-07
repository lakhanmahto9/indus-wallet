import React, { useState } from "react";
import HomeSecure from "./HomeSecure";
import { CopyIcon, EyeIcon, EyeOffIcon } from "../../../assets/icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../../../redux/slice/passwordSlice";
import { useNavigate } from "react-router-dom";

const ReviewRecoveryPhrase = () => {
  const { seedPhrase } = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wordsArray = seedPhrase ? seedPhrase.trim().split(" ") : [];
  console.log(wordsArray);
  const [show, setShow] = useState(false);
  const hidePhrase = () => {
    setShow(!show);
  };
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    if (seedPhrase) {
      navigator.clipboard
        .writeText(seedPhrase)
        .then(() => {
          setCopy(true);
        })
        .catch((err) => {
          setCopy(false);
        });
    }
  };

  const confirmSeedPhrase = () =>{
    dispatch(setLevel(2));
    navigate("/confirm-recovery-phrase");
  }

  return (
    <HomeSecure>
      <div className="w-full flex flex-col gap-2 justify-center items-center">
        <div className="px-16">
          <p className="text-3xl font-bold text-center">
            Write down your Secret Recovery Phrase
          </p>
        </div>
        <p className="text-center font-medium">
          Write down this 12-word Secret Recovery Phrase and save it in a place
          that you trust and only you can access.
        </p>
        <div className="w-full flex flex-col justify-start px-10">
          <p className="font-bold">TIPS:</p>
          <ul className="list list-disc px-4">
            <li>Write down and store in multiple secret places</li>
            <li>Store in a safe deposit box</li>
          </ul>
        </div>
        <div className="relative w-full">
          <div
            className={`flex flex-wrap border-2 rounded-2xl w-full px-4 transition duration-300 ${
              show ? "blur-0" : "blur-sm"
            }`}
          >
            {wordsArray.map((word, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 flex items-center gap-2 rounded-md p-2"
              >
                <p className="font-medium">{index + 1}.</p>
                <div className="flex-1 border px-3 py-1 rounded-full text-center bg-white">
                  {word}
                </div>
              </div>
            ))}
          </div>
          {!show && (
            <div className="absolute inset-0 bg-black/40 rounded-2xl pointer-events-none" />
          )}
        </div>

        {show && (
          <div className="flex justify-around items-center w-full">
            <div>
              {!show ? (
                <div
                  onClick={hidePhrase}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <EyeIcon color="#0000ff" width="16" height="16" />
                  <p className="text-xs">Reveal seed phrase</p>
                </div>
              ) : (
                <div
                  onClick={hidePhrase}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <EyeOffIcon color="#0000ff" width="16" height="16" />
                  <p className="text-xs">Hide seed phrase</p>
                </div>
              )}
            </div>
            <div
              onClick={handleCopy}
              className="flex items-center gap-1 cursor-pointer"
            >
              <CopyIcon color="#0000ff" width="16" height="16" />
              {copy ? (
                <p className="text-xs">Copied</p>
              ) : (
                <p className="text-xs">Copy to clipboard</p>
              )}
            </div>
          </div>
        )}
        {show ? (
          <div onClick={confirmSeedPhrase} className="my-4 w-full px-20">
            <button className="w-full p-4 border rounded-full bg-blue-500 text-white">
              Next
            </button>
          </div>
        ) : (
          <div onClick={hidePhrase} className="my-4 w-full px-20">
            <button className="w-full p-4 border rounded-full bg-blue-500 text-white">
              Reveal secret Key
            </button>
          </div>
        )}
      </div>
    </HomeSecure>
  );
};

export default ReviewRecoveryPhrase;
