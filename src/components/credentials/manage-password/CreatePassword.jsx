import React, { useState } from "react";
import ManagePassword from "./ManagePassword";
import { useDispatch } from "react-redux";
import { setPassword } from "../../../redux/slice/passwordSlice";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [accepted, setAccepted] = useState(false);

  const showPassword = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isPasswordStrong = (password) => {
    if (password.length < 8) return false;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUppercase && hasLowercase && hasDigit && hasSpecialChar;
  };

  const getPasswordStrength = (password) => {
    if (password.length < 8) {
      return { text: "Password not long enough", color: "text-red-500" };
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasUppercase || !hasLowercase || !hasDigit || !hasSpecialChar) {
      return { text: "Weak", color: "text-red-500" };
    }

    if (password.length >= 12) {
      return { text: "Strong", color: "text-green-500" };
    }

    return { text: "Average", color: "text-yellow-500" };
  };

  const strength = getPasswordStrength(formData.password);

  const isFormValid =
    isPasswordStrong(formData.password) &&
    formData.password === formData.confirmPassword &&
    accepted;

  const handleSubmitPassword = (e) =>{
    e.preventDefault();
    dispatch(setPassword(formData.password));
    navigate("/secure-wallet");
  }  

  return (
    <ManagePassword>
      <div className="w-full flex justify-center items-center flex-col">
        <p className="font-bold text-3xl">Create Passcode</p>
        <p className="text-center text-sm sm:text-lg font-light">
          This password will unlock your Indus wallet only on this device. Indus
          cannot recover this password.
        </p>

        <div className="w-full sm:w-2/3">
          <form onSubmit={handleSubmitPassword} className="w-full flex flex-col gap-4">
            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label htmlFor="password" className="font-bold">
                  New password (8 characters min)
                </label>
                <p
                  onClick={showPassword}
                  className="font-bold text-blue-500 cursor-pointer"
                >
                  {show ? "Hide" : "Show"}
                </p>
              </div>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={show ? "text" : "password"}
                className="h-12 rounded-md w-full border px-4 outline-blue-500"
              />
              <p className={`text-sm ${strength.color}`}>{strength.text}</p>
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword" className="font-bold">
                Confirm password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type={show ? "text" : "password"}
                className="h-12 rounded-md w-full border px-4 outline-blue-500"
              />
              {formData.password !== formData.confirmPassword && (
                <p className="text-sm text-red-500">Passwords don't match</p>
              )}
            </div>

            {/* Checkbox */}
            <div className="flex gap-2 items-start">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <p className="text-sm">
                I understand that Indus cannot recover this password for me.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`rounded-md py-2 ${
                isFormValid
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Create a new wallet
            </button>
          </form>
        </div>
      </div>
    </ManagePassword>
  );
};

export default CreatePassword;

