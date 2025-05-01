import React from "react";
import Home from "../Home";
import Stepper from "./StepperProgress";

const ManagePassword = ({ children }) => {
  return (
    <Home>
      <div className="w-full flex justify-center items-center flex-col p-4">
        <div className="w-full md:w-2/5 border border-blue-500 p-4 rounded-md my-8">
          <Stepper />
          <div>{children}</div>
        </div>
      </div>
    </Home>
  );
};

export default ManagePassword;
