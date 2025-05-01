import React, { useState } from "react";
import ManagePassword from "./ManagePassword";

const CreatePassword = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const showPassword = () => {
    setShow(!show);
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

  const strength = getPasswordStrength(password);

  return (
    <ManagePassword>
      <div className="w-full flex justify-center items-center flex-col">
        <p className="font-bold text-3xl">Create Passcode</p>
        <p className="text-center text-sm sm:text-lg font-light">
          This password will unlock your Indus wallet only on this device. Indus
          cannot recover this password.
        </p>
        <div className="w-full sm:w-2/3">
          <form className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label htmlFor="new-password" className="font-bold">
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
                id="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
                className="h-12 rounded-md w-full border px-4 outline-blue-500"
              />
              <p className={`text-sm ${strength.color}`}>{strength.text}</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="confirm-password" className="font-bold">
                Confirm password
              </label>
              <input
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={show ? "text" : "password"}
                className="h-12 rounded-md w-full border px-4 outline-blue-500"
              />
              {password !== confirmPassword && (
                <p className={`text-sm text-red-500`}>Passwords don't match</p>
              )}
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p className="text-sm">
                I understand that Indus cannot recover this password for me.
              </p>
            </div>
            <button className="bg-blue-500 text-white rounded-md py-2">Create a new wallet</button>
          </form>
        </div>
      </div>
    </ManagePassword>
  );
};

export default CreatePassword;
