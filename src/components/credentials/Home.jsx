import React from "react";

const Home = () => {
  const language = ["Hindi", "English"];
  return (
    <div className="w-full h-screen bg-blue-50">
      <div className="w-full px-96">
        <div className="p-4 flex justify-between items-center">
          <p className="text-2xl font-bold text-blue-500">INDUS WALLET</p>
          <select className="h-12 border-2 px-8 rounded-md border-blue-500 outline-blue-500">
            {language.map((item, index) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="border shadow-md border-blue-500 my-8 py-4 px-20 rounded-lg text-center flex justify-center items-center flex-col">
          <p className="text-3xl font-bold">Let's get started</p>
          <div className="w-96 text-center">
            <p className="text-sm font-medium">
              Trusted by millions, IndusysWallet is a secure wallet making the
              world of web3 accessible to all.
            </p>
          </div>
          <div className="my-4 w-60">
            <img src="/icon2.png" alt="" />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />{" "}
            <p>
              I agree to IdusysWallet's{" "}
              <span className="cursor-pointer text-blue-500">Terms of use</span>
            </p>
          </div>
          <div className="flex flex-col">
            <button className="text-white bg-blue-700 px-10 py-2 my-4 rounded-full">
              Create a new wallet
            </button>
            <button className="border border-blue-500 text-blue-700 px-10 py-2 mb-4 rounded-full">
              Import an existing wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
