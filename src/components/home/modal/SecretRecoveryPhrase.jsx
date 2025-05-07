import React, { useEffect, useState } from "react";
import { CrossIcon, LeftAngleIcon } from "../../../assets/icons/Icons";

const SecretRecoveryPhrase = ({ handleClose, createNewAccount }) => {
  const [wordCount, setWordCount] = useState(12);
  const [words, setWords] = useState(Array(12).fill(""));
  useEffect(() => {
    setWords((prevWords) => {
      const newWords = Array(wordCount).fill("");
      for (let i = 0; i < Math.min(prevWords.length, wordCount); i++) {
        newWords[i] = prevWords[i];
      }
      return newWords;
    });
  }, [wordCount]);

  const handleChange = (index, value) => {
    const newWords = [...words];
    newWords[index] = value.toLowerCase();
    setWords(newWords);
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text");
    const split = pasted.trim().split(/\s+/);
    if (split.length === wordCount) {
      setWords(split.map((w) => w.toLowerCase()));
      e.preventDefault();
    }
  };

  return (
    <div className="w-full relative">
      <div className="w-full flex justify-center items-center h-16 sticky top-0 bg-white">
        <div className="w-full relative flex justify-center items-center">
          <div
            className="absolute top-1 left-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={() => createNewAccount("create")}
          >
            <LeftAngleIcon color="#000000" width="18" height="18" />
          </div>
          <p className="text-sm font-medium sm:text-lg sm:font-bold">
            Import Secret Recovery Phrase
          </p>
          <div
            className="absolute top-1 right-2 hover:bg-slate-100 p-1 cursor-pointer"
            onClick={handleClose}
          >
            <CrossIcon color="#000000" width="18" height="18" />
          </div>
        </div>
      </div>

      <p className="text-sm p-4 font-medium text-slate-400">
        Import an existing wallet with your 12 or 24-word secret recovery
        phrase.
      </p>

      <form className="">
        <div className="grid grid-cols-2 gap-3 max-w-3xl mx-auto p-4">
          {words.map((word, index) => (
            <div key={index} className="flex items-center">
              <span className="w-6 text-right pr-2 text-gray-500">
                {index + 1}.
              </span>
              <input
                type="text"
                className="w-full p-2 border outline-blue-700"
                value={word}
                onChange={(e) => handleChange(index, e.target.value)}
                onPaste={index === 0 ? handlePaste : undefined}
                autoComplete="off"
              />
            </div>
          ))}
        </div>

        <p
          onClick={() => setWordCount(wordCount === 12 ? 24 : 12)}
          className="p-4 text-sm font-medium text-blue-700 text-center cursor-pointer"
        >
          I have {wordCount === 12 ? "24" : "12"} words recovery phrase
        </p>
      </form>
      <div className="w-full p-4 sticky bottom-0 bg-white">
        <button className="bg-blue-700  text-white font-medium h-12 w-full rounded-full">
          Import wallet
        </button>
      </div>
    </div>
  );
};

export default SecretRecoveryPhrase;
