import React from "react";
import Header from "./Header";

const Home = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full lg:w-2/3 border relative">
        <div className="sticky top-0 w-full">
          <Header />
        </div>
        {children}
        <p className="text-center">© 2025 INDUSYS. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Home;
