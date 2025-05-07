import React, { useState } from "react";
import HomeSecure from "./HomeSecure";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConfirmSecretRecoveryPhrase = () => {
  const { seedPhrase } = useSelector((state) => state.password);
  const navigate = useNavigate();
  const [userInputs, setUserInputs] = useState({ 2: "", 3: "", 7: "" });

  const wordsArray = seedPhrase ? seedPhrase.trim().split(" ") : [];

  const handleChange = (index, value) => {
    setUserInputs((prev) => ({ ...prev, [index]: value }));
  };

  const isValid = [2, 3, 7].every(
    (i) => userInputs[i]?.trim() === wordsArray[i]
  );

  const gotoMainPage = () =>{
    navigate("/home");
  }

  return (
    <HomeSecure>
      <div className="w-full flex flex-col p-8 justify-center items-center">
        <div className="text-center flex flex-col gap-4">
          <p className="font-bold text-3xl">Confirm Secret Recovery Phrase</p>
          <p className="text-sm">Confirm Secret Recovery Phrase</p>
        </div>

        <div className="flex flex-wrap border-2 rounded-2xl w-full mb-4 p-4 transition duration-300">
          {wordsArray.map((word, index) => (
            <div
              key={index}
              className="w-full sm:w-1/3 flex items-center gap-2 rounded-md p-2"
            >
              <p className="font-medium">{index + 1}.</p>
              <div
                className={`flex-1 px-3 py-1 rounded-full text-center bg-white border ${
                  [2, 3, 7].includes(index)
                    ? "border-blue-500 border-2"
                    : "border-gray-300"
                }`}
              >
                {[2, 3, 7].includes(index) ? (
                  <input
                    type="text"
                    value={userInputs[index] || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full outline-none text-center"
                    placeholder="Enter word"
                  />
                ) : (
                  word
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full px-8">
          <button
            onClick={gotoMainPage}
            disabled={!isValid}
            className={`w-full border py-4 rounded-full text-white transition duration-300 ${
              isValid
                ? "bg-blue-500 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </HomeSecure>
  );
};

export default ConfirmSecretRecoveryPhrase;

