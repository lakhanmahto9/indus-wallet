import React, { useState } from "react";
import { CrossIcon, LeftAngleIcon } from "../../../assets/icons/Icons";
import { useDispatch } from "react-redux";
import { addRpcUrl } from "../../../redux/slice/rpcurlSlice";
import { addExplorerUrl } from "../../../redux/slice/explorerUrlSlice";

const ExplorerURL = ({ changeNetworkPage, handleClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    explorer: "",
    status:true
  });

  const [formErrors, setFormErrors] = useState({
    explorer: "",
  });

  const validateRpcUrl = (value) => {
    if (!value) return "RPC URL is required";
    if (!/^https?:\/\//i.test(value))
      return "URL must start with http:// or https://";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "explorer") {
      const errorMsg = validateRpcUrl(value);
      setFormErrors((prev) => ({ ...prev, explorer: errorMsg }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const explorerUrlError = validateRpcUrl(formData.explorer);

    if (explorerUrlError) {
      setFormErrors({ explorer: explorerUrlError });
      return;
    }

     dispatch(addExplorerUrl(formData));
    changeNetworkPage("custome");

    console.log(formData.explorer);
  };

  return (
    <div className="w-full sm:w-[400px] relative">
      <div className="w-full p-4 flex justify-center items-center sticky top-0 z-10 bg-white">
        <div
          className="absolute left-2 cursor-pointer"
          onClick={() => changeNetworkPage("custome")}
        >
          <LeftAngleIcon color="#000000" width="18" height="18" />
        </div>
        <p className="text-lg font-medium">Add a block explorer URL</p>
        <div className="absolute right-2 cursor-pointer" onClick={handleClose}>
          <CrossIcon color="#000000" width="18" height="18" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2 p-4">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="explorer"
            className="text-slate-400 font-medium text-sm"
          >
            Block explorer URL
          </label>
          <input
            id="explorer"
            name="explorer"
            type="text"
            className={`px-4 h-12 border outline-blue-700 ${
              formErrors.explorer ? "border-red-500" : ""
            }`}
            value={formData.explorer}
            onChange={handleChange}
          />
          {formErrors.explorer && (
            <span className="text-red-500 text-xs">{formErrors.explorer}</span>
          )}
        </div>
        
        <button
          type="submit"
          className="h-12 bg-blue-700 rounded-full text-white my-2 w-full"
        >
          Add URL
        </button>
      </form>
    </div>
  );
};

export default ExplorerURL;
