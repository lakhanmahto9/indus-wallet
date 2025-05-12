import React, { useState } from "react";
import Token from "./tab/Token";
import Nfts from "./tab/Nfts";
import Activity from "./tab/Activity";

const Tabpage = () => {
  const [tab, setTab] = useState("token");
  return (
    <div className="w-full p-4 my-4">
      <div className="w-full flex border-b">
        <div
          onClick={() => setTab("token")}
          className={`border-b-2 text-slate-500 ${
            tab === "token" ? "border-b-slate-950" : ""
          }  w-full flex justify-center p-2 cursor-pointer`}
        >
          <p>Tokens</p>
        </div>
        <div
          onClick={() => setTab("nft")}
          className={`border-b-2 text-slate-500 ${
            tab === "nft" ? "border-b-slate-950" : ""
          }  w-full flex justify-center p-2 cursor-pointer`}
        >
          <p>NFTs</p>
        </div>
        <div
          onClick={() => setTab("activity")}
          className={`border-b-2 text-slate-500 ${
            tab === "activity" ? "border-b-slate-950" : ""
          }  w-full flex justify-center p-2 cursor-pointer`}
        >
          <p>Activity</p>
        </div>
      </div>
      {tab === "token" && <Token />}
      {tab === "nft" && <Nfts />}
      {tab === "activity" && <Activity />}
    </div>
  );
};

export default Tabpage;
