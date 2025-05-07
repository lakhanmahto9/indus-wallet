import React from "react";
import Home from "./Home";
import Usdtpage from "./Usdtpage";
import Tabpage from "./Tabpage";

const Dashboard = () => {
  return (
    <Home>
      <div className="w-full">
        <Usdtpage/>
        <Tabpage/>
      </div>
    </Home>
  );
};

export default Dashboard;
